import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  PaperPlane, Star, CurlyArrow, Lightbulb, CoffeeCup,
  QuestionMark, Heart, Squiggle, LoopArrow, Sparkle, Notebook,
} from "./doodles";

function usePageScroll(root, reduced, build) {
  useEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=110%",
          scrub: 0.7,
          pin: true,
          anticipatePin: 1,
        },
      });
      build(tl);
    }, root);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);
}

const PageShell = ({ id, bg, ink, line, margin, children, testid, innerRef }) => (
  <section
    id={id}
    ref={innerRef}
    data-testid={testid}
    className="relative min-h-screen overflow-hidden flex items-center"
    style={{ background: bg, color: ink }}
  >
    <div className="page-lines absolute inset-0 pointer-events-none" style={{ "--line": line, "--margin": margin }} />
    <div className="grain absolute inset-0" />
    <div className="paper-vignette absolute inset-0 pointer-events-none" />
    {children}
  </section>
);

/* ---------------- PAGE 1 · INTRO — scroll crawl ---------------- */
const INTRO_STATEMENTS = [
  {
    isIntroHeadline: true,
    title: "Hi, I'm Dhwani Sagar",
    subtitle: "product builder and product designer",
  },
  { lines: ["I NOTICE", "THINGS."], color: "text-[#3a382f]" },
  { lines: ["I ASK WHY."], color: "text-[#814c57]" },
  { lines: ["AND I MAKE", "THINGS."], color: "text-[#3a382f]" },
];
const INTRO_PARAS = [
  "I collect ideas the way some people collect stickers — screenshot folders, notebook margins, voice notes at 2am.",
  "I connect dots across products, people and stories, and turn random thoughts into things you can actually use.",
];
const INTRO_CHIPS = ["CS GRADUATE", "FINTECH EXPERIENCE", "PRODUCT ENTHUSIAST", "INDEPENDENT BUILDER", "STILL LEARNING, STILL EXPERIMENTING"];

