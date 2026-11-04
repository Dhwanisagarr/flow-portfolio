import React from "react";

export default function Header({ soundOn, onToggleSound, onNav }) {
  return (
    <header className="diary-header fixed top-0 inset-x-0 z-[100] flex items-start justify-between px-3.5 sm:px-8 md:px-12 py-2.5 sm:py-4 pointer-events-none transition-colors duration-300">
      <div
        className="pointer-events-auto cursor-pointer"
        data-testid="header-identity"
        onClick={() => onNav && onNav(0)}
      >
        <div className="header-brand font-condensed font-semibold tracking-[0.2em] text-xs sm:text-sm md:text-base text-current transition-colors">
          DHWANI SAGAR
        </div>
        <div className="header-brand font-['Oswald',sans-serif] text-[9px] sm:text-[11px] md:text-xs tracking-[0.18em] sm:tracking-[0.22em] uppercase text-current opacity-85 transition-colors mt-0.5 max-w-[190px] sm:max-w-none">
          OPEN TO ROLES AND FREELANCE WORK
        </div>
      </div>

      <nav className="pointer-events-auto flex items-center">
        <button
          data-testid="sound-toggle"
          className="header-nav-btn flex items-center gap-1.5 sm:gap-2 font-['Oswald',sans-serif] text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.2em] uppercase text-current hover:opacity-75 transition-all cursor-pointer bg-transparent border-none p-0 group"
          onClick={onToggleSound}
          aria-pressed={soundOn}
          title={soundOn ? "Mute ambient music" : "Play ambient music"}
        >
          <span>{soundOn ? "Music On" : "Music Off"}</span>
          <div
            className="flex items-end gap-[2.5px] sm:gap-[3px] h-3 sm:h-3.5 w-4 sm:w-4.5 pb-0.5"
            aria-hidden="true"
          >
            <span
              className={`w-[2px] sm:w-[2.5px] rounded-full bg-current transition-all ${
                soundOn ? "animate-soundwave-1" : "h-1"
              }`}
            />
            <span
              className={`w-[2px] sm:w-[2.5px] rounded-full bg-current transition-all ${
                soundOn ? "animate-soundwave-2" : "h-2"
              }`}
            />
            <span
              className={`w-[2px] sm:w-[2.5px] rounded-full bg-current transition-all ${
                soundOn ? "animate-soundwave-3" : "h-1.5"
              }`}
            />
            <span
              className={`w-[2px] sm:w-[2.5px] rounded-full bg-current transition-all ${
                soundOn ? "animate-soundwave-4" : "h-1"
              }`}
            />
          </div>
        </button>
      </nav>
    </header>
  );
}
