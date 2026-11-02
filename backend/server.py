from fastapi import FastAPI, APIRouter, Request, HTTPException, Query
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import time
import uuid
import logging
from pathlib import Path
from collections import defaultdict, deque
from pydantic import BaseModel, Field, ConfigDict, BeforeValidator, field_validator
from typing import Annotated, List, Optional
from datetime import datetime, timezone
from bson import ObjectId


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


def coerce_object_id(v):
    return str(v)


PyObjectId = Annotated[str, BeforeValidator(coerce_object_id)]


# ---------- guestbook guardrails ----------
SPAM_PATTERN = re.compile(
    r"(https?://|www\.|\S+@\S+\.\S+|t\.me/|telegram|whatsapp\s*group|onlyfans|casino|viagra"
    r"|crypto\s*(giveaway|profit)|free\s*money|earn\s*(cash|from home)|follower(s)? (boost|cheap))",
    re.I,
)
MAX_NOTES_PER_WINDOW = 3
WINDOW_SECONDS = 600
_note_hits = defaultdict(deque)


def client_ip(request: Request) -> str:
    fwd = request.headers.get("x-forwarded-for")
    return fwd.split(",")[0].strip() if fwd else (request.client.host if request.client else "unknown")


def rate_ok(ip: str) -> bool:
    now = time.time()
    q = _note_hits[ip]
    while q and now - q[0] > WINDOW_SECONDS:
        q.popleft()
    if len(q) >= MAX_NOTES_PER_WINDOW:
        return False
    q.append(now)
    return True


def spam_reason(name: str, message: str) -> Optional[str]:
    text = f"{name} {message}"
    if SPAM_PATTERN.search(text):
        return "Links, emails and promo words can't go in the diary."
    if re.search(r"(.)\1{9,}", text):
        return "That looks like keyboard mash — write it out a little differently?"
    letters = [c for c in text if c.isalpha()]
    if letters and len(text) > 20 and sum(1 for c in letters if c.isupper()) / len(letters) > 0.7:
        return "Too much shouting — mix in some lowercase."
    return None


# Define Models
class NoteBase(BaseModel):
    name: str = Field(default="A wanderer", max_length=40)
    message: str = Field(min_length=1, max_length=280)

    @field_validator("name", "message")
    @classmethod
    def clean(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("cannot be empty")
        return v


class Note(NoteBase):
    model_config = ConfigDict(extra="ignore")

    id: PyObjectId = Field(default_factory=lambda: str(ObjectId()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    hidden: bool = False


class NoteModeration(BaseModel):
    hidden: bool
    key: str = ""


class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str


# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}


@api_router.get("/guestbook", response_model=List[Note])
async def get_guestbook(all: bool = Query(False), key: str = Query("")):
    if all:
        if not os.environ.get("GUESTBOOK_ADMIN_KEY") or key != os.environ.get("GUESTBOOK_ADMIN_KEY"):
            raise HTTPException(status_code=403, detail="Wrong key — moderation stays locked.")
        docs = await db.guestbook.find().sort("created_at", -1).to_list(200)
    else:
        docs = await db.guestbook.find({"hidden": {"$ne": True}}).sort("created_at", -1).to_list(50)
    return [Note(**{**d, "id": d.get("_id", d["id"])}) for d in docs]


@api_router.post("/guestbook", response_model=Note, status_code=201)
async def add_guestbook_note(input: NoteBase, request: Request):
    reason = spam_reason(input.name, input.message)
    if reason:
        raise HTTPException(status_code=400, detail=reason)
    ip = client_ip(request)
    if not rate_ok(ip):
        raise HTTPException(status_code=429, detail="The diary needs a breather — try again in a few minutes.")
    note = Note(**input.model_dump())
    doc = note.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()
    result = await db.guestbook.insert_one(doc)
    note.id = str(result.inserted_id)
    return note


@api_router.patch("/guestbook/{note_id}")
async def moderate_guestbook_note(note_id: str, input: NoteModeration):
    admin_key = os.environ.get("GUESTBOOK_ADMIN_KEY", "")
    if not admin_key or input.key != admin_key:
        raise HTTPException(status_code=403, detail="Wrong key — moderation stays locked.")
    result = await db.guestbook.update_one(
        {"_id": ObjectId(note_id)}, {"$set": {"hidden": input.hidden}}
    )
    if not result.matched_count:
        raise HTTPException(status_code=404, detail="Note not found.")
    return {"id": note_id, "hidden": input.hidden}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)

    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()

    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)

    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])

    return status_checks


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
