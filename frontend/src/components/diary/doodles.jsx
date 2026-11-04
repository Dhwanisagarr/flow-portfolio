const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const PaperPlane = (p) => (
  <svg viewBox="0 0 48 48" {...S} {...p}>
    <path d="M4 26 L44 6 L30 40 L21 27 Z" />
    <path d="M21 27 L44 6" />
    <path d="M30 40 L26 30" />
  </svg>
);

export const Star = (p) => (
  <svg viewBox="0 0 48 48" {...S} {...p}>
    <path d="M24 4 L29 18 L44 19 L32 28 L36 43 L24 34 L12 43 L16 28 L4 19 L19 18 Z" />
  </svg>
);

export const CurlyArrow = (p) => (
  <svg viewBox="0 0 64 40" {...S} {...p}>
    <path d="M4 30 Q14 38 22 28 Q28 20 20 16 Q13 13 16 22 Q20 32 40 26 Q52 22 56 14" />
    <path d="M49 12 L57 13 L54 21" />
  </svg>
);

export const Lightbulb = (p) => (
  <svg viewBox="0 0 48 48" {...S} {...p}>
    <path d="M24 6 a12 12 0 0 1 7 21.5 c-2 1.6-2.5 3-2.5 5.5 h-9 c0-2.5-.5-3.9-2.5-5.5 A12 12 0 0 1 24 6 Z" />
    <path d="M20 37 h8 M21 41 h6" />
    <path d="M24 16 v6 M21 19 l6 0" />
  </svg>
);

export const CoffeeCup = (p) => (
  <svg viewBox="0 0 48 48" {...S} {...p}>
    <path d="M10 18 h24 v12 a10 10 0 0 1 -10 10 h-4 a10 10 0 0 1 -10 -10 Z" />
    <path d="M34 20 h4 a5 5 0 0 1 0 10 h-4" />
    <path d="M18 12 q2-3 0-6 M26 12 q2-3 0-6" />
    <path d="M17 26 h10" />
  </svg>
);

export const QuestionMark = (p) => (
  <svg viewBox="0 0 40 48" {...S} {...p}>
    <path d="M10 14 a10 10 0 1 1 18 7 q-6 4-6 10" />
    <circle cx="22" cy="41" r="1.6" fill="currentColor" />
  </svg>
);

export const Heart = (p) => (
  <svg viewBox="0 0 48 48" {...S} {...p}>
    <path d="M24 40 C10 30 6 22 10 15 c3-5 10-5 14 1 c4-6 11-6 14-1 c4 7 0 15-14 25 Z" />
  </svg>
);

export const Squiggle = (p) => (
  <svg viewBox="0 0 90 16" {...S} {...p}>
    <path d="M2 10 Q9 2 16 10 T30 10 T44 10 T58 10 T72 10 T86 10" />
  </svg>
);

export const Sparkle = (p) => (
  <svg viewBox="0 0 32 32" {...S} {...p}>
    <path d="M16 3 V29 M3 16 H29 M8 8 L24 24 M24 8 L8 24" />
  </svg>
);

export const LoopArrow = (p) => (
  <svg viewBox="0 0 72 44" {...S} {...p}>
    <path d="M6 34 Q10 12 34 12 Q58 12 60 26 Q61 36 48 34 Q38 32 42 22 Q46 12 62 14" />
    <path d="M56 8 L64 14 L56 20" />
  </svg>
);

export const SketchGirl = (p) => (
  <svg viewBox="0 0 120 120" {...S} {...p}>
    <circle cx="60" cy="56" r="25" />
    <circle cx="43" cy="30" r="9" />
    <path d="M50 34 q10 -8 20 0" />
    <path d="M31 54 q-8 2 -6 11 q2 8 10 6" />
    <path d="M89 54 q8 2 6 11 q-2 8 -10 6" />
    <rect x="22" y="52" width="12" height="17" rx="5.5" />
    <rect x="86" y="52" width="12" height="17" rx="5.5" />
    <circle cx="53" cy="58" r="1.7" fill="currentColor" />
    <circle cx="68" cy="58" r="1.7" fill="currentColor" />
    <path d="M54 67 q7 6 13 0" />
    <path d="M36 96 q24 -12 48 0" />
  </svg>
);

