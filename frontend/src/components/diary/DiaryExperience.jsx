import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import TimelineSquiggle from "./TimelineSquiggle";
import ProjectCaseStudyModal from "./ProjectCaseStudyModal";
import HeroSketch from "./HeroSketch";
import { PROJECTS_DATA } from "./projectsData";
import {
  PaperPlane,
  Star,
  Sparkle,
  Heart,
  Lightbulb,
  CoffeeCup,
  LoopArrow,
  Notebook,
  LostCtrl,
  Error404Dino,
  DoodleLaptop,
  DoodleHeadphones,
  DoodleOpenBook,
  DoodleCalendar,
  DoodleGlobe,
  DoodleAlarmClock,
  DoodleCalculator,
  DoodleGameboy,
  DoodleGradCap,
  DoodleBackpack,
  DoodlePencil,
} from "./doodles";

// Interactive Error 404 Dino Component
// Idle: Pixel Chrome Dino with subtle "click me!" hint
// On Click: Runs across the screen with animated legs & cute hops!
function InteractiveDino({ className = "", textColor = "text-[#3a382f]" }) {
  const [running, setRunning] = useState(false);
  const [xPos, setXPos] = useState(0);
  const [leg, setLeg] = useState(0);
  const [jump, setJump] = useState(0);

  useEffect(() => {
    if (!running) return;
    const legInterval = setInterval(() => {
      setLeg((l) => (l === 0 ? 1 : 0));
    }, 85);

    let start = null;
    const duration = 2800; // 2.8s sprint across the screen
    let rafId;

    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const maxDist = window.innerWidth - 80;
      setXPos(progress * maxDist);

      // Two hops over imaginary obstacles at 25%-45% and 65%-85%
      if ((progress > 0.25 && progress < 0.45) || (progress > 0.65 && progress < 0.85)) {
        const subP = progress < 0.5 ? (progress - 0.25) / 0.2 : (progress - 0.65) / 0.2;
        setJump(-Math.sin(subP * Math.PI) * 26);
      } else {
        setJump(0);
      }

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          setRunning(false);
          setXPos(0);
          setJump(0);
          setLeg(0);
        }, 300);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => {
      clearInterval(legInterval);
      cancelAnimationFrame(rafId);
    };
  }, [running]);

  return (
    <div
      className={`cursor-pointer group select-none transition-transform ${className}`}
      onClick={(e) => {
        e.stopPropagation();
        if (!running) setRunning(true);
      }}
      title="Click me to run!"
      style={{
        transform: running ? `translate(${xPos}px, ${jump}px)` : undefined,
        zIndex: running ? 100 : undefined,
      }}
    >
      <div className={`${textColor} group-hover:scale-105 transition-transform`}>
        <Error404Dino leg={running ? leg : 0} />
      </div>
      {!running && (
        <span className="font-hand text-[10px] sm:text-[11px] text-[#814c57] opacity-0 group-hover:opacity-100 transition-opacity block text-center -rotate-2 mt-0.5 pointer-events-none">
          click me!
        </span>
      )}
    </div>
  );
}

// Mixer Typography helper:
// Enforces exactly TWO sizes for all bold characters:
// Size 1 (100% / 1em) for uppercase letters, Size 2 (~0.74em) for lowercase letters.
// Keeps bold weight identical throughout, aligning strictly to the baseline.
function MixText({ text, smallScale = "0.74em" }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap">
          {Array.from(word).map((char, cIdx) => {
            const isLetter = /[a-zA-Z]/.test(char);
            const isSmall = isLetter && char === char.toLowerCase();
            return isSmall ? (
              <span
                key={cIdx}
                className="inline-block align-baseline"
                style={{ fontSize: smallScale }}
              >
                {char.toUpperCase()}
              </span>
            ) : (
              <span key={cIdx} className="inline-block">
                {char}
              </span>
            );
          })}
          {wIdx < words.length - 1 ? "\u00A0" : null}
        </span>
      ))}
    </>
  );
}

const CHAPTER_KEYS = [
  { id: "hero", label: "HELLO", progress: 0 },
  { id: "intro", label: "NOTICING", progress: 0.20 },
  { id: "work-chapter", label: "WORK", progress: 0.44 },
  { id: "work", label: "PROJECTS", progress: 0.67 },
  { id: "contact", label: "CONTACT", progress: 0.90 },
];

const PROJECTS = PROJECTS_DATA;

const WORK_EXPERIENCES = [
  {
    id: "fyers",
    company: "FYERS",
    badge: "FINTECH · APPRENTICE",
    role: "APPRENTICE · JUL 2025 – DEC 2025",
    location: "BENGALURU, INDIA · ON-SITE · 6 MOS",
    tape: "✦ ✦ ✦ ✦ ✦",
    bullets: [
      "Collaborated with product, engineering & analytics on onboarding and signup flows.",
      "Supported event tracking validation across GA, CleverTap and AppsFlyer.",
      "Executed API and workflow validations using Postman and cURL before releases.",
    ],
    chapter: "CHAPTER 01",
    theme: "fyers",
  },
  {
    id: "zidio",
    company: "ZIDIO DEVELOPMENT",
    badge: "WEB DEV · REMOTE",
    role: "WEB DEVELOPER · NOV 2023 – DEC 2023",
    location: "BENGALURU, INDIA · REMOTE",
    tape: "● ● ● ● ●",
    bullets: [
      "Built responsive web application interfaces and interactive front-end components.",
      "Translated Figma design specifications into clean, accessible, semantic code.",
      "Optimized cross-browser performance and enhanced user workflow responsiveness.",
    ],
    chapter: "CHAPTER 02",
    theme: "zidio",
  },
  {
    id: "dinesh",
    company: "DINESH IT SYSTEMS",
    badge: "SECURITIES & IT · ON-SITE",
    role: "INTERN · OCT 2023 – NOV 2023",
    location: "KANNUR, INDIA · ON-SITE",
    clip: true,
    bullets: [
      "Assisted senior engineering team with testing core enterprise software modules and securities systems.",
      "Documented functional system requirements, workflows, and edge test cases.",
      "Collaborated on day-to-day IT systems troubleshooting and internal tooling.",
    ],
    chapter: "CHAPTER 03",
    theme: "dinesh",
  },
  {
    id: "salesforce",
    company: "SALESFORCE",
    badge: "CRM · VIRTUAL",
    role: "SALESFORCE ADMINISTRATOR",
    location: "REMOTE · VIRTUAL INTERNSHIP",
    grid: true,
    bullets: [
      "Configured Salesforce standard & custom objects, validation rules, and page layouts.",
      "Designed automated workflow rules, process builders, and user permission sets.",
      "Built custom reports and executive dashboards for pipeline tracking.",
    ],
    chapter: "CHAPTER 04",
    theme: "salesforce",
  },
];

