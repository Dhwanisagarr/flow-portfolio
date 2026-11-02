# PRD — Dhwani Sagar · "The Illustrated Diary" Portfolio

## Original problem statement
Build an immersive personal portfolio landing page for Dhwani Sagar that feels like entering a beautifully illustrated personal diary: hero recreates her uploaded reference scene (girl at desk, plant, coffee, stack of four books on the right), on-load reveal, scroll zooms into the books, the book opens into pages, every diary page is a notebook with thin lines, storytelling copy, playful falling/floating/sliding elements, pinned horizontal project showcase, final hello page. Reference (nesilnoble.com) used only for motion quality. Exact 10-color palette provided. GSAP ScrollTrigger + Lenis, reduced-motion support, responsive.

## Architecture
- Pure front-end React (CRA + craco), no backend features.
- `frontend/src/App.js` — Lenis smooth scroll + GSAP ticker on one loop; ambient sound engine (WebAudio oscillators) behind SOUND ON toggle.
- Components in `src/components/diary/`: Header, Hero, ZoomTransition, DiaryPages (Intro / WhatIDo / Obsession / Work), Scrapbook, PageHello, doodles.jsx (hand-drawn SVG library).
- `index.css` — palette CSS vars, notebook-lines + margin-line generator, SVG film grain, paper vignette, tape/stamp/pill/chip styles.
- Generated assets: `public/hero-scene.jpg` (AI illustration of the reference scene, no baked text), `public/favicon.png`.
- Fonts: Italiana (display serif), Oswald (condensed uppercase), Caveat (hand notes), Lora (body).

## Core requirements (static)
- Hero: INSIDE THE DIARY OF / DHWANI SAGAR / BUILDING · EXPERIENCES; Hi, I'm Dhwani Sagar; SCROLL TO STEP INSIDE; chapter ruler; sound toggle; open-to-roles tagline.
- Zoom transition: pinned 280% — camera zooms to the books, violet cover with title appears, covers swing open into ruled spread.
- 6 diary pages: Intro (paper), What I Do (butter, think-design-build-repeat loop), Obsession (lavender sticky notes), Work chapter (muted blue, Fyers Securities card with [ROLE]/[DATES] placeholders), Scrapbook of Made Things (moss green, pinned horizontal, 5 cards), Hello (terracotta, email + LinkedIn/GitHub).
- Palette exactly as given; notebook thin lines on every page; film grain; doodles falling/rotating/float/sliding/zooming with layered parallax; reduced-motion fallback (no pins, static pages).

## Implemented (2026-11-02)
All of Phase 1: hero scene + entrance reveal, zoom-into-book transition with opening covers, all six pages, pinned horizontal showcase, hello page, ambient sound toggle, Lenis + GSAP unified loop, mobile/tablet/desktop verified via screenshots (1440×900, 390×844), prefers-reduced-motion support.

## Backlog
- P1: Wire absolute-URL tags (canonical, og:url, og:image, twitter:image, Sitemap:) once the production domain is confirmed — og-image.jpg (1200×630) and sitemap content are ready to go; ask Dhwani for the live domain or custom domain.
- P2: Real ambient audio track; guestbook moderation (notes are unmoderated public text right now).

## Notes
- Real content swapped in (2026-11-02): Scrapbook cards = Dahlia, StreakUp, Stack Optimizer, Product Thinking Teardowns (Notion), SignalDesk (real pitch: voice-of-customer tool turning messy feedback into prioritized, evidence-backed product issues), This Diary — all live-linked. Contact = dhwanisagar17@gmail.com, LinkedIn /in/dhwanisagar, GitHub Dhwanisagarr. Work page = FYERS, Apprentice, Jul 2025 – Dec 2025 · 6 mos, Bengaluru · On-site, three real bullets.
- Résumé download live: /dhwani-sagar-resume.pdf served from public/, linked from Work page ("TAKE MY RÉSUMÉ WITH YOU") and Hello page (RÉSUMÉ ↓ chip), downloads as Dhwani-Sagar-Resume.pdf.
- SEO (2026-11-02, per farm-seo-setup): static head has title "Dhwani Sagar — Product Builder & Product Thinker", 146-char description, robots meta, full og:* / twitter:* tags, Person JSON-LD (email/LinkedIn/GitHub user-confirmed), rich noscript fallback, apple-touch-icon, robots.txt + llms.txt (no AI-crawler gaps); og-image.jpg cropped to exact 1200×630. Absolute-URL tags + sitemap.xml deliberately omitted pending production domain (skill hard rule: never ship preview/guessed canonical). Deploy steps for user: redeploy → enable "Enable Search Engine Crawling and Optimisation" toggle → re-verify on live domain with Googlebot/AI UAs. WhatsApp/Facebook cache OG cards aggressively.
- Guestbook (2026-11-02): GET/POST /api/guestbook on FastAPI + MongoDB (guestbook collection), Note model with PyObjectId, name ≤40 (optional, defaults "A wanderer"), message 1–280 chars, newest first, max 50 shown. Frontend: "Leave a note in the back of my diary" violet back page with ruled-paper form, sonner toasts, taped note cards, empty state; linked from hello page. Test notes wiped after verification — guestbook ships empty.
- No credentials required. Sound is synthesized ambient hum, MOCKED — replace with real track later.