export const Notebook = (p) => (
  <svg viewBox="0 0 48 48" {...S} {...p}>
    <rect x="8" y="6" width="32" height="36" rx="3" />
    <path d="M14 6 v36" />
    <path d="M20 16 h14 M20 22 h14 M20 28 h10" />
  </svg>
);

// ---------------------------------------------------------------------------
// NEW AUTHENTIC DOODLES (from user reference images)
// ---------------------------------------------------------------------------

// 1. "LOST Ctrl" keycap from Image 2
export const LostCtrl = (p) => (
  <svg viewBox="0 0 64 64" {...S} {...p}>
    {/* "LOST" handwritten text above keycap */}
    <path d="M 22 8 v 6 M 22 14 h 4" strokeWidth="1.8" />
    <circle cx="31" cy="11" r="3" strokeWidth="1.8" />
    <path d="M 39 8 q -3 0 -3 3 t 3 3" strokeWidth="1.8" />
    <path d="M 43 8 h 6 M 46 8 v 6" strokeWidth="1.8" />
    {/* Keycap top beveled face */}
    <rect x="18" y="24" width="28" height="24" rx="4" strokeWidth="2.2" />
    {/* Keycap outer skirt */}
    <path d="M 12 30 L 18 24 M 52 30 L 46 24 M 18 48 L 12 56 M 46 48 L 52 56" strokeWidth="2" />
    <path d="M 12 30 v 26 h 40 v -26" strokeWidth="2.2" />
    {/* "Ctrl" text inside keycap */}
    <text
      x="32"
      y="40"
      textAnchor="middle"
      fill="currentColor"
      stroke="none"
      fontFamily="sans-serif"
      fontSize="12"
      fontWeight="700"
    >
      Ctrl
    </text>
  </svg>
);

// 2. Pixel Chrome Dinosaur for Error 404
export const DinoRex = ({ leg = 0, className = "w-10 h-11", ...p }) => (
  <svg viewBox="0 0 44 47" fill="currentColor" className={className} {...p}>
    {/* Head & snout */}
    <rect x="22" y="0" width="22" height="16" />
    <rect x="22" y="16" width="18" height="6" />
    {/* Eye cutout */}
    <rect x="26" y="4" width="4" height="4" fill="var(--stage-bg-color, #241f38)" />
    {/* Body */}
    <rect x="12" y="14" width="16" height="20" />
    {/* Tail */}
    <rect x="8" y="18" width="4" height="10" />
    <rect x="4" y="20" width="4" height="6" />
    <rect x="0" y="22" width="4" height="4" />
    {/* Tiny hands */}
    <rect x="28" y="24" width="8" height="2" />
    <rect x="34" y="26" width="2" height="4" />
    {/* Legs alternating */}
    {leg === 0 ? (
      <>
        <rect x="14" y="34" width="4" height="6" />
        <rect x="12" y="40" width="4" height="4" />
        <rect x="22" y="34" width="4" height="10" />
        <rect x="22" y="44" width="6" height="3" />
      </>
    ) : (
      <>
        <rect x="14" y="34" width="4" height="10" />
        <rect x="14" y="44" width="6" height="3" />
        <rect x="22" y="34" width="4" height="6" />
        <rect x="24" y="40" width="4" height="4" />
      </>
    )}
  </svg>
);

// Error 404 Dino with pixel text & ground tracks
export const Error404Dino = ({ leg = 0, showText = true, className = "", onClick, ...p }) => (
  <div
    className={`inline-flex flex-col items-center select-none ${className}`}
    onClick={onClick}
    {...p}
  >
    {showText && (
      <div className="font-mono font-black text-[10px] sm:text-xs tracking-[0.25em] text-current mb-1 opacity-90">
        ERROR 404
      </div>
    )}
    <div className="relative">
      <DinoRex leg={leg} className="w-9 h-10 sm:w-11 sm:h-12" />
      <div className="w-14 sm:w-16 h-[2px] bg-current opacity-70 mt-1 flex justify-between px-1">
        <span className="w-2 h-[2px] bg-transparent" />
        <span className="w-3 h-[2px] bg-current" />
      </div>
    </div>
  </div>
);

