"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timelineEvents = [
  {
    year: "2026",
    title: "Amazon ML Summer School",
    org: "Shortlisted Candidate",
    description: "Selected as a shortlisted candidate for Amazon ML Summer School 2026 — a highly competitive programme covering advanced ML topics.",
    type: "achievement",
    color: "#f59e0b",
    image: "",
    images: [] as string[],
  },
  {
    year: "2026",
    title: "USAII Global AI Hackathon",
    org: "Top 25% (Rank 107/424) · Qualifier",
    description: "Ranked in the top 25% globally (107 out of 424 teams) in the USAII Global AI Hackathon 2026 Qualifier.",
    type: "achievement",
    color: "#e879f9",
    image: "",
    images: [] as string[],
  },
  {
    year: "2025",
    title: "SIH 2k25",
    org: "Intra-College Winning Team",
    description: "Won the Smart India Hackathon (SIH) 2025 intra-college level, developing innovative solutions under intense time constraints.",
    type: "achievement",
    color: "#10b981",
    image: "",
    images: [] as string[],
  },
  {
    year: "2025",
    title: "Handloom Hackathon",
    org: "National Finalist · IIT Delhi",
    description: "Shortlisted as a National Finalist for the Handloom Hackathon 2025 at IIT Delhi — organised by Ministry of Textiles & DCHB. Presented WeaveTales AI, our AI-powered handloom platform.",
    type: "achievement",
    color: "#e879f9",
    image: "/IMG-20250804-WA0017.jpeg",
    images: [
      "/IMG_20250804_161149.jpg",
      "/IMG-20250804-WA0042.jpg",
    ],
  },
  {
    year: "2025",
    title: "NASA Space Apps Challenge",
    org: "Participant",
    description: "Participated in the NASA Space Apps Challenge 2025, one of the world's largest hackathons, building solutions for real NASA mission challenges.",
    type: "achievement",
    color: "#e879f9",
    image: "/nasa hackathon.jpg",
    images: ["/nasasac_shortlist.png"],
  },
  {
    year: "2025",
    title: "Future Ready AI Summit",
    org: "Participant · CGI, Bangalore",
    description: "Attended the Future Ready AI Summit at CGI, Bangalore — an industry gathering focused on AI product development, startup ecosystems, and emerging technologies.",
    type: "education",
    color: "var(--accent-cyan)",
    image: "/cgiphoto2.jpg",
    images: [] as string[],
  },
  {
    year: "2025",
    title: "RightsX Summit",
    org: "Approved Delegate · Palais Wilson, Geneva",
    description: "Approved delegate for the 'Innovating for Humanity' Summit at Palais Wilson, Geneva — the home of the UN Human Rights Office.",
    type: "achievement",
    color: "var(--accent-purple)",
    image: "/rightxsummit_event.png",
    images: [
      "/united_nation.png",
      "/Screenshot_2025-12-07-19-21-00-604_com.google.android.gm.jpg",
    ],
  },
  {
    year: "2025",
    title: "AI & ML Intern",
    org: "TANSAM Centre of Excellence",
    description: "Applied data analytics and machine learning techniques to generate actionable business insights in an Industry 4.0 environment.",
    type: "experience",
    color: "var(--accent-cyan)",
    image: "/tansam intenship.png",
    images: [] as string[],
  },
  {
    year: "2025",
    title: "Forage Job Simulations",
    org: "Completed · Multiple Programs",
    description: "Completed multiple Forage virtual job simulation programs — gaining hands-on exposure to real-world workflows from top global companies.",
    type: "education",
    color: "var(--accent-cyan)",
    image: "",
    images: [] as string[],
  },
  {
    year: "2025",
    title: "Founded TulasiAI",
    org: "Founder & AI Engineer",
    description: "Founded TulasiAI — an AI Career Intelligence Platform built on LLMs, RAG, and AI Agents to guide students and professionals through their career journeys.",
    type: "current",
    color: "#10b981",
    isCurrent: true,
    image: "",
    images: [] as string[],
  },
  {
    year: "2025",
    title: "Launched TulasiAI, TulasiHealth, WeaveTales AI & OceanGuard AI",
    org: "4 Live AI Products",
    description: "Successfully deployed four production AI platforms: TulasiAI (career intelligence), TulasiHealth (healthcare), WeaveTales AI (handloom commerce), and OceanGuard AI (marine risk detection).",
    type: "current",
    color: "#10b981",
    isCurrent: true,
    image: "",
    images: [] as string[],
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
      <div style={{ padding: "0 32px 0 0", paddingBottom: 48 }}>
        {index % 2 === 0 && <EventCard event={event} align="right" />}
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
        <div
          style={{
            width: 14, height: 14, borderRadius: "50%",
            background: event.color, border: `2px solid #030303`,
            boxShadow: `0 0 16px ${event.color}80`, flexShrink: 0,
            marginTop: 20, position: "relative", zIndex: 1,
          }}
        />
        {event.isCurrent && (
          <motion.div
            animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ position: "absolute", top: 17, width: 20, height: 20, borderRadius: "50%", background: event.color, zIndex: 0 }}
          />
        )}
        <div style={{ flex: 1, width: 1, background: `linear-gradient(180deg, ${event.color}60, rgba(255,255,255,0.06))`, marginTop: 4 }} />
      </div>

      <div style={{ padding: "0 0 48px 32px" }}>
        {index % 2 === 1 && <EventCard event={event} align="left" />}
      </div>
    </motion.div>
  );
}

