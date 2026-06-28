"use client";

import { ReactNode, useRef, useEffect, useState } from "react";

interface GlowBorderProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  borderRadius?: string | number;
  style?: React.CSSProperties;
}

export function GlowBorder({
  children,
  className = "",
  glowColor = "rgba(0,212,255,0.5)",
  borderRadius = 24,
  style,
}: GlowBorderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleEnter = () => setOpacity(1);
    const handleLeave = () => setOpacity(0);

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: "relative",
        borderRadius,
        ...style,
      }}
    >
      {/* Spotlight border effect */}
      <div
        style={{
          position: "absolute",
          inset: -1,
          borderRadius,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 60%)`,
          opacity,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
