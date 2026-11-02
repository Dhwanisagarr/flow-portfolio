import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "./App.css";
import Header from "./components/diary/Header";
import Hero from "./components/diary/Hero";
import ZoomTransition from "./components/diary/ZoomTransition";
import { PageIntro, PageWhatIDo, PageObsession, PageWork } from "./components/diary/DiaryPages";
import Scrapbook from "./components/diary/Scrapbook";
import PageHello from "./components/diary/PageHello";
import Guestbook from "./components/diary/Guestbook";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [soundOn, setSoundOn] = useState(false);
  const audioRef = useRef(null);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    if (window.__lenis) window.__lenis.scrollTo(target, { offset: 0 });
    else document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleSound = () => {
    if (!audioRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      const master = ctx.createGain();
      master.gain.value = 0;
      master.connect(ctx.destination);
      const mk = (type, freq, vol) => {
        const o = ctx.createOscillator();
        o.type = type;
        o.frequency.value = freq;
        const g = ctx.createGain();
        g.gain.value = vol;
        o.connect(g);
        g.connect(master);
        o.start();
      };
      mk("sine", 174, 0.5);
      mk("sine", 175.2, 0.4);
      mk("triangle", 87, 0.22);
      audioRef.current = { ctx, master };
    }
    const { ctx, master } = audioRef.current;
    ctx.resume();
    const t = ctx.currentTime;
    master.gain.cancelScheduledValues(t);
    master.gain.setValueAtTime(master.gain.value, t);
    master.gain.linearRampToValueAtTime(soundOn ? 0 : 0.045, t + 0.9);
    setSoundOn(!soundOn);
  };

  return (
    <div className="diary-root relative">
      <Header soundOn={soundOn} onToggleSound={toggleSound} onNav={scrollTo} />
      <Hero onNav={scrollTo} reduced={reduced} />
      <ZoomTransition reduced={reduced} />
      <PageIntro reduced={reduced} />
      <PageWhatIDo reduced={reduced} />
      <PageObsession reduced={reduced} />
      <PageWork reduced={reduced} />
      <Scrapbook reduced={reduced} />
      <PageHello reduced={reduced} />
      <Guestbook reduced={reduced} />
    </div>
  );
}

export default App;
