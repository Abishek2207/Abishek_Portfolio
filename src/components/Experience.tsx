"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title:    "Founder & AI Developer",
    company:  "TulasiAI",
    type:     "Founder",
    period:   "April 2026 – Present",
    location: "Remote · India",
    current:  true,
    accentColor: "var(--accent-cyan)",
    icon: "⚡",
    description:
      "Founded and developed TulasiAI, an AI-powered career intelligence platform for students and professionals with AI agents for resume analysis, interview preparation, opportunity discovery, and career guidance.",
    highlights: [
      "Built AI agents for resume analysis and career guidance",
      "Developed interview preparation system with LLMs",
      "Architected full-stack system: Next.js + FastAPI + PostgreSQL",
      "Deployed RAG pipelines for intelligent opportunity matching",
    ],
    tags: ["Next.js", "FastAPI", "LLMs", "RAG", "AI Agents", "PostgreSQL", "Python"],
  },
  {
    title:    "Artificial Intelligence & Machine Learning Intern",
    company:  "TANSAM Center of Excellence",
    type:     "Internship",
    period:   "April 2025 – May 2025",
    location: "Tamil Nadu, India",
    current:  false,
    accentColor: "var(--accent-purple)",
    icon: "🔬",
    description:
      "Applied Python, data analytics, and machine learning techniques to analyze real-world datasets, identify patterns, and generate actionable business insights for government-backed projects.",
    highlights: [
      "Analyzed large-scale datasets using Python and Pandas",
      "Built ML models for pattern recognition and insight extraction",
      "Applied data analytics to derive business-relevant conclusions",
      "Worked in a government-backed AI research environment",
    ],
    tags: ["Python", "Machine Learning", "Data Analytics", "Pandas", "NumPy", "Scikit-learn"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      {/* Ambient */}
      <div className="ambient-blob" style={{
        width: 350, height: 350,
        background: "var(--accent-cyan)",
        bottom: "0%", left: "-5%",
        opacity: 0.05,
      }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 64 }}
        >
          <div className="section-label">Experience</div>
          <h2 className="section-title">
            Where I've{" "}
            <span className="text-gradient-cyan">Built.</span>
          </h2>
          <p className="section-sub">
            From government AI research to founding my own AI startup — building real systems in the real world.
          </p>
        </motion.div>

        <div style={{ position: "relative", paddingLeft: 40 }}>
          {/* Timeline vertical line */}
          <div style={{
            position: "absolute",
            left: 12,
            top: 12,
            bottom: 12,
            width: 1,
            background: "linear-gradient(180deg, var(--accent-cyan), var(--accent-purple), transparent)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{ position: "relative" }}
              >
                {/* Timeline dot */}
                <div style={{
                  position: "absolute",
                  left: -28,
                  top: 28,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: exp.accentColor,
                  boxShadow: `0 0 16px ${exp.accentColor}`,
                  border: "2px solid #000",
                  zIndex: 1,
                }} />

                {/* Card */}
                <div
                  className="glass-card"
                  style={{
                    padding: "32px 36px",
                    border: exp.current
                      ? `1px solid rgba(0,212,255,0.2)`
                      : "1px solid var(--border-subtle)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {exp.current && (
                    <div style={{
                      position: "absolute",
                      top: 0, left: 0, right: 0,
                      height: 2,
                      background: "linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))",
                    }} />
                  )}

                  {/* Header */}
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 12,
                    marginBottom: 20,
                  }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                        <span style={{ fontSize: 20 }}>{exp.icon}</span>
                        <h3 style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(16px, 2.5vw, 20px)",
                          fontWeight: 700,
                          color: exp.accentColor,
                          letterSpacing: "-0.01em",
                        }}>
                          {exp.title}
                        </h3>
                      </div>
                      <div style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: "#fff",
                        marginBottom: 4,
                        fontFamily: "var(--font-display)",
                      }}>
                        {exp.company}
                      </div>
                      <div style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                        color: "var(--text-muted)",
                      }}>
                        📍 {exp.location}
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
                      <span className={exp.current ? "badge" : "badge badge-purple"}>
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          fontFamily: "var(--font-mono)",
                          fontSize: 10,
                          color: "var(--accent-green)",
                          letterSpacing: "0.08em",
                        }}>
                          <span style={{
                            width: 6, height: 6,
                            borderRadius: "50%",
                            background: "var(--accent-green)",
                            boxShadow: "0 0 6px var(--accent-green)",
                          }} />
                          ACTIVE
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: 14,
                    color: "var(--text-secondary)",
                    lineHeight: 1.75,
                    marginBottom: 20,
                  }}>
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div style={{ marginBottom: 20 }}>
                    {exp.highlights.map((h, j) => (
                      <div key={j} style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        padding: "6px 0",
                        borderBottom: j < exp.highlights.length - 1 ? "1px solid var(--border-subtle)" : "none",
                      }}>
                        <span style={{
                          width: 4, height: 4, borderRadius: "50%",
                          background: exp.accentColor,
                          marginTop: 7, flexShrink: 0,
                        }} />
                        <span style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {exp.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
