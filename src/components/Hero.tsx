"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "@/components/ReactBits/MagneticButton";
import { Spotlight } from "@/components/ReactBits/Spotlight";
import { BlurTextReveal } from "@/components/ReactBits/BlurTextReveal";

const ROLES = ["AI Engineer", "Founder @ TulasiAI", "Machine Learning Developer"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        minHeight: "100vh",
        paddingTop: "var(--nav-height)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#030303",
      }}
    >
      {/* Spotlight */}
      <Spotlight color="rgba(0,212,255,0.07)" size={800} />

      {/* Aurora-style animated gradient background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,212,255,0.12) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)",
          bottom: -300,
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Subtle grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          pointerEvents: "none",
          zIndex: 0,
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* Main content — centered */}
      <motion.div
        style={{ y, opacity, position: "relative", zIndex: 1, width: "100%" }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 0,
            padding: "80px 24px 120px",
          }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 32 }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 18px",
                borderRadius: 999,
                border: "1px solid rgba(0,212,255,0.25)",
                background: "rgba(0,212,255,0.06)",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.14em",
                color: "var(--accent-cyan)",
                textTransform: "uppercase",
                backdropFilter: "blur(12px)",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--accent-cyan)",
                  boxShadow: "0 0 8px var(--accent-cyan)",
                  animation: "pulse-glow 2s infinite",
                  flexShrink: 0,
                }}
              />
              Open to Opportunities · 2026
            </span>
          </motion.div>

          {/* Profile photo — centered above name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            style={{ position: "relative", marginBottom: 36 }}
          >
            {/* Outer ambient glow */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: -60,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(0,212,255,0.18) 0%, rgba(124,58,237,0.1) 40%, transparent 70%)",
                filter: "blur(30px)",
                pointerEvents: "none",
              }}
            />
            {/* Spinning gradient ring */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: -4,
                borderRadius: "50%",
                background:
                  "conic-gradient(from 0deg, var(--accent-cyan), var(--accent-purple), #e879f9, #10b981, var(--accent-cyan))",
                animation: "spin-slow 7s linear infinite",
                zIndex: 0,
              }}
            />
            {/* Dark gap */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: -1,
                borderRadius: "50%",
                background: "#030303",
                zIndex: 1,
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/abishekphoto.jpg"
              alt="Abishek R — AI Engineer"
              style={{
                width: 140,
                height: 140,
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
                position: "relative",
                zIndex: 2,
              }}
            />
          </motion.div>

          {/* Name — Apple-scale typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(64px, 11vw, 130px)",
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 0.9,
              marginBottom: 28,
              background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ABISHEK R.
          </motion.h1>

          {/* Role titles — horizontal pill row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 36 }}
          >
            {[
              { label: "AI Engineer", color: "var(--accent-cyan)", border: "rgba(0,212,255,0.3)", bg: "rgba(0,212,255,0.07)" },
              { label: "Founder @ TulasiAI", color: "rgba(200,180,255,0.95)", border: "rgba(124,58,237,0.3)", bg: "rgba(124,58,237,0.07)" },
              { label: "Machine Learning Developer", color: "#e879f9", border: "rgba(232,121,249,0.3)", bg: "rgba(232,121,249,0.07)" },
            ].map((r, i) => (
              <motion.span
                key={r.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45 + i * 0.08 }}
                style={{
                  padding: "8px 18px",
                  borderRadius: 999,
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(13px, 1.5vw, 16px)",
                  letterSpacing: "-0.01em",
                  color: r.color,
                  border: `1px solid ${r.border}`,
                  background: r.bg,
                  backdropFilter: "blur(12px)",
                }}
              >
                {r.label}
              </motion.span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5 }}
            style={{
              fontSize: "clamp(15px, 1.6vw, 18px)",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.8,
              maxWidth: 600,
              marginBottom: 48,
              letterSpacing: "-0.01em",
            }}
          >
            B.Tech AIML student at Panimalar Engineering College. Founder of TulasiAI.
            Building production-ready AI products with LLMs, Computer Vision, and AI Agents.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.62 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginBottom: 56 }}
          >
            <MagneticButton href="#projects" className="btn-primary" id="view-projects-btn"
              style={{ padding: "14px 28px", fontSize: 15, borderRadius: 14 }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              View Projects
            </MagneticButton>

            <MagneticButton href="/Abishek.pdf" download className="btn-ghost" id="download-resume-btn"
              style={{ padding: "14px 28px", fontSize: 15, borderRadius: 14 }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Resume
            </MagneticButton>

            <MagneticButton href="#contact" className="btn-purple" id="contact-btn"
              style={{ padding: "14px 28px", fontSize: 15, borderRadius: 14 }}
            >
              Let&apos;s Talk
            </MagneticButton>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{
              display: "flex",
              gap: 1,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
              overflow: "hidden",
              backdropFilter: "blur(20px)",
              marginBottom: 48,
            }}
          >
            {[
              { value: "4", label: "Live AI Products", color: "var(--accent-cyan)" },
              { value: "5+", label: "Hackathons", color: "#e879f9" },
              { value: "Finalist", label: "USAII · Handloom", color: "#10b981" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  textAlign: "center",
                  padding: "18px 32px",
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: stat.color,
                    marginBottom: 4,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.95 }}
            style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}
          >
            {[
              { label: "GitHub", href: "https://github.com/Abishek2207" },
              { label: "LinkedIn", href: "https://linkedin.com/in/abishekr22" },
              { label: "LeetCode", href: "https://leetcode.com/u/fOtjANkHIG" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >
                {s.label}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.15em",
          color: "rgba(255,255,255,0.2)",
          textTransform: "uppercase",
          zIndex: 1,
        }}
      >
        <span>Scroll</span>
        <div
          style={{
            width: 1,
            height: 48,
            background: "linear-gradient(180deg, var(--accent-cyan), transparent)",
            animation: "pulse-glow 2s infinite",
          }}
        />
      </motion.div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @media (max-width: 600px) {
          .hero-stats { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}
