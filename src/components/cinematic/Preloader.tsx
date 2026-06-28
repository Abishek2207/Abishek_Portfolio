"use client";

import { useEffect, useRef, useState } from "react";
import { Play, ChevronDown } from "lucide-react";
import gsap from "gsap";

interface PreloaderProps {
  onStart: () => void;
}

export default function Preloader({ onStart }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [statusText, setStatusText] = useState("INITIALIZING SYSTEMS...");
  const containerRef = useRef<HTMLDivElement>(null);

  const statusMessages = [
    "LOADING NEURAL NETWORKS...",
    "CALIBRATING AI MODULES...",
    "COMPILING STORY ARCHIVES...",
    "SYNCHRONIZING TIMELINE...",
    "SYSTEMS ONLINE.",
  ];

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 12 + 3;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setIsReady(true);
        setStatusText("READY.");
      } else {
        const idx = Math.floor((current / 100) * (statusMessages.length - 1));
        setStatusText(statusMessages[idx]);
      }
      setProgress(current);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    if (!isReady) return;
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
      onComplete: onStart,
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center"
    >
      {/* Scanning grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-full border-t border-white/20"
            style={{ top: `${i * 5}%` }}
          />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-full border-l border-white/20"
            style={{ left: `${i * 5}%` }}
          />
        ))}
      </div>

      {/* Center content */}
      <div className="relative z-10 text-center px-6">
        <p className="text-[10px] md:text-xs font-mono tracking-[0.5em] text-white/40 mb-8 uppercase">
          ABISHEK R / PORTFOLIO SYSTEM v2.0
        </p>

        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight mb-2 text-white">
          ABISHEK R
        </h1>
        <p className="text-sm md:text-base font-mono text-white/40 tracking-[0.4em] uppercase mb-16">
          AI Engineer &nbsp;·&nbsp; Founder &nbsp;·&nbsp; Builder
        </p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="h-[1px] bg-white/10 w-full rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6] transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <p className="text-[10px] font-mono tracking-[0.3em] text-white/30 mb-12 uppercase">
          {statusText}
        </p>

        {/* Start Button */}
        <button
          onClick={handleStart}
          disabled={!isReady}
          className={`group relative px-10 py-4 border rounded-full font-mono text-sm tracking-widest uppercase transition-all duration-700 overflow-hidden
            ${isReady
              ? "border-white/30 text-white cursor-pointer hover:border-white/60"
              : "border-white/10 text-white/20 cursor-not-allowed"
            }`}
        >
          <span
            className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/20 to-[#8b5cf6]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
          />
          <span className="relative flex items-center gap-3">
            <Play size={14} />
            Begin The Journey
          </span>
        </button>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 text-[10px] font-mono text-white/20 tracking-widest">LAT: 10.0159° N</div>
      <div className="absolute top-6 right-6 text-[10px] font-mono text-white/20 tracking-widest">LNG: 78.1534° E</div>
      <div className="absolute bottom-6 left-6 text-[10px] font-mono text-white/20 tracking-widest">MADURAI → CHENNAI → WORLD</div>
      <div className="absolute bottom-6 right-6 text-[10px] font-mono text-white/20 tracking-widest">{new Date().getFullYear()}</div>
    </div>
  );
}
