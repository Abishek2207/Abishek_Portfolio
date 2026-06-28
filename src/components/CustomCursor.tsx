"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const trailX = useSpring(cursorX, { damping: 40, stiffness: 150, mass: 0.8 });
  const trailY = useSpring(cursorY, { damping: 40, stiffness: 150, mass: 0.8 });

  const isHovering = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleEnter = () => {
      isHovering.current = true;
      if (dotRef.current) dotRef.current.style.transform = "translate(-50%, -50%) scale(2.5)";
      if (glowRef.current) glowRef.current.style.opacity = "0.6";
    };

    const handleLeave = () => {
      isHovering.current = false;
      if (dotRef.current) dotRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      if (glowRef.current) glowRef.current.style.opacity = "0.25";
    };

    window.addEventListener("mousemove", move);

    const interactives = document.querySelectorAll(
      "a, button, [data-cursor-hover]"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [cursorX, cursorY]);

  // Only render on desktop
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      {/* Soft glow trail */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: trailX,
          y: trailY,
          pointerEvents: "none",
          zIndex: 99997,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          ref={glowRef}
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,212,255,0.15) 0%, rgba(124,58,237,0.08) 50%, transparent 70%)",
            transform: "translate(-50%, -50%)",
            filter: "blur(8px)",
            opacity: 0.25,
            transition: "opacity 0.4s ease",
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: springX,
          y: springY,
          pointerEvents: "none",
          zIndex: 99999,
        }}
      >
        <div
          ref={dotRef}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "var(--accent-cyan)",
            transform: "translate(-50%, -50%) scale(1)",
            boxShadow: "0 0 10px var(--accent-cyan), 0 0 20px rgba(0,212,255,0.4)",
            transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
          }}
        />
      </motion.div>
    </>
  );
}
