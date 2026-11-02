import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import axios from "axios";
import { toast } from "sonner";
import { Heart, Star, Squiggle, PaperPlane, SketchGirl } from "./doodles";

const API = `${process.env.REACT_APP_BACKEND_URL}/api/guestbook`;

const fmtDate = (iso) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

const NOTE_STYLES = [
  { bg: "#e6d99f", ink: "#3f3a2a" },
  { bg: "#f1ebdd", ink: "#3a382f" },
  { bg: "#dda987", ink: "#4a3020" },
];

export default function Guestbook({ reduced }) {
  const root = useRef(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    axios
      .get(API)
      .then((r) => setNotes(r.data))
      .catch(() => toast.error("Couldn't open the guestbook — try refreshing"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      gsap.from(".gb-rise", {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%", once: true },
      });
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  const submit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const r = await axios.post(API, { name: name.trim() || "A wanderer", message: message.trim() });
      setNotes((n) => [r.data, ...n]);
      setName("");
      setMessage("");
      toast.success("Your note is in the diary — thank you!");
    } catch {
      toast.error("The pen ran dry — try again in a moment");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="guestbook"
      ref={root}
      data-testid="guestbook-page"
      className="relative min-h-screen overflow-hidden bg-[#383556] text-[#f1ebdd]"
    >
      <div
        className="page-lines absolute inset-0 pointer-events-none"
        style={{ "--line": "rgba(241,235,221,0.13)", "--margin": "rgba(230,217,159,0.3)" }}
      />
      <div className="grain absolute inset-0" />
      <div className="paper-vignette absolute inset-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-14 py-24">
        <div className="gb-rise stamp text-[#e6d99f] inline-block">THE VERY LAST PAGE — GUESTBOOK</div>

        <h2 className="gb-rise mt-6 leading-[1.05]" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
          <span className="font-display block">Leave a note</span>
          <span className="font-hand block text-[#e6d99f]" style={{ fontSize: "clamp(2.4rem, 6vw, 4.6rem)" }}>
            in the back of my diary.
          </span>
        </h2>

        <p className="gb-rise font-body text-sm sm:text-lg text-[#f1ebdd]/85 max-w-xl mt-5">
          You wandered all the way through — now scribble something before you go. A hello, a thought,
          a wild idea. I read every single note.
        </p>

        <form onSubmit={submit} data-testid="guestbook-form" className="gb-rise mt-9 max-w-2xl">
          <div className="relative bg-[#f1ebdd] text-[#3a382f] px-6 py-6 sm:px-8 sm:py-8 shadow-[0_18px_45px_rgba(15,12,32,0.5)]">
            <span className="tape -top-3 left-8 -rotate-3" />
            <label className="font-condensed text-[10px] tracking-[0.26em] text-[#814c57] block">
              YOUR NAME (OR STAY MYSTERIOUS)
            </label>
            <input
              data-testid="guestbook-name-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={40}
              placeholder="a wanderer"
              className="w-full bg-transparent border-b-2 border-dashed border-[#814c57]/40 focus:border-[#596743] outline-none font-body text-base sm:text-lg py-1.5 mt-1 placeholder:text-[#3a382f]/35"
            />

            <label className="font-condensed text-[10px] tracking-[0.26em] text-[#814c57] block mt-6">
              YOUR NOTE
            </label>
            <textarea
              data-testid="guestbook-message-input"
              value={message}
              onChange={(e) => setMessage(e.target.value.slice(0, 280))}
              maxLength={280}
              rows={4}
              placeholder="dear diary…"
              required
              className="w-full bg-transparent border-b-2 border-dashed border-[#814c57]/40 focus:border-[#596743] outline-none font-body text-base sm:text-lg py-1.5 mt-1 resize-none placeholder:text-[#3a382f]/35"
            />
            <div className="font-condensed text-[9px] tracking-[0.2em] text-[#3a382f]/45 text-right mt-1">
              {message.length}/280
            </div>

            <button
              data-testid="guestbook-submit-button"
              type="submit"
              disabled={sending || !message.trim()}
              className="mt-4 font-condensed text-xs sm:text-sm tracking-[0.24em] bg-[#596743] text-[#f1ebdd] px-7 py-3 rounded-full shadow-[0_10px_28px_rgba(20,18,40,0.35)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:hover:translate-y-0"
            >
              {sending ? "STICKING IT IN…" : "STICK IT IN THE DIARY"}
            </button>
          </div>
        </form>

        <div className="gb-rise mt-12">
          <div className="font-condensed text-[11px] tracking-[0.3em] text-[#e6d99f] flex items-center gap-3">
            NOTES FROM WANDERERS <Squiggle className="w-14 text-[#e6d99f]/70" />
          </div>

          {loading ? (
            <div className="font-hand text-2xl text-[#f1ebdd]/60 mt-6" data-testid="guestbook-loading">
              flipping the pages…
            </div>
          ) : notes.length === 0 ? (
            <div className="font-hand text-2xl text-[#f1ebdd]/60 mt-6 -rotate-1" data-testid="guestbook-empty">
              the page is blank — be the very first to write here.
            </div>
          ) : (
            <div className="flex flex-wrap gap-5 sm:gap-7 mt-7" data-testid="guestbook-notes">
              {notes.map((n, i) => {
                const s = NOTE_STYLES[i % NOTE_STYLES.length];
                return (
                  <article
                    key={n.id}
                    data-testid="guestbook-note"
                    className={`relative w-full sm:w-[calc(50%-14px)] px-5 py-5 sm:px-6 sm:py-6 shadow-[0_12px_30px_rgba(15,12,32,0.4)] ${i % 2 ? "rotate-1" : "-rotate-1"}`}
                    style={{ background: s.bg, color: s.ink }}
                  >
                    <span className="tape -top-3 left-6 rotate-2" />
                    <p className="font-body text-sm sm:text-base leading-relaxed">&ldquo;{n.message}&rdquo;</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-hand text-xl" style={{ color: "#764d70" }}>— {n.name}</span>
                      <span className="font-condensed text-[9px] tracking-[0.18em] opacity-60">
                        {fmtDate(n.created_at)}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>

        <div className="gb-rise flex items-center gap-3 mt-14 text-[#f1ebdd]/70">
          <SketchGirl className="w-12 h-12" />
          <span className="font-hand text-xl">see you in the next chapter…</span>
          <PaperPlane className="w-8 h-8 float-slow" style={{ "--rot": "10deg" }} />
        </div>
      </div>

      <Heart className="absolute right-[8%] top-[12%] w-10 h-10 text-[#e6d99f]/70 hidden sm:block" />
      <Star className="absolute left-[6%] bottom-[14%] w-8 h-8 text-[#dda987]/70 hidden sm:block" />
    </section>
  );
}
