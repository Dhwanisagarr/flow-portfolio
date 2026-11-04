import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export default function ProjectCaseStudyModal({ project, onClose }) {
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.stop();
    }
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
      if (window.__lenis) {
        window.__lenis.start();
      }
    };
  }, [onClose]);

  if (!project) return null;

  const isPortfolios = project.isPortfolioCollection;

  return createPortal(
    <div
      data-testid="case-study-modal"
      className="fixed inset-0 z-[9999] overflow-y-auto overflow-x-hidden animate-fade-in backdrop-blur-md pointer-events-auto"
      style={{ backgroundColor: "rgba(20, 10, 25, 0.72)" }}
      data-lenis-prevent="true"
      onClick={onClose}
    >
      <div
        className="min-h-full w-full flex items-start justify-center p-3 sm:p-6 md:p-10 pointer-events-none my-6 sm:my-8"
      >
        <div
          className="relative w-full max-w-4xl rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.55)] border border-black/10 overflow-hidden pointer-events-auto transition-transform duration-300 animate-modal-pop"
          style={{ backgroundColor: project.pastelBg || "#f3f0ea" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Sticky Header */}
          <div
            className="sticky top-0 z-30 px-6 sm:px-10 py-4 flex items-center justify-between border-b backdrop-blur-md transition-colors"
            style={{
              borderColor: `${project.pastelBorder || "rgba(0,0,0,0.08)"}`,
              backgroundColor: `${project.pastelBg || "#f3f0ea"}f0`,
            }}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span
                className="font-['Oswald',sans-serif] text-xs sm:text-sm tracking-[0.25em] uppercase font-bold"
                style={{ color: project.pastelAccent || "#383556" }}
              >
                PROJECT {project.n}
              </span>
              <span className="text-black/30">/</span>
              <span
                className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm tracking-wider uppercase font-medium truncate max-w-[200px] sm:max-w-none text-black/75"
              >
                {project.title}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 font-['Oswald',sans-serif] text-xs tracking-[0.18em] uppercase px-4 py-2 rounded-full border transition-all cursor-pointer shadow-sm hover:scale-105"
                  style={{
                    backgroundColor: project.pastelAccent || "#383556",
                    borderColor: project.pastelAccent || "#383556",
                    color: "#ffffff",
                  }}
                >
                  VISIT LIVE APP ↗
                </a>
              )}
              <button
                data-testid="case-study-modal-close"
                onClick={onClose}
                className="font-['Oswald',sans-serif] text-xs sm:text-sm tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-black/15 bg-white/70 hover:bg-white text-black/85 transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
                aria-label="Close case study"
              >
                <span>✕</span>
                <span className="hidden sm:inline">CLOSE</span>
              </button>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-10 md:p-14 text-black/90 font-['Space_Grotesk',sans-serif]">
            {/* Hero Header of Case Study */}
            <div className="border-b pb-8 sm:pb-10" style={{ borderColor: `${project.pastelBorder || "rgba(0,0,0,0.12)"}` }}>
              <div className="inline-block px-3.5 py-1 rounded-full text-xs font-['Oswald',sans-serif] tracking-[0.2em] uppercase font-medium bg-white/80 border border-black/10 mb-4"
                style={{ color: project.pastelAccent || "#383556" }}
              >
                {project.tag}
              </div>

              <h1
                className="font-['Oswald',sans-serif] font-bold uppercase tracking-tight text-3xl sm:text-5xl lg:text-6xl leading-[0.95] text-black/90"
              >
                {project.title}
              </h1>

              <p
                className="mt-4 font-['Space_Grotesk',sans-serif] text-lg sm:text-2xl font-normal leading-snug"
                style={{ color: project.pastelAccent || "#383556" }}
              >
                {project.headline}
              </p>

              {/* Quick Meta Info Badges */}
              <div className="mt-6 flex flex-wrap gap-2 sm:gap-3 text-xs">
                {project.role && (
                  <div className="bg-white/85 border border-black/10 rounded-xl px-3.5 py-2">
                    <span className="font-['Oswald',sans-serif] uppercase tracking-wider text-black/50 block text-[10px]">MY ROLE</span>
                    <span className="font-medium text-black/85 mt-0.5 block">{project.role}</span>
                  </div>
                )}
                {project.tech && (
                  <div className="bg-white/85 border border-black/10 rounded-xl px-3.5 py-2">
                    <span className="font-['Oswald',sans-serif] uppercase tracking-wider text-black/50 block text-[10px]">TECHNOLOGY</span>
                    <span className="font-medium text-black/85 mt-0.5 block">{project.tech}</span>
                  </div>
                )}
                {project.traction && (
                  <div className="bg-white/85 border border-black/10 rounded-xl px-3.5 py-2">
                    <span className="font-['Oswald',sans-serif] uppercase tracking-wider text-black/50 block text-[10px]">EARLY TRACTION</span>
                    <span className="font-medium text-black/85 mt-0.5 block">{project.traction}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Special Layout for Project 8: Portfolios I Have Created */}
            {isPortfolios ? (
              <div className="py-8 sm:py-10 space-y-8">
                <div>
                  <h2 className="font-['Oswald',sans-serif] text-xl sm:text-2xl uppercase tracking-wider font-bold text-black/90">
                    PORTFOLIOS & DIGITAL SPACES
                  </h2>
                  <p className="font-['Space_Grotesk',sans-serif] text-base sm:text-lg text-black/75 mt-2 leading-relaxed">
                    A curated showcase of two independent portfolios and design studios I created from scratch. Click either card to visit the live interactive site.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-2">
                  {/* Portfolio 1: Dhwani Sagar */}
                  <a
                    href="https://www.dhwanisagar.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-white rounded-2xl p-6 sm:p-7 border border-black/10 shadow-sm hover:shadow-xl hover:border-black/25 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-black/10">
                        <span className="font-['Oswald',sans-serif] text-xs tracking-[0.2em] font-semibold text-black/60 uppercase">
                          PORTFOLIO 01
                        </span>
                        <span className="font-['Space_Grotesk',sans-serif] text-xs font-semibold text-[#814c57] bg-[#814c57]/10 px-2.5 py-0.5 rounded-full">
                          LIVE SITE
                        </span>
                      </div>

                      <h3 className="font-['Oswald',sans-serif] text-2xl sm:text-3xl font-bold uppercase tracking-wide text-black/90 mt-5 group-hover:text-[#562452] transition-colors">
                        DHWANI SAGAR
                      </h3>
                      <p className="font-['Space_Grotesk',sans-serif] text-sm text-black/70 mt-2 leading-relaxed">
                        Personal design space, narrative portfolio, case studies and interactive experiences.
                      </p>

                      <div className="mt-4 inline-block font-mono text-xs text-black/50 bg-black/5 px-3 py-1.5 rounded-md">
                        https://www.dhwanisagar.in/
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between">
                      <span className="font-['Oswald',sans-serif] text-xs tracking-[0.2em] font-bold uppercase text-[#562452]">
                        OPEN WEBSITE
                      </span>
                      <span className="w-8 h-8 rounded-full bg-[#562452] text-white flex items-center justify-center text-sm font-bold transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
                        ↗
                      </span>
                    </div>
                  </a>

                  {/* Portfolio 2: 4rin Labs */}
                  <a
                    href="https://www.4rinlabs.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-white rounded-2xl p-6 sm:p-7 border border-black/10 shadow-sm hover:shadow-xl hover:border-black/25 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-black/10">
                        <span className="font-['Oswald',sans-serif] text-xs tracking-[0.2em] font-semibold text-black/60 uppercase">
                          PORTFOLIO 02
                        </span>
                        <span className="font-['Space_Grotesk',sans-serif] text-xs font-semibold text-[#284b63] bg-[#284b63]/10 px-2.5 py-0.5 rounded-full">
                          LIVE SITE
                        </span>
                      </div>

                      <h3 className="font-['Oswald',sans-serif] text-2xl sm:text-3xl font-bold uppercase tracking-wide text-black/90 mt-5 group-hover:text-[#284b63] transition-colors">
                        4RIN LABS
                      </h3>
                      <p className="font-['Space_Grotesk',sans-serif] text-sm text-black/70 mt-2 leading-relaxed">
                        Design and technology studio site exploring generative prototypes, interactive systems, and product engineering.
                      </p>

                      <div className="mt-4 inline-block font-mono text-xs text-black/50 bg-black/5 px-3 py-1.5 rounded-md">
                        https://www.4rinlabs.com/
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between">
                      <span className="font-['Oswald',sans-serif] text-xs tracking-[0.2em] font-bold uppercase text-[#284b63]">
                        OPEN WEBSITE
                      </span>
                      <span className="w-8 h-8 rounded-full bg-[#284b63] text-white flex items-center justify-center text-sm font-bold transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
                        ↗
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            ) : (
              /* Standard Case Study Detail Sections */
              <div className="py-8 sm:py-10 space-y-10 sm:space-y-12">
                {/* Overview */}
                {project.overview && (
                  <div>
                    <h2 className="font-['Oswald',sans-serif] text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-black/50 mb-2">
                      01 · OVERVIEW
                    </h2>
                    <p className="text-base sm:text-lg leading-relaxed text-black/85">
                      {project.overview}
                    </p>
                  </div>
                )}

                {/* Problem & Goal Grid */}
                {(project.problem || project.goal) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    {project.problem && (
                      <div className="bg-white/80 rounded-2xl p-6 border border-black/10 shadow-sm">
                        <span className="font-['Oswald',sans-serif] text-xs tracking-[0.22em] uppercase font-bold text-[#814c57] block mb-2">
                          THE PROBLEM
                        </span>
                        <p className="text-sm sm:text-base leading-relaxed text-black/80">
                          {project.problem}
                        </p>
                      </div>
                    )}
                    {project.goal && (
                      <div className="bg-white/80 rounded-2xl p-6 border border-black/10 shadow-sm">
                        <span className="font-['Oswald',sans-serif] text-xs tracking-[0.22em] uppercase font-bold text-[#2e6b4d] block mb-2">
                          THE GOAL
                        </span>
                        <p className="text-sm sm:text-base leading-relaxed text-black/80">
                          {project.goal}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Approach */}
                {project.approach && (
                  <div>
                    <h2 className="font-['Oswald',sans-serif] text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-black/50 mb-3">
                      02 · MY APPROACH & WORKFLOW
                    </h2>
                    {Array.isArray(project.approach) ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                        {project.approach.map((step, idx) => (
                          <div
                            key={idx}
                            className="bg-white/90 rounded-2xl p-4 sm:p-5 border border-black/10 shadow-sm flex flex-col justify-between"
                          >
                            <span
                              className="font-['Oswald',sans-serif] text-xs tracking-[0.2em] font-bold"
                              style={{ color: project.pastelAccent || "#383556" }}
                            >
                              STEP {String(idx + 1).padStart(2, "0")}
                            </span>
                            <div className="mt-2 text-sm sm:text-base font-medium text-black/85 leading-snug">
                              {step}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-base sm:text-lg leading-relaxed text-black/85 bg-white/70 p-5 rounded-2xl border border-black/10">
                        {project.approach}
                      </p>
                    )}
                  </div>
                )}

                {/* Key Product Decisions */}
                {project.decisions && project.decisions.length > 0 && (
                  <div>
                    <h2 className="font-['Oswald',sans-serif] text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-black/50 mb-3">
                      03 · KEY PRODUCT DECISIONS
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.decisions.map((dec, idx) => (
                        <div
                          key={idx}
                          className="bg-white/80 rounded-2xl p-5 border border-black/10 shadow-sm"
                        >
                          <div
                            className="font-['Oswald',sans-serif] text-sm uppercase tracking-wider font-bold mb-1"
                            style={{ color: project.pastelAccent || "#383556" }}
                          >
                            {dec.title}
                          </div>
                          <p className="text-xs sm:text-sm text-black/75 leading-relaxed">
                            {dec.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* What I Look For / Teardowns (For Teardowns project) */}
                {project.teardownItems && (
                  <div>
                    <h2 className="font-['Oswald',sans-serif] text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-black/50 mb-3">
                      TEARDOWN DOSSIERS
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {project.teardownItems.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-5 border border-black/10 shadow-sm">
                          <span className="font-['Oswald',sans-serif] text-lg font-bold uppercase tracking-wider text-black/85 block">
                            {item.name}
                          </span>
                          <span className="text-xs text-black/60 mt-1 block font-medium">
                            {item.tagline}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technical Implementation & Solution */}
                {project.solution && (
                  <div className="bg-white/90 rounded-2xl p-6 sm:p-7 border border-black/10 shadow-sm">
                    <h2 className="font-['Oswald',sans-serif] text-xs tracking-[0.25em] uppercase font-bold text-black/50 mb-2">
                      04 · THE SOLUTION & ARCHITECTURE
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed text-black/85">
                      {project.solution}
                    </p>
                    {project.tech && (
                      <div className="mt-4 pt-3 border-t border-black/10 text-xs sm:text-sm text-black/70">
                        <strong className="font-['Oswald',sans-serif] tracking-wider uppercase">Technology:</strong> {project.tech}
                      </div>
                    )}
                  </div>
                )}

                {/* Limitation Notice (for Medical / ML project) */}
                {project.limitation && (
                  <div className="bg-[#fff9eb] border border-[#f59e0b]/30 rounded-2xl p-5 text-xs sm:text-sm text-[#78350f] leading-relaxed">
                    <strong className="font-['Oswald',sans-serif] tracking-wider uppercase block mb-1">
                      IMPORTANT LIMITATION & CLINICAL CONTEXT:
                    </strong>
                    {project.limitation}
                  </div>
                )}

                {/* What I Learned */}
                {project.learned && (
                  <div
                    className="rounded-2xl p-6 sm:p-7 border"
                    style={{
                      backgroundColor: `${project.pastelAccent || "#383556"}10`,
                      borderColor: `${project.pastelAccent || "#383556"}30`,
                    }}
                  >
                    <h2
                      className="font-['Oswald',sans-serif] text-xs tracking-[0.25em] uppercase font-bold mb-2"
                      style={{ color: project.pastelAccent || "#383556" }}
                    >
                      05 · KEY TAKEAWAYS & WHAT I LEARNED
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed text-black/85">
                      {project.learned}
                    </p>
                  </div>
                )}

                {/* What I Would Explore Next */}
                {project.exploreNext && (
                  <div className="bg-white/80 rounded-2xl p-6 border border-black/10 shadow-sm">
                    <h2 className="font-['Oswald',sans-serif] text-xs tracking-[0.25em] uppercase font-bold text-black/50 mb-2">
                      WHAT I WOULD EXPLORE NEXT
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed text-black/80">
                      {project.exploreNext}
                    </p>
                  </div>
                )}

                {/* Direct Action Link Banner */}
                {project.href && (
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl p-6 border border-black/10 shadow-sm">
                    <div>
                      <span className="font-['Oswald',sans-serif] text-xs uppercase tracking-wider text-black/50 block">READY TO EXPLORE?</span>
                      <span className="font-['Space_Grotesk',sans-serif] text-base font-semibold text-black/90">Experience {project.title} in action</span>
                    </div>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-['Oswald',sans-serif] text-xs tracking-[0.2em] uppercase px-6 py-3 rounded-full text-white font-bold transition-transform hover:scale-105 shadow-md flex items-center gap-2"
                      style={{ backgroundColor: project.pastelAccent || "#383556" }}
                    >
                      <span>LAUNCH PRODUCT</span>
                      <span>↗</span>
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Bottom Footer Close */}
            <div className="mt-8 pt-6 border-t border-black/10 flex items-center justify-between">
              <span className="font-['Oswald',sans-serif] text-[11px] tracking-[0.2em] uppercase text-black/50">
                CASE STUDY END · DHWANI SAGAR
              </span>
              <button
                onClick={onClose}
                className="font-['Oswald',sans-serif] text-xs tracking-[0.2em] uppercase px-5 py-2.5 rounded-full bg-black/10 hover:bg-black/20 text-black/80 font-semibold transition-colors cursor-pointer"
              >
                ← BACK TO SCRAPBOOK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
