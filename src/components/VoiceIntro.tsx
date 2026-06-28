"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const waveformHeights = [0.3, 0.7, 1, 0.6, 0.4, 0.9, 0.5, 0.8, 0.35, 0.75, 0.55, 0.95];

export default function VoiceIntro() {
  const [playing, setPlaying] = useState(false);
  const [hasAudio, setHasAudio] = useState(false);
  const [checked, setChecked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (checked) return;
    setChecked(true);
    fetch("/assets/voice/intro.mp3", { method: "HEAD" })
      .then((res) => setHasAudio(res.ok))
      .catch(() => setHasAudio(false));
  }, [checked]);

  const toggle = () => {
    if (!hasAudio) return;
    if (!audioRef.current) {
      audioRef.current = new Audio("/assets/voice/intro.mp3");
      audioRef.current.onended = () => setPlaying(false);
    }
    if (playing) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <button
        onClick={toggle}
        disabled={!hasAudio}
        className="btn-ghost"
        id="hearmyintro-voice-btn"
        style={{ gap: 10, opacity: hasAudio ? 1 : 0.7, cursor: hasAudio ? "pointer" : "not-allowed" }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 2, height: 18 }}>
          {playing ? (
            waveformHeights.map((h, i) => (
              <span
                key={i}
                className="waveform-bar"
                style={{
                  height: `${h * 100}%`,
                  animationDelay: `${i * 0.07}s`,
                  animationDuration: `${0.5 + i * 0.06}s`,
                }}
              />
            ))
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
            </svg>
          )}
        </span>
        {playing ? "Playing..." : hasAudio ? "Hear My Intro" : "Voice intro coming soon"}
      </button>
      {!hasAudio && checked && (
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            color: "var(--text-muted)",
            letterSpacing: "0.05em",
          }}
        >
          {`/assets/voice/intro.mp3`}
        </span>
      )}
    </div>
  );
}
