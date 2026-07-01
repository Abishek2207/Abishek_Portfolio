"use client";

import { motion } from "framer-motion";

const storyTimeline = [
  { year: "2024", title: "Started AIML Journey", description: "Began pursuing B.Tech in Artificial Intelligence and Machine Learning at Panimalar Engineering College." },
  { year: "2024", title: "Built ML Projects", description: "Developed initial machine learning models and computer vision pipelines, focusing on practical applications." },
  { year: "2025", title: "AI Internship", description: "Completed an Artificial Intelligence & Machine Learning internship at TANSAM Center of Excellence." },
  { year: "2025", title: "Hackathons", description: "Participated in NASA Space Apps and reached the National Finals of the Handloom Hackathon at IIT Delhi." },
  { year: "2025", title: "Founder of TulasiAI", description: "Founded an AI career intelligence platform powered by LLMs, RAG, and autonomous AI agents." },
  { year: "2026", title: "Building AI Agents", description: "Ranked Top 25% globally in the USAII Global AI Hackathon and focusing on multi-agent AI systems." },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "120px 24px", position: "relative" }}>
      <div className="section-container" style={{ padding: 0, maxWidth: "800px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, marginBottom: 16 }}>
            Who I Am
          </h2>
          <p style={{ fontSize: 18, color: "var(--text-secondary)", marginBottom: 64, lineHeight: 1.6 }}>
            My journey from learning the fundamentals of machine learning to architecting production-ready AI products.
          </p>
        </motion.div>

        <div style={{ position: "relative" }}>
          {/* Timeline connecting line */}
          <div style={{ position: "absolute", left: 15, top: 20, bottom: 20, width: 2, background: "linear-gradient(to bottom, transparent, var(--border-medium) 10%, var(--border-medium) 90%, transparent)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {storyTimeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ display: "flex", gap: 32, position: "relative", zIndex: 1 }}
              >
                {/* Node */}
                <div style={{ 
                  width: 32, height: 32, borderRadius: "50%", 
                  background: "var(--bg-base)", border: "2px solid var(--text-secondary)", 
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  marginTop: 4
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--text-primary)" }} />
                </div>
                
                {/* Content */}
                <div>
                  <div style={{ color: "var(--text-muted)", fontSize: 13, fontFamily: "var(--font-mono)", marginBottom: 4 }}>
                    {item.year}
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: "var(--text-primary)" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
