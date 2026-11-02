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
