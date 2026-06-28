"use client";

import { useRef, useState, useEffect } from "react";

interface SpotlightProps {
  className?: string;
  color?: string;
  size?: number;
}

export function Spotlight({
  className = "",
  color = "rgba(0,212,255,0.08)",
  size = 600,
}: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const section = ref.current?.parentElement;
    if (!section) return;

    const move = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const enter = () => setOpacity(1);
    const leave = () => setOpacity(0);

    section.addEventListener("mousemove", move);
    section.addEventListener("mouseenter", enter);
    section.addEventListener("mouseleave", leave);

    return () => {
      section.removeEventListener("mousemove", move);
      section.removeEventListener("mouseenter", enter);
      section.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          width: size,
          height: size,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          transform: `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px)`,
          opacity,
          transition: "opacity 0.4s ease",
          willChange: "transform",
        }}
      />
    </div>
  );
}