export function PageIntro({ reduced }) {
  const root = useRef(null);
  const n = INTRO_STATEMENTS.length + INTRO_PARAS.length; // 6 crawl blocks
  const total = n + 0.4; // + hold time for the final chips block

  useEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => "+=" + Math.round(total * 100) + "%",
          scrub: 0.7,
          pin: true,
          anticipatePin: 1,
        },
      });
      tl.fromTo(".intro-fixed", { opacity: 0 }, { opacity: 1, duration: 0.12, ease: "none" }, 0);
      INTRO_STATEMENTS.forEach((_, i) => {
        tl.fromTo(
          `.intro-line-${i}`,
          { yPercent: 135, opacity: 0, scale: 1.045, rotation: 1.2 },
          { yPercent: 0, opacity: 1, scale: 1, rotation: 0, duration: 0.34, ease: "power3.out" },
          i
        );
        tl.to(
          `.intro-line-${i}`,
          { yPercent: -135, opacity: 0, duration: 0.28, ease: "power2.in" },
          i + 0.64
        );
      });
      INTRO_PARAS.forEach((_, i) => {
        const t = INTRO_STATEMENTS.length + i;
        tl.fromTo(
          `.intro-line-${t}`,
          { yPercent: 135, opacity: 0, scale: 1.03 },
          { yPercent: 0, opacity: 1, scale: 1, duration: 0.34, ease: "power3.out" },
          t
        );
        tl.to(
          `.intro-line-${t}`,
          { yPercent: -135, opacity: 0, duration: 0.28, ease: "power2.in" },
          t + 0.64
        );
      });
      tl.fromTo(
        ".intro-chips",
        { yPercent: 135, opacity: 0, scale: 1.04 },
        { yPercent: 0, opacity: 1, scale: 1, duration: 0.3, ease: "power3.out" },
        n - 1 + 0.7
      );
    }, root);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  const lineWrap = reduced
    ? "relative px-6 sm:px-14 py-12 w-full"
    : "absolute inset-0 flex items-center justify-center px-5 sm:px-10 will-change-transform";

  const blockEl = (i, inner, reduced) =>
    reduced ? (
      <div key={i} className={lineWrap}>{inner}</div>
    ) : (
      <div key={i} className={lineWrap}>{inner}</div>
    );

  return (
    <PageShell
      id="about"
      innerRef={root}
      testid="page-intro"
      bg="#f1ebdd"
      ink="#3a382f"
      line="rgba(89,103,67,0.22)"
      margin="rgba(129,76,87,0.3)"
    >
      {/* fixed anchors — the scene moves around them */}
      <div className="intro-fixed absolute top-24 sm:top-16 right-[6%] text-[#dda987] z-10 opacity-0">
        <div className="font-hand text-sm sm:text-xl -rotate-3 mt-1 text-[#814c57] tracking-[0.06em]">YOU FOUND MY DIARY!</div>
      </div>
      <div className="intro-fixed absolute top-24 sm:top-16 left-4 sm:left-14 z-10 opacity-0">
        <div className="stamp text-[#596743]">PAGE 01 — HELLO</div>
      </div>
      <div className="absolute right-[7%] top-[45%] text-[#dda987] z-10 hidden sm:block">
        <PaperPlane className="w-12 h-12 sm:w-16 sm:h-16 float-slow" style={{ "--rot": "14deg" }} />
      </div>
      <div className="absolute left-[5%] bottom-[14%] text-[#764d70] z-10 hidden sm:block">
        <CoffeeCup className="w-11 h-11 float-slow" style={{ "--rot": "6deg" }} />
      </div>
      <div className="absolute right-[16%] bottom-[18%] text-[#5c5b85] z-10 hidden lg:block">
        <QuestionMark className="w-9 h-11" />
      </div>
      <div className="absolute left-[7%] top-[30%] text-[#e6d99f] z-10 hidden lg:block">
        <Star className="w-8 h-8" />
      </div>

      {reduced ? (
        <div className="relative z-10 w-full py-36 space-y-20">
          {INTRO_STATEMENTS.map((s, i) => (
            <div key={i} className={lineWrap}>
              {s.isIntroHeadline ? (
                <div className="text-center flex flex-col items-center justify-center px-4">
                  <h2
                    className="font-creative text-[#3a382f] tracking-tight drop-shadow-[0_2px_8px_rgba(58,56,47,0.12)]"
                    style={{
                      fontSize: "clamp(2.4rem, 6.8vw, 5.2rem)",
                      fontWeight: 800,
                      lineHeight: 1.05,
                    }}
                  >
                    Hi, I&rsquo;m Dhwani Sagar
                  </h2>
                  <p
                    className="font-sub-label text-[#596743] mt-3 sm:mt-4 font-light tracking-[0.24em]"
                    style={{
                      fontSize: "clamp(0.75rem, 1.25vw, 1rem)",
                      lineHeight: 1.4,
                      textTransform: "uppercase",
                    }}
                  >
                    {s.subtitle}
                  </p>
                </div>
              ) : (
                <div className={`font-display text-center leading-[0.84] ${s.color}`} style={{ fontSize: "clamp(3.2rem, 15.5vw, 11rem)" }}>
                  {s.lines.map((ln, k) => (
                    <span key={k} className="block">{ln}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
          {INTRO_PARAS.map((p, i) => (
            <div key={i} className={lineWrap}>
              <div className="font-body text-center text-[#3a382f]/85 leading-[1.3] max-w-3xl mx-auto" style={{ fontSize: "clamp(0.95rem, 2.6vw, 1.8rem)" }}>
                {p}
              </div>
            </div>
          ))}
          <div className={lineWrap}>
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 text-[#46696c]">
                {INTRO_CHIPS.map((c) => (
                  <span key={c} className="chip">{c}</span>
                ))}
              </div>
              <div className="font-hand text-lg sm:text-2xl text-[#764d70] mt-6 tracking-[0.08em]">
                STILL LEARNING, STILL EXPERIMENTING.
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-10 w-full h-screen">
          {INTRO_STATEMENTS.map((s, i) => (
            <div key={i} className={lineWrap}>
              {s.isIntroHeadline ? (
                <div className={`intro-line-${i} opacity-0 text-center flex flex-col items-center justify-center px-4`}>
                  <h2
                    className="font-creative text-[#3a382f] tracking-tight drop-shadow-[0_2px_8px_rgba(58,56,47,0.12)]"
                    style={{
                      fontSize: "clamp(2.4rem, 6.8vw, 5.2rem)",
                      fontWeight: 800,
                      lineHeight: 1.05,
                    }}
                  >
                    Hi, I&rsquo;m Dhwani Sagar
                  </h2>
                  <p
                    className="font-sub-label text-[#596743] mt-3 sm:mt-4 font-light tracking-[0.24em]"
                    style={{
                      fontSize: "clamp(0.75rem, 1.25vw, 1rem)",
                      lineHeight: 1.4,
                      textTransform: "uppercase",
                    }}
                  >
                    {s.subtitle}
                  </p>
                </div>
              ) : (
                <div className={`intro-line-${i} opacity-0 font-display text-center leading-[0.84] ${s.color}`} style={{ fontSize: "clamp(3.2rem, 15.5vw, 11rem)" }}>
                  {s.lines.map((ln, k) => (
                    <span key={k} className="block">{ln}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
          {INTRO_PARAS.map((p, i) => (
            <div key={i} className={lineWrap}>
              <div className={`intro-line-${INTRO_STATEMENTS.length + i} opacity-0 font-body text-center text-[#3a382f]/85 leading-[1.3] max-w-3xl`} style={{ fontSize: "clamp(0.95rem, 2.6vw, 1.8rem)" }}>
                {p}
              </div>
            </div>
          ))}
          <div className={lineWrap}>
            <div className="intro-chips opacity-0 text-center">
              <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 text-[#46696c]">
                {INTRO_CHIPS.map((c) => (
                  <span key={c} className="chip">{c}</span>
                ))}
              </div>
              <div className="font-hand text-lg sm:text-2xl text-[#764d70] mt-6 tracking-[0.08em]">
                STILL LEARNING, STILL EXPERIMENTING.
              </div>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}

/* ---------------- PAGE 2 · WHAT I DO ---------------- */
export function PageWhatIDo({ reduced }) {
  const root = useRef(null);
  usePageScroll(
    root,
    reduced,
    (tl) => {
      tl.from(".do-rise", { y: 80, opacity: 0, stagger: 0.07, duration: 0.28, ease: "power2.out" }, 0)
        .from(".do-fall", { y: -150, opacity: 0, rotation: (i) => [22, -18, 12][i % 3], stagger: 0.06, duration: 0.3 }, 0.1)
        .fromTo(".do-loop", { rotation: -12, scale: 0.85 }, { rotation: 0, scale: 1, duration: 0.4 }, 0.3)
        .to(".do-slide", { x: -50, duration: 0.5, ease: "none" }, 0.45);
    }
  );

  const steps = ["THINK", "DESIGN", "BUILD", "REPEAT"];
  const list = [
    ["PROBLEM EXPLORING", "finding the itch behind the obvious"],
    ["PRODUCT THINKING", "asking why before drawing what"],
    ["EXPERIENCE DESIGNING", "making every step feel considered"],
    ["PROTOTYPING", "sketching it into something touchable"],
    ["BUILDING", "shipping it, then making it better"],
  ];

  return (
    <PageShell
      id="doing"
      innerRef={root}
      testid="page-what-i-do"
      bg="#e6d99f"
      ink="#3f3a2a"
      line="rgba(89,103,67,0.25)"
      margin="rgba(129,76,87,0.32)"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-14 py-20">
        <div className="do-fall stamp text-[#814c57]">PAGE 02 — DOING</div>

        <h2 className="do-rise mt-6 leading-[0.9]" style={{ fontSize: "clamp(2.4rem, 8.5vw, 7rem)" }}>
          <span className="font-display block">I TURN WHAT-IFS</span>
          <span className="font-display block">
            INTO <span className="text-[#596743]">WHAT&rsquo;S NEXT.</span>
          </span>
        </h2>

        <div className="do-rise flex flex-wrap items-center gap-3 sm:gap-5 mt-9">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-3 sm:gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-[#596743] flex items-center justify-center font-condensed text-[10px] sm:text-xs tracking-[0.18em] text-[#596743] rotate-[-4deg] bg-[#f1ebdd]/40">
                {s}
              </div>
              {i < steps.length - 1 && <span className="font-hand text-2xl text-[#814c57]">&rarr;</span>}
            </div>
          ))}
          <div className="do-loop text-[#596743]">
            <LoopArrow className="w-16 h-10" />
          </div>
        </div>

        <ul className="do-rise mt-9 space-y-3 max-w-2xl">
          {list.map(([t, d]) => (
            <li key={t} className="flex items-baseline gap-3">
              <span className="font-hand text-2xl text-[#764d70] shrink-0">&#10003;</span>
              <span className="font-condensed text-xs sm:text-sm tracking-[0.22em] text-[#3f3a2a]">{t}</span>
              <span className="font-body italic text-xs sm:text-base text-[#3f3a2a]/70">— {d}</span>
            </li>
          ))}
        </ul>

        <p className="do-rise font-hand text-2xl sm:text-3xl text-[#764d70] mt-8 -rotate-1">
          think, design, build&hellip; repeat, until the idea earns its keep.
        </p>
      </div>

      <div className="do-fall absolute right-[6%] top-[14%] text-[#596743]">
        <Lightbulb className="w-14 h-14 sm:w-20 sm:h-20 float-slow" style={{ "--rot": "6deg" }} />
      </div>
      <div className="do-fall do-slide absolute right-[18%] bottom-[12%] text-[#46696c] hidden sm:block">
        <Squiggle className="w-20" />
      </div>
      <div className="do-fall absolute left-[4%] bottom-[16%] text-[#dda987] hidden lg:block">
        <Star className="w-10 h-10" />
      </div>
    </PageShell>
  );
}

/* ---------------- PAGE 3 · WORK ---------------- */
export function PageWork({ reduced }) {
  const root = useRef(null);
  usePageScroll(
    root,
    reduced,
    (tl) => {
      tl.from(".wk-rise", { y: 80, opacity: 0, stagger: 0.08, duration: 0.28, ease: "power2.out" }, 0)
        .from(".wk-fall", { y: -140, opacity: 0, rotation: (i) => [-16, 20][i % 2], stagger: 0.07, duration: 0.3 }, 0.1)
        .fromTo(".wk-card", { rotation: 4, y: 50 }, { rotation: -1.5, y: 0, duration: 0.4, ease: "power1.out" }, 0.22)
        .to(".wk-drift", { x: 40, duration: 0.5, ease: "none" }, 0.45);
    }
  );

  return (
    <PageShell
      id="work-chapter"
      innerRef={root}
      testid="page-work"
      bg="#4e5c8c"
      ink="#f1ebdd"
      line="rgba(241,235,221,0.15)"
      margin="rgba(230,217,159,0.32)"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-14 py-20">
        <div className="wk-fall stamp text-[#e6d99f]">PAGE 03 — THE WORK CHAPTER</div>

        <h2 className="wk-rise mt-6 leading-[0.9]" style={{ fontSize: "clamp(2.4rem, 8.5vw, 7rem)" }}>
          <span className="font-display block">FINTECH TAUGHT ME</span>
          <span className="font-display block">TO LOVE THE</span>
          <span className="font-display block text-[#e6d99f]">MESSY MIDDLE.</span>
        </h2>

        <div className="wk-card relative bg-[#f1ebdd] text-[#3a382f] max-w-2xl mt-9 px-6 py-7 sm:px-9 sm:py-9 shadow-[0_18px_45px_rgba(20,18,40,0.4)]">
          <span className="tape -top-3 left-8 -rotate-3" />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div className="font-condensed font-semibold tracking-[0.2em] text-sm sm:text-base">FYERS</div>
            <div className="font-condensed text-[10px] tracking-[0.24em] text-[#814c57]">
              APPRENTICE · JUL 2025 – DEC 2025
            </div>
          </div>
          <div className="font-condensed text-[9px] sm:text-[10px] tracking-[0.22em] text-[#3a382f]/60 mt-1">
            BENGALURU, KARNATAKA, INDIA · ON-SITE · 6 MOS
          </div>
          <ul className="mt-4 space-y-2.5 font-body text-sm sm:text-base leading-relaxed text-[#3a382f]/85">
            <li className="flex gap-2.5"><span className="font-hand text-[#764d70]">&bull;</span>Worked with product, engineering and analytics teams on onboarding/signup workflows and related updates.</li>
            <li className="flex gap-2.5"><span className="font-hand text-[#764d70]">&bull;</span>Supported event tracking validation across Google Analytics, CleverTap and AppsFlyer — making sure the data was captured correctly.</li>
            <li className="flex gap-2.5"><span className="font-hand text-[#764d70]">&bull;</span>Performed API and workflow validation using Postman and cURL before release.</li>
          </ul>
        </div>

        <p className="wk-rise font-hand text-2xl sm:text-3xl text-[#e6d99f] mt-7 rotate-1">
          numbers + stories = my kind of maths.
        </p>

        <a
          data-testid="resume-download"
          href="/dhwani-sagar-resume.pdf"
          download="Dhwani-Sagar-Resume.pdf"
          className="wk-rise inline-flex items-center gap-3 mt-7 font-condensed text-xs sm:text-sm tracking-[0.24em] bg-[#e6d99f] text-[#383556] px-7 py-3.5 rounded-full shadow-[0_12px_30px_rgba(20,18,40,0.35)] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(20,18,40,0.45)] transition-all duration-300"
        >
          TAKE MY RÉSUMÉ WITH YOU &darr;
        </a>
      </div>

      <div className="wk-fall absolute right-[6%] top-[14%] text-[#e6d99f]">
        <Notebook className="w-14 h-14 sm:w-20 sm:h-20 float-slow" style={{ "--rot": "-6deg" }} />
      </div>
      <div className="wk-fall wk-drift absolute right-[20%] bottom-[14%] text-[#dda987] hidden sm:block">
        <CoffeeCup className="w-11 h-11" />
      </div>
      <div className="wk-fall absolute left-[5%] bottom-[20%] text-[#f1ebdd]/70 hidden lg:block">
        <Squiggle className="w-16" />
      </div>
    </PageShell>
  );
}
