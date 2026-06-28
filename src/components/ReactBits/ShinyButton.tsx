"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ShinyButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function ShinyButton({
  children,
  onClick,
  className = "",
  style,
  id,
  type = "button",
  disabled,
}: ShinyButtonProps) {
  return (
    <motion.button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: "14px 32px",
        background: "linear-gradient(135deg, var(--accent-cyan) 0%, #0099cc 100%)",
        color: "#000",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 14,
        letterSpacing: "0.04em",
        border: "none",
        borderRadius: 12,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        ...style,
      }}
    >
      {/* Shimmer layer */}
      <motion.span
        initial={{ x: "-110%", skewX: "-20deg" }}
        whileHover={{ x: "110%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
          pointerEvents: "none",
        }}
      />
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </motion.button>
  );
}