// 3. Hand-drawn Laptop
export const DoodleLaptop = (p) => (
  <svg viewBox="0 0 64 52" {...S} {...p}>
    <path d="M 14 8 L 50 8 L 47 34 L 17 34 Z" strokeWidth="2.2" />
    <rect x="20" y="12" width="24" height="18" rx="1" strokeWidth="1.5" />
    <path d="M 6 34 L 58 34 L 62 46 L 2 46 Z" strokeWidth="2.4" />
    <rect x="26" y="37" width="12" height="5" rx="1" strokeWidth="1.5" />
  </svg>
);

// 4. Hand-drawn Headphones with coiled cord
export const DoodleHeadphones = (p) => (
  <svg viewBox="0 0 64 64" {...S} {...p}>
    <path d="M 14 32 C 14 12, 50 12, 50 32" strokeWidth="2.6" />
    <rect x="8" y="28" width="9" height="18" rx="4" strokeWidth="2.2" fill="currentColor" fillOpacity="0.15" />
    <rect x="47" y="28" width="9" height="18" rx="4" strokeWidth="2.2" fill="currentColor" fillOpacity="0.15" />
    <path d="M 12 46 Q 10 56 20 58 T 24 64" strokeWidth="1.8" />
  </svg>
);

// 5. Hand-drawn Open Book
export const DoodleOpenBook = (p) => (
  <svg viewBox="0 0 64 48" {...S} {...p}>
    <path d="M 32 40 C 22 36, 12 36, 4 38 L 4 14 C 12 12, 22 12, 32 16 Z" strokeWidth="2.2" />
    <path d="M 32 40 C 42 36, 52 36, 60 38 L 60 14 C 52 12, 42 12, 32 16 Z" strokeWidth="2.2" />
    <path d="M 32 16 L 32 42" strokeWidth="2.4" />
    <path d="M 10 22 h 14 M 10 28 h 10 M 40 22 h 14 M 42 28 h 12" strokeWidth="1.5" />
  </svg>
);

// 6. Hand-drawn Desk Calendar
export const DoodleCalendar = (p) => (
  <svg viewBox="0 0 64 60" {...S} {...p}>
    <rect x="10" y="14" width="44" height="40" rx="4" strokeWidth="2.4" />
    <path d="M 10 24 h 44" strokeWidth="2" />
    <path d="M 18 8 v 8 M 32 8 v 8 M 46 8 v 8" strokeWidth="2.4" />
    <path d="M 18 32 h 6 M 30 32 h 6 M 42 32 h 4 M 18 40 h 4 M 30 40 h 6 M 42 40 h 6" strokeWidth="1.8" />
  </svg>
);

// 7. Hand-drawn Globe
export const DoodleGlobe = (p) => (
  <svg viewBox="0 0 64 64" {...S} {...p}>
    <circle cx="32" cy="26" r="16" strokeWidth="2.2" />
    <ellipse cx="32" cy="26" rx="7" ry="16" strokeWidth="1.8" />
    <path d="M 16 26 h 32" strokeWidth="1.8" />
    <path d="M 14 14 A 20 20 0 0 0 48 40" strokeWidth="2.4" />
    <path d="M 32 46 v 10 M 22 56 h 20" strokeWidth="2.4" />
  </svg>
);

