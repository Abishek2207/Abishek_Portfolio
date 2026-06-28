"use client";

import { useRef, useEffect, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  id?: string;
  download?: boolean | string;
  style?: React.CSSProperties;
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  onClick,
  href,
  target,
  rel,
  id,
  download,
  style,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 350, damping: 30 });
  const sy = useSpring(y, { stiffness: 350, damping: 30 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      x.set((e.clientX - cx) * strength);
      y.set((e.clientY - cy) * strength);
    };

    const handleLeave = () => {
      x.set(0);
      y.set(0);
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [x, y, strength]);

  const inner = (
    <motion.div ref={ref} style={{ x: sx, y: sy, display: "inline-block" }}>
      {href ? (
        <a
          href={href}
          target={target}
          rel={rel}
          id={id}
          download={download}
          className={className}
          style={style}
        >
          {children}
        </a>
      ) : (
        <button id={id} onClick={onClick} className={className} style={style}>
          {children}
        </button>
      )}
    </motion.div>
  );

  return inner;
}
