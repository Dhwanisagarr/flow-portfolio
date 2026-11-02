export default function Header({ soundOn, onToggleSound, onNav }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex items-start justify-between px-4 sm:px-8 md:px-12 py-4 pointer-events-none">
      <div className="pointer-events-auto" data-testid="header-identity">
        <div className="font-condensed font-semibold tracking-[0.2em] text-sm md:text-base text-white drop-shadow-[0_1px_4px_rgba(40,35,60,0.6)]">
          DHWANI SAGAR
        </div>
        <div className="font-condensed text-[9px] md:text-[11px] tracking-[0.24em] text-white/80 drop-shadow">
          OPEN TO ROLES AND FREELANCE
        </div>
      </div>
      <nav className="pointer-events-auto flex items-center gap-2 md:gap-3">
        <button
          data-testid="sound-toggle"
          className="pill"
          onClick={onToggleSound}
          aria-pressed={soundOn}
        >
          {soundOn ? ".. SOUND OFF" : ".. SOUND ON"}
        </button>
        <button data-testid="nav-work" className="pill hidden sm:block" onClick={() => onNav("#work")}>
          WORK
        </button>
        <button data-testid="nav-about" className="pill hidden sm:block" onClick={() => onNav("#about")}>
          ABOUT
        </button>
        <button data-testid="nav-contact" className="pill" onClick={() => onNav("#contact")}>
          CONTACT
        </button>
      </nav>
    </header>
  );
}
