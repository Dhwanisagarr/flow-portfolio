import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";
import Header from "./components/diary/Header";
import DiaryExperience from "./components/diary/DiaryExperience";

gsap.registerPlugin(ScrollTrigger);
if (process.env.NODE_ENV !== "production") window.__ST = ScrollTrigger;

function App() {
  const [soundOn, setSoundOn] = useState(false);
  const audioRef = useRef(null);
  const soundOnRef = useRef(soundOn);
  soundOnRef.current = soundOn;
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Pause music when tab is hidden / switched away, and resume when tab is active again
  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (document.hidden) {
        // Tab is switched away: stop music immediately
        if (!audio.paused) {
          audio.pause();
        }
      } else {
        // Tab is active again: resume music if user had it turned on
        if (soundOnRef.current) {
          const playPromise = audio.play();
          if (playPromise !== undefined) {
            playPromise.catch((err) => {
              console.warn("Audio resume on tab focus was prevented:", err);
            });
          }
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({ duration: 1.25, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    window.__lenis = lenis;
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    return () => {
      window.removeEventListener("load", onLoad);
      gsap.ticker.remove(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, [reduced]);

  const scrollTo = (target) => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    let targetY = 0;
    const norm = typeof target === "string" ? target.toLowerCase().replace("#", "").trim() : "";
    if (typeof target === "number") {
      targetY = target <= 1.0 ? total * target : target;
    } else if (norm === "hello" || norm === "home" || norm === "top") {
      targetY = 0;
    } else if (norm === "about" || norm === "noticing") {
      targetY = total * 0.20;
    } else if (norm === "work") {
      targetY = total * 0.44;
    } else if (norm === "projects" || norm === "project" || norm === "selected-work") {
      targetY = total * 0.67;
    } else if (norm === "contact" || norm === "say-hello") {
      targetY = total * 0.90;
    } else if (typeof target === "string" && document.querySelector(target)) {
      const el = document.querySelector(target);
      targetY = el.getBoundingClientRect().top + window.scrollY;
    }

    if (window.__lenis) {
      window.__lenis.scrollTo(targetY, { duration: 1.3, immediate: false });
    } else {
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  const toggleSound = () => {
    if (!audioRef.current) {
      const audio = new Audio("/ambient-music.mp3");
      audio.loop = true;
      audio.preload = "auto";
      audioRef.current = audio;

      audio.addEventListener("ended", () => {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      });
    }

    const audio = audioRef.current;
    if (soundOn) {
      audio.pause();
      setSoundOn(false);
    } else {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setSoundOn(true);
          })
          .catch((err) => {
            console.warn("Audio playback blocked or interrupted:", err);
            setSoundOn(false);
          });
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div className="diary-root relative min-h-screen">
      <Header soundOn={soundOn} onToggleSound={toggleSound} onNav={scrollTo} />
      <DiaryExperience onNav={scrollTo} reduced={reduced} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
