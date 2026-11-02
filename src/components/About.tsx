"use client";

import { motion } from "framer-motion";
import { TiltCard } from "@/components/ReactBits/TiltCard";
import { BlurTextReveal } from "@/components/ReactBits/BlurTextReveal";
import { Spotlight } from "@/components/ReactBits/Spotlight";

const stats = [
  { value: "4", label: "Live AI Products", color: "var(--accent-cyan)" },
  { value: "Multiple", label: "Hackathons Participated", color: "var(--accent-purple)" },
  { value: "4", label: "AI Domains", color: "#e879f9" },
  { value: "Finalist", label: "USAII · Handloom HK", color: "#10b981" },
];

const highlights = [
  { icon: "🎓", label: "Education", value: "B.Tech AIML · Panimalar Engineering College" },
  { icon: "🚀", label: "Role", value: "AI Engineer & Founder @ TulasiAI" },
  { icon: "💼", label: "Experience", value: "AI/ML Intern & Product Builder" },
  { icon: "📍", label: "Location", value: "Chennai, Tamil Nadu, India" },
  { icon: "✉️", label: "Email", value: "abishekramamoorthy22@gmail.com", href: "mailto:abishekramamoorthy22@gmail.com" },
];

const tags = [
  "AI Engineer",
  "Founder",
  "Internship",
  "Product Builder",
  "Hackathons",
  "AI Research Interest",
];

export default function About() {
  return (
    <section id="about" className="section" style={{ background: "rgba(0,0,0,0.4)", position: "relative", overflow: "hidden" }}>
      {/* Apple-style background spotlight & glow */}
      <Spotlight color="rgba(0, 212, 255, 0.08)" size={700} />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 500,
          background: "radial-gradient(ellipse, rgba(124, 58, 237, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 56, display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <div className="section-label" style={{ justifyContent: "center" }}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent-cyan)",
                boxShadow: "0 0 8px var(--accent-cyan)",
              }}
            />
            About Me
          </div>

          <h2 className="section-title" style={{ textAlign: "center", maxWidth: 800 }}>
            Building AI that{" "}
            <span className="text-gradient-cyan">matters.</span>
          </h2>

          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <BlurTextReveal
              text="I am Abishek R — a B.Tech Artificial Intelligence & Machine Learning student at Panimalar Engineering College, Chennai, and the Founder of TulasiAI."
              delay={0.03}
              style={{
                color: "var(--text-secondary)",
                fontSize: 17,
                lineHeight: 1.7,
                textAlign: "center",
              }}
            />
          </div>
        </motion.div>

        {/* Centered Apple Bento Grid */}
        <div className="apple-about-bento" style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24, marginBottom: 24 }}>
          {/* Main Story Bento Card (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              gridColumn: "span 7",
              background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(10,10,14,0.7) 100%)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 24,
              padding: "36px 36px 32px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
            }}
          >
            {/* Top delicate specular highlight line */}
            <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)" }} />

            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 12px", borderRadius: 999, background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)", marginBottom: 20 }}>
              <span style={{ fontSize: 13 }}>⚡</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent-cyan)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                AI Engineer · Founder · Builder
              </span>
            </div>

            <p style={{ color: "#ffffff", fontSize: 16, lineHeight: 1.8, marginBottom: 16, fontWeight: 400 }}>
              Passionate about building production-ready AI products that solve real-world problems.
              I engineer end-to-end intelligent systems leveraging LLMs, RAG, Computer Vision, autonomous AI Agents, FastAPI, React, Next.js, and Python.
            </p>

            {/* Apple Mission Callout Card */}
            <div
              style={{
                padding: "18px 22px",
                borderRadius: 18,
                background: "linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(124,58,237,0.08) 100%)",
                border: "1px solid rgba(0,212,255,0.2)",
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                marginBottom: 24,
              }}
            >
              <span style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>🎯</span>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent-cyan)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4, fontWeight: 700 }}>
                  Mission Statement
                </div>
                <div style={{ color: "#ffffff", fontSize: 15, lineHeight: 1.6, fontWeight: 500 }}>
                  Build AI products that create real-world impact in education, healthcare, and industry.
                </div>
              </div>
            </div>

            {/* Interactive Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {tags.map((t) => (
                <span
                  key={t}
                  className="tag"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.85)",
                    fontSize: 12,
                    padding: "6px 14px",
                    borderRadius: 999,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 4 Stats Grid (5 Columns) */}
          <div style={{ gridColumn: "span 5", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {stats.map((s, i) => (
              <TiltCard key={s.label} maxTilt={6} scale={1.02}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  style={{
                    height: "100%",
                    padding: "26px 22px",
                    background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(12,12,16,0.6) 100%)",
                    backdropFilter: "blur(24px)",
                    border: `1px solid ${s.color}25`,
                    borderRadius: 20,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: 80,
                      height: 80,
                      background: `radial-gradient(circle, ${s.color}18 0%, transparent 70%)`,
                      filter: "blur(20px)",
                      pointerEvents: "none",
                    }}
                  />

                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(32px, 3.5vw, 42px)",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      background: `linear-gradient(135deg, ${s.color}, #ffffff)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      marginBottom: 8,
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-secondary)", fontFamily: "var(--font-mono)", letterSpacing: "0.02em", lineHeight: 1.4 }}>
                    {s.label}
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Highlights Row — Apple Glass Chips Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.02) 0%, rgba(15,15,20,0.5) 100%)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 20,
            padding: "20px 28px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 18,
            alignItems: "center",
          }}
        >
          {highlights.map((item) => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "var(--accent-cyan)",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "block",
                    }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "#ffffff",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "block",
                    }}
                  >
                    {item.value}
                  </span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .apple-about-bento {
            grid-template-columns: 1fr !important;
          }
          .apple-about-bento > div {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