function EventCard({ event, align }: { event: typeof timelineEvents[0]; align: "left" | "right" }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.025)",
      border: `1px solid ${event.color}22`,
      borderRadius: 16, padding: "20px 22px", textAlign: align,
      overflow: "hidden",
      transition: "border-color 0.3s, box-shadow 0.3s",
    }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = `${event.color}44`;
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 24px ${event.color}12`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = `${event.color}22`;
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: event.color, letterSpacing: "0.1em", marginBottom: 6 }}>{event.year}</div>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
        {event.title}
        {event.isCurrent && (
          <span style={{ marginLeft: 8, padding: "2px 8px", borderRadius: 999, background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", fontSize: 10, fontFamily: "var(--font-mono)", color: "#10b981", verticalAlign: "middle", letterSpacing: "0.08em" }}>
            NOW
          </span>
        )}
      </h3>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: event.color, marginBottom: 10, opacity: 0.85 }}>{event.org}</div>
      <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: event.image ? 16 : 0 }}>{event.description}</p>
      {event.image && (
        <div style={{ marginTop: 12, borderRadius: 12, overflow: "hidden", border: `1px solid rgba(255,255,255,0.1)` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={event.image} alt={event.title} style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
      )}
      {event.images && event.images.length > 0 && (
        <div style={{ display: "flex", gap: 8, marginTop: 10, overflowX: "auto", paddingBottom: 4, justifyContent: align === "right" ? "flex-end" : "flex-start" }}>
          {event.images.map((img, idx) => (
            <div key={idx} style={{ flexShrink: 0, borderRadius: 10, overflow: "hidden", border: `1px solid rgba(255,255,255,0.08)`, width: 130 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt={`${event.title} proof ${idx + 1}`} style={{ width: "100%", height: 90, objectFit: "cover", display: "block" }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="timeline" className="section" style={{ background: "rgba(0,0,0,0.25)", overflow: "hidden" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 80, textAlign: "center" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Journey</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            My <span className="text-gradient-cyan">Timeline.</span>
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            From student to founder — verified milestones that shaped my path in AI.
          </p>
        </motion.div>

        <div className="timeline-desktop">
          {timelineEvents.map((event, i) => <TimelineItem key={i} event={event} index={i} />)}
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
                <div style={{ position: "absolute", left: -39, top: 20, width: 12, height: 12, borderRadius: "50%", background: event.color, boxShadow: `0 0 12px ${event.color}80`, border: "2px solid #030303" }} />
                <div style={{ background: "rgba(255,255,255,0.025)", border: `1px solid ${event.color}22`, borderRadius: 14, padding: "18px 20px", overflow: "hidden" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: event.color, letterSpacing: "0.1em", marginBottom: 4 }}>{event.year}</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 3 }}>
                    {event.title}
                    {event.isCurrent && (
                      <span style={{ marginLeft: 8, padding: "2px 7px", borderRadius: 999, background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", fontSize: 9, fontFamily: "var(--font-mono)", color: "#10b981", verticalAlign: "middle" }}>NOW</span>
                    )}
                  </h3>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: event.color, marginBottom: 8, opacity: 0.85 }}>{event.org}</div>
                  <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.65, marginBottom: event.image ? 14 : 0 }}>{event.description}</p>
                  {event.image && (
                    <div style={{ marginTop: 12, borderRadius: 10, overflow: "hidden", border: `1px solid rgba(255,255,255,0.1)` }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={event.image} alt={event.title} style={{ width: "100%", height: "auto", display: "block" }} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`.timeline-mobile { display: none; } @media (max-width: 768px) { .timeline-desktop { display: none; } .timeline-mobile { display: block; } }`}</style>
    </section>
  );
}
