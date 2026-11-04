import { useEffect, useRef, useState } from "react";

// The chapters mapped along the timeline (Doing removed as requested)
const CHAPTERS = [
  { id: "hero", label: "HELLO", progress: 0.0, nodeX: 195, nodeY: 50 },
  { id: "intro", label: "NOTICING", progress: 0.20, nodeX: 430, nodeY: 46 },
  { id: "work", label: "WORK", progress: 0.44, nodeX: 690, nodeY: 50 },
  { id: "projects", label: "PROJECTS", progress: 0.67, nodeX: 940, nodeY: 48 },
  { id: "contact", label: "CONTACT", progress: 0.90, nodeX: 1180, nodeY: 48 },
];

export default function TimelineSquiggle({ scrollProgress = 0, activeChapter, onNav }) {
  const pathRef = useRef(null);
  const glowRef = useRef(null);
  const keyframesRef = useRef(null);
  const currentDistRef = useRef(0);
  const targetDistRef = useRef(0);
  const rafRef = useRef(null);
  const [dotPos, setDotPos] = useState({ x: 195, y: 50 });
  const [isReady, setIsReady] = useState(false);

  // SVG Path definition for the Design Squiggle:
  // 1. Messy scribble ball on the far left (0 -> 120)
  // 2. Wave line through HELLO (195) and NOTICING (430)
  // 3. Design loop transition (565)
  // 4. Wave through WORK (690), PROJECTS (940), CONTACT (1180)
  // 5. Inward spiral coil on the far right (1270 -> 1420)
  const pathD = `
    M 20 52
    C 10 32, 35 15, 55 30
    C 75 45, 60 75, 38 72
    C 18 68, 22 35, 48 24
    C 74 14, 95 38, 85 64
    C 75 85, 38 82, 30 55
    C 22 28, 58 18, 80 32
    C 100 45, 88 78, 62 76
    C 38 74, 32 45, 55 35
    C 78 25, 105 48, 100 68
    C 96 82, 70 85, 58 70
    C 45 54, 75 35, 102 42
    C 120 48, 140 54, 195 50
    C 260 46, 340 60, 430 46
    C 485 38, 520 62, 555 58
    C 575 56, 585 30, 565 26
    C 545 22, 535 48, 560 52
    C 585 56, 630 46, 690 50
    C 770 54, 850 42, 940 48
    C 1020 42, 1100 54, 1180 48
    C 1215 46, 1245 42, 1270 38
    C 1310 30, 1345 20, 1375 24
    C 1410 26, 1425 50, 1420 68
    C 1415 84, 1375 92, 1345 88
    C 1315 84, 1295 66, 1300 52
    C 1305 38, 1335 34, 1360 36
    C 1385 38, 1395 54, 1390 66
    C 1385 76, 1365 80, 1350 78
    C 1335 76, 1328 66, 1332 58
    C 1336 50, 1350 48, 1360 52
    C 1368 56, 1366 64, 1358 64
    C 1352 64, 1350 58, 1354 56
  `.replace(/\s+/g, " ").trim();

  // Calibration: measure path and map each chapter to its exact arc length
  useEffect(() => {
    if (!pathRef.current) return;
    const path = pathRef.current;
    const totalLength = path.getTotalLength();

    const samples = [];
    const count = 1500;
    for (let i = 0; i <= count; i++) {
      const s = (i / count) * totalLength;
      const pt = path.getPointAtLength(s);
      samples.push({ s, x: pt.x, y: pt.y });
    }

    const kfs = CHAPTERS.map((ch, idx) => {
      let bestS = 0;
      let bestDist = Infinity;
      const minX = idx === 0 ? 120 : CHAPTERS[idx - 1].nodeX - 40;
      const maxX = idx === CHAPTERS.length - 1 ? 1260 : CHAPTERS[idx + 1].nodeX + 40;
      for (const smp of samples) {
        if (smp.x >= minX && smp.x <= maxX) {
          const d = (smp.x - ch.nodeX) ** 2 + (smp.y - ch.nodeY) ** 2;
          if (d < bestDist) {
            bestDist = d;
            bestS = smp.s;
          }
        }
      }
      return { p: ch.progress, s: bestS, nodeX: ch.nodeX, nodeY: ch.nodeY };
    });

    kfs.push({ p: 1.0, s: totalLength * 0.985 });

    keyframesRef.current = kfs;
    currentDistRef.current = kfs[0].s;
    targetDistRef.current = kfs[0].s;
    setIsReady(true);
  }, []);

  // Update target distance from scroll progress
  useEffect(() => {
    if (!pathRef.current || !keyframesRef.current) return;
    const kfs = keyframesRef.current;

    const clampedP = Math.max(0, Math.min(1, scrollProgress));
    let dist = kfs[0].s;

    if (clampedP <= kfs[0].p) {
      dist = kfs[0].s;
    } else if (clampedP >= kfs[kfs.length - 1].p) {
      dist = kfs[kfs.length - 1].s;
    } else {
      for (let i = 0; i < kfs.length - 1; i++) {
        const k1 = kfs[i];
        const k2 = kfs[i + 1];
        if (clampedP >= k1.p && clampedP <= k2.p) {
          const t = (clampedP - k1.p) / (k2.p - k1.p);
          dist = k1.s + t * (k2.s - k1.s);
          break;
        }
      }
    }

    targetDistRef.current = dist;
  }, [scrollProgress, isReady]);

  // Smooth 60fps lerp animation loop for effortless, fluid motion along the curve
  useEffect(() => {
    if (!isReady || !pathRef.current) return;
    const path = pathRef.current;

    const animate = () => {
      const diff = targetDistRef.current - currentDistRef.current;
      if (Math.abs(diff) > 0.05) {
        currentDistRef.current += diff * 0.12;
        const pt = path.getPointAtLength(currentDistRef.current);
        setDotPos({ x: pt.x, y: pt.y });
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isReady]);

  return (
    <div
      className="timeline-squiggle-container relative w-full h-[62px] sm:h-[76px] overflow-hidden select-none pointer-events-none text-[#670626]"
      data-testid="timeline-squiggle"
    >
      <svg
        viewBox="0 0 1440 90"
        className="w-full h-full overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Subtle soft gray glow for the single moving bead */}
          <filter id="subtleGrayGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Crisp core path line */}
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="timeline-path-core opacity-85"
        />

        {/* Section nodes (Clean hollow rings on the line) */}
        {CHAPTERS.map((ch) => {
          const isActive = activeChapter === ch.label;
          return (
            <g
              key={ch.id}
              className="cursor-pointer pointer-events-auto transition-opacity duration-200"
              onClick={(e) => {
                e.stopPropagation();
                if (onNav) onNav(ch.progress);
              }}
            >
              {/* Subtle node ring on the line */}
              <circle
                cx={ch.nodeX}
                cy={ch.nodeY}
                r="3.5"
                fill={isActive ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="1.6"
                className="timeline-node-dot"
                opacity={isActive ? 1 : 0.75}
              />

              {/* Text label underneath */}
              <text
                x={ch.nodeX}
                y={ch.nodeY + 25}
                textAnchor="middle"
                className={`timeline-node-label font-condensed tracking-[0.24em] uppercase transition-all duration-200 select-none ${
                  isActive
                    ? "font-bold text-[13px] opacity-100 fill-current"
                    : "text-[12px] opacity-75 fill-current hover:opacity-100"
                }`}
              >
                {ch.label}
              </text>
            </g>
          );
        })}

        {/* Moving position bead matching timeline color */}
        <g
          ref={glowRef}
          transform={`translate(${dotPos.x}, ${dotPos.y})`}
          className="pointer-events-none"
        >
          {/* Soft glowing aura */}
          <circle cx="0" cy="0" r="14" fill="currentColor" opacity="0.22" filter="url(#subtleGrayGlow)" />
          {/* Mid ring */}
          <circle cx="0" cy="0" r="6.5" fill="currentColor" opacity="0.55" />
          {/* Core dot */}
          <circle cx="0" cy="0" r="3.8" fill="currentColor" opacity="0.95" />
        </g>
      </svg>
    </div>
  );
}
