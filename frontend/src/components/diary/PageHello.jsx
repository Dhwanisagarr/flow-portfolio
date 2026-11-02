import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PaperPlane, Heart, Star, Sparkle, SketchGirl } from "./doodles";

export default function PageHello({ reduced }) {
  const root = useRef(null);

  useEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top 75%", once: true },
        defaults: { ease: "power3.out", duration: 0.9 },
      })
        .from(".hello-rise", { y: 70, opacity: 0, stagger: 0.12 })
        .from(".hello-fall", { y: -150, opacity: 0, rotation: (i) => [-20, 16, -12][i % 3], stagger: 0.08 }, 0.15);
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="contact"
      ref={root}
      data-testid="page-hello"
      className="relative min-h-screen overflow-hidden flex items-center bg-[#dda987] text-[#3f2c22]"
    >
      <div
        className="page-lines absolute inset-0 pointer-events-none"
        style={{ "--line": "rgba(63,44,34,0.18)", "--margin": "rgba(129,76,87,0.35)" }}
      />
      <div className="grain absolute inset-0" />
      <div className="paper-vignette absolute inset-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-14 py-24 text-center">
        <div className="hello-fall stamp text-[#764d70]">LAST PAGE — YOUR TURN</div>

        <h2 className="hello-rise mt-7 leading-[1.05]" style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}>
          <span className="font-display block">Say hello,</span>
          <span className="font-hand block text-[#764d70]" style={{ fontSize: "clamp(2.6rem, 7vw, 5.6rem)" }}>
            let&rsquo;s build something together.
          </span>
        </h2>

        <p className="hello-rise font-body text-sm sm:text-lg text-[#3f2c22]/85 max-w-xl mx-auto mt-6">
          You made it to the back of the diary. If an idea just sparked — a role, a product, a wild
          what-if — write to me. I always answer.
        </p>

        <div className="hello-rise mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            data-testid="email-link"
            href="mailto:dhwanisagar17@gmail.com"
            className="font-condensed text-sm sm:text-base tracking-[0.2em] bg-[#383556] text-[#f1ebdd] px-8 py-4 rounded-full shadow-[0_14px_35px_rgba(40,30,60,0.4)] hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(40,30,60,0.5)] transition-all duration-300"
          >
            DHWANISAGAR17@GMAIL.COM
          </a>
          <div className="flex gap-3 flex-wrap justify-center">
            {[
              { l: "LINKEDIN", t: "linkedin-link", href: "https://www.linkedin.com/in/dhwanisagar/" },
              { l: "GITHUB", t: "github-link", href: "https://github.com/Dhwanisagarr" },
              { l: "RÉSUMÉ ↓", t: "resume-download", href: "/dhwani-sagar-resume.pdf", dl: true },
            ].map(({ l, t, href, dl }) => (
              <a
                key={l}
                data-testid={t}
                href={href}
                target={dl ? undefined : "_blank"}
                rel={dl ? undefined : "noreferrer"}
                download={dl ? "Dhwani-Sagar-Resume.pdf" : undefined}
                aria-label={l}
                className="chip text-[#764d70] hover:bg-[#764d70] hover:text-[#f1ebdd] transition-colors duration-300"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        <div className="hello-rise font-hand text-2xl sm:text-3xl text-[#596743] mt-10 -rotate-1">
          thanks for wandering through my diary — come back anytime.
        </div>

        <div className="hello-rise flex items-center justify-center gap-2 mt-6 text-[#764d70]">
          <SketchGirl className="w-14 h-14" />
          <Heart className="w-6 h-6" />
        </div>

        <div className="font-condensed text-[9px] tracking-[0.3em] text-[#3f2c22]/60 mt-10">
          © DHWANI SAGAR · WRITTEN, ILLUSTRATED & BUILT BY ME
        </div>
      </div>

      <div className="hello-fall absolute left-[6%] top-[14%] text-[#764d70]">
        <PaperPlane className="w-14 h-14 float-slow" style={{ "--rot": "-12deg" }} />
      </div>
      <div className="hello-fall absolute right-[7%] top-[20%] text-[#596743]">
        <Sparkle className="w-9 h-9" />
      </div>
      <div className="hello-fall absolute right-[12%] bottom-[16%] text-[#814c57] hidden sm:block">
        <Star className="w-9 h-9" />
      </div>
      <div className="hello-fall absolute left-[10%] bottom-[20%] text-[#383556] hidden lg:block">
        <Heart className="w-10 h-10" />
      </div>
    </section>
  );
}
