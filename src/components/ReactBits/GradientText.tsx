"use client";

import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
  animate?: boolean;
}

export function GradientText({
  children,
  className = "",
  from = "#00d4ff",
  via = "#ffffff",
  to = "#7c3aed",
  animate = false,
}: GradientTextProps) {
  return (
    <span
      className={className}
      style={{
        background: `linear-gradient(135deg, ${from} 0%, ${via} 50%, ${to} 100%)`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundSize: animate ? "200% 200%" : "100%",
        animation: animate ? "gradient-shift 6s ease infinite" : undefined,
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}