// 8. Hand-drawn Twin-bell Alarm Clock
export const DoodleAlarmClock = (p) => (
  <svg viewBox="0 0 64 64" {...S} {...p}>
    <circle cx="32" cy="34" r="18" strokeWidth="2.4" />
    <path d="M 16 18 A 7 7 0 0 1 25 12" strokeWidth="2.4" />
    <path d="M 39 12 A 7 7 0 0 1 48 18" strokeWidth="2.4" />
    <path d="M 32 34 L 32 23 M 32 34 L 40 34" strokeWidth="2.2" />
    <path d="M 20 48 L 14 56 M 44 48 L 50 56" strokeWidth="2.4" />
  </svg>
);

// 9. Hand-drawn Calculator
export const DoodleCalculator = (p) => (
  <svg viewBox="0 0 54 64" {...S} {...p}>
    <rect x="10" y="8" width="34" height="48" rx="4" strokeWidth="2.4" />
    <rect x="15" y="14" width="24" height="10" rx="1.5" strokeWidth="1.8" />
    <circle cx="19" cy="32" r="1.8" fill="currentColor" />
    <circle cx="27" cy="32" r="1.8" fill="currentColor" />
    <circle cx="35" cy="32" r="1.8" fill="currentColor" />
    <circle cx="19" cy="40" r="1.8" fill="currentColor" />
    <circle cx="27" cy="40" r="1.8" fill="currentColor" />
    <circle cx="35" cy="40" r="1.8" fill="currentColor" />
    <circle cx="19" cy="48" r="1.8" fill="currentColor" />
    <circle cx="27" cy="48" r="1.8" fill="currentColor" />
    <circle cx="35" cy="48" r="1.8" fill="currentColor" />
  </svg>
);

// 10. Hand-drawn Retro Handheld Gameboy
export const DoodleGameboy = (p) => (
  <svg viewBox="0 0 54 64" {...S} {...p}>
    <path d="M 12 8 h 30 a 4 4 0 0 1 4 4 v 36 a 8 8 0 0 1 -8 8 h -22 a 4 4 0 0 1 -4 -4 Z" strokeWidth="2.4" />
    <rect x="17" y="14" width="20" height="16" rx="2" strokeWidth="1.8" />
    {/* D-Pad */}
    <path d="M 22 38 v 8 M 18 42 h 8" strokeWidth="2.5" />
    {/* Buttons */}
    <circle cx="36" cy="40" r="2.2" fill="currentColor" />
    <circle cx="41" cy="44" r="2.2" fill="currentColor" />
  </svg>
);

// 11. Hand-drawn Graduation Cap & Diploma
export const DoodleGradCap = (p) => (
  <svg viewBox="0 0 64 56" {...S} {...p}>
    <path d="M 32 8 L 56 20 L 32 32 L 8 20 Z" strokeWidth="2.4" />
    <path d="M 18 26 v 10 c 0 6 28 6 28 0 v -10" strokeWidth="2.2" />
    <path d="M 32 20 L 10 24 L 10 38" strokeWidth="1.8" />
    {/* Diploma scroll */}
    <path d="M 38 46 L 54 38 A 3 3 0 0 1 58 42 L 42 50 Z" strokeWidth="1.8" />
  </svg>
);

// 12. Hand-drawn Backpack
export const DoodleBackpack = (p) => (
  <svg viewBox="0 0 64 64" {...S} {...p}>
    <rect x="16" y="18" width="32" height="38" rx="6" strokeWidth="2.4" />
    <path d="M 24 18 C 24 10, 40 10, 40 18" strokeWidth="2.2" />
    <rect x="22" y="34" width="20" height="16" rx="3" strokeWidth="2" />
    <path d="M 24 18 v 16 M 40 18 v 16" strokeWidth="1.8" />
  </svg>
);

// 13. Hand-drawn Pencil
export const DoodlePencil = (p) => (
  <svg viewBox="0 0 64 64" {...S} {...p}>
    <path d="M 16 52 L 48 14 L 54 20 L 22 58 Z" strokeWidth="2.2" />
    <path d="M 16 52 L 10 60 L 22 58 Z" strokeWidth="2.2" fill="currentColor" fillOpacity="0.3" />
    <path d="M 44 18 L 50 24" strokeWidth="1.8" />
  </svg>
);
