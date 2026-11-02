# Dhwani Sagar — "The Illustrated Diary" Portfolio

An immersive one-page personal portfolio that feels like walking into someone's beautifully illustrated personal diary: you arrive in front of a stack of books, zoom into them, the book opens, and every scroll is a page turning — each page a chapter of Dhwani's story, ending with an invitation to say hello.

## Who it's for

Visitors — recruiters, founders and product people — who Dhwani wants to invite into her personality rather than hand a résumé. Dhwani herself owns and edits the content later.

## Core features and experience

**Opening — the books**
- Hero recreates the uploaded scene: warm golden-yellow illustrated room, girl at a desk with plant, coffee and a stack of four books on the right, "INSIDE THE DIARY OF / DHWANI SAGAR / BUILDING … EXPERIENCES" headline, "Hi, I'm Dhwani Sagar" framing, SCROLL TO STEP INSIDE cue, chapter ruler at the bottom, and a .. SOUND ON toggle.
- On-load moment: headline reveals with a masked line-by-line rise; the scene settles with a slow cinematic zoom-in on the books.

**Zoom-into-the-book transition**
- Scrolling zooms the camera into the four books (scale + depth + blur layers). When fully zoomed, the book cover opens — pages sweep in — and we land on Page 1 of the diary.

**Diary pages (pinned scroll chapters, every page = notebook with thin lines + paper texture + film grain)**
1. Introduction — "I notice things, I ask why, and I make things." Product builder, product thinker, curious human; CS graduate, fintech experience, independent builder still learning.
2. What I Do — think → design → build → repeat loop; turning what-ifs into what's next via problem exploring, product thinking, experience designing, prototyping, building.
3. My Obsession — ideas, unexpected possibilities, little details, making useful things more interesting; "coding a lot of stuff, learning new things"; open to product roles.
4. Work chapter — fintech experience at **Fyers Securities**: analytics, development, working closely with product.
5. "The Scrapbook of Made Things" (creative name for the showcase) — pinned horizontal gallery driven by vertical scroll, 4–5 clearly-labeled sample project cards the user swaps later.
6. Final page — simple invitation to say hello / build together: big email link + LinkedIn/GitHub placeholder links.

**Motion language (per your brief)**
- GSAP ScrollTrigger + Lenis smooth scroll on one unified loop; pinned scenes, reversible scroll, cinematic zoom, natural inertia.
- Elements fall in (some rotating), float, slide diagonally, zoom toward the viewer, shrink away; fixed anchors while scenes move around them; layered parallax at different speeds with depth/masking/overlap.
- Respect prefers-reduced-motion; clean up GSAP instances; no bouncing/jumps; mobile/tablet/desktop responsive.

**Art direction**
- Your exact palette: moss green, dusty lavender, deep violet, vintage pink, dusty rose, muted blue, vintage teal, butter yellow, pastel terracotta, warm paper. Notebook thin-lines on every page, colored pages per chapter.
- Uneven-but-harmonious typography mixing the serif display style from your references (big elegant headline) with the bold condensed uppercase style — big headings vs small headings deliberately mismatched, beautiful together.
- Character sketch doodles and small living objects scattered through pages; subtle paper texture, grain, soft shadows, imperfect printed details; generated favicon mark.

## User flow

Arrive → 3s hero reveal → scroll → camera zooms into the books → book opens → Page 1 introduction → page-by-page chapters with pinned scroll → horizontal Scrapbook showcase → hello page with email + social links.

## UI/UX feel

Warm, hand-crafted, cinematic. A story being revealed, not a portfolio being scrolled. Everything slightly imperfect, alive, and personal — with premium smooth motion quality inspired by the reference site's depth and pacing (design not copied).

## Implementation phases

**Phase 1 — MVP (built now)**
- Hero scene with generated illustration matching your reference, on-load reveal, zoom-into-book transition, all six diary pages, pinned horizontal showcase with labeled samples, hello page, ambient sound toggle, responsive + reduced-motion support.

**Phase 2 — content & polish**
- Swap sample projects for real ones; refine chapter copy with Dhwani; add character sketch refinements and extra micro-interactions; SEO/social-share meta setup so the site is findable and previews nicely on WhatsApp/LinkedIn.

**Phase 3 — extras**
- Real audio track replacing the generated ambient hum; optional guestbook/notes page; downloadable one-page résumé from the diary.

## Assumptions

- The hero artwork is AI-generated to closely match your uploaded scene (girl at desk, plant, coffee, four books, warm golden light); text is rendered as real live text over it, not baked into the image.
- Projects are 4–5 invented, clearly-labeled samples until you provide real ones.
- Contact is email + social links only (no database, no form).
- Company name used as given: Fyers Securities; exact dates/titles left as [placeholders] for you to fill.
- Ambient sound is a soft generated loop behind the SOUND ON toggle; replaceable later.
- No backend features needed for Phase 1 — this is a pure front-end experience.
