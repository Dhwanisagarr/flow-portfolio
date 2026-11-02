import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Star, Sparkle } from "./doodles";

export default function ZoomTransition({ reduced }) {
  const root = useRef(null);

  useEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=280%",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });
      tl.fromTo(
        ".zoom-img",
        { scale: 1, filter: "blur(0px)" },
        { scale: 7, filter: "blur(5px)", duration: 5, ease: "power1.in" },
        0
      )
        .to(".zoom-dark", { opacity: 0.92, duration: 2 }, 2.4)
        .fromTo(
          ".book-stage",
          { opacity: 0, scale: 0.72, y: 70 },
          { opacity: 1, scale: 1, y: 0, duration: 1.6, ease: "power2.out" },
          4.1
        )
        .to(".zoom-img", { opacity: 0, duration: 0.8 }, 4.1)
        .to(".book-title", { opacity: 0, duration: 0.7 }, 5.2)
        .to(".cover-left", { rotationY: -158, duration: 1.8, ease: "power2.inOut" }, 5.3)
        .to(".cover-right", { rotationY: 158, duration: 1.8, ease: "power2.inOut" }, 5.3)
        .fromTo(".spread-copy", { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 1.2 }, 6.7)
        .fromTo(".spread-doodle", { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 1 }, 6.9)
        .to(".book-stage", { scale: 1.14, duration: 1.6, ease: "power1.in" }, 7.6);
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={root}
      data-testid="zoom-transition"
      className="relative h-screen overflow-hidden bg-[#2a2740]"
    >
      <img
        src="/hero-scene.jpg"
        alt=""
        aria-hidden="true"
        className="zoom-img absolute inset-0 h-full w-full object-cover will-change-transform"
        style={{ transformOrigin: "72% 62%" }}
      />
      <div className="zoom-dark absolute inset-0 bg-[#241f38] opacity-0" />

      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: "1700px" }}>
        <div className="book-stage relative w-[min(86vw,880px)] aspect-[16/10] will-change-transform">
          <div className="absolute inset-0 rounded-lg bg-[#f1ebdd] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, transparent 0 34px, rgba(58,56,47,0.16) 34px 35px)",
              }}
            />
            <div className="absolute inset-y-0 left-1/2 w-px bg-black/20" />
            <div className="absolute inset-y-0 left-1/2 w-8 -translate-x-1/2 bg-gradient-to-r from-transparent via-black/12 to-transparent" />

            <div className="absolute left-[8%] top-[14%] w-[36%]">
              <div className="font-condensed text-[10px] tracking-[0.32em] text-[#814c57] mb-3">
                PAGE 01 · HELLO
              </div>
              <div className="spread-copy font-display text-[#3a382f] leading-tight text-lg sm:text-2xl lg:text-3xl">
                The book opens.
                <br />
                The story begins&hellip;
              </div>
              <div className="spread-copy font-hand text-xl sm:text-2xl text-[#5c5b85] mt-4">
                keep scrolling to turn the page &rarr;
              </div>
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
    </section>
  );
}
