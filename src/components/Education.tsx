"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree:      "B.Tech (Hons.) Artificial Intelligence and Machine Learning",
    institution: "Panimalar Engineering College",
    location:    "Chennai, Tamil Nadu",
    score:       "CGPA: 7.87 / 10",
    period:      "2024 – Present",
    highlight:   true,
    icon:        "🎓",
    description: "Pursuing specialized AI/ML curriculum covering deep learning, computer vision, NLP, data structures, operating systems, and computer networks.",
    tags:        ["AI/ML", "Deep Learning", "NLP", "Computer Vision", "Machine Learning"],
  },
  {
    degree:      "Class XII — State Board",
    institution: "Seventh-day Adventist Matriculation Higher Secondary School",
    location:    "Madurai, Tamil Nadu",
    score:       "Percentage: 71.83%",
    period:      "2023 – 2024",
    highlight:   false,
    icon:        "📚",
    description: "Completed higher secondary education with focus on Mathematics, Physics, and Computer Science.",
    tags:        ["Mathematics", "Physics", "Computer Science"],
  },
];

export default function Education() {
  return (
    <section id="education" className="section" style={{ background: "rgba(0,0,0,0.3)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 64 }}
        >
          <div className="section-label">Education</div>
          <h2 className="section-title">
            Academic{" "}
            <span className="text-gradient-cyan">Foundation</span>
          </h2>
          <p className="section-sub">
            Formal education in AI and Machine Learning, building the theoretical base for real-world AI systems.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div
                className="glass-card"
                style={{
                  padding: "32px 36px",
                  border: edu.highlight
                    ? "1px solid rgba(0,212,255,0.2)"
                    : "1px solid var(--border-subtle)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Accent line for highlight */}
                {edu.highlight && (
                  <div style={{
                    position: "absolute",
                    top: 0, left: 0, right: 0,
                    height: 2,
                    background: "linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))",
                  }} />
                )}

                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 16,
                  marginBottom: 16,
                }}>
                  <div>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 8,
                    }}>
                      <span style={{ fontSize: 22 }}>{edu.icon}</span>
                      <h3 style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(15px, 2.5vw, 18px)",
                        fontWeight: 700,
                        color: edu.highlight ? "var(--accent-cyan)" : "#fff",
                        letterSpacing: "-0.01em",
                      }}>
                        {edu.degree}
                      </h3>
                    </div>
                    <div style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      color: "var(--text-secondary)",
                      marginBottom: 4,
                    }}>
                      {edu.institution}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "var(--text-muted)",
                    }}>
                      📍 {edu.location}
                    </div>
                  </div>

                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div className={edu.highlight ? "badge" : "badge badge-purple"} style={{ marginBottom: 8, display: "block" }}>
                      {edu.period}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 15,
                      color: edu.highlight ? "var(--accent-cyan)" : "var(--text-secondary)",
                    }}>
                      {edu.score}
                    </div>
                  </div>
                </div>

                <p style={{
                  fontSize: 14,
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}>
                  {edu.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {edu.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
