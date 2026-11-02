import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PaperPlane, Star, Squiggle, Notebook } from "./doodles";

const PROJECTS = [
  { n: "01", title: "Dahlia", tag: "MEMORY JOURNAL", rot: "-rotate-2", href: "https://mydahlia.vercel.app/",
    desc: "Your memories, in bloom — plant a photo memory every day and watch a monthly botanical garden grow." },
  { n: "02", title: "StreakUp", tag: "HABIT TRACKER", rot: "rotate-1", href: "https://streak-up-streakup.vercel.app/",
    desc: "Small actions, visible momentum — daily challenges, streaks and notes that make progress easy to see." },
  { n: "03", title: "Stack Optimizer", tag: "FINTECH · AI", rot: "rotate-2", href: "https://fintech-stack-nine.vercel.app/",
    desc: "Your money is everywhere — an AI-powered builder for India's best fintech apps and money stacks." },
  { n: "04", title: "Product Thinking Teardowns", tag: "ESSAYS · NOTION", rot: "-rotate-1", href: "https://pickled-chair-247.notion.site/Product-Thinking-Teardowns-3e0900d91be98010a138e2571183e521",
    desc: "Teardowns and case studies on user problems, product decisions, and how good products could be better." },
  { n: "05", title: "SignalDesk", tag: "VOICE OF CUSTOMER · STREAMLIT", rot: "rotate-2", href: "https://signaldesk.streamlit.app/",
    desc: "Turns messy customer feedback into prioritized product issues, backed by evidence — a voice-of-customer tool for PMs." },
  { n: "06", title: "This Diary", tag: "BUILD IN PUBLIC", rot: "-rotate-2", href: null,
    desc: "The website you are inside right now — written, illustrated & coded by me." },
];

export default function Scrapbook({ reduced }) {
  const root = useRef(null);
  const track = useRef(null);

  useEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      const dist = () => Math.max(track.current.scrollWidth - window.innerWidth, 0);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => "+=" + dist(),
          scrub: 0.9,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      tl.fromTo(
        ".sb-card",
        { y: 90, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.04, duration: 0.8, ease: "power2.out" },
        0
      ).to(track.current, { x: () => -dist(), ease: "none", duration: 3 }, 0);
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="work"
      ref={root}
      data-testid="scrapbook"
      className="relative h-screen overflow-hidden bg-[#596743] text-[#f1ebdd]"
    >
      <div
        className="page-lines absolute inset-0 pointer-events-none"
        style={{ "--line": "rgba(241,235,221,0.14)", "--margin": "rgba(230,217,159,0.3)" }}
      />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 h-full flex flex-col justify-center pt-14">
        <div className="px-6 sm:px-14 mb-6 sm:mb-9">
          <div className="font-condensed text-[11px] sm:text-xs tracking-[0.4em] text-[#e6d99f]">
            THE SCRAPBOOK OF
          </div>
          <h2
            className="font-condensed font-bold uppercase leading-[0.95]"
            style={{ fontSize: "clamp(2.6rem, 9vw, 8rem)", letterSpacing: "0.01em" }}
            data-testid="scrapbook-title"
          >
            Made Things
          </h2>
          <div className="font-hand text-xl sm:text-2xl text-[#e6d99f] mt-1 -rotate-1">
            curated experiments, prototypes & curiosities — scroll on, it moves sideways
          </div>
        </div>

        <div ref={track} className="flex gap-6 sm:gap-10 px-6 sm:px-14 will-change-transform pb-8">
          {PROJECTS.map((p) => {
            const Card = (
              <>
                <span className="tape -top-3 left-10 -rotate-2" />
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-4xl sm:text-5xl text-[#5c5b85]">{p.n}</span>
                  <span className="font-condensed text-[9px] sm:text-[10px] tracking-[0.26em] text-[#814c57] border border-dashed border-[#814c57]/60 px-2.5 py-1">
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-4xl mt-4 leading-tight">{p.title}</h3>
                <p className="font-body text-xs sm:text-base text-[#3a382f]/80 mt-3 leading-relaxed">{p.desc}</p>
                <Squiggle className="w-20 text-[#596743] mt-5" />
                {p.href && (
                  <div className="font-condensed text-[9px] sm:text-[10px] tracking-[0.26em] text-[#596743] mt-3">
                    OPEN THE LIVE PROJECT &rarr;
                  </div>
                )}
              </>
            );
            return p.href ? (
              <a
                key={p.n}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                data-testid={`project-card-${p.n}`}
                className={`sb-card ${p.rot} relative shrink-0 w-[78vw] sm:w-[54vw] lg:w-[36vw] bg-[#f1ebdd] text-[#3a382f] px-6 py-7 sm:px-9 sm:py-9 shadow-[0_18px_45px_rgba(20,18,40,0.45)] block hover:-translate-y-1.5 hover:shadow-[0_26px_60px_rgba(20,18,40,0.55)] transition-all duration-300`}
              >
                {Card}
              </a>
            ) : (
              <article
                key={p.n}
                data-testid={`project-card-${p.n}`}
                className={`sb-card ${p.rot} relative shrink-0 w-[78vw] sm:w-[54vw] lg:w-[36vw] bg-[#f1ebdd] text-[#3a382f] px-6 py-7 sm:px-9 sm:py-9 shadow-[0_18px_45px_rgba(20,18,40,0.45)]`}
              >
                {Card}
              </article>
            );
          })}
          <div className="shrink-0 w-[40vw] sm:w-[26vw] flex flex-col items-center justify-center gap-4 text-[#e6d99f]">
            <Notebook className="w-12 h-12" />
            <div className="font-hand text-2xl text-center -rotate-2">more pages being written&hellip;</div>
            <div className="font-condensed text-[10px] tracking-[0.3em] text-[#f1ebdd]/70">KEEP SCROLLING &darr;</div>
          </div>
        </div>
      </div>

      <PaperPlane className="absolute right-[6%] top-[12%] w-12 h-12 text-[#e6d99f]/80 float-slow hidden sm:block" style={{ "--rot": "10deg" }} />
      <Star className="absolute left-[4%] top-[16%] w-7 h-7 text-[#f1ebdd]/60 hidden sm:block" />
    </section>
  );
}
