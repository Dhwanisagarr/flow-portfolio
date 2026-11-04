import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PaperPlane, Star, Squiggle, Sparkle } from "./doodles";

const CHAPTERS = ["HELLO", "NOTICING", "DOING", "WORK", "MADE THINGS", "HELLO"];

const Ruler = () => (
  <div className="hero-ruler absolute bottom-3 inset-x-0 z-20 hidden md:flex items-center justify-center gap-3 px-10 text-white/85 pointer-events-none">
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
      // 1. Initial entrance animation on load
      const entranceTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      entranceTl
        .from(".hero-img-wrap", { scale: 1.08, duration: 2.2, ease: "power2.out" }, 0)
        .from(
          ".mask-line > *",
          { yPercent: 118, duration: 1.15, stagger: 0.12, ease: "power4.out" },
          0.2
        )
        .from(".hero-line", { scaleX: 0, duration: 0.9, ease: "power3.inOut" }, 0.4)
        .from(".hero-fade", { opacity: 0, y: 20, duration: 0.9, stagger: 0.1 }, 0.8)
        .from(".hero-ruler", { opacity: 0, y: 15, duration: 0.8 }, 1.0);

      // 2. Scroll-driven zoom pinned on the landing page
      // Zooms directly into the stack of books on the right (origin 69% 54%)
      // and centers them seamlessly into the 3D diary opening
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=220%",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      scrollTl
        // Fade out text overlays and cues as scroll begins
        .to(".hero-copy", { opacity: 0, y: -25, scale: 0.97, duration: 1.4, ease: "power2.out" }, 0)
        .to(".hero-gradient", { opacity: 0, duration: 1.4 }, 0)
        .to(".hero-ruler", { opacity: 0, y: 15, duration: 1.0 }, 0)
        .to(".hero-squiggle", { opacity: 0, duration: 1.0 }, 0)
        // Deep camera zoom focusing directly on the books on the right
        .to(
          ".hero-img",
          {
            scale: 5.6,
            xPercent: -19,
            yPercent: -4,
            filter: "blur(3px)",
            duration: 6,
            ease: "power1.inOut",
          },
          0
        )
        // Warm dark atmosphere blends in as camera gets close to the books
        .to(".zoom-dark", { opacity: 0.92, duration: 2.2 }, 3.4)
        // 3D book stage appears seamlessly at the center where the books landed
        .fromTo(
          ".book-stage",
          { opacity: 0, scale: 0.72, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1.6, ease: "power2.out" },
          4.4
        )
        .to(".hero-img", { opacity: 0, duration: 0.8 }, 5.2)
        // Book cover opens
        .to(".book-title", { opacity: 0, duration: 0.6 }, 5.6)
        .to(".cover-left", { rotationY: -158, duration: 1.8, ease: "power2.inOut" }, 5.8)
        .to(".cover-right", { rotationY: 158, duration: 1.8, ease: "power2.inOut" }, 5.8)
        // Inside spread copy & doodle reveals
        .fromTo(".spread-copy", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1.2 }, 7.0)
        .fromTo(".spread-doodle", { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 1 }, 7.2)
        // Smooth expansion toward Page 1
        .to(".book-stage", { scale: 1.14, duration: 1.6, ease: "power1.in" }, 8.2);
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={root}
      data-testid="hero-scene"
      className="relative h-screen overflow-hidden bg-[#241f38]"
    >
      {/* Background illustration with zoom */}
      <div className="hero-img-wrap absolute inset-0 overflow-hidden will-change-transform">
        <img
          src="/hero-scene.jpg"
          alt="Illustrated scene of Dhwani writing at her desk beside a stack of books"
          className="hero-img absolute inset-0 h-full w-full object-cover will-change-transform"
          style={{ transformOrigin: "69% 54%" }}
        />
      </div>

      {/* Atmospheric lighting gradient */}
      <div className="hero-gradient absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-[#241f38]/80 pointer-events-none" />

      {/* Dark overlay for transition into diary */}
      <div className="zoom-dark absolute inset-0 bg-[#241f38] opacity-0 pointer-events-none" />

      {/* Hero Content (headline, title, bottom bar) */}
      <div className="hero-copy relative z-10 flex h-full flex-col pointer-events-none">
        <div className="flex-1 flex flex-col items-center justify-start pt-[14vh] sm:pt-[16vh] px-5 text-center">
          <div className="mask-line overflow-hidden">
            <span className="block font-condensed text-[11px] sm:text-sm tracking-[0.45em] text-white/95">
              INSIDE THE DIARY OF
            </span>
          </div>
          <div className="hero-line w-32 sm:w-56 lg:w-80 h-px bg-white/60 my-3 sm:my-4 origin-center" />
          <div className="mask-line overflow-hidden">
            <h1
              className="font-display text-white leading-[0.88] drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)]"
              style={{ fontSize: "clamp(3rem, 15vw, 13.5rem)", letterSpacing: "0.01em" }}
              data-testid="hero-title"
            >
              DHWANI SAGAR
            </h1>
          </div>
          <div className="mask-line overflow-hidden mt-1 sm:mt-2">
            <span
              className="font-display text-[#c9c6ea] tracking-[0.35em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
              style={{ fontSize: "clamp(0.9rem, 2.2vw, 1.7rem)" }}
            >
              BUILDING&ensp;·&ensp;EXPERIENCES
            </span>
          </div>
        </div>

        <div className="pb-20 md:pb-16 px-5 sm:px-10 grid grid-cols-1 md:grid-cols-3 items-end gap-4 text-white">
          <button
            data-testid="scroll-cue"
            onClick={() => onNav("#about")}
            className="hero-fade pointer-events-auto flex items-center gap-3 justify-self-start group cursor-pointer"
          >
            <span className="font-condensed text-[11px] tracking-[0.3em]">SCROLL TO STEP INSIDE</span>
            <span className="scroll-cue-line block w-px h-8 bg-white/80" />
          </button>

          <div className="hero-fade text-center pointer-events-auto">
            <div className="font-hand text-3xl sm:text-4xl text-[#f4ead2] drop-shadow">
              Hi, I&rsquo;m Dhwani Sagar
            </div>
            <div className="font-condensed text-[11px] sm:text-xs tracking-[0.24em] mt-1 text-white/90 drop-shadow">
              I NOTICE THINGS, I ASK WHY, AND I MAKE THINGS
            </div>
          </div>

          <div className="hero-fade justify-self-end hidden md:block relative pointer-events-none">
            <PaperPlane className="w-10 h-10 text-white/90 float-slow" style={{ "--rot": "12deg" }} />
            <Star className="w-4 h-4 absolute -top-3 -left-5 text-[#e6d99f]" />
          </div>
        </div>
      </div>

      {/* 3D Book Stage (centered where books land during zoom) */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-15"
        style={{ perspective: "1800px" }}
      >
        <div className="book-stage relative w-[min(86vw,880px)] aspect-[16/10] will-change-transform opacity-0">
          <div className="absolute inset-0 rounded-lg bg-[#f1ebdd] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, transparent 0 34px, rgba(58,56,47,0.16) 34px 35px)",
              }}
            />
            <div className="absolute inset-y-0 left-1/2 w-px bg-black/20" />
            <div className="absolute inset-y-0 left-1/2 w-8 -translate-x-1/2 bg-gradient-to-r from-transparent via-black/12 to-transparent" />

            <div className="absolute left-[7%] sm:left-[8%] top-[14%] sm:top-[16%] w-[42%] sm:w-[40%] pr-2">
              <p className="spread-copy font-diary text-[#3a382f] leading-[1.3] text-lg sm:text-2xl lg:text-[1.8rem]">
                &ldquo;I didn&rsquo;t think you&rsquo;d actually open my diary. And now you&rsquo;re reading it? Well&hellip; since you&rsquo;re already here, I guess I should introduce myself&rdquo;
              </p>
            </div>

            <div className="spread-doodle absolute right-[10%] top-1/2 -translate-y-1/2 text-[#46696c]">
              <Star className="w-8 h-8 sm:w-12 sm:h-12" />
              <Sparkle className="w-5 h-5 sm:w-7 sm:h-7 absolute -top-8 -right-6 text-[#dda987]" />
            </div>
          </div>

          <div
            className="cover-left absolute inset-y-0 left-0 w-1/2 rounded-l-lg bg-[#383556] border border-[#e6d99f]/40 shadow-[0_20px_60px_rgba(0,0,0,0.45)] will-change-transform"
            style={{ transformOrigin: "left center", backfaceVisibility: "hidden" }}
          />
          <div
            className="cover-right absolute inset-y-0 right-0 w-1/2 rounded-r-lg bg-[#383556] border border-[#e6d99f]/40 shadow-[0_20px_60px_rgba(0,0,0,0.45)] will-change-transform"
            style={{ transformOrigin: "right center", backfaceVisibility: "hidden" }}
          />

          <div className="book-title absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <div className="font-condensed text-[10px] sm:text-xs tracking-[0.5em] text-[#e6d99f]/90">
              THE ILLUSTRATED DIARY OF
            </div>
            <div
              className="font-display text-[#f1ebdd] mt-2"
              style={{ fontSize: "clamp(1.6rem, 5vw, 3.4rem)", letterSpacing: "0.08em" }}
            >
              DHWANI SAGAR
            </div>
            <div className="w-16 h-px bg-[#e6d99f]/60 mt-3" />
          </div>
        </div>
      </div>

      <Ruler />
      <Squiggle className="hero-squiggle hidden md:block absolute left-10 top-1/2 w-20 text-white/50 -rotate-6 pointer-events-none" />
    </section>
  );
}
