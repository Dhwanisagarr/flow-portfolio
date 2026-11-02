import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  PaperPlane, Star, CurlyArrow, Lightbulb, CoffeeCup,
  QuestionMark, Heart, Squiggle, SketchGirl, LoopArrow, Sparkle, Notebook,
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
  }, [reduced, root, build]);
}

const PageShell = ({ id, bg, ink, line, margin, children, testid }) => (
  <section
    id={id}
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

/* ---------------- PAGE 1 · INTRO ---------------- */
export function PageIntro({ reduced }) {
  const root = useRef(null);
  usePageScroll(
    root,
    reduced,
    (tl) => {
      tl.from(".intro-rise", { y: 90, opacity: 0, stagger: 0.07, duration: 0.28, ease: "power2.out" }, 0)
        .from(
          ".intro-fall",
          { y: -170, opacity: 0, rotation: (i) => [-28, 20, -14, 16][i % 4], stagger: 0.05, duration: 0.32 },
          0.08
        )
        .to(".intro-drift", { y: -34, duration: 0.5, ease: "none" }, 0.42)
        .to(".intro-slide", { x: 46, duration: 0.5, ease: "none" }, 0.42)
        .fromTo(".intro-zoom", { scale: 0.7 }, { scale: 1.18, duration: 0.5, ease: "none" }, 0.5);
    }
  );

  return (
    <PageShell
      id="about"
      testid="page-intro"
      bg="#f1ebdd"
      ink="#3a382f"
      line="rgba(89,103,67,0.22)"
      margin="rgba(129,76,87,0.3)"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-14 py-20">
        <div className="intro-fall text-[#814c57]">
          <SketchGirl className="w-20 h-20 sm:w-24 sm:h-24 float-slow" style={{ "--rot": "-4deg" }} />
          <div className="font-hand text-2xl -rotate-3 mt-1">you found my diary!</div>
        </div>

        <div className="intro-fall stamp mt-6 text-[#596743]">PAGE 01 — HELLO</div>

        <h2 className="intro-rise mt-6 leading-[1.05]" style={{ fontSize: "clamp(1.9rem, 5vw, 4rem)" }}>
          <span className="font-display block">I notice things,</span>
          <span className="font-hand block text-[#814c57]" style={{ fontSize: "clamp(2.2rem, 5.6vw, 4.4rem)" }}>
            I ask why,
          </span>
          <span className="font-display block">and I make things.</span>
        </h2>

        <div className="intro-rise font-condensed text-xs sm:text-sm tracking-[0.3em] text-[#596743] mt-5">
          PRODUCT BUILDER · PRODUCT THINKER · CURIOUS HUMAN
        </div>

        <p className="intro-rise font-body text-sm sm:text-lg text-[#3a382f]/85 max-w-2xl mt-6 leading-relaxed">
          I collect ideas the way some people collect stickers — screenshot folders, notebook margins,
          voice notes at 2am. I connect dots across products, people and stories, and turn random
          thoughts into things you can actually use.
        </p>

        <div className="intro-rise flex flex-wrap gap-2.5 sm:gap-3 mt-8 text-[#46696c]">
          {["CS GRADUATE", "FINTECH EXPERIENCE", "PRODUCT ENTHUSIAST", "INDEPENDENT BUILDER", "STILL LEARNING, STILL EXPERIMENTING"].map(
            (c) => (
              <span key={c} className="chip">{c}</span>
            )
          )}
        </div>
      </div>

      <div className="intro-fall absolute right-[7%] top-[16%] text-[#dda987] intro-zoom">
        <PaperPlane className="w-14 h-14 sm:w-20 sm:h-20 float-slow" style={{ "--rot": "14deg" }} />
      </div>
      <div className="intro-fall absolute right-[16%] bottom-[14%] text-[#5c5b85] intro-drift hidden sm:block">
        <QuestionMark className="w-10 h-12" />
      </div>
      <div className="intro-fall absolute left-[4%] bottom-[22%] text-[#764d70] intro-slide hidden sm:block">
        <CoffeeCup className="w-12 h-12" />
        <Squiggle className="w-16 mt-1" />
      </div>
      <div className="intro-fall absolute right-[5%] top-[45%] text-[#e6d99f] hidden lg:block">
        <Star className="w-8 h-8" />
      </div>
      <div className="intro-fall absolute left-[6%] top-[14%] text-[#596743] hidden lg:block">
        <CurlyArrow className="w-16 h-10 -scale-x-100" />
      </div>
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
      testid="page-what-i-do"
      bg="#e6d99f"
      ink="#3f3a2a"
      line="rgba(89,103,67,0.25)"
      margin="rgba(129,76,87,0.32)"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-14 py-20">
        <div className="do-fall stamp text-[#814c57]">PAGE 02 — DOING</div>

        <h2 className="do-rise mt-6 leading-[1.05]" style={{ fontSize: "clamp(1.9rem, 5vw, 4rem)" }}>
          <span className="font-display block">I turn what-ifs</span>
          <span className="font-display block">
            into <span className="font-hand text-[#596743]" style={{ fontSize: "clamp(2.2rem, 5.6vw, 4.4rem)" }}>what&rsquo;s next.</span>
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

/* ---------------- PAGE 3 · OBSESSION ---------------- */
export function PageObsession({ reduced }) {
  const root = useRef(null);
  usePageScroll(
    root,
    reduced,
    (tl) => {
      tl.from(".ob-rise", { y: 80, opacity: 0, stagger: 0.07, duration: 0.28, ease: "power2.out" }, 0)
        .from(
          ".ob-note",
          { y: -140, opacity: 0, rotation: (i) => [-6 + i * 5, 4 - i * 3][i % 2], stagger: 0.08, duration: 0.32 },
          0.1
        )
        .to(".ob-drift", { y: -28, duration: 0.5, ease: "none" }, 0.45)
        .fromTo(".ob-zoom", { scale: 0.75 }, { scale: 1.15, duration: 0.5, ease: "none" }, 0.5);
    }
  );

  const notes = [
    { t: "unexpected possibilities", bg: "#e6d99f", ink: "#3f3a2a", rot: "-rotate-3" },
    { t: "little details nobody notices (I do)", bg: "#dda987", ink: "#4a3020", rot: "rotate-2" },
    { t: "useful things made interesting", bg: "#f1ebdd", ink: "#3a382f", rot: "-rotate-2" },
  ];

  return (
    <PageShell
      id="obsession"
      testid="page-obsession"
      bg="#5c5b85"
      ink="#f1ebdd"
      line="rgba(241,235,221,0.16)"
      margin="rgba(230,217,159,0.35)"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-14 py-20">
        <div className="ob-fall stamp text-[#e6d99f]">PAGE 03 — OBSESSION</div>

        <h2 className="ob-rise mt-6 leading-[1.06]" style={{ fontSize: "clamp(1.9rem, 4.8vw, 3.8rem)" }}>
          <span className="font-display block">What I&rsquo;m</span>
          <span className="font-hand block text-[#e6d99f]" style={{ fontSize: "clamp(2.4rem, 6vw, 4.8rem)" }}>
            a little obsessed with&hellip;
          </span>
        </h2>

        <div className="ob-rise flex flex-wrap gap-5 sm:gap-7 mt-9 max-w-3xl">
          {notes.map((n) => (
            <div
              key={n.t}
              className={`ob-note ${n.rot} relative px-5 py-6 sm:px-7 sm:py-8 shadow-[0_12px_30px_rgba(30,26,52,0.35)] max-w-[240px]`}
              style={{ background: n.bg, color: n.ink }}
            >
              <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-2" />
              <span className="font-hand text-xl sm:text-2xl leading-snug">{n.t}</span>
            </div>
          ))}
        </div>

        <p className="ob-rise font-body text-sm sm:text-lg text-[#f1ebdd]/85 max-w-2xl mt-9 leading-relaxed">
          Lately I&rsquo;m coding a lot of stuff and learning new things faster than my notebooks can
          hold them.
        </p>

        <div className="ob-rise inline-flex items-center gap-3 mt-7 pill !bg-[rgba(230,217,159,0.16)]">
          OPEN TO NEW ROLES IN THE PRODUCT FIELD &rarr;
        </div>
      </div>

      <div className="ob-fall ob-zoom absolute right-[7%] top-[16%] text-[#e6d99f]">
        <Heart className="w-14 h-14 sm:w-20 sm:h-20 float-slow" style={{ "--rot": "8deg" }} />
      </div>
      <div className="ob-fall ob-drift absolute left-[5%] bottom-[18%] text-[#dda987] hidden sm:block">
        <PaperPlane className="w-12 h-12" />
      </div>
      <div className="ob-fall absolute right-[16%] bottom-[16%] text-[#f1ebdd]/70 hidden lg:block">
        <Sparkle className="w-7 h-7" />
      </div>
    </PageShell>
  );
}

/* ---------------- PAGE 4 · WORK ---------------- */
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
      testid="page-work"
      bg="#4e5c8c"
      ink="#f1ebdd"
      line="rgba(241,235,221,0.15)"
      margin="rgba(230,217,159,0.32)"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-14 py-20">
        <div className="wk-fall stamp text-[#e6d99f]">PAGE 04 — THE WORK CHAPTER</div>

        <h2 className="wk-rise mt-6 leading-[1.06]" style={{ fontSize: "clamp(1.9rem, 4.8vw, 3.8rem)" }}>
          <span className="font-display block">Fintech taught me</span>
          <span className="font-display block">
            to love the <span className="font-hand text-[#e6d99f]" style={{ fontSize: "clamp(2.3rem, 5.6vw, 4.4rem)" }}>messy middle.</span>
          </span>
        </h2>

        <div className="wk-card relative bg-[#f1ebdd] text-[#3a382f] max-w-2xl mt-9 px-6 py-7 sm:px-9 sm:py-9 shadow-[0_18px_45px_rgba(20,18,40,0.4)]">
          <span className="tape -top-3 left-8 -rotate-3" />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div className="font-condensed font-semibold tracking-[0.2em] text-sm sm:text-base">FYERS SECURITIES</div>
            <div className="font-condensed text-[10px] tracking-[0.24em] text-[#814c57]">[ROLE] · [DATES]</div>
          </div>
          <ul className="mt-4 space-y-2.5 font-body text-sm sm:text-base leading-relaxed text-[#3a382f]/85">
            <li className="flex gap-2.5"><span className="font-hand text-[#764d70]">&bull;</span>Built analytics that made the numbers finally make sense.</li>
            <li className="flex gap-2.5"><span className="font-hand text-[#764d70]">&bull;</span>Developed features end-to-end, from sketch to shipped.</li>
            <li className="flex gap-2.5"><span className="font-hand text-[#764d70]">&bull;</span>Worked closely with product — shaping what got built, and why.</li>
          </ul>
        </div>

        <p className="wk-rise font-hand text-2xl sm:text-3xl text-[#e6d99f] mt-7 rotate-1">
          numbers + stories = my kind of maths.
        </p>
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
