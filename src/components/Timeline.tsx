"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timelineEvents = [
  {
    year: "2022",
    title: "Started B.Tech AIML",
    org: "Panimalar Engineering College, Chennai",
    description: "Began pursuing Bachelor of Technology in Artificial Intelligence and Machine Learning — igniting a deep passion for building intelligent systems.",
    type: "education",
    color: "var(--accent-cyan)",
  },
  {
    year: "2023",
    title: "First AI Projects",
    org: "Self-directed Learning",
    description: "Built first ML models using Python, Scikit-learn and TensorFlow. Explored Computer Vision with OpenCV and began understanding the power of neural networks.",
    type: "project",
    color: "var(--accent-purple)",
  },
  {
    year: "2024",
    title: "Founded TulasiAI",
    org: "TulasiAI · Founder",
    description: "Founded TulasiAI — an AI career intelligence startup — and architected the platform end-to-end using LLMs, RAG pipelines, FastAPI, and Next.js.",
    type: "milestone",
    color: "var(--accent-cyan)",
    highlight: true,
  },
  {
    year: "2024",
    title: "Hackathon Achievements",
    org: "Multiple Hackathons",
    description: "Won 2+ hackathons building AI solutions, including projects spanning healthcare interoperability, marine intelligence, and handloom commerce.",
    type: "achievement",
    color: "#e879f9",
  },
  {
    year: "2025",
    title: "Expanded AI Portfolio",
    org: "TulasiHealth · WeaveTales · OceanGuard AI",
    description: "Expanded beyond TulasiAI to build TulasiHealth (healthcare AI), WeaveTales (CV-powered handloom platform), and OceanGuard AI (marine risk detection).",
    type: "project",
    color: "#10b981",
  },
  {
    year: "2025–26",
    title: "Graduating & Scaling",
    org: "Panimalar Engineering College · TulasiAI",
    description: "Completing B.Tech with CGPA 7.87 while scaling TulasiAI to production, seeking AI engineering roles, and continuing to build at the intersection of AI and real-world impact.",
    type: "current",
    color: "var(--accent-cyan)",
    isCurrent: true,
  },
];

function TimelineItem({ event, index }: { event: typeof timelineEvents[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 48px 1fr",
        gap: 0,
        alignItems: "start",
        marginBottom: 0,
      }}
    >
      {/* Left content (even = content, odd = empty) */}
      <div style={{ padding: "0 32px 0 0", paddingBottom: 48 }}>
        {index % 2 === 0 && (
          <EventCard event={event} align="right" />
        )}
      </div>

      {/* Center dot + line */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: event.color,
            border: `2px solid #030303`,
            boxShadow: `0 0 16px ${event.color}80`,
            flexShrink: 0,
            marginTop: 20,
            position: "relative",
            zIndex: 1,
          }}
        />
        {event.isCurrent && (
          <motion.div
            animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              position: "absolute",
              top: 17,
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: event.color,
              zIndex: 0,
            }}
          />
        )}
        <div style={{ flex: 1, width: 1, background: `linear-gradient(180deg, ${event.color}60, rgba(255,255,255,0.06))`, marginTop: 4 }} />
      </div>

      {/* Right content (odd = content, even = empty) */}
      <div style={{ padding: "0 0 48px 32px" }}>
        {index % 2 === 1 && (
          <EventCard event={event} align="left" />
        )}
      </div>
    </motion.div>
  );
}

function EventCard({ event, align }: { event: typeof timelineEvents[0]; align: "left" | "right" }) {
  return (
    <div
      style={{
        background: event.highlight
          ? `linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(124,58,237,0.04) 100%)`
          : "rgba(255,255,255,0.025)",
        border: `1px solid ${event.highlight ? event.color + "33" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 16,
        padding: "20px 22px",
        textAlign: align,
      }}
    >
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: event.color,
        letterSpacing: "0.1em",
        marginBottom: 6,
      }}>
        {event.year}
      </div>
      <h3 style={{
        fontFamily: "var(--font-display)",
        fontSize: 17,
        fontWeight: 700,
        color: "#fff",
        marginBottom: 4,
        letterSpacing: "-0.01em",
      }}>
        {event.title}
        {event.isCurrent && (
          <span style={{
            marginLeft: 8, padding: "2px 8px", borderRadius: 999,
            background: "rgba(0,212,255,0.12)", border: "1px solid rgba(0,212,255,0.3)",
            fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--accent-cyan)",
            verticalAlign: "middle", letterSpacing: "0.08em",
          }}>
            NOW
          </span>
        )}
      </h3>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: event.color, marginBottom: 10, opacity: 0.8 }}>
        {event.org}
      </div>
      <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7 }}>
        {event.description}
      </p>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="timeline" className="section" style={{ background: "rgba(0,0,0,0.25)", overflow: "hidden" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 80, textAlign: "center" }}
        >
          <div className="section-label" style={{ justifyContent: "center" }}>Journey</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            My{" "}
            <span className="text-gradient-cyan">Timeline.</span>
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            From student to founder — the milestones that shaped my path as an AI builder.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="timeline-desktop">
          {timelineEvents.map((event, i) => (
            <TimelineItem key={i} event={event} index={i} />
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="timeline-mobile">
          <div style={{ position: "relative", paddingLeft: 32 }}>
            <div className="timeline-line" />
            {timelineEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{ position: "relative", marginBottom: 32 }}
              >
                <div style={{
                  position: "absolute",
                  left: -39,
                  top: 20,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: event.color,
                  boxShadow: `0 0 12px ${event.color}80`,
                  border: "2px solid #030303",
                }} />
                <div style={{
                  background: "rgba(255,255,255,0.025)",
                  border: `1px solid ${event.color}22`,
                  borderRadius: 14,
                  padding: "18px 20px",
                }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: event.color, letterSpacing: "0.1em", marginBottom: 4 }}>{event.year}</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 3 }}>{event.title}</h3>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: event.color, marginBottom: 8, opacity: 0.8 }}>{event.org}</div>
                  <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.65 }}>{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .timeline-mobile { display: none; }
        @media (max-width: 768px) {
          .timeline-desktop { display: none; }
          .timeline-mobile { display: block; }
        }
      `}</style>
    </section>
  );
}
