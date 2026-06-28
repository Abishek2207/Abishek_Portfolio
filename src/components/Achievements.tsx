"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title:    "Handloom Hackathon 2025",
    result:   "National Finalist",
    organizer:"Ministry of Textiles, Government of India",
    date:     "July 3 – Aug 4, 2025",
    icon:     "🏆",
    color:    "var(--accent-cyan)",
    glow:     "rgba(0,212,255,0.15)",
    border:   "rgba(0,212,255,0.25)",
    desc:     "National-level hackathon organized by the Development Commissioner (Handlooms), GoI. Built WeaveTales — an AI-powered handloom discovery and virtual try-on platform.",
    badge:    "NATIONAL FINALIST",
    badgeColor: "#00d4ff",
  },
  {
    title:    "NASA Space Apps Challenge 2025",
    result:   "Participant",
    organizer:"NASA",
    date:     "2025",
    icon:     "🚀",
    color:    "#f59e0b",
    glow:     "rgba(245,158,11,0.12)",
    border:   "rgba(245,158,11,0.2)",
    desc:     "Participated in the world's largest annual global hackathon by NASA, addressing space exploration and Earth science challenges with AI-driven solutions.",
    badge:    "NASA 2025",
    badgeColor: "#f59e0b",
  },
  {
    title:    "Smart India Hackathon (SIH) 2025",
    result:   "Intra-College Winning Team",
    organizer:"Ministry of Education, Government of India",
    date:     "2025",
    icon:     "🇮🇳",
    color:    "var(--accent-purple)",
    glow:     "rgba(124,58,237,0.12)",
    border:   "rgba(124,58,237,0.25)",
    desc:     "Led the intra-college winning team for Smart India Hackathon 2025, the flagship national-level innovation challenge by the Government of India.",
    badge:    "SIH WINNER",
    badgeColor: "#a78bfa",
  },
  {
    title:    "USAII Global AI Hackathon 2026",
    result:   "Top 25% · Rank 107 / 424",
    organizer:"US Artificial Intelligence Institute (USAII)",
    date:     "2026",
    icon:     "🌐",
    color:    "var(--accent-pink)",
    glow:     "rgba(232,121,249,0.12)",
    border:   "rgba(232,121,249,0.25)",
    desc:     "Qualified as a global top-25% participant in the USAII Global AI Hackathon 2026, ranking 107 out of 424 international participants.",
    badge:    "RANK 107/424",
    badgeColor: "#e879f9",
  },
  {
    id: "google-bigcode",
    title: "Google Big Code 2026",
    result: "Qualifier Round Participant",
    organizer: "Google",
    date: "March 14\u201315, 2026",
    icon: "\u{1F3AF}",
    color: "#10b981",
    glow: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.25)",
    badge: "GOOGLE \u00B7 2026",
    badgeColor: "#10b981",
    description:
      "Selected for The Big Code 2026 Qualifier Round by Google \u2014 a competitive coding event for engineering students graduating 2027\u20132029.",
  },
  {
    id: "build-with-ai",
    title: "Build with AI 2026",
    result: "Registered Participant",
    organizer: "Google Developer Groups (GDG)",
    date: "March 2026",
    icon: "\u2728",
    color: "#60a5fa",
    glow: "rgba(96,165,250,0.12)",
    border: "rgba(96,165,250,0.25)",
    badge: "GDG \u00B7 2026",
    badgeColor: "#60a5fa",
    description:
      "Successfully registered for Build with AI 2026: The Agentic Evolution, organized by Google Developer Groups.",
  },
  {
    title:    "Build with AI 2026",
    result:   "Registered Participant",
    organizer:"Google Developer Groups (GDG)",
    date:     "March 2026",
    icon:     "✨",
    color:    "#60a5fa",
    glow:     "rgba(96,165,250,0.12)",
    border:   "rgba(96,165,250,0.25)",
    desc:     "Successfully registered for Build with AI 2026: The Agentic Evolution, organized by Google Developer Groups on Campus at Hanoi University of Science & Technology.",
    badge:    "GDG · 2026",
    badgeColor: "#60a5fa",
  },
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
