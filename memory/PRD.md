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
- P1: SignalDesk card description is neutral (Streamlit page can't be crawled) — refine its one-liner with Dhwani.
- P1: SEO/social-share meta, custom OG image (Phase 2 per plan).
- P2: Real ambient audio track; résumé download page; guestbook.

## Notes
- Real content swapped in (2026-11-02): Scrapbook cards = Dahlia, StreakUp, Stack Optimizer, Product Thinking Teardowns (Notion), SignalDesk, This Diary — all live-linked. Contact = dhwanisagar17@gmail.com, LinkedIn /in/dhwanisagar, GitHub Dhwanisagarr. Work page = FYERS, Apprentice, Jul 2025 – Dec 2025 · 6 mos, Bengaluru · On-site, three real bullets.
- No credentials required (no backend). Sound is synthesized ambient hum, MOCKED — replace with real track later.
