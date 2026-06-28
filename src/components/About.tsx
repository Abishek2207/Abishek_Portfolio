"use client";

import { motion } from "framer-motion";
import { TiltCard } from "@/components/ReactBits/TiltCard";
import { BlurTextReveal } from "@/components/ReactBits/BlurTextReveal";
import { Spotlight } from "@/components/ReactBits/Spotlight";

const stats = [
  { value: "4+", label: "AI Projects Built", color: "var(--accent-cyan)" },
  { value: "2+", label: "Hackathons Won", color: "var(--accent-purple)" },
  { value: "3+", label: "AI Domains Covered", color: "#e879f9" },
  { value: "7.87", label: "CGPA · B.Tech AIML", color: "#10b981" },
];

const highlights = [
  { icon: "🎓", label: "Education", value: "B.Tech AIML · Panimalar Engineering College" },
  { icon: "🚀", label: "Role", value: "Founder · TulasiAI" },
  { icon: "📍", label: "Location", value: "Chennai, Tamil Nadu, India" },
  { icon: "✉️", label: "Email", value: "abishekramamoorthy22@gmail.com", href: "mailto:abishekramamoorthy22@gmail.com" },
];

const tags = ["LLMs", "RAG", "AI Agents", "Computer Vision", "FastAPI", "Next.js", "PostgreSQL", "Python"];

export default function About() {
  return (
    <section id="about" className="section" style={{ background: "rgba(0,0,0,0.3)", position: "relative" }}>
      <Spotlight color="rgba(124,58,237,0.07)" size={600} />

      <div className="ambient-blob" style={{ width: 400, height: 400, background: "var(--accent-purple)", top: "20%", right: "-10%", opacity: 0.06 }} />

      <div className="container">
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="section-label">About Me</div>
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              Building AI that
              <br />
              <span className="text-gradient-cyan">matters.</span>
            </h2>

            <BlurTextReveal
              text="I am Abishek R — an Artificial Intelligence and Machine Learning student at Panimalar Engineering College, Chennai, and the Founder of TulasiAI."
              delay={0.05}
              className=""
              style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: 18, fontSize: 15 }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.3 }}
              style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: 18, fontSize: 15 }}
            >
              I focus on building AI-powered systems that solve practical problems across education, career growth, healthcare, handloom commerce, and environmental intelligence.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.4 }}
              style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: 36, fontSize: 15 }}
            >
              My approach: find where human potential is constrained by inefficiency, then build intelligent infrastructure to unlock it — using LLMs, RAG, Computer Vision, and AI Agents.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
            >
              {tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            {/* Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
              {stats.map((s, i) => (
                <TiltCard key={s.label} maxTilt={8} scale={1.03}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.12 + i * 0.08 }}
                    style={{
                      padding: "22px 20px",
                      background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.3) 100%)",
                      backdropFilter: "blur(20px)",
                      border: `1px solid ${s.color}22`,
                      borderRadius: 16,
                      cursor: "default",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(28px, 4vw, 40px)",
                        fontWeight: 800,
                        letterSpacing: "-0.03em",
                        background: `linear-gradient(135deg, ${s.color}, #fff)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        marginBottom: 4,
                      }}
                    >
                      {s.value}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "var(--font-mono)", letterSpacing: "0.03em" }}>
                      {s.label}
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </div>

            {/* Info card */}
            <TiltCard maxTilt={5} scale={1.01}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 }}
                style={{
                  padding: 24,
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 20,
                  cursor: "default",
                }}
              >
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent-cyan)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18 }}>
                  // profile.info
                </div>
                {highlights.map((item, i) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "11px 0",
                      borderBottom: i < highlights.length - 1 ? "1px solid var(--border-subtle)" : "none",
                    }}
                  >
                    <span style={{ fontSize: 16, flexShrink: 0 }}>{item.icon}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 2 }}>
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent-cyan)", textDecoration: "none", wordBreak: "break-all" }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-secondary)" }}>
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </TiltCard>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
