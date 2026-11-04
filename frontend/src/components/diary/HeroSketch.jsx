import React from "react";

export default function HeroSketch({ className = "" }) {
  return (
    <div
      className={`hero-sketch-stage relative w-full flex items-end justify-center select-none pointer-events-none ${className}`}
    >
      {/* Container maintaining the 1024 x 878 sketch aspect ratio */}
      <div className="relative w-full max-w-[620px] max-h-[50vh] aspect-[1024/878] flex items-end justify-center">
        {/* =================================================================== */}
        {/* 1. THE HAND-DRAWN SKETCH (Crisp cherry red pencil lines on matcha) */}
        {/* =================================================================== */}
        <div className="relative w-full h-full flex items-end justify-center pointer-events-none">
          <img
            src="/desk-sketch-cherry.png"
            alt="Hand-drawn sketch of Dhwani studying with desk lamp, open diary, and coffee"
            className="w-full h-full object-contain pointer-events-none drop-shadow-[0_8px_20px_rgba(103,6,38,0.15)]"
          />
        </div>

        {/* =================================================================== */}
        {/* 2. SUBTLE ANIMATIONS: Rising Steam from Coffee Cup                 */}
        {/* =================================================================== */}
        <svg
          viewBox="0 0 1024 878"
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
        >
          {/* Animated Rising Steam Curls from Coffee Cup (Cup is at x=580, y=785) */}
          <g className="coffee-steam" transform="translate(580, 785)" opacity="0.75">
            <path
              d="M 0 0 Q -5 -12 2 -24 Q 9 -36 0 -48"
              fill="none"
              stroke="#670626"
              strokeWidth="2.0"
              strokeLinecap="round"
              className="animate-steam-1"
            />
            <path
              d="M 6 -2 Q 13 -14 5 -26 Q -3 -38 6 -50"
              fill="none"
              stroke="#670626"
              strokeWidth="1.7"
              strokeLinecap="round"
              className="animate-steam-2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
