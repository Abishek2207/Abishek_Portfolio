"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BlurTextRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  once?: boolean;
  threshold?: number;
}

export function BlurTextReveal({
  text,
  className = "",
  style,
  delay = 0,
  once = true,
  threshold = 0.3,
}: BlurTextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  const words = text.split(" ");

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden", ...style }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
          animate={
            inView
              ? { opacity: 1, filter: "blur(0px)", y: 0 }
              : { opacity: 0, filter: "blur(12px)", y: 20 }
          }
          transition={{
            duration: 0.5,
            delay: delay + i * 0.06,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
