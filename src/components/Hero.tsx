"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ReactBits/MagneticButton";
import { GradientText } from "@/components/ReactBits/GradientText";
import { Spotlight } from "@/components/ReactBits/Spotlight";

const ROLES = ["AI Engineer", "Founder @ TulasiAI", "Tech Content Creator"];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        paddingTop: "var(--nav-height)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#030303",
      }}
    >
      {/* Spotlight cursor effect */}
      <Spotlight color="rgba(0,212,255,0.07)" size={700} />

      {/* Ambient blobs */}
      <div
        className="ambient-blob"
        style={{ width: 700, height: 700, background: "var(--accent-cyan)", top: -250, left: -200, opacity: 0.06 }}
      />
      <div
        className="ambient-blob"
        style={{ width: 500, height: 500, background: "var(--accent-purple)", bottom: -150, right: -150, opacity: 0.08 }}
      />

      {/* Grid lines overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
            minHeight: "calc(100vh - var(--nav-height))",
            padding: "60px 0",
          }}
        >
          {/* ── LEFT ── */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: 28 }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 16px",
                  borderRadius: 999,
                  border: "1px solid rgba(0,212,255,0.25)",
                  background: "rgba(0,212,255,0.05)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  color: "var(--accent-cyan)",
                  textTransform: "uppercase",
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
                  }}
                />
                Open to Opportunities · 2025
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(54px, 8vw, 100px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 0.93,
                marginBottom: 24,
              }}
            >
              <GradientText from="#ffffff" via="rgba(255,255,255,0.9)" to="#00d4ff">
                ABISHEK
                <br />
                R.
              </GradientText>
            </motion.h1>

            {/* Role titles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              style={{ marginBottom: 24, display: "flex", flexDirection: "column", gap: 6 }}
            >
              {ROLES.map((role, i) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
                  style={{ display: "flex", alignItems: "center", gap: 10 }}
                >
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: i === 0 ? "var(--accent-cyan)" : i === 1 ? "var(--accent-purple)" : "#e879f9",
                      boxShadow: `0 0 6px ${i === 0 ? "var(--accent-cyan)" : i === 1 ? "var(--accent-purple)" : "#e879f9"}`,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(15px, 2vw, 20px)",
                      fontWeight: 600,
                      color: i === 0 ? "var(--accent-cyan)" : i === 1 ? "rgba(200,180,255,0.9)" : "#e879f9",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {role}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
              style={{
                fontSize: 15,
                color: "var(--text-muted)",
                lineHeight: 1.8,
                maxWidth: 440,
                marginBottom: 40,
              }}
            >
              B.Tech AIML student at Panimalar Engineering College, Chennai.
              Building production-ready AI systems using{" "}
              <span style={{ color: "var(--accent-cyan)" }}>LLMs, RAG, Computer Vision & AI Agents</span>{" "}
              that solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.55 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 48 }}
            >
              <MagneticButton href="#projects" className="btn-primary" id="view-projects-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
                View Projects
              </MagneticButton>

              <MagneticButton
                href="/Abishek.pdf"
                download
                className="btn-ghost"
                id="download-resume-btn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Resume
              </MagneticButton>

              <MagneticButton href="#contact" className="btn-purple" id="contact-btn">
                Let&apos;s Talk
              </MagneticButton>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.7 }}
              style={{ display: "flex", gap: 20, flexWrap: "wrap" }}
            >
              {[
                { label: "GitHub", href: "https://github.com/Abishek2207", abbr: "GH" },
                { label: "LinkedIn", href: "https://linkedin.com/in/abishekr22", abbr: "LI" },
                { label: "LeetCode", href: "https://leetcode.com/u/fOtjANkHIG", abbr: "LC" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 700,
                      background: "var(--bg-card)",
                    }}
                  >
                    {s.abbr}
                  </span>
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — Profile Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 28,
              position: "relative",
            }}
          >
            {/* Outer ambient glow */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                width: 420,
                height: 420,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(0,212,255,0.14) 0%, rgba(124,58,237,0.08) 40%, transparent 70%)",
                filter: "blur(40px)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -60%)",
                pointerEvents: "none",
              }}
            />

            {/* Profile photo container */}
            <div style={{ position: "relative", animation: "float 5s ease-in-out infinite" }}>
              {/* Rotating gradient ring */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: -4,
                  borderRadius: "50%",
                  background: "conic-gradient(from 0deg, var(--accent-cyan), var(--accent-purple), #e879f9, var(--accent-cyan))",
                  animation: "spin-slow 6s linear infinite",
                  zIndex: 0,
                }}
              />
              {/* White gap ring */}
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
              {/* Photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/abishekphoto.jpg"
                alt="Abishek R — AI Engineer, Founder of TulasiAI"
                style={{
                  width: 300,
                  height: 300,
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                  position: "relative",
                  zIndex: 2,
                }}
              />
              {/* Inner glow overlay */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  boxShadow: "inset 0 0 40px rgba(0,212,255,0.08)",
                  zIndex: 3,
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Role chips */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
              {[
                { label: "AI Engineer", color: "var(--accent-cyan)", bg: "rgba(0,212,255,0.08)", border: "rgba(0,212,255,0.25)" },
                { label: "Founder · TulasiAI", color: "rgba(200,180,255,0.9)", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.25)" },
                { label: "Tech Content Creator", color: "#e879f9", bg: "rgba(232,121,249,0.08)", border: "rgba(232,121,249,0.25)" },
              ].map((chip, i) => (
                <motion.span
                  key={chip.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 + i * 0.1 }}
                  style={{
                    padding: "5px 14px",
                    borderRadius: 999,
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    background: chip.bg,
                    border: `1px solid ${chip.border}`,
                    color: chip.color,
                    whiteSpace: "nowrap",
                  }}
                >
                  {chip.label}
                </motion.span>
              ))}
            </div>

            {/* Mini stat strip */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05 }}
              style={{
                display: "flex",
                gap: 20,
                padding: "14px 24px",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
              }}
            >
              {[
                { value: "4", label: "Live AI Products" },
                { value: "8+", label: "Hackathons" },
                { value: "Multiple", label: "Finalist" },
              ].map((stat, i) => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 20,
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      color: i === 0 ? "var(--accent-cyan)" : i === 1 ? "#e879f9" : "#10b981",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
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
          color: "var(--text-muted)",
          textTransform: "uppercase",
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
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:last-child { order: -1; }
          .hero-grid > div:last-child img { width: 220px !important; height: 220px !important; }
        }
      `}</style>
    </section>
  );
}
