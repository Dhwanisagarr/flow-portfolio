import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PaperPlane, Star, Squiggle } from "./doodles";

const CHAPTERS = ["HELLO", "NOTICING", "DOING", "OBSESSION", "WORK", "MADE THINGS", "HELLO"];

const Ruler = () => (
  <div className="absolute bottom-3 inset-x-0 z-20 hidden md:flex items-center justify-center gap-3 px-10 text-white/85">
    {CHAPTERS.map((c, i) => (
      <div key={i} className="flex items-center gap-3">
        <span className="font-condensed text-[11px] tracking-[0.3em]">{c}</span>
        {i < CHAPTERS.length - 1 && (
          <span className="flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, k) => (
              <span key={k} className="w-px h-2 bg-white/50" />
            ))}
          </span>
        )}
      </div>
    ))}
  </div>
);

export default function Hero({ onNav, reduced }) {
  const root = useRef(null);

  useEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-img", { scale: 1.12, duration: 2.4, ease: "power2.out" }, 0)
        .from(
          ".mask-line > *",
          { yPercent: 118, duration: 1.15, stagger: 0.13, ease: "power4.out" },
          0.2
        )
        .from(".hero-fade", { opacity: 0, y: 22, duration: 0.9, stagger: 0.12 }, 1);
      gsap.to(".hero-img", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-copy", {
        yPercent: -24,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "55% top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={root} data-testid="hero-scene" className="relative h-screen overflow-hidden bg-[#c99a2e]">
      <img
        src="/hero-scene.jpg"
        alt="Illustrated scene of Dhwani writing at her desk beside a stack of books"
        className="hero-img absolute inset-0 h-full w-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#2a2740]/75" />

      <div className="hero-copy relative z-10 flex h-full flex-col">
        <div className="flex-1 flex flex-col items-center justify-start pt-[15vh] sm:pt-[17vh] px-5 text-center">
          <div className="mask-line overflow-hidden">
            <span className="block font-condensed text-[11px] sm:text-sm tracking-[0.45em] text-white/95">
              INSIDE THE DIARY OF
            </span>
          </div>
          <div className="hero-fade w-32 sm:w-56 lg:w-80 h-px bg-white/60 my-3 sm:my-4" />
          <div className="mask-line overflow-hidden">
            <h1
              className="font-display text-white leading-[1.02]"
              style={{ fontSize: "clamp(2.6rem, 10vw, 8.5rem)", letterSpacing: "0.06em" }}
              data-testid="hero-title"
            >
              DHWANI SAGAR
            </h1>
          </div>
          <div className="mask-line overflow-hidden mt-1 sm:mt-2">
            <span
              className="font-display text-[#c9c6ea] tracking-[0.28em]"
              style={{ fontSize: "clamp(1rem, 2.6vw, 2rem)" }}
            >
              BUILDING&ensp;·&ensp;EXPERIENCES
            </span>
          </div>
        </div>

        <div className="pb-20 md:pb-16 px-5 sm:px-10 grid grid-cols-1 md:grid-cols-3 items-end gap-4 text-white">
          <button
            data-testid="scroll-cue"
            onClick={() => onNav("#about")}
            className="hero-fade flex items-center gap-3 justify-self-start group"
          >
            <span className="font-condensed text-[11px] tracking-[0.3em]">SCROLL TO STEP INSIDE</span>
            <span className="scroll-cue-line block w-px h-8 bg-white/80" />
          </button>

          <div className="hero-fade text-center">
            <div className="font-hand text-3xl sm:text-4xl text-[#f4ead2]">Hi, I&rsquo;m Dhwani Sagar</div>
            <div className="font-condensed text-[11px] sm:text-xs tracking-[0.24em] mt-1 text-white/85">
              I NOTICE THINGS, I ASK WHY, AND I MAKE THINGS
            </div>
          </div>

          <div className="hero-fade justify-self-end hidden md:block relative">
            <PaperPlane className="w-10 h-10 text-white/90 float-slow" style={{ "--rot": "12deg" }} />
            <Star className="w-4 h-4 absolute -top-3 -left-5 text-[#e6d99f]" />
          </div>
        </div>
      </div>
      <Ruler />
      <Squiggle className="hidden md:block absolute left-10 top-1/2 w-20 text-white/50 -rotate-6" />
    </section>
  );
}
