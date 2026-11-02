"use client";

import { motion } from "framer-motion";
import { Spotlight } from "@/components/ReactBits/Spotlight";

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
    <section id="achievements" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <Spotlight color="rgba(232,121,249,0.06)" size={650} />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 400,
          background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
          filter: "blur(70px)",
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
          style={{ marginBottom: 64, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <div className="section-label" style={{ justifyContent: "center" }}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent-pink)",
                boxShadow: "0 0 8px var(--accent-pink)",
              }}
            />
            Achievements
          </div>
          <h2 className="section-title" style={{ textAlign: "center", maxWidth: 800 }}>
            Recognition &{" "}
            <span className="text-gradient-cyan">Impact.</span>
          </h2>
          <p className="section-sub" style={{ textAlign: "center", margin: "0 auto", maxWidth: 680 }}>
            Competing at national and global levels — from NASA to Google to Government of India initiatives.
          </p>
        </motion.div>

        {/* Centered Bento Grid for Achievements */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 22,
          }}
        >
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{
                position: "relative",
                background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(12,12,16,0.6) 100%)",
                backdropFilter: "blur(24px)",
                border: `1px solid ${ach.border}`,
                borderRadius: 22,
                padding: "30px 28px 26px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 50px ${ach.glow}, 0 0 25px ${ach.glow}`,
                borderColor: ach.badgeColor,
              }}
            >
              {/* Top delicate specular line */}
              <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 1, background: `linear-gradient(90deg, transparent, ${ach.badgeColor}88, transparent)` }} />

              {/* Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 18,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${ach.badgeColor}15`,
                    border: `1px solid ${ach.badgeColor}33`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                  }}
                >
                  {ach.icon}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    padding: "4px 12px",
                    borderRadius: 999,
                    background: `${ach.badgeColor}18`,
                    border: `1px solid ${ach.badgeColor}44`,
                    color: ach.badgeColor,
                  }}
                >
                  {ach.badge}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(17px, 2vw, 20px)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: "#fff",
                  marginBottom: 6,
                  lineHeight: 1.3,
                }}
              >
                {ach.title}
              </h3>

              {/* Result */}
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: ach.badgeColor,
                  marginBottom: 8,
                }}
              >
                {ach.result}
              </div>

              {/* Organizer */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--text-secondary)",
                  marginBottom: 14,
                }}
              >
                {ach.organizer} · {ach.date}
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                }}
              >
                {ach.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
