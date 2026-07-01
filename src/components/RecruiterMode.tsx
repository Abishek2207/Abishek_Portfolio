"use client";

import { motion } from "framer-motion";

const quickStats = [
  { label: "AI Projects",           value: "4+" },
  { label: "Hackathons Entered",    value: "6+" },
  { label: "AI Domains",            value: "4" },
  { label: "CGPA",                  value: "7.87" },
];

const topProjects = [
  { name: "TulasiAI",     role: "Founder & Lead Engineer",   tech: "LLMs · RAG · Agents" },
  { name: "TulasiHealth", role: "AI Architect",               tech: "NLP · ML · Healthcare AI" },
  { name: "WeaveTales",   role: "Computer Vision Engineer",   tech: "CV · React · FastAPI" },
  { name: "OceanGuard AI",role: "Geospatial AI Developer",   tech: "Geospatial · CV · FastAPI" },
];

const coreTech = [
  "Python", "LLMs", "RAG", "AI Agents", "FastAPI",
  "Next.js", "PostgreSQL", "Computer Vision", "NLP",
];

export default function RecruiterMode() {
  return (
    <section
      id="recruiter"
      className="section"
      style={{
        background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,212,255,0.03) 50%, rgba(0,0,0,0.6) 100%)",
      }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 64, textAlign: "center" }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 18px",
            borderRadius: 999,
            background: "rgba(124,58,237,0.12)",
            border: "1px solid rgba(124,58,237,0.4)",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.12em",
            color: "#e879f9",
            marginBottom: 24,
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
            RECRUITER MODE
          </div>

          <h2 className="section-title" style={{ textAlign: "center" }}>
            Why Hire{" "}
            <span className="text-gradient-cyan">Abishek R?</span>
          </h2>
          <p style={{
            color: "var(--text-secondary)",
            fontSize: 16,
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto",
          }}>
            A 30-second snapshot of everything a recruiter needs to know — built for fast, confident hiring decisions.
          </p>
        </motion.div>

        {/* Main recruiter card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong gradient-border"
          style={{
            borderRadius: 32,
            padding: "48px",
            position: "relative",
            overflow: "hidden",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {/* Top accent */}
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0, height: 2,
            background: "linear-gradient(90deg, var(--accent-cyan), var(--accent-purple), var(--accent-pink))",
          }} />

          {/* Ambient glow inside card */}
          <div style={{
            position: "absolute",
            top: -100, right: -100,
            width: 300, height: 300,
            borderRadius: "50%",
            background: "rgba(0,212,255,0.05)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }} />

          {/* Profile row */}
          <div style={{
            display: "flex",
            gap: 24,
            alignItems: "center",
            marginBottom: 40,
            flexWrap: "wrap",
          }}>
            {/* Photo placeholder */}
            <div
              style={{
                position: "relative",
                width: 80,
                height: 80,
                minWidth: 80,
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid var(--border-medium)",
                background: "var(--bg-card)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/profile/photo.jpg"
                alt="Abishek R"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--text-muted)"
                strokeWidth="1.5"
                style={{ position: "absolute" }}
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </div>

            <div>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: 28, fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: 4,
              }}>
                Abishek R
              </h3>
              <p style={{ color: "var(--accent-cyan)", fontWeight: 500, marginBottom: 4 }}>
                AI Engineer · Founder of TulasiAI · AIML Student
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: 14 }}>
                Panimalar Engineering College, Chennai · B.Tech AIML (2024–Present)
              </p>
            </div>

            <div style={{ marginLeft: "auto" }}>
              <a
                href="/resume/Abishek_R_Resume.pdf"
                download
                className="btn-primary"
                id="recruiter-download-resume"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          <div className="divider" style={{ marginBottom: 36 }} />

          {/* 30-second summary */}
          <div style={{ marginBottom: 36 }}>
            <div className="section-label" style={{ marginBottom: 16 }}>30-Second Summary</div>
            <p style={{
              fontSize: 16,
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              borderLeft: "3px solid var(--accent-cyan)",
              paddingLeft: 20,
            }}>
              Abishek R is an AI/ML engineering student at Panimalar Engineering College and the Founder of TulasiAI — a production-ready AI career intelligence platform. He has built 4 AI-powered products across career tech, healthcare, handloom commerce, and marine safety using LLMs, RAG, AI Agents, Computer Vision, and Geospatial AI. He has competed in national-level hackathons (SIH winner, Handloom National Finalist) and global events (NASA Space Apps, USAII Top 25%, Google Big Code). He is seeking AI Engineering roles where he can build production AI systems that create real-world impact.
            </p>
          </div>

          {/* Quick stats */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            marginBottom: 36,
          }}
            className="stats-row"
          >
            {quickStats.map((s, i) => (
              <div key={s.label} style={{
                textAlign: "center",
                padding: "20px 12px",
                borderRadius: 16,
                background: "rgba(0,212,255,0.04)",
                border: "1px solid rgba(0,212,255,0.1)",
              }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 3vw, 32px)",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, var(--accent-cyan), #fff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: 4,
                }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="divider" style={{ marginBottom: 32 }} />

          {/* Top Projects */}
          <div style={{ marginBottom: 32 }}>
            <div className="section-label" style={{ marginBottom: 16 }}>Top Projects</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {topProjects.map((p) => (
                <div key={p.name} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 16px",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--border-subtle)",
                  flexWrap: "wrap",
                  gap: 8,
                }}>
                  <div>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14 }}>
                      {p.name}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", marginLeft: 10 }}>
                      {p.role}
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    {p.tech.split("·").map((t) => (
                      <span key={t} className="tag" style={{ fontSize: 10 }}>{t.trim()}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Tech */}
          <div style={{ marginBottom: 32 }}>
            <div className="section-label" style={{ marginBottom: 12 }}>Core Technologies</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {coreTech.map((t) => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>
          </div>

          <div className="divider" style={{ marginBottom: 28 }} />

          {/* Contact Row */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {[
                { label: "abishekramamoorthy22@gmail.com", href: "mailto:abishekramamoorthy22@gmail.com", icon: "✉" },
                { label: "+91 6369538345",                  href: "tel:+916369538345",                   icon: "📱" },
              ].map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  style={{
                    display: "flex", gap: 6, alignItems: "center",
                    fontFamily: "var(--font-mono)", fontSize: 12,
                    color: "var(--accent-cyan)", textDecoration: "none",
                  }}
                >
                  <span>{c.icon}</span>{c.label}
                </a>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { label: "GitHub",   href: "https://github.com/Abishek2207" },
                { label: "LinkedIn", href: "https://linkedin.com/in/abishekr22" },
                { label: "LeetCode", href: "https://leetcode.com/u/fOtjANkHIG" },
              ].map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: "8px 16px", fontSize: 12 }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-row { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-row { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