export default function DiaryExperience({ onNav, reduced }) {
  const containerRef = useRef(null);
  const workTrackRef = useRef(null);
  const scrapbookTrackRef = useRef(null);
  const [activeChapter, setActiveChapter] = useState("HELLO");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  // Framer-Style CardStack State for Page 2 (The Work Chapter)
  const [stackCards, setStackCards] = useState(WORK_EXPERIENCES);
  const [droppingId, setDroppingId] = useState(null);
  const [dropCount, setDropCount] = useState(0);
  const [hasCompletedLoop, setHasCompletedLoop] = useState(false);

  // Expanded sticky note modal state & drag tracking
  const [expandedCard, setExpandedCard] = useState(null);
  const expandedCardRef = useRef(null);
  expandedCardRef.current = expandedCard;
  const isDraggingCardRef = useRef(false);

  const isDroppingRef = useRef(false);
  const dropCountRef = useRef(0);
  const hasCompletedLoopRef = useRef(false);
  const lastWheelTimeRef = useRef(0);

  dropCountRef.current = dropCount;
  hasCompletedLoopRef.current = hasCompletedLoop;

  // Keyboard accessibility: ESC key collapses expanded note
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && expandedCardRef.current) {
        setExpandedCard(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Drops front card down, cycles to end, and tracks loop return
  const dropTopCard = () => {
    if (isDroppingRef.current) return;
    isDroppingRef.current = true;
    if (expandedCardRef.current) {
      setExpandedCard(null);
    }

    const top = stackCards[0];
    setDroppingId(top.id);

    setTimeout(() => {
      setStackCards((prev) => [...prev.slice(1), prev[0]]);
      setDroppingId(null);
      setDropCount((c) => {
        const next = c + 1;
        if (next >= 4) {
          setHasCompletedLoop(true);
          hasCompletedLoopRef.current = true;
        }
        return next;
      });
      setTimeout(() => {
        isDroppingRef.current = false;
      }, 120);
    }, 320);
  };

  // Drops a specific card (used when dropping an expanded card or targeted note)
  const dropSpecificCard = (cardId) => {
    if (isDroppingRef.current) return;
    isDroppingRef.current = true;
    if (expandedCardRef.current) {
      setExpandedCard(null);
    }
    setDroppingId(cardId);
    setTimeout(() => {
      setStackCards((prev) => {
        const idx = prev.findIndex((c) => c.id === cardId);
        if (idx === -1) return prev;
        const card = prev[idx];
        const rest = prev.filter((c) => c.id !== cardId);
        return [...rest, card];
      });
      setDroppingId(null);
      setDropCount((c) => {
        const next = c + 1;
        if (next >= 4) {
          setHasCompletedLoop(true);
          hasCompletedLoopRef.current = true;
        }
        return next;
      });
      setTimeout(() => {
        isDroppingRef.current = false;
      }, 120);
    }, 320);
  };

  // Reverses card stack if user scrolls backward
  const cyclePrevCard = () => {
    if (isDroppingRef.current) return;
    isDroppingRef.current = true;
    if (expandedCardRef.current) {
      setExpandedCard(null);
    }
    setStackCards((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
    setDropCount((c) => {
      const next = Math.max(0, c - 1);
      if (next < 4) {
        setHasCompletedLoop(false);
        hasCompletedLoopRef.current = false;
      }
      return next;
    });
    setTimeout(() => {
      isDroppingRef.current = false;
    }, 280);
  };

  // Advances smoothly to Page 3 (Selected Work) after card loop
  const advanceToNextPage = () => {
    if (typeof window === "undefined") return;
    if (onNav) {
      onNav("PROJECTS");
      return;
    }
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const target = maxScroll * 0.67;
    if (window.__lenis) {
      window.__lenis.scrollTo(target, { duration: 1.4 });
    } else {
      window.scrollTo({ top: target, behavior: "smooth" });
    }
  };

  // Wheel and touch listener for sticky Page 2 card dropping
  useEffect(() => {
    if (typeof window === "undefined" || reduced) return;

    let touchStartY = 0;

    const onWheel = (e) => {
      // Check if user is currently viewing Page 2 (The Work Chapter)
      const isWorkSection =
        activeChapter === "WORK" || (scrollProgress >= 0.38 && scrollProgress <= 0.58);
      if (!isWorkSection) return;

      // When note is expanded, let user scroll inside it without dropping cards
      if (expandedCardRef.current) return;

      const now = Date.now();
      if (now - lastWheelTimeRef.current < 420) {
        if (!hasCompletedLoopRef.current) {
          e.preventDefault();
        }
        return;
      }

      // Scrolling down: drop notes one by one
      if (e.deltaY > 18) {
        if (!hasCompletedLoopRef.current) {
          // Page stays STUCK! Sticky notes fall out one by one
          e.preventDefault();
          lastWheelTimeRef.current = now;
          dropTopCard();
        } else {
          // All 4 notes dropped and returned to first note -> animate to next page
          e.preventDefault();
          lastWheelTimeRef.current = now;
          advanceToNextPage();
        }
      } else if (e.deltaY < -18) {
        // Scrolling up: reverse notes or allow scroll back to Page 1
        if (dropCountRef.current > 0) {
          e.preventDefault();
          lastWheelTimeRef.current = now;
          cyclePrevCard();
        }
      }
    };

    const onTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const onTouchEnd = (e) => {
      const isWorkSection =
        activeChapter === "WORK" || (scrollProgress >= 0.38 && scrollProgress <= 0.58);
      if (!isWorkSection) return;

      // When note is expanded, let user read without dropping cards
      if (expandedCardRef.current) return;

      if (!e.changedTouches || !e.changedTouches[0]) return;
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY - touchEndY;
      const now = Date.now();
      if (now - lastWheelTimeRef.current < 420) return;

      if (diffY > 40) {
        lastWheelTimeRef.current = now;
        if (!hasCompletedLoopRef.current) {
          dropTopCard();
        } else {
          advanceToNextPage();
        }
      } else if (diffY < -40) {
        if (dropCountRef.current > 0) {
          lastWheelTimeRef.current = now;
          cyclePrevCard();
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeChapter, scrollProgress, reduced]);

  useEffect(() => {
    if (reduced) return;

    const ctx = gsap.context(() => {
      const headerEl = typeof document !== "undefined" ? document.querySelector(".diary-header") : null;
      const headerTargets = headerEl
        ? [headerEl, ".ruler-item", ".timeline-squiggle-container"]
        : [".ruler-item", ".timeline-squiggle-container"];

      // Set initial colors for landing page (Matcha #BAD797 & Cherry #670626)
      gsap.set(".timeline-squiggle-container", {
        color: "#670626",
        opacity: 1,
      });
      if (headerEl) {
        gsap.set(headerEl, { color: "#670626" });
      }
      gsap.set(".stage-bg", {
        backgroundColor: "#BAD797",
      });
      gsap.set(".page-lines-dark", {
        opacity: 0,
      });
      gsap.set(".hero-overlay", {
        opacity: 1,
      });

      // Initial entrance animation on load for landing page hero heading
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 1.0 },
          0.1
        )
        .fromTo(
          ".hero-divider",
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.9, ease: "power3.inOut" },
          0.3
        )
        .fromTo(
          ".hero-title-main",
          { opacity: 0, y: 70, scale: 0.88 },
          { opacity: 1, y: 0, scale: 1, duration: 1.3, ease: "power4.out" },
          0.3
        )
        .fromTo(
          ".hero-desc",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 1.0 },
          0.6
        )
        .fromTo(
          [".hero-doodle-left", ".hero-doodle-right"],
          { opacity: 0, scale: 0.75, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "back.out(1.4)", stagger: 0.15 },
          0.7
        );

      // MASTER PINNED TIMELINE
      // Drives the entire website inside a single seamless 100vw x 100vh stage
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          onUpdate: (self) => {
            const p = self.progress;
            setScrollProgress(p);
            if (p < 0.15) setActiveChapter("HELLO");
            else if (p < 0.38) setActiveChapter("NOTICING");
            else if (p < 0.58) setActiveChapter("WORK");
            else if (p < 0.85) setActiveChapter("PROJECTS");
            else setActiveChapter("CONTACT");
          },
        },
      });

      // ---------------------------------------------------------------------
      // 1. HERO (Progress 0.0 -> 0.16)
      // Desk sketch -> Zoom deep into the books -> Book opens with diary note
      // ---------------------------------------------------------------------
      // Text dissolves as camera moves
      masterTl
        .to(".hero-overlay", { opacity: 0, y: -30, scale: 0.96, duration: 1.5, ease: "power2.out" }, 0)
        // Zoom deeply into the open diary on her desk (sharp, no heavy blur)
        .to(
          ".hero-scene-stage",
          {
            scale: 5.6,
            transformOrigin: "49.2% 89%",
            duration: 6,
            ease: "power1.inOut",
          },
          0
        )
        // 3D book stage appears seamlessly right over the books (crisp and clear)
        .fromTo(
          ".hero-book-stage",
          { opacity: 0, scale: 0.72, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1.8, ease: "power2.out" },
          4.5
        )
        .to(".hero-scene-stage", { opacity: 0, duration: 0.8 }, 5.2)
        // Book opens: cover rotates outward like French doors
        .to(".hero-cover-left", { rotationY: -158, duration: 1.8, ease: "power2.inOut" }, 5.6)
        .to(".hero-cover-right", { rotationY: 158, duration: 1.8, ease: "power2.inOut" }, 5.6)
        .fromTo(".hero-diary-note", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.4 }, 6.8)
        // Zoom in through the open page into the diary (crisp, no purple overlay)
        .to(".hero-book-stage", { scale: 1.35, opacity: 0, duration: 2.0, ease: "power2.in" }, 8.5)
        .to(".hero-layer", { opacity: 0, pointerEvents: "none", duration: 0.5 }, 10.5);

      // Background morphs to cream paper (#f1ebdd) and thin light notebook lines activate
      masterTl
        .to(".stage-bg", { backgroundColor: "#f1ebdd", duration: 1.8 }, 9.5)
        .to(".page-lines-dark", { opacity: 0, duration: 1.5 }, 9.5)
        .to(".page-lines-light", { opacity: 1, duration: 1.5 }, 9.5)
        .to(headerTargets, { color: "#3a382f", duration: 1.5 }, 9.5);

      // ---------------------------------------------------------------------
      // 2. PAGE INTRO (Progress ~0.16 -> 0.42)
      // Statement 1 ("Hi, I'm Dhwani Sagar") -> Statement 2 ("I NOTICE THINGS")
      // -> Statement 3 ("I ASK WHY") -> Statement 4 ("AND I MAKE THINGS")
      // -> Paragraphs & Chips
      // All big headings slide, drop, zoom & vanish smoothly!
      // ---------------------------------------------------------------------
      // Statement 1: Hi, I'm Dhwani Sagar (product builder and product designer)
      masterTl
        .to(".intro-layer", { pointerEvents: "auto", duration: 0.1 }, 10.8)
        .fromTo(
          ".intro-stmt-1",
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          10.8
        )
        .fromTo(
          ".stmt1-title",
          { opacity: 0, y: -100, scale: 0.75 },
          { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "back.out(1.6)" },
          10.8
        )
        .fromTo(
          ".stmt1-sub",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
          11.2
        )
        .to(".intro-fixed-decor", { opacity: 1, duration: 1.0 }, 10.8)
        .to(
          ".intro-stmt-1",
          { opacity: 0, scale: 1.25, filter: "blur(4px)", duration: 1.2, ease: "power2.in" },
          13.8
        );

      // Statement 2: I NOTICE THINGS (Slides in from opposite sides)
      masterTl
        .fromTo(
          ".intro-stmt-2",
          { opacity: 0 },
          { opacity: 1, duration: 0.4 },
          15.0
        )
        .fromTo(
          ".stmt2-line-1",
          { opacity: 0, x: -220 },
          { opacity: 1, x: 0, duration: 1.4, ease: "power3.out" },
          15.0
        )
        .fromTo(
          ".stmt2-line-2",
          { opacity: 0, x: 220 },
          { opacity: 1, x: 0, duration: 1.4, ease: "power3.out" },
          15.2
        )
        .to(
          ".intro-stmt-2",
          { opacity: 0, scale: 1.25, filter: "blur(4px)", duration: 1.2, ease: "power2.in" },
          18.0
        );

      // Statement 3: I ASK WHY (Drops down from above with scale)
      masterTl
        .fromTo(
          ".intro-stmt-3",
          { opacity: 0 },
          { opacity: 1, duration: 0.4 },
          19.2
        )
        .fromTo(
          ".stmt3-title",
          { opacity: 0, y: -130, scale: 0.65 },
          { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "back.out(1.7)" },
          19.2
        )
        .to(
          ".intro-stmt-3",
          { opacity: 0, scale: 1.25, filter: "blur(4px)", duration: 1.2, ease: "power2.in" },
          22.2
        );

      // Statement 4: AND I MAKE THINGS (Line 1 slides in from left, Line 2 jumps up from bottom)
      masterTl
        .fromTo(
          ".intro-stmt-4",
          { opacity: 0 },
          { opacity: 1, duration: 0.4 },
          23.4
        )
        .fromTo(
          ".stmt4-line-1",
          { opacity: 0, x: -220 },
          { opacity: 1, x: 0, duration: 1.4, ease: "power3.out" },
          23.4
        )
        .fromTo(
          ".stmt4-line-2",
          { opacity: 0, y: 130, scale: 0.72 },
          { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "back.out(1.6)" },
          23.7
        )
        .to(
          ".intro-stmt-4",
          { opacity: 0, scale: 1.25, filter: "blur(4px)", duration: 1.2, ease: "power2.in" },
          26.4
        );

      // Statement 5: Paragraphs & Chips
      masterTl
        .fromTo(
          ".intro-stmt-5",
          { opacity: 0 },
          { opacity: 1, duration: 0.4 },
          27.6
        )
        .fromTo(
          ".stmt5-p1",
          { opacity: 0, x: -80 },
          { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" },
          27.6
        )
        .fromTo(
          ".stmt5-p2",
          { opacity: 0, x: 80 },
          { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" },
          28.0
        )
        .fromTo(
          ".stmt5-chips",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.2, ease: "back.out(1.2)" },
          28.4
        )
        .to(
          ".intro-stmt-5",
          { opacity: 0, scale: 1.22, filter: "blur(4px)", duration: 1.4, ease: "power2.in" },
          32.0
        )
        .to(".intro-fixed-decor", { opacity: 0, duration: 1.0 }, 32.0)
        .to(".intro-layer", { pointerEvents: "none", duration: 0.1 }, 33.4);

      // ---------------------------------------------------------------------
      // 3. PAGE WORK (Progress ~0.42 -> 0.65)
      // Background morphs to muted slate (#383556), lines switch to light cream
      // Big heading on left drops & slides in;
      // 4 Sticky Notes stage zooms sequentially:
      // 1. FYERS -> 2. ZIDIO -> 3. DINESH -> 4. SALESFORCE
      // Then on next scroll, zooms in deeply and dissolves into Selected Work!
      // ---------------------------------------------------------------------
      masterTl
        .to(".stage-bg", { backgroundColor: "#383556", duration: 1.8 }, 32.5)
        .to(".page-lines-light", { opacity: 0, duration: 1.5 }, 32.5)
        .to(".page-lines-dark", { opacity: 1, duration: 1.5 }, 32.5)
        .to(headerTargets, { color: "#ffffff", duration: 1.5 }, 32.5);

      masterTl
        .fromTo(
          ".work-layer",
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, pointerEvents: "auto", duration: 1.2, ease: "power3.out" },
          33.2
        )
        .fromTo(
          ".work-title-1",
          { opacity: 0, x: -120 },
          { opacity: 1, x: 0, duration: 1.0, ease: "power3.out" },
          33.3
        )
        .fromTo(
          ".work-title-2",
          { opacity: 0, x: 120 },
          { opacity: 1, x: 0, duration: 1.0, ease: "power3.out" },
          33.5
        )
        .fromTo(
          ".work-title-3",
          { opacity: 0, y: 50, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "back.out(1.6)" },
          33.7
        )
        .fromTo(
          ".work-card-stack",
          { opacity: 0, y: 50, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" },
          33.4
        );

      // Page 2 (The Work Chapter) stays firmly pinned, stuck, and interactive
      // Framer Motion handles tap & drag and scroll drop physics for the sticky notes
      masterTl
        .to(".work-layer", { opacity: 1, duration: 15.0 }, 33.4)
        .to(".work-layer", { opacity: 0, pointerEvents: "none", duration: 1.2, ease: "power2.in" }, 48.6);

      // ---------------------------------------------------------------------
      // 4. SCRAPBOOK (Selected Work Horizontal Gallery) (Progress ~0.65 -> 0.88)
      // Background morphs to rich deep plum (#562452) with crisp white text
      // Title pops up & slides, horizontal gallery glides from right to left!
      // ---------------------------------------------------------------------
      masterTl
        .to(".stage-bg", { backgroundColor: "#562452", duration: 1.8 }, 49.5)
        .to(".page-lines-light", { opacity: 0, duration: 1.5 }, 49.5)
        .to(".page-lines-dark", { opacity: 1, duration: 1.5 }, 49.5)
        .to(headerTargets, { color: "#ffffff", duration: 1.5 }, 49.5);

      const getScrapbookDistance = () => {
        if (!scrapbookTrackRef.current) return 0;
        return Math.max(scrapbookTrackRef.current.scrollWidth - window.innerWidth, 0);
      };

      masterTl
        .fromTo(
          ".scrapbook-layer",
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, pointerEvents: "auto", duration: 1.6, ease: "power3.out" },
          50.5
        )
        .fromTo(
          ".scrapbook-title-1",
          { opacity: 0, x: -180 },
          { opacity: 1, x: 0, duration: 1.4, ease: "power3.out" },
          50.8
        )
        .fromTo(
          ".scrapbook-title-2",
          { opacity: 0, y: 90, scale: 0.7 },
          { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "back.out(1.6)" },
          51.1
        )
        // The horizontal track glides across
        .to(
          scrapbookTrackRef.current,
          {
            x: () => -getScrapbookDistance(),
            ease: "none",
            duration: 12.0,
          },
          52.5
        )
        // At the very end of the cards: zoom in, vanish, and pop into next color!
        .to(
          ".scrapbook-layer",
          { opacity: 0, scale: 1.2, filter: "blur(5px)", duration: 1.8, ease: "power2.in" },
          64.5
        )
        .to(".scrapbook-layer", { pointerEvents: "none", duration: 0.1 }, 66.3);

      // ---------------------------------------------------------------------
      // 5. PAGE HELLO / CONTACT (Progress ~0.88 -> 0.96)
      // Background morphs to botanical green (#526344)
      // ---------------------------------------------------------------------
      masterTl
        .to(".stage-bg", { backgroundColor: "#526344", duration: 1.8 }, 65.0)
        .to(".page-lines-dark", { opacity: 1, duration: 1.5 }, 65.0)
        .to(".page-lines-light", { opacity: 0, duration: 1.5 }, 65.0)
        .to(headerTargets, { color: "#f1ebdd", duration: 1.5 }, 65.0);

      masterTl
        .fromTo(
          ".hello-layer",
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, pointerEvents: "auto", duration: 1.4, ease: "power3.out" },
          65.5
        )
        .fromTo(
          ".hello-title-1",
          { opacity: 0, x: -180 },
          { opacity: 1, x: 0, duration: 1.3, ease: "power3.out" },
          65.7
        )
        .fromTo(
          ".hello-title-2",
          { opacity: 0, y: -80, scale: 0.7 },
          { opacity: 1, y: 0, scale: 1, duration: 1.3, ease: "back.out(1.6)" },
          65.9
        )
        .fromTo(
          ".hello-title-3",
          { opacity: 0, x: 180, y: 30 },
          { opacity: 1, x: 0, y: 0, duration: 1.3, ease: "power3.out" },
          66.1
        )
        .fromTo(
          ".hello-ctas",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.0, ease: "power2.out" },
          66.3
        )
        // Transition to outro
        .to(".hello-layer", { opacity: 0, scale: 1.06, filter: "blur(4px)", duration: 1.5, ease: "power2.in" }, 71.0)
        .to(".hello-layer", { pointerEvents: "none", duration: 0.1 }, 72.5);

      // ---------------------------------------------------------------------
      // 6. OUTRO: Pastel green desk sketch farewell ("YOU JUST READ DIARY OF DHWANI")
      // Progress ~0.96 -> 1.0
      // ---------------------------------------------------------------------
      masterTl
        .to(".stage-bg", { backgroundColor: "#bbd69b", duration: 1.8 }, 71.5)
        .to(headerTargets, { color: "#1c2416", duration: 1.5 }, 71.5)
        .fromTo(
          ".outro-layer",
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.8, ease: "power2.out", pointerEvents: "auto" },
          72.0
        )
        .fromTo(
          ".outro-room-img",
          { scale: 1.1, opacity: 0.1 },
          { scale: 1.0, opacity: 0.35, duration: 2.2, ease: "power2.out" },
          72.0
        )
        .fromTo(
          ".outro-content",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.6, ease: "back.out(1.4)" },
          72.8
        )
        .to({}, { duration: 3.5 }, 74.5);
    }, containerRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  // Fallback for reduced motion
  if (reduced) {
    return (
      <div className="w-full bg-[#383556] text-[#f1ebdd] py-20 px-6">
        <h1 className="font-display text-4xl mb-4">Dhwani Sagar Portfolio</h1>
        <p className="font-body text-base">Reduced motion mode active.</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: "820vh" }}
      data-testid="diary-experience"
    >
      {/* Pinned Viewport Container (Locks 100vw x 100vh with NO visible page seams) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Dynamic morphing background layer */}
        <div
          className="stage-bg absolute inset-0 transition-colors pointer-events-none"
          style={{ backgroundColor: "#BAD797" }}
        />

        {/* Notebook paper lines and film grain */}
        <div className="page-lines-light absolute inset-0 pointer-events-none z-1 opacity-0 will-change-opacity" />
        <div className="page-lines-dark absolute inset-0 pointer-events-none z-1 opacity-0 will-change-opacity" />
        <div className="grain absolute inset-0 pointer-events-none z-2" />

        {/* ================================================================= */}
        {/* LAYER 0: HERO (Desk Sketch Scene)                                 */}
        {/* ================================================================= */}
        <div className="hero-layer absolute inset-0 z-10 overflow-hidden">
          {/* Hand-Drawn Desk Sketch */}
          <div className="hero-scene-stage absolute inset-0 flex items-end justify-center pb-1 sm:pb-3 overflow-hidden will-change-transform z-5 pointer-events-none">
            <HeroSketch className="max-w-[620px] w-[84vw]" />
          </div>

          {/* Hero text overlay */}
          <div className="hero-overlay absolute inset-0 flex flex-col justify-between pointer-events-none z-20 text-[#670626]">
            <div className="flex-1 flex flex-col items-center justify-start pt-[10vh] sm:pt-[13.5vh] px-4 sm:px-5 text-center">
              <span
                className="hero-sub font-['Plus_Jakarta_Sans',sans-serif] font-light text-[10px] sm:text-xs tracking-[0.35em] sm:tracking-[0.4em] uppercase text-[#670626] will-change-transform"
              >
                INSIDE THE DIARY OF
              </span>
              <div
                className="hero-divider w-14 sm:w-24 h-px my-1.5 sm:my-2.5 bg-[#670626]/35 will-change-transform"
              />
              <h1
                className="hero-title-main font-creative tracking-tight text-[#670626] leading-[0.98] will-change-transform select-none drop-shadow-[0_2px_14px_rgba(103,6,38,0.08)] max-w-full"
                style={{
                  fontFamily: '"Syne", sans-serif',
                  fontWeight: 800,
                  fontSize: "clamp(2.35rem, 6.8vw, 6.8rem)",
                }}
              >
                Dhwani Sagar
              </h1>
              <span
                className="hero-desc font-['Plus_Jakarta_Sans',sans-serif] font-light tracking-[0.28em] sm:tracking-[0.34em] uppercase text-[#670626] mt-1.5 sm:mt-2.5 will-change-transform text-[10px] sm:text-xs"
              >
                BUILDING&ensp;·&ensp;EXPERIENCES
              </span>
            </div>

            {/* Left Doodle: Bla Bla Bla cascade in empty space */}
            <div
              className="hero-doodle-left absolute left-[3%] sm:left-[11%] lg:left-[13.5%] top-[39%] sm:top-[48%] pointer-events-auto select-none transition-transform duration-300 hover:scale-110 cursor-pointer will-change-transform"
              title="bla bla bla"
            >
              <img
                src="/doodle-blabla-cherry.png"
                alt="bla bla bla hand-drawn doodle"
                className="w-[75px] sm:w-[130px] lg:w-[155px] object-contain drop-shadow-[0_4px_14px_rgba(103,6,38,0.08)] animate-doodle-float-1 pointer-events-none"
              />
            </div>

            {/* Right Doodle: LOST Ctrl keyboard key in empty space */}
            <div
              className="hero-doodle-right absolute right-[3%] sm:right-[11%] lg:right-[13.5%] top-[36%] sm:top-[45%] pointer-events-auto select-none transition-transform duration-300 hover:scale-110 cursor-pointer will-change-transform"
              title="lost ctrl"
            >
              <img
                src="/doodle-lostctrl-cherry.png"
                alt="lost ctrl hand-drawn doodle"
                className="w-[65px] sm:w-[110px] lg:w-[125px] object-contain drop-shadow-[0_4px_14px_rgba(103,6,38,0.08)] animate-doodle-float-2 pointer-events-none"
              />
            </div>

            <div className="pb-10 sm:pb-16 px-4 sm:px-12 flex items-end justify-between">
              <div className="flex items-center gap-2.5 sm:gap-3 animate-scroll-float">
                <span className="font-['Oswald',sans-serif] text-[10.5px] sm:text-xs tracking-[0.2em] sm:tracking-[0.22em] uppercase text-[#670626] drop-shadow-[0_2px_8px_rgba(103,6,38,0.1)]">
                  SCROLL TO READ.
                </span>
                <span className="w-px h-6 sm:h-8 bg-[#670626]/60 animate-pulse" />
              </div>

              {/* Decorative Corner Ink Flourish */}
              <div className="hidden sm:flex items-center gap-2 text-[#670626]/70 font-self-written text-base -rotate-3 select-none">
                <span>open to explore</span>
                <Star className="w-5 h-5 text-[#670626]/70 float-slow" />
              </div>
            </div>
          </div>

          {/* 3D Book Stage */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-25"
            style={{ perspective: "1800px" }}
          >
            <div className="hero-book-stage relative w-[min(86vw,880px)] aspect-[16/10] will-change-transform opacity-0">
              <div className="absolute inset-0 rounded-lg bg-[#f1ebdd] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, transparent 0 34px, rgba(58,56,47,0.16) 34px 35px)",
                  }}
                />
                <div className="absolute inset-y-0 left-1/2 w-px bg-black/20" />

                {/* Left Page: Diary owner portrait directly on notebook paper (no extra card/white box, larger) */}
                <div className="absolute left-[2%] sm:left-[3%] top-[3%] sm:top-[4%] bottom-[3%] sm:bottom-[4%] w-[46%] sm:w-[45%] flex items-center justify-center pointer-events-none">
                  <img
                    src="/diary-photo-transparent.png"
                    alt="This journal belongs to Dhwani Sagar"
                    className="w-full h-full object-contain max-h-[440px] drop-shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
                  />
                </div>

                {/* Right Page: Hand-written diary introduction note in self-written font */}
                <div className="absolute right-[4%] sm:right-[6%] top-[12%] sm:top-[16%] bottom-[12%] sm:bottom-[16%] w-[42%] sm:w-[41%] flex flex-col justify-center pl-2 sm:pl-4">
                  <p className="hero-diary-note font-self-written text-[#2c2720] leading-[1.38] text-xl sm:text-2xl lg:text-[2.1rem] select-none -rotate-1">
                    &ldquo;I didn&rsquo;t think you&rsquo;d actually open my diary. And now you&rsquo;re reading it? Well&hellip; since you&rsquo;re already here, I guess I should introduce myself&rdquo;
                  </p>
                  <div className="mt-4 flex items-center justify-between text-[#764d70]/70 font-self-written text-lg sm:text-xl -rotate-1">
                    <span>turn the page &rarr;</span>
                    <div className="text-[#814c57]/50 hidden sm:block -rotate-12">
                      <DoodlePencil className="w-8 h-8" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Left Door / Cover: Left half of "be different" artwork */}
              <div
                className="hero-cover-left absolute inset-y-0 left-0 w-1/2 rounded-l-lg overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)] will-change-transform border-r border-black/40"
                style={{ transformOrigin: "left center", backfaceVisibility: "hidden" }}
              >
                <img
                  src="/be-different.jpg"
                  alt="Be different"
                  className="absolute inset-y-0 left-0 h-full max-w-none object-cover"
                  style={{ width: "200%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/25 pointer-events-none" />
              </div>

              {/* Right Door / Cover: Right half of "be different" artwork */}
              <div
                className="hero-cover-right absolute inset-y-0 right-0 w-1/2 rounded-r-lg overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)] will-change-transform border-l border-black/40"
                style={{ transformOrigin: "right center", backfaceVisibility: "hidden" }}
              >
                <img
                  src="/be-different.jpg"
                  alt="Be different"
                  className="absolute inset-y-0 h-full max-w-none object-cover"
                  style={{ width: "200%", left: "-100%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/25 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* LAYER 1: PAGE INTRO (Sequenced Statements that pop in & zoom out) */}
        {/* ================================================================= */}
        <div className="intro-layer absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
          {/* Fixed corner doodles */}
          <div className="intro-fixed-decor absolute top-20 sm:top-16 right-[6%] text-[#dda987] opacity-0 transition-opacity">
            <div className="font-hand text-sm sm:text-lg -rotate-3 text-[#814c57]">YOU FOUND MY DIARY!</div>
          </div>
          <div className="intro-fixed-decor absolute top-20 sm:top-16 left-6 sm:left-14 opacity-0 transition-opacity">
            <div className="stamp !bg-[#596743] !text-[#f1ebdd]">PAGE 01 — NOTICING</div>
          </div>
          <div className="intro-fixed-decor absolute right-[7%] top-[45%] text-[#dda987] hidden sm:block opacity-0">
            <PaperPlane className="w-12 h-12 float-slow" />
          </div>
          <div className="intro-fixed-decor absolute left-[5%] bottom-[14%] text-[#764d70] hidden sm:block opacity-0">
            <CoffeeCup className="w-10 h-10 float-slow" />
          </div>

          {/* Statement 1: Hi, I'm Dhwani Sagar */}
          <div className="intro-stmt-1 absolute inset-0 flex items-center justify-center px-6 opacity-0 will-change-transform">
            {/* Interactive Error 404 Dino in the left corner */}
            <div className="absolute left-6 sm:left-14 bottom-12 sm:bottom-16 z-30">
              <InteractiveDino textColor="text-[#3a382f]" />
            </div>
            {/* Hand-drawn laptop in top-right margin */}
            <div className="absolute right-8 sm:right-16 top-20 sm:top-24 text-[#596743]/50 hidden sm:block -rotate-6">
              <DoodleLaptop className="w-11 h-11" />
            </div>

            <div className="text-center flex flex-col items-center justify-center max-w-4xl">
              <h2
                className="stmt1-title font-creative text-[#3a382f] tracking-tight drop-shadow-[0_2px_8px_rgba(58,56,47,0.12)] will-change-transform"
                style={{ fontSize: "clamp(2.6rem, 7.5vw, 5.8rem)", fontWeight: 800, lineHeight: 1.05 }}
              >
                Hi, I&rsquo;m Dhwani Sagar
              </h2>
              <p
                className="stmt1-sub font-sub-label text-[#596743] mt-3 sm:mt-4 font-light tracking-[0.25em] will-change-transform"
                style={{ fontSize: "clamp(0.75rem, 1.25vw, 1rem)", textTransform: "uppercase" }}
              >
                product builder and product designer
              </p>
            </div>
          </div>

          {/* Statement 2: I NOTICE THINGS */}
          <div className="intro-stmt-2 absolute inset-0 flex items-center justify-center px-6 opacity-0 will-change-transform">
            <div className="absolute right-8 sm:right-16 bottom-14 sm:bottom-18 text-[#814c57]/60 hidden sm:block -rotate-6">
              <LostCtrl className="w-12 h-12" />
            </div>
            <div
              className="font-display text-center leading-[0.84] text-[#3a382f]"
              style={{ fontSize: "clamp(3.5rem, 16vw, 11rem)" }}
            >
              <span className="stmt2-line-1 block will-change-transform">I NOTICE</span>
              <span className="stmt2-line-2 block will-change-transform">THINGS.</span>
            </div>
          </div>

          {/* Statement 3: I ASK WHY */}
          <div className="intro-stmt-3 absolute inset-0 flex items-center justify-center px-6 opacity-0 will-change-transform">
            <div className="absolute right-10 sm:right-20 top-24 sm:top-28 text-[#5c5b85]/55 hidden sm:block rotate-12">
              <DoodleHeadphones className="w-11 h-11" />
            </div>
            <div
              className="stmt3-title font-display text-center leading-[0.84] text-[#814c57] will-change-transform"
              style={{ fontSize: "clamp(3.5rem, 16vw, 11rem)" }}
            >
              <span className="block">I ASK WHY.</span>
            </div>
          </div>

          {/* Statement 4: AND I MAKE THINGS */}
          <div className="intro-stmt-4 absolute inset-0 flex items-center justify-center px-6 opacity-0 will-change-transform">
            <div className="absolute left-8 sm:left-16 bottom-14 sm:bottom-18 text-[#596743]/55 hidden sm:block rotate-6">
              <DoodleGameboy className="w-11 h-11" />
            </div>
            <div
              className="font-display text-center leading-[0.84] text-[#3a382f]"
              style={{ fontSize: "clamp(3.5rem, 16vw, 11rem)" }}
            >
              <span className="stmt4-line-1 block will-change-transform">AND I MAKE</span>
              <span className="stmt4-line-2 block will-change-transform">THINGS.</span>
            </div>
          </div>

          {/* Statement 5: Paragraphs & Chips */}
          <div className="intro-stmt-5 absolute inset-0 flex items-center justify-center px-6 opacity-0 will-change-transform">
            <div className="absolute left-8 sm:left-16 top-20 sm:top-24 text-[#814c57]/50 hidden sm:block -rotate-6">
              <DoodleOpenBook className="w-11 h-11" />
            </div>
            <div className="absolute right-8 sm:right-16 top-20 sm:top-24 text-[#596743]/50 hidden sm:block rotate-6">
              <DoodleCalendar className="w-11 h-11" />
            </div>
            <div className="text-center max-w-3xl space-y-6">
              <p
                className="stmt5-p1 font-body text-[#3a382f]/85 leading-[1.35] will-change-transform"
                style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.7rem)" }}
              >
                I collect ideas the way some people collect stickers — screenshot folders, notebook margins, voice notes at 2am.
              </p>
              <p
                className="stmt5-p2 font-body text-[#3a382f]/85 leading-[1.35] will-change-transform"
                style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.7rem)" }}
              >
                I connect dots across products, people and stories, and turn random thoughts into things you can actually use.
              </p>
              <div className="stmt5-chips flex flex-wrap justify-center gap-2.5 sm:gap-3 text-[#46696c] pt-2 will-change-transform">
                {["CS GRADUATE", "FINTECH EXPERIENCE", "PRODUCT ENTHUSIAST", "INDEPENDENT BUILDER", "STILL LEARNING, STILL EXPERIMENTING"].map((c) => (
                  <span key={c} className="chip">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* LAYER 2: PAGE WORK (Framer-style CardStack Experience)            */}
        {/* ================================================================= */}
        <div
          className={`work-layer absolute inset-0 flex items-center justify-center opacity-0 will-change-transform text-[#f1ebdd] overflow-hidden ${
            activeChapter === "WORK" ? "z-50 pointer-events-auto" : "z-30 pointer-events-none"
          }`}
          style={{
            pointerEvents: activeChapter === "WORK" ? "auto" : "none",
          }}
          onClick={(e) => {
            if (expandedCardRef.current) {
              setExpandedCard(null);
            }
          }}
        >
          <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 pt-14 sm:pt-18 lg:pt-0 pb-6 sm:pb-10">
            {/* Left Column: Heading, intro, and resume */}
            <div className="work-intro-col w-full lg:w-[38%] shrink-0 flex flex-col justify-center select-none pr-0 lg:pr-6 z-20">
              <div className="stamp !bg-[#e6d99f] !text-[#383556] text-[9.5px] sm:text-[10px] w-fit">
                PAGE 02 — THE WORK CHAPTER
              </div>

              <h2
                className="mt-2.5 sm:mt-4 leading-[1.02] text-white font-cesty"
                style={{ fontSize: "clamp(2.2rem, 5.0vw, 4.2rem)" }}
              >
                <span className="work-title-1 font-cesty block will-change-transform text-white">
                  Well,
                </span>
                <span className="work-title-2 font-cesty block will-change-transform text-white">
                  I&rsquo;ve Been
                </span>
                <span className="work-title-3 font-cesty block text-[#e6d99f] will-change-transform">
                  Busy.
                </span>
              </h2>

              <p className="font-cesty-sub text-[11px] sm:text-[13px] tracking-[0.14em] sm:tracking-[0.16em] uppercase text-white/90 mt-2.5 sm:mt-4 leading-relaxed max-w-sm font-semibold">
                A few teams, interesting problems, lessons learned, and things I&rsquo;ve helped bring to life.
              </p>

              <div className="mt-4 sm:mt-5 flex flex-col gap-1.5 sm:gap-2">
                <a
                  href="/dhwani-sagar-resume.pdf"
                  download="Dhwani-Sagar-Resume.pdf"
                  className="font-cesty-sub text-[10.5px] sm:text-xs tracking-[0.18em] sm:tracking-[0.2em] text-[#e6d99f] hover:text-white underline underline-offset-4 transition-colors cursor-pointer w-fit font-semibold uppercase"
                >
                  TAKE MY RÉSUMÉ WITH YOU &darr;
                </a>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (hasCompletedLoop) {
                      advanceToNextPage();
                    } else {
                      dropTopCard();
                    }
                  }}
                  className="font-cesty-sub text-[11px] sm:text-xs tracking-[0.18em] sm:tracking-[0.2em] uppercase text-[#e6d99f] hover:text-white mt-0.5 sm:mt-1 font-semibold flex items-center gap-1.5 cursor-pointer transition-colors text-left"
                >
                  {hasCompletedLoop ? "ALL 4 NOTES READ · ENTER SELECTED WORK →" : "PULL DOWN / SCROLL TO DROP ↓"}
                </button>
              </div>

              <div className="mt-4 sm:mt-6 flex items-center gap-4">
                <InteractiveDino textColor="text-[#e6d99f]/85" />
                <div className="text-[#e6d99f]/45 hidden sm:block -rotate-6">
                  <DoodleBackpack className="w-9 h-9" />
                </div>
              </div>
            </div>

            {/* Right Stage: Framer CardStack of 4 Sticky Notes */}
            <div className="relative w-full lg:w-[62%] h-[54vh] sm:h-[64vh] lg:h-[76vh] flex items-center justify-center">
              <div className="absolute -top-4 right-8 text-[#e6d99f]/35 hidden sm:block rotate-6 pointer-events-none">
                <DoodleCalculator className="w-10 h-10" />
              </div>

              {/* CardStack Container: Pinned 3D stack with peek-above offsets */}
              <div
                className="work-card-stack relative w-[88vw] max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] h-[390px] sm:h-[440px] lg:h-[480px] select-none"
                style={{ perspective: "1200px" }}
              >
                {stackCards.map((card, i) => {
                  const isFront = i === 0;
                  const isDropping = card.id === droppingId;
                  const brightness = Math.max(0.72, 1 - i * 0.08);
                  const baseZ = isDropping ? 25 : stackCards.length - i;
                  const yOffset = i * -24;

                  return (
                    <motion.div
                      key={card.id}
                      className="absolute inset-0 w-full h-full bg-[#e6d99f] text-[#2c2720] rounded-lg p-4 sm:p-5 lg:p-6 shadow-[0_22px_55px_rgba(0,0,0,0.5)] flex flex-col justify-between select-none will-change-transform border-b-4 border-dashed border-[#c4b77e] transition-shadow duration-200 hover:shadow-[0_26px_65px_rgba(0,0,0,0.65)]"
                      style={{
                        zIndex: baseZ,
                        cursor: isFront ? "grab" : "pointer",
                        touchAction: isFront ? "none" : "auto",
                        ...(card.grid
                          ? {
                              backgroundImage:
                                "linear-gradient(to right, rgba(44,39,32,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(44,39,32,0.07) 1px, transparent 1px)",
                              backgroundSize: "14px 14px",
                            }
                          : {}),
                      }}
                      initial={false}
                      animate={
                        isDropping
                          ? {
                              y: 640,
                              rotate: 8,
                              opacity: 0,
                              scale: 0.95,
                              filter: "brightness(0.9)",
                              zIndex: 30,
                            }
                          : {
                              y: yOffset,
                              rotate: card.id === "zidio" ? 1 : card.id === "dinesh" ? -1 : 0,
                              scale: 1 - i * 0.055,
                              filter: `brightness(${brightness})`,
                              opacity: 1,
                              zIndex: baseZ,
                            }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 190,
                        damping: 24,
                      }}
                      drag={isFront ? "y" : false}
                      dragConstraints={{ top: 0, bottom: 0 }}
                      dragElastic={0.65}
                      dragMomentum={false}
                      whileDrag={
                        isFront
                          ? {
                              cursor: "grabbing",
                              scale: 1.03,
                              rotate: 2.5,
                              zIndex: 35,
                            }
                          : {}
                      }
                      onDragStart={() => {
                        isDraggingCardRef.current = true;
                      }}
                      onDragEnd={(e, info) => {
                        setTimeout(() => {
                          isDraggingCardRef.current = false;
                        }, 80);
                        if (info.offset.y > 45 || info.velocity.y > 180) {
                          dropTopCard();
                        }
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isDraggingCardRef.current) return;
                        if (!isDropping) {
                          setExpandedCard(card);
                        }
                      }}
                    >
                      {/* Card Background / Tape Decorations */}
                      {card.tape && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#4a3e2a]/85 rounded-xs shadow-sm flex items-center justify-center text-[10px] text-[#e6d99f]/80 tracking-widest font-mono pointer-events-none">
                          {card.tape}
                        </div>
                      )}

                      {card.clip && (
                        <div className="absolute -top-3.5 left-6 w-5 h-11 border-2 border-[#2c2720]/80 rounded-full shadow-sm bg-transparent pointer-events-none" />
                      )}

                      {card.grid && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-5 h-11 border-2 border-[#2c2720]/80 rounded-full shadow-sm bg-transparent pointer-events-none" />
                      )}

                      {/* Hole punches on left for notebook aesthetic */}
                      {(card.id === "fyers" || card.id === "zidio") && (
                        <div className="absolute left-2 top-8 bottom-8 flex flex-col justify-between pointer-events-none">
                          {[1, 2, 3, 4, 5].map((h) => (
                            <span key={h} className="w-2.5 h-2.5 rounded-full bg-[#383556]/50 shadow-inner block" />
                          ))}
                        </div>
                      )}

                      <div className={`pt-1 ${card.id === "fyers" || card.id === "zidio" ? "pl-4" : ""}`}>
                        <div className="flex items-baseline justify-between gap-1 border-b border-[#2c2720]/15 pb-2">
                          <div className="font-condensed font-bold tracking-[0.16em] text-lg sm:text-2xl text-[#2c2720]">
                            {card.company}
                          </div>
                          <span className="font-condensed text-[8.5px] sm:text-[10px] tracking-[0.18em] bg-[#2c2720]/10 px-2 py-0.5 rounded text-[#2c2720] font-semibold whitespace-nowrap">
                            {card.badge}
                          </span>
                        </div>

                        <div className="font-condensed text-[10.5px] sm:text-xs tracking-[0.16em] text-[#554b35] mt-1.5 sm:mt-2 font-semibold">
                          {card.role}
                        </div>
                        <div className="font-condensed text-[9px] sm:text-[10.5px] tracking-[0.15em] text-[#554b35]/80 mt-0.5">
                          {card.location}
                        </div>

                        <ul className="mt-2.5 sm:mt-4 space-y-2 sm:space-y-2.5 font-body text-[11px] sm:text-xs lg:text-[13px] leading-relaxed font-normal text-[#2c2720]/85">
                          {card.bullets.map((b, idx) => (
                            <li key={idx} className="flex gap-2">
                              <span className="text-[#6e6347] font-bold">&bull;</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={`pt-2 border-t border-[#2c2720]/10 text-[9.5px] font-condensed tracking-[0.2em] text-[#554b35] flex items-center justify-between ${card.id === "fyers" || card.id === "zidio" ? "pl-4" : ""}`}>
                        <span>{card.chapter}</span>
                        <span className="flex items-center gap-1 font-semibold">
                          <span className="hover:underline">TAP TO EXPAND ↗</span>
                          {isFront && <span>· DRAG DOWN ↓</span>}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* LAYER 3: SCRAPBOOK (Selected Work Horizontal Gallery) */}
        {/* ================================================================= */}
        <div
          className={`scrapbook-layer absolute inset-0 flex items-center justify-start opacity-0 will-change-transform text-white overflow-hidden ${
            activeChapter === "PROJECTS"
              ? "z-50 pointer-events-auto visible"
              : "z-20 pointer-events-none invisible"
          }`}
          style={{
            pointerEvents: activeChapter === "PROJECTS" ? "auto" : "none",
            visibility: activeChapter === "PROJECTS" ? "visible" : "hidden",
            zIndex: activeChapter === "PROJECTS" ? 50 : 20,
          }}
        >
          <div
            ref={scrapbookTrackRef}
            className={`flex items-center gap-8 sm:gap-12 lg:gap-16 pl-8 sm:pl-16 lg:pl-20 pr-16 sm:pr-28 will-change-transform h-full py-12 ${
              activeChapter === "PROJECTS" ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            {/* Left Hero Title Column */}
            <div className="shrink-0 w-[85vw] sm:w-[380px] lg:w-[440px] flex flex-col justify-center select-none pr-4 sm:pr-8">
              <div className="stamp !bg-white/20 !text-white text-[10px] w-fit mb-3">
                PAGE 03 — SELECTED WORK
              </div>

              <h2
                className="font-cesty text-white leading-[1.02] tracking-normal"
                style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.2rem)" }}
              >
                <span className="scrapbook-title-1 font-cesty block will-change-transform">
                  Selected
                </span>
                <span className="scrapbook-title-2 font-cesty block will-change-transform">
                  Work
                </span>
              </h2>

              <p className="font-cesty-sub text-xs sm:text-[13px] text-white/95 mt-5 leading-relaxed max-w-sm tracking-[0.16em] uppercase font-semibold">
                A few things I&rsquo;ve designed, shaped and shipped, from complex products to brands and prototypes built from scratch.
              </p>
              <p className="font-cesty-sub text-[11px] sm:text-xs text-white/85 mt-3 leading-relaxed max-w-sm tracking-[0.18em] uppercase font-semibold">
                Scroll to glide through each project &rarr;
              </p>

              <div className="mt-6 flex items-center gap-4 pointer-events-auto">
                <InteractiveDino textColor="text-white/85" />
                <div className="text-white/50 hidden sm:block -rotate-6">
                  <DoodleLaptop className="w-10 h-10" />
                </div>
              </div>
            </div>

            {/* Project Cards (Clickable to open clean case study modal) */}
            {PROJECTS.map((p) => (
              <div
                key={p.n}
                id={`project-card-${p.n}`}
                data-testid={`project-card-${p.n}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (activeChapter !== "PROJECTS") return;
                  setActiveProjectModal(p);
                }}
                className="relative shrink-0 w-[82vw] sm:w-[460px] lg:w-[520px] h-[480px] sm:h-[530px] lg:h-[550px] flex flex-col justify-between p-4 sm:p-5 rounded-3xl bg-[#3f163b]/90 border border-white/20 hover:border-white/45 shadow-[0_20px_50px_rgba(20,0,0,0.45)] backdrop-blur-sm cursor-pointer transition-all duration-300 hover:-translate-y-1 group pointer-events-auto select-none"
              >
                <div className="flex items-baseline justify-between gap-3 px-1 mb-2 pointer-events-none">
                  <span className="font-condensed font-semibold text-xs sm:text-sm tracking-[0.18em] text-white flex items-center gap-2">
                    <span className="text-[#e6d99f]">PROJECT {p.n}</span>
                    <span className="text-white/40">·</span>
                    <span className="uppercase">{p.title}</span>
                  </span>
                  <span className="font-condensed text-[10px] tracking-[0.2em] text-[#e6d99f] uppercase bg-white/10 px-2 py-0.5 rounded-full">
                    {p.tag}
                  </span>
                </div>

                <div className="flex-1 my-1 rounded-2xl overflow-hidden border border-black/15 shadow-inner relative min-h-[220px] pointer-events-none select-none">
                  {p.mockup}
                </div>

                <div className="px-1 pt-2.5 pointer-events-none">
                  <h3 className="font-creative text-white text-lg sm:text-xl font-bold leading-snug group-hover:text-[#e6d99f] transition-colors">
                    {p.headline}
                  </h3>
                  <p className="font-body text-xs sm:text-[13px] text-white/90 leading-relaxed mt-1">
                    {p.desc}
                  </p>
                  <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-white/10 pointer-events-auto">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (activeChapter !== "PROJECTS") return;
                        setActiveProjectModal(p);
                      }}
                      className="font-condensed text-[11px] tracking-[0.22em] text-[#e6d99f] group-hover:text-white transition-colors inline-flex items-center gap-1.5 uppercase font-bold cursor-pointer"
                    >
                      <span>{p.isPortfolioCollection ? "EXPLORE WEBSITES" : "READ CASE STUDY"}</span>
                      <span>&rarr;</span>
                    </button>
                    <span className="font-condensed text-[10px] tracking-[0.2em] text-white/50 uppercase pointer-events-none">
                      TAP TO EXPAND
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Bookmark End Card */}
            <div className="shrink-0 w-[260px] sm:w-[300px] h-[480px] sm:h-[530px] lg:h-[550px] border-2 border-dashed border-white/45 rounded-3xl p-6 flex flex-col items-center justify-center text-center gap-3 text-white bg-[#3f163b]/45">
              <Notebook className="w-12 h-12 text-white" />
              <div className="font-hand text-2xl text-white -rotate-1">
                more pages being written&hellip;
              </div>
              <p className="font-body text-xs text-white/85 max-w-[220px]">
                Explore new prototypes, teardowns and experiments coming soon.
              </p>
              <div className="text-white/50 my-1 rotate-12">
                <DoodleGlobe className="w-10 h-10" />
              </div>
              <div className="font-condensed text-[10px] tracking-[0.28em] text-white border border-dashed border-white/60 px-3.5 py-1.5 rounded-full">
                KEEP SCROLLING FOR CONTACT &darr;
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* LAYER 4: PAGE HELLO (The Contact Finale) */}
        {/* ================================================================= */}
        <div className="hello-layer absolute inset-0 z-50 flex items-center justify-center opacity-0 pointer-events-none will-change-transform text-[#f1ebdd] pb-14 sm:pb-16">
          <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-14 text-center">
            <div className="stamp !bg-[#e6d99f] !text-[#383556] text-[10px]">PAGE 04 — SAY HELLO</div>

            <h2 className="mt-5 leading-[1.02] font-cesty" style={{ fontSize: "clamp(2.4rem, 6.2vw, 5.2rem)" }}>
              <span className="hello-title-1 font-cesty block will-change-transform text-white">
                Say Hello,
              </span>
              <span className="hello-title-2 font-cesty block text-[#e6d99f] will-change-transform">
                Let&rsquo;s Build
              </span>
              <span className="hello-title-3 font-cesty block will-change-transform text-white">
                Something Together.
              </span>
            </h2>

            <p className="font-cesty-sub text-xs sm:text-[13px] text-[#f1ebdd]/90 max-w-lg mx-auto mt-4 font-semibold tracking-[0.16em] uppercase leading-relaxed">
              You made it to the back of the diary. If an idea just sparked — a role, a product, a wild what-if — write to me. I always answer.
            </p>

            <div className="hello-ctas mt-6 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-7 will-change-transform">
              <a
                href="mailto:dhwanisagar17@gmail.com"
                className="font-cesty-sub text-sm sm:text-base tracking-[0.16em] lowercase text-[#e6d99f] hover:text-white transition-colors underline underline-offset-4 cursor-pointer font-semibold"
              >
                dhwanisagar17@gmail.com
              </a>
              <div className="flex gap-4 sm:gap-6 flex-wrap justify-center items-center">
                <a
                  href="https://www.linkedin.com/in/dhwanisagar/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-cesty-sub text-xs sm:text-sm tracking-[0.2em] uppercase text-[#f1ebdd] hover:text-white transition-colors cursor-pointer font-semibold"
                >
                  LINKEDIN
                </a>
                <span className="text-[#e6d99f]/40">·</span>
                <a
                  href="https://github.com/Dhwanisagarr"
                  target="_blank"
                  rel="noreferrer"
                  className="font-cesty-sub text-xs sm:text-sm tracking-[0.2em] uppercase text-[#f1ebdd] hover:text-white transition-colors cursor-pointer font-semibold"
                >
                  GITHUB
                </a>
                <span className="text-[#e6d99f]/40">·</span>
                <a
                  href="/dhwani-sagar-resume.pdf"
                  download="Dhwani-Sagar-Resume.pdf"
                  className="font-cesty-sub text-xs sm:text-sm tracking-[0.2em] uppercase text-[#f1ebdd] hover:text-white transition-colors cursor-pointer font-semibold"
                >
                  RÉSUMÉ ↓
                </a>
              </div>
            </div>

            <div className="font-cesty font-semibold text-xl sm:text-2xl text-[#e6d99f] mt-5 tracking-wide">
              Thanks for wandering through my diary &mdash; come back anytime.
            </div>

            <div className="flex items-center justify-center gap-4 mt-3 text-[#e6d99f]">
              <div>
                <InteractiveDino textColor="text-[#e6d99f]/90" />
              </div>
              <div className="hidden sm:block -rotate-12">
                <DoodleAlarmClock className="w-8 h-8 text-[#e6d99f]/60" />
              </div>
              <div className="hidden sm:block rotate-6">
                <LostCtrl className="w-8 h-8 text-[#e6d99f]/60" />
              </div>
              <Heart className="w-4 h-4" />
            </div>

            <div className="font-condensed text-[9px] tracking-[0.3em] text-[#f1ebdd]/60 mt-4">
              © DHWANI SAGAR · WRITTEN, ILLUSTRATED & BUILT BY ME
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* LAYER 5: OUTRO (The Desk Sketch on Pastel Green & Farewell)       */}
        {/* ================================================================= */}
        <div className="outro-layer absolute inset-0 z-50 flex items-center justify-center opacity-0 pointer-events-none will-change-transform bg-[#bbd69b]/95">
          {/* Desk sketch artwork gently echoing the landing page */}
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden pb-4 opacity-30">
            <img
              src="/desk-sketch-isolated.png"
              alt="Dhwani at her desk beside her books"
              className="outro-room-img max-w-[760px] w-[88vw] object-contain will-change-transform"
            />
          </div>

          <div className="outro-content relative z-10 max-w-2xl mx-auto px-6 text-center text-[#1c2416] flex flex-col items-center">
            <span className="font-cesty-sub text-[11px] sm:text-xs tracking-[0.3em] text-[#344426] uppercase">
              THE DIARY CLOSES
            </span>
            <div className="w-16 h-px bg-[#344426]/35 my-4" />

            <h2
              className="font-cesty text-[#1c2416] leading-[1.02] tracking-normal"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.2rem)" }}
            >
              You Just Read
              <br />
              <span className="text-[#814c57]">
                Diary of Dhwani
              </span>
            </h2>

            <p className="font-cesty-sub text-xs sm:text-[13px] text-[#2c3523]/90 mt-5 max-w-lg leading-relaxed tracking-[0.16em] uppercase">
              Thank you for spending time inside my world. Every project, question, and doodle here was made with curiosity and care.
            </p>

            <p className="font-cesty font-semibold text-xl sm:text-2xl text-[#814c57] mt-3.5 tracking-wide">
              Until Next Time &mdash; Stay Curious.
            </p>

            {/* Scroll to top written text cue, styled like 'THE DIARY CLOSES', animating moving up */}
            <div
              onClick={() => onNav(0)}
              className="mt-8 flex flex-col items-center gap-1.5 cursor-pointer group pointer-events-auto select-none animate-float-up"
              data-testid="scroll-to-top"
              title="Click to scroll to top"
            >
              <div className="text-[#344426] group-hover:text-[#1c2416] transition-transform duration-300 group-hover:-translate-y-1">
                <svg
                  className="w-4 h-4 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
              <span className="font-cesty-sub text-[11px] sm:text-xs tracking-[0.3em] text-[#344426] group-hover:text-[#1c2416] uppercase transition-colors">
                SCROLL TO TOP
              </span>
            </div>
          </div>
        </div>

        {/* Global Floating Design Squiggle Timeline from edge to edge */}
        <div
          className="absolute bottom-1 sm:bottom-2 inset-x-0 w-full px-1 sm:px-4 pointer-events-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
          style={{ zIndex: 100 }}
        >
          <TimelineSquiggle
            scrollProgress={scrollProgress}
            activeChapter={activeChapter}
            onNav={onNav}
          />
        </div>

        {/* Expanded Sticky Note / Notepad Modal */}
        <AnimatePresence>
          {expandedCard && (
            <motion.div
              key="expanded-sticky-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-sm cursor-pointer"
              onClick={() => setExpandedCard(null)}
            >
              <motion.div
                key={`expanded-sticky-${expandedCard.id}`}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.65}
                dragMomentum={false}
                onDragEnd={(e, info) => {
                  if (info.offset.y > 55 || info.velocity.y > 180) {
                    dropSpecificCard(expandedCard.id);
                  }
                }}
                initial={{ scale: 0.85, opacity: 0, y: 25 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0, y: 25 }}
                transition={{ type: "spring", stiffness: 280, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-[560px] max-h-[88vh] overflow-y-auto bg-[#e6d99f] text-[#2c2720] rounded-xl p-5 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.7)] flex flex-col justify-between border-b-6 border-dashed border-[#c4b77e] cursor-grab active:cursor-grabbing select-none"
                style={{
                  ...(expandedCard.grid
                    ? {
                        backgroundImage:
                          "linear-gradient(to right, rgba(44,39,32,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(44,39,32,0.07) 1px, transparent 1px)",
                        backgroundSize: "16px 16px",
                      }
                    : {}),
                }}
              >
                {/* Tape / Clip Decor */}
                {expandedCard.tape && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-36 h-7 bg-[#4a3e2a]/90 rounded-xs shadow-sm flex items-center justify-center text-[10.5px] text-[#e6d99f]/90 tracking-widest font-mono pointer-events-none">
                    {expandedCard.tape}
                  </div>
                )}
                {expandedCard.clip && (
                  <div className="absolute -top-4 left-8 w-6 h-12 border-2 border-[#2c2720]/80 rounded-full shadow-sm bg-transparent pointer-events-none" />
                )}
                {expandedCard.grid && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-12 border-2 border-[#2c2720]/80 rounded-full shadow-sm bg-transparent pointer-events-none" />
                )}

                {/* Notebook punch holes on left */}
                {(expandedCard.id === "fyers" || expandedCard.id === "zidio") && (
                  <div className="absolute left-2.5 top-12 bottom-12 flex flex-col justify-between pointer-events-none">
                    {[1, 2, 3, 4, 5, 6].map((h) => (
                      <span key={h} className="w-3 h-3 rounded-full bg-[#383556]/40 shadow-inner block" />
                    ))}
                  </div>
                )}

                <div className={expandedCard.id === "fyers" || expandedCard.id === "zidio" ? "pl-5" : ""}>
                  {/* Top Bar with Chapter & Close Button */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#2c2720]/15">
                    <span className="font-condensed text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[#554b35] font-semibold">
                      {expandedCard.chapter} · WORK NOTE
                    </span>
                    <button
                      type="button"
                      onClick={() => setExpandedCard(null)}
                      className="font-condensed text-[11px] sm:text-xs tracking-[0.16em] uppercase px-3 py-1 rounded-md bg-[#2c2720]/10 hover:bg-[#2c2720]/20 text-[#2c2720] font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>✕</span>
                      <span>CLOSE</span>
                    </button>
                  </div>

                  {/* Company Title */}
                  <div className="mt-3">
                    <h3 className="font-condensed font-bold tracking-[0.14em] text-2xl sm:text-4xl text-[#2c2720]">
                      {expandedCard.company}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="font-condensed text-[9.5px] sm:text-[11px] tracking-[0.18em] bg-[#2c2720]/10 px-2.5 py-0.5 rounded text-[#2c2720] font-semibold uppercase">
                        {expandedCard.badge}
                      </span>
                      <span className="font-condensed text-[11.5px] sm:text-sm tracking-[0.16em] text-[#554b35] font-semibold">
                        {expandedCard.role}
                      </span>
                    </div>
                    <div className="font-condensed text-[10px] sm:text-xs tracking-[0.15em] text-[#554b35]/85 mt-1">
                      {expandedCard.location}
                    </div>
                  </div>

                  {/* Details / Bullets */}
                  <div className="mt-5 pt-3 border-t border-[#2c2720]/10">
                    <div className="font-condensed text-[10.5px] tracking-[0.2em] uppercase text-[#6e6347] font-semibold mb-2">
                      Key Contributions & Learnings
                    </div>
                    <ul className="space-y-3 font-body text-xs sm:text-[14px] leading-relaxed text-[#2c2720]/90">
                      {expandedCard.bullets.map((b, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                          <span className="text-[#6e6347] font-bold text-base leading-none mt-0.5">&bull;</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Footer */}
                <div className={`mt-6 pt-3 border-t border-[#2c2720]/15 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11.5px] font-condensed tracking-[0.18em] text-[#554b35] ${expandedCard.id === "fyers" || expandedCard.id === "zidio" ? "pl-5" : ""}`}>
                  <button
                    type="button"
                    onClick={() => dropSpecificCard(expandedCard.id)}
                    className="hover:text-[#2c2720] underline underline-offset-4 cursor-pointer font-semibold uppercase flex items-center gap-1"
                  >
                    <span>PULL DOWN / CLICK TO DROP NOTE &darr;</span>
                  </button>
                  <span className="text-[#554b35]/70 uppercase">
                    CLICK OUTSIDE OR ESC TO SHRINK
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Case Study Modal Overlay (Clean, dedicated pastel page without URL change) */}
        {activeProjectModal && (
          <ProjectCaseStudyModal
            project={activeProjectModal}
            onClose={() => setActiveProjectModal(null)}
          />
        )}
      </div>
    </div>
  );
}
