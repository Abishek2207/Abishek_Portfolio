"use client";

import { useEffect, useRef } from "react";

export interface LogoItem {
  name: string;
  /** Inline SVG string or URL to image */
  svg?: string;
  img?: string;
  color?: string;
}

interface LogoLoopProps {
  items: LogoItem[];
  speed?: number; // px per second, default 60
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  gap?: number;
  itemHeight?: number;
  fadePadding?: number; // px of fade on edges
  className?: string;
}

export function LogoLoop({
  items,
  speed = 60,
  pauseOnHover = true,
  direction = "left",
  gap = 56,
  itemHeight = 44,
  fadePadding = 80,
  className = "",
}: LogoLoopProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<Animation | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calculate the total width of one set
    const totalWidth = track.scrollWidth / 2;
    const duration = (totalWidth / speed) * 1000;

    const keyframes =
      direction === "left"
        ? [{ transform: "translateX(0)" }, { transform: `translateX(-${totalWidth}px)` }]
        : [{ transform: `translateX(-${totalWidth}px)` }, { transform: "translateX(0)" }];

    const anim = track.animate(keyframes, {
      duration,
      iterations: Infinity,
      easing: "linear",
    });

    animRef.current = anim;

    if (pauseOnHover) {
      const container = track.parentElement;
      const pause = () => anim.pause();
      const play = () => anim.play();
      container?.addEventListener("mouseenter", pause);
      container?.addEventListener("mouseleave", play);
      return () => {
        container?.removeEventListener("mouseenter", pause);
        container?.removeEventListener("mouseleave", play);
        anim.cancel();
      };
    }

    return () => anim.cancel();
  }, [items, speed, direction, pauseOnHover]);

  const doubled = [...items, ...items];

  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
      role="region"
      aria-label="Technology stack marquee"
    >
      {/* Fade edges */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: fadePadding,
          background: "linear-gradient(to right, #030303, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: fadePadding,
          background: "linear-gradient(to left, #030303, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Track */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          alignItems: "center",
          gap,
          width: "max-content",
          willChange: "transform",
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              flexShrink: 0,
              cursor: "default",
            }}
            title={item.name}
          >
            <div
              style={{
                height: itemHeight,
                width: itemHeight,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 12,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "all 0.3s ease",
                padding: 8,
              }}
              className="logo-loop-item"
            >
              {item.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.img}
                  alt={item.name}
                  width={itemHeight - 16}
                  height={itemHeight - 16}
                  style={{ objectFit: "contain" }}
                  loading="lazy"
                />
              ) : item.svg ? (
                <span
                  aria-label={item.name}
                  dangerouslySetInnerHTML={{ __html: item.svg }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: item.color || "#a1a1aa",
                    width: itemHeight - 16,
                    height: itemHeight - 16,
                  }}
                />
              ) : (
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    fontWeight: 600,
                    color: item.color || "#a1a1aa",
                    textAlign: "center",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.name.slice(0, 3).toUpperCase()}
                </span>
              )}
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "var(--text-muted)",
                letterSpacing: "0.06em",
                whiteSpace: "nowrap",
              }}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .logo-loop-item:hover {
          background: rgba(0,212,255,0.08) !important;
          border-color: rgba(0,212,255,0.25) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}
