import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { PaperPlane, Star, Squiggle, Notebook } from "./doodles";

const PROJECTS = [
  {
    n: "01",
    title: "Dahlia",
    tag: "MEMORY JOURNAL",
    headline: "Your memories, in bloom, every single day.",
    desc: "Plant a photo memory every day and watch a monthly botanical garden grow from your moments.",
    href: "https://mydahlia.vercel.app/",
    accent: "#596743",
    mockup: (
      <div className="h-full w-full bg-[#fbf8f3] p-4 sm:p-5 flex flex-col justify-between text-[#3a382f]">
        <div className="flex items-center justify-between border-b border-[#3a382f]/10 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#596743]" />
            <span className="font-condensed text-xs tracking-[0.2em] font-semibold text-[#596743]">DAHLIA · MAY 2026</span>
          </div>
          <span className="font-condensed text-[10px] tracking-[0.18em] bg-[#596743]/15 text-[#596743] px-2 py-0.5 rounded-full">
            31 MEMORIES PLANTED 🌱
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2.5 my-3">
          <div className="bg-white rounded-lg p-2.5 border border-[#3a382f]/8 shadow-sm">
            <div className="h-16 bg-[#dda987]/25 rounded flex items-center justify-center text-xl">🌸</div>
            <div className="font-condensed text-[9px] tracking-[0.16em] text-[#814c57] mt-1.5 font-semibold">MAY 12</div>
            <div className="font-body text-[11px] text-[#3a382f]/80 truncate">Cherry blossom walk</div>
          </div>
          <div className="bg-white rounded-lg p-2.5 border border-[#3a382f]/8 shadow-sm">
            <div className="h-16 bg-[#e6d99f]/30 rounded flex items-center justify-center text-xl">☕</div>
            <div className="font-condensed text-[9px] tracking-[0.16em] text-[#596743] mt-1.5 font-semibold">MAY 14</div>
            <div className="font-body text-[11px] text-[#3a382f]/80 truncate">Rain & warm coffee</div>
          </div>
          <div className="bg-white rounded-lg p-2.5 border border-[#3a382f]/8 shadow-sm hidden sm:block">
            <div className="h-16 bg-[#5c5b85]/20 rounded flex items-center justify-center text-xl">🌿</div>
            <div className="font-condensed text-[9px] tracking-[0.16em] text-[#5c5b85] mt-1.5 font-semibold">MAY 18</div>
            <div className="font-body text-[11px] text-[#3a382f]/80 truncate">New balcony plant</div>
          </div>
          <div className="bg-white rounded-lg p-2.5 border border-[#3a382f]/8 shadow-sm hidden sm:block">
            <div className="h-16 bg-[#dda987]/30 rounded flex items-center justify-center text-xl">🌅</div>
            <div className="font-condensed text-[9px] tracking-[0.16em] text-[#814c57] mt-1.5 font-semibold">MAY 21</div>
            <div className="font-body text-[11px] text-[#3a382f]/80 truncate">Golden hour sky</div>
          </div>
        </div>
        <div className="bg-[#596743]/10 border border-dashed border-[#596743]/30 rounded-lg py-2 px-3 flex items-center justify-between text-[10px] font-condensed tracking-[0.2em] text-[#596743]">
          <span>+ PLANT TODAY&rsquo;S MEMORY</span>
          <span>BLOOM SCORE: 98%</span>
        </div>
      </div>
    ),
  },
  {
    n: "02",
    title: "StreakUp",
    tag: "HABIT TRACKER",
    headline: "Small daily habits, visible momentum.",
    desc: "Daily challenges, streaks and contextual notes that make personal progress obvious and easy to maintain.",
    href: "https://streak-up-streakup.vercel.app/",
    accent: "#814c57",
    mockup: (
      <div className="h-full w-full bg-[#201d32] p-4 sm:p-5 flex flex-col justify-between text-[#f1ebdd]">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#dda987]" />
            <span className="font-condensed text-xs tracking-[0.2em] font-semibold text-[#dda987]">STREAKUP · DASHBOARD</span>
          </div>
          <span className="font-condensed text-[10px] tracking-[0.18em] bg-[#dda987]/20 text-[#dda987] px-2.5 py-0.5 rounded-full">
            🔥 42 DAY STREAK
          </span>
        </div>
        <div className="space-y-2.5 my-3">
          <div className="bg-white/5 rounded-lg p-3 border border-white/10 flex items-center justify-between">
            <div>
              <div className="font-condensed text-xs tracking-[0.15em] text-white">DEEP WORK · 2 HOURS</div>
              <div className="w-36 sm:w-48 h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div className="w-full h-full bg-[#dda987] rounded-full" />
              </div>
            </div>
            <span className="font-condensed text-[10px] tracking-[0.2em] text-[#e6d99f]">100% COMPLETE</span>
          </div>
          <div className="bg-white/5 rounded-lg p-3 border border-white/10 flex items-center justify-between">
            <div>
              <div className="font-condensed text-xs tracking-[0.15em] text-white">DAILY READING · 30 MIN</div>
              <div className="w-36 sm:w-48 h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div className="w-4/5 h-full bg-[#596743] rounded-full" />
              </div>
            </div>
            <span className="font-condensed text-[10px] tracking-[0.2em] text-[#f1ebdd]/70">24 / 30 MIN</span>
          </div>
          <div className="bg-white/5 rounded-lg p-3 border border-white/10 flex items-center justify-between hidden sm:flex">
            <div>
              <div className="font-condensed text-xs tracking-[0.15em] text-white">PRODUCT CASE STUDY</div>
              <div className="w-36 sm:w-48 h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div className="w-full h-full bg-[#814c57] rounded-full" />
              </div>
            </div>
            <span className="font-condensed text-[10px] tracking-[0.2em] text-[#e6d99f]">DONE</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-1 text-[10px] font-condensed tracking-[0.25em] text-white/60">
          <span>WEEKLY RECAP: 7/7 DAYS</span>
          <span className="text-[#dda987]">ALL STREAKS ACTIVE</span>
        </div>
      </div>
    ),
  },
  {
    n: "03",
    title: "Stack Optimizer",
    tag: "FINTECH · AI",
    headline: "India's best money stacks, curated by AI.",
    desc: "Your money is everywhere — an intelligent recommender analyzing accounts, UPI cashbacks, and broker fees.",
    href: "https://fintech-stack-nine.vercel.app/",
    accent: "#4e5c8c",
    mockup: (
      <div className="h-full w-full bg-[#182133] p-4 sm:p-5 flex flex-col justify-between text-[#f1ebdd]">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e6d99f]" />
            <span className="font-condensed text-xs tracking-[0.2em] font-semibold text-[#e6d99f]">STACK OPTIMIZER · INDIA</span>
          </div>
          <span className="font-condensed text-[10px] tracking-[0.18em] bg-[#e6d99f]/15 text-[#e6d99f] px-2.5 py-0.5 rounded-full">
            AI RECOMMENDED
          </span>
        </div>
        <div className="space-y-2.5 my-3">
          <div className="bg-white/5 rounded-lg p-3 border border-white/10 flex items-center justify-between">
            <div>
              <div className="font-condensed text-xs tracking-[0.15em] text-white">INVESTMENTS · ZERODHA</div>
              <div className="font-body text-[11px] text-[#f1ebdd]/70 mt-0.5">Zero brokerage equity delivery</div>
            </div>
            <span className="font-condensed text-[10px] tracking-[0.18em] text-[#e6d99f] bg-white/10 px-2 py-0.5 rounded">
              OPTIMAL
            </span>
          </div>
          <div className="bg-white/5 rounded-lg p-3 border border-white/10 flex items-center justify-between">
            <div>
              <div className="font-condensed text-xs tracking-[0.15em] text-white">HIGH-YIELD SWEEP · FI MONEY</div>
              <div className="font-body text-[11px] text-[#f1ebdd]/70 mt-0.5">7.2% smart deposit returns</div>
            </div>
            <span className="font-condensed text-[10px] tracking-[0.18em] text-[#dda987] bg-white/10 px-2 py-0.5 rounded">
              +₹14,200/YR
            </span>
          </div>
          <div className="bg-white/5 rounded-lg p-3 border border-white/10 flex items-center justify-between hidden sm:flex">
            <div>
              <div className="font-condensed text-xs tracking-[0.15em] text-white">UPI & PAYMENTS · CRED</div>
              <div className="font-body text-[11px] text-[#f1ebdd]/70 mt-0.5">Consistent cashbacks on utility</div>
            </div>
            <span className="font-condensed text-[10px] tracking-[0.18em] text-[#e6d99f] bg-white/10 px-2 py-0.5 rounded">
              ACTIVE
            </span>
          </div>
        </div>
        <div className="bg-[#e6d99f]/10 rounded-lg p-2.5 text-[10px] font-condensed tracking-[0.2em] text-[#e6d99f] flex items-center justify-between">
          <span>ESTIMATED ANNUAL ALPHA: ₹24,800</span>
          <span>100% SECURE</span>
        </div>
      </div>
    ),
  },
  {
    n: "04",
    title: "Product Thinking Teardowns",
    tag: "ESSAYS · NOTION",
    headline: "Teardowns on how good products could be 10x better.",
    desc: "Analytical essays and UX case studies identifying user friction, design decisions, and missed product opportunities.",
    href: "https://pickled-chair-247.notion.site/Product-Thinking-Teardowns-3e0900d91be98010a138e2571183e521",
    accent: "#764d70",
    mockup: (
      <div className="h-full w-full bg-[#fbfbfa] p-4 sm:p-5 flex flex-col justify-between text-[#2f3437]">
        <div className="flex items-center justify-between border-b border-[#2f3437]/10 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#764d70]" />
            <span className="font-condensed text-xs tracking-[0.2em] font-semibold text-[#764d70]">NOTION · CASE STUDIES</span>
          </div>
          <span className="font-condensed text-[10px] tracking-[0.18em] bg-[#764d70]/15 text-[#764d70] px-2.5 py-0.5 rounded-full">
            4 TEARDOWNS
          </span>
        </div>
        <div className="space-y-2.5 my-3">
          <div className="bg-white rounded-lg p-3 border border-[#2f3437]/10 shadow-sm">
            <div className="font-condensed text-xs tracking-[0.14em] font-semibold text-[#2f3437]">
              📄 QUICK-COMMERCE: SWIGGY INSTAMART VS BLINKIT
            </div>
            <div className="font-body text-[11px] text-[#2f3437]/75 mt-1">
              Analyzing cognitive load during urgent checkout flows.
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-[#2f3437]/10 shadow-sm">
            <div className="font-condensed text-xs tracking-[0.14em] font-semibold text-[#2f3437]">
              📄 ZERODHA COIN: THE MUTUAL FUND SIP EXPERIENCE
            </div>
            <div className="font-body text-[11px] text-[#2f3437]/75 mt-1">
              Why goal-based investing UI beats pure fund listings.
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-[#2f3437]/10 shadow-sm hidden sm:block">
            <div className="font-condensed text-xs tracking-[0.14em] font-semibold text-[#2f3437]">
              📄 DUOLINGO NOTIFICATION PSYCHOLOGY
            </div>
            <div className="font-body text-[11px] text-[#2f3437]/75 mt-1">
              Guilt vs reward mechanisms in daily retention loops.
            </div>
          </div>
        </div>
        <div className="text-[10px] font-condensed tracking-[0.2em] text-[#764d70] flex items-center justify-between">
          <span>READ ESSAYS ON NOTION &rarr;</span>
          <span>DHWANI SAGAR</span>
        </div>
      </div>
    ),
  },
  {
    n: "05",
    title: "SignalDesk",
    tag: "VOICE OF CUSTOMER · STREAMLIT",
    headline: "Messy feedback turned into prioritized product issues.",
    desc: "A voice-of-customer intelligence tool that clusters raw support chats, reviews, and tweets into evidence-backed tickets.",
    href: "https://signaldesk.streamlit.app/",
    accent: "#596743",
    mockup: (
      <div className="h-full w-full bg-[#16202c] p-4 sm:p-5 flex flex-col justify-between text-[#f1ebdd]">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#dda987]" />
            <span className="font-condensed text-xs tracking-[0.2em] font-semibold text-[#dda987]">SIGNALDESK · AI RADAR</span>
          </div>
          <span className="font-condensed text-[10px] tracking-[0.18em] bg-[#dda987]/20 text-[#dda987] px-2.5 py-0.5 rounded-full">
            1,420 SIGNALS
          </span>
        </div>
        <div className="space-y-2.5 my-3">
          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
            <div className="flex items-center justify-between">
              <span className="font-condensed text-[10px] tracking-[0.18em] text-[#814c57] font-semibold">P0 · CRITICAL</span>
              <span className="font-condensed text-[10px] tracking-[0.16em] text-[#e6d99f]">142 MENTIONS</span>
            </div>
            <div className="font-condensed text-xs tracking-[0.12em] text-white mt-1">
              ONBOARDING DROP-OFF: OTP SMS TIMEOUT
            </div>
            <div className="font-body text-[11px] text-[#f1ebdd]/70 mt-1">Impact: ~₹4.2L ARR lost in activation</div>
          </div>
          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
            <div className="flex items-center justify-between">
              <span className="font-condensed text-[10px] tracking-[0.18em] text-[#dda987] font-semibold">P1 · HIGH</span>
              <span className="font-condensed text-[10px] tracking-[0.16em] text-[#e6d99f]">88 MENTIONS</span>
            </div>
            <div className="font-condensed text-xs tracking-[0.12em] text-white mt-1">
              BULK EXPORT TO CSV TIMING OUT FOR &gt;10K ROWS
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] font-condensed tracking-[0.22em] text-white/60">
          <span>CLUSTER ACCURACY: 94.2%</span>
          <span className="text-[#dda987]">VIEW LIVE APP &rarr;</span>
        </div>
      </div>
    ),
  },
  {
    n: "06",
    title: "This Diary",
    tag: "BUILD IN PUBLIC",
    headline: "The illustrated diary you are inside right now.",
    desc: "An experimental, narrative-driven portfolio designed to evoke stepping into someone's personal illustrated diary.",
    href: null,
    accent: "#383556",
    mockup: (
      <div className="h-full w-full bg-[#383556] p-4 sm:p-5 flex flex-col justify-between text-[#f1ebdd]">
        <div className="flex items-center justify-between border-b border-white/15 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e6d99f]" />
            <span className="font-condensed text-xs tracking-[0.2em] font-semibold text-[#e6d99f]">PORTFOLIO · BEHIND THE SCENES</span>
          </div>
          <span className="font-condensed text-[10px] tracking-[0.18em] bg-[#e6d99f]/15 text-[#e6d99f] px-2.5 py-0.5 rounded-full">
            CURRENT CHAPTER
          </span>
        </div>
        <div className="bg-white/10 rounded-xl p-4 border border-white/15 my-3 flex flex-col items-center justify-center text-center">
          <div className="text-4xl mb-2">📖</div>
          <div className="font-display text-xl text-white tracking-wide">THE ILLUSTRATED DIARY</div>
          <div className="font-hand text-lg text-[#e6d99f] mt-1">written, illustrated & coded by Dhwani Sagar</div>
          <div className="flex flex-wrap gap-2 justify-center mt-3">
            <span className="chip !text-[9px] !bg-white/10">REACT 19</span>
            <span className="chip !text-[9px] !bg-white/10">GSAP SCROLLTRIGGER</span>
            <span className="chip !text-[9px] !bg-white/10">LENIS</span>
            <span className="chip !text-[9px] !bg-white/10">TAILWIND</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] font-condensed tracking-[0.22em] text-[#e6d99f]">
          <span>CHAPTER: SELECTED WORK</span>
          <span>YOU ARE HERE</span>
        </div>
      </div>
    ),
  },
];

export default function Scrapbook({ reduced }) {
  const root = useRef(null);
  const track = useRef(null);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (reduced || isMobile) return;

    const ctx = gsap.context(() => {
      const getDistance = () => {
        if (!track.current) return 0;
        return Math.max(track.current.scrollWidth - window.innerWidth, 0);
      };

      const dist = getDistance();
      if (dist <= 0) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => "+=" + getDistance(),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(track.current, {
        x: () => -getDistance(),
        ease: "none",
      });
    }, root);

    return () => ctx.revert();
  }, [reduced, isMobile]);

  return (
    <section
      id="work"
      ref={root}
      data-testid="scrapbook"
      className="relative h-screen w-full overflow-hidden bg-[#52643e] text-[#f1ebdd] flex flex-col justify-between"
    >
      {/* Background notebook paper lines and grain */}
      <div
        className="page-lines absolute inset-0 pointer-events-none"
        style={{ "--line": "rgba(241,235,221,0.12)", "--margin": "rgba(230,217,159,0.25)" }}
      />
      <div className="grain absolute inset-0 pointer-events-none" />

      {/* Main Horizontal Track */}
      <div className="relative z-10 flex-1 flex items-center min-h-0 w-full overflow-visible">
        <div
          ref={track}
          className={`flex items-center gap-8 sm:gap-12 lg:gap-16 pl-6 sm:pl-14 lg:pl-20 pr-16 sm:pr-28 will-change-transform h-full ${
            isMobile ? "overflow-x-auto snap-x snap-mandatory py-6 w-full" : ""
          }`}
          style={isMobile ? { scrollbarWidth: "none" } : undefined}
        >
          {/* 1. Left Hero Intro Column — glides horizontally with the entire track */}
          <div className="shrink-0 w-[85vw] sm:w-[380px] lg:w-[440px] flex flex-col justify-center select-none pr-4 sm:pr-8">
            {/* Peeking character doodle matching reference */}
            <div className="mb-2 relative w-20 h-14 sm:w-24 sm:h-16">
              <div className="w-16 sm:w-20 h-11 sm:h-14 bg-[#383556] rounded-t-full relative flex items-end justify-center pb-2 border-2 border-[#e6d99f]/60 shadow-md">
                <div className="flex gap-2.5">
                  <div className="w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#383556] rounded-full" />
                  </div>
                  <div className="w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#383556] rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Giant Title matching reference */}
            <h2
              className="font-display text-white leading-[0.88] tracking-tight uppercase"
              style={{ fontSize: "clamp(3.4rem, 7.5vw, 6.8rem)" }}
              data-testid="scrapbook-title"
            >
              SELECTED
              <br />
              WORK
            </h2>

            {/* Subtitle / paragraph below */}
            <p className="font-body text-xs sm:text-sm text-[#f1ebdd]/90 mt-5 leading-relaxed max-w-sm">
              A few things I&rsquo;ve designed, shaped and shipped, from complex products to brands and prototypes built from scratch.
            </p>
            <p className="font-body text-[11px] sm:text-xs text-[#e6d99f] mt-3 leading-relaxed max-w-sm">
              Scroll down to glide horizontally through each project &rarr;
            </p>
          </div>

          {/* 2. Project Cards */}
          {PROJECTS.map((p) => {
            const cardContent = (
              <div className="flex flex-col justify-between h-full">
                {/* Top Label Row: Title and Tag */}
                <div className="flex items-baseline justify-between gap-3 px-1 pt-1 mb-2">
                  <span className="font-condensed font-semibold text-xs sm:text-sm tracking-[0.18em] text-[#f1ebdd] truncate">
                    {p.title}
                  </span>
                  <span className="font-condensed text-[10px] sm:text-[11px] tracking-[0.2em] text-[#e6d99f] opacity-90 uppercase whitespace-nowrap">
                    {p.tag}
                  </span>
                </div>

                {/* Main Visual Canvas Container matching reference */}
                <div className="flex-1 my-1.5 rounded-2xl overflow-hidden border border-black/15 shadow-[0_16px_40px_rgba(20,18,30,0.45)] relative min-h-[220px] sm:min-h-[260px]">
                  {p.mockup}
                </div>

                {/* Bottom Details Row */}
                <div className="px-1 pt-2.5">
                  <h3
                    className="font-creative text-white text-lg sm:text-xl lg:text-[1.35rem] leading-snug tracking-normal"
                    style={{ fontWeight: 700 }}
                  >
                    {p.headline}
                  </h3>
                  <p className="font-body text-xs sm:text-[13px] text-[#f1ebdd]/80 leading-relaxed mt-1">
                    {p.desc}
                  </p>
                  {p.href && (
                    <div className="font-condensed text-[10px] tracking-[0.24em] text-[#e6d99f] group-hover:text-white transition-colors mt-2 inline-flex items-center gap-1.5 underline underline-offset-4">
                      EXPLORE PROJECT &rarr;
                    </div>
                  )}
                </div>
              </div>
            );

            const cardClasses = `sb-card relative shrink-0 w-[82vw] sm:w-[460px] lg:w-[520px] h-[480px] sm:h-[530px] lg:h-[560px] flex flex-col justify-between p-3.5 sm:p-5 rounded-3xl bg-[#3e4f2e]/60 border border-white/10 shadow-[0_20px_50px_rgba(15,20,10,0.35)] backdrop-blur-sm transition-all duration-300 ${
              isMobile ? "snap-center" : "hover:-translate-y-1.5 hover:shadow-[0_28px_65px_rgba(15,20,10,0.5)]"
            }`;

            return p.href ? (
              <a
                key={p.n}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                data-testid={`project-card-${p.n}`}
                className={`${cardClasses} group block`}
              >
                {cardContent}
              </a>
            ) : (
              <article
                key={p.n}
                data-testid={`project-card-${p.n}`}
                className={cardClasses}
              >
                {cardContent}
              </article>
            );
          })}

          {/* 3. Concluding Bookmark Card */}
          <div
            className={`shrink-0 w-[260px] sm:w-[300px] h-[480px] sm:h-[530px] lg:h-[560px] border-2 border-dashed border-[#e6d99f]/45 rounded-3xl p-6 flex flex-col items-center justify-center text-center gap-3 text-[#e6d99f] bg-[#3e4f2e]/30 ${
              isMobile ? "snap-center" : ""
            }`}
          >
            <Notebook className="w-12 h-12 text-[#e6d99f]" />
            <div className="font-hand text-2xl text-[#f1ebdd] -rotate-1">
              more pages being written&hellip;
            </div>
            <p className="font-body text-xs text-[#f1ebdd]/75 max-w-[220px]">
              Explore new prototypes, teardowns and experiments coming soon.
            </p>
            <div className="font-condensed text-[10px] tracking-[0.28em] text-[#e6d99f] mt-3 border border-dashed border-[#e6d99f]/60 px-3.5 py-1.5 rounded-full">
              KEEP SCROLLING FOR CONTACT &darr;
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Timeline Ruler matching reference */}
      <div className="relative z-20 shrink-0 px-6 sm:px-12 pb-3 pt-2 hidden md:flex items-center justify-between text-white/70 border-t border-white/10">
        <div className="flex items-center gap-3 text-[10px] font-condensed tracking-[0.25em]">
          <span>HELLO</span>
          <span className="opacity-40">|||||</span>
          <span>NOTICING</span>
          <span className="opacity-40">|||||</span>
          <span>DOING</span>
          <span className="opacity-40">|||||</span>
          <span className="text-[#e6d99f] font-semibold underline underline-offset-4">WORK</span>
          <span className="opacity-40">|||||</span>
          <span>HELLO</span>
        </div>
        <div className="font-condensed text-[10px] tracking-[0.3em] text-[#e6d99f] flex items-center gap-2">
          <span>6 EXHIBITS</span>
          <span className="opacity-40">·</span>
          <span>DHWANI SAGAR</span>
        </div>
      </div>
    </section>
  );
}
