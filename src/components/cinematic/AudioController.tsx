"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

interface AudioControllerProps {
  howlRef: React.MutableRefObject<any>;
}

export default function AudioController({ howlRef }: AudioControllerProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  const toggle = () => {
    if (!howlRef.current) return;
    if (isMuted) {
      howlRef.current.volume(0.35);
      setIsMuted(false);
    } else {
      howlRef.current.volume(0);
      setIsMuted(true);
    }
  };

  return (
    <div
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3"
      onMouseEnter={() => setShowLabel(true)}
      onMouseLeave={() => setShowLabel(false)}
    >
      {showLabel && (
        <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
          {isMuted ? "Sound Off" : "Sound On"}
        </span>
      )}
      <button
        onClick={toggle}
        className="w-12 h-12 rounded-full bg-black/50 border border-white/10 backdrop-blur-md flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all duration-300"
        aria-label="Toggle music"
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </div>
  );
}
