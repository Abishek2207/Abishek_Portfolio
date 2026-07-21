"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title:    "USAII Global AI Hackathon",
    result:   "Global Finalist",
    organizer:"USAII",
    date:     "2026",
    icon:     "🏆",
    color:    "var(--accent-pink)",
    glow:     "rgba(232,121,249,0.12)",
    border:   "rgba(232,121,249,0.25)",
    desc:     "USAII Global AI Hackathon Finalist.",
    badge:    "FINALIST",
    badgeColor: "#e879f9",
  },
  {
    title:    "Forge 2 AI Builder Challenge",
    result:   "Top 53 Finalist",
    organizer:"Forge",
    date:     "2026",
    icon:     "🏆",
    color:    "#f59e0b",
    glow:     "rgba(245,158,11,0.12)",
    border:   "rgba(245,158,11,0.25)",
    desc:     "Selected as one of the top 53 finalists out of 850+ participants.",
    badge:    "TOP 53",
    badgeColor: "#f59e0b",
  },
  {
    title:    "Handloom Hackathon",
    result:   "National Finalist",
    organizer:"Ministry of Textiles",
    date:     "2025",
    icon:     "🏆",
    color:    "var(--accent-cyan)",
    glow:     "rgba(0,212,255,0.15)",
    border:   "rgba(0,212,255,0.25)",
    desc:     "National Finalist for the Handloom Hackathon 2025.",
    badge:    "NATIONAL FINALIST",
    badgeColor: "#00d4ff",
  },
  {
    title:    "NASA Space Apps Challenge",
    result:   "Participant",
    organizer:"NASA",
    date:     "2025",
    icon:     "🏆",
    color:    "var(--accent-purple)",
    glow:     "rgba(124,58,237,0.12)",
    border:   "rgba(124,58,237,0.25)",
    desc:     "Participant in the NASA Space Apps Challenge 2025.",
    badge:    "NASA 2025",
    badgeColor: "#a78bfa",
  },
  {
    title:    "Smart India Hackathon (SIH)",
    result:   "Intra-College Winning Team",
    organizer:"Ministry of Education",
    date:     "2025",
    icon:     "🏆",
    color:    "#10b981",
    glow:     "rgba(16,185,129,0.12)",
    border:   "rgba(16,185,129,0.25)",
    desc:     "Led the intra-college winning team for Smart India Hackathon 2025.",
    badge:    "SIH WINNER",
    badgeColor: "#10b981",
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      {/* Ambient */}
      <div className="ambient-blob" style={{
        width: 400, height: 400,
        background: "var(--accent-cyan)",
        top: "5%", right: "-10%",
        opacity: 0.06,
      }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 64 }}
        >
          <div className="section-label">Achievements</div>
          <h2 className="section-title">
            Recognition &{" "}
            <span className="text-gradient-cyan">Impact.</span>
          </h2>
          <p className="section-sub">
            Competing at national and global levels — from NASA to Google to Government of India initiatives.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 20,
        }}>
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                position: "relative",
                background: `linear-gradient(135deg, ${ach.glow}, rgba(0,0,0,0.3))`,
                border: `1px solid ${ach.border}`,
                borderRadius: 20,
                padding: "28px 28px 24px",
                overflow: "hidden",
                transition: "all 0.4s ease",
              }}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 60px ${ach.glow}`,
              }}
            >
              {/* Shimmer effect */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)",
                pointerEvents: "none",
              }} />

              {/* Header */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 16,
              }}>
                <span style={{ fontSize: 32 }}>{ach.icon}</span>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  padding: "3px 10px",
                  borderRadius: 999,
                  background: `${ach.badgeColor}18`,
                  border: `1px solid ${ach.badgeColor}44`,
                  color: ach.badgeColor,
                }}>
                  {ach.badge}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(15px, 2vw, 18px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: "#fff",
                marginBottom: 6,
                lineHeight: 1.3,
              }}>
                {ach.title}
              </h3>

              {/* Result */}
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: 14,
                fontWeight: 600,
                color: ach.badgeColor,
                marginBottom: 8,
              }}>
                {ach.result}
              </div>

              {/* Organizer */}
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--text-muted)",
                marginBottom: 12,
              }}>
                {ach.organizer} · {ach.date}
              </div>

              {/* Description */}
              <p style={{
                fontSize: 13,
                color: "var(--text-muted)",
                lineHeight: 1.65,
              }}>
                {ach.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
