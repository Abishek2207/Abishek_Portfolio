"use client";

import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <section id="timeline" style={{ padding: "120px 24px", position: "relative" }}>
      <div className="section-container" style={{ padding: 0 }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 64 }}>
          
          {/* LEFT COLUMN: Experience & Achievements */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 32 }}>Experience</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 64 }}>
                {[
                  { role: "Founder", org: "TulasiAI", desc: "Architecting a comprehensive AI career intelligence platform." },
                  { role: "AI/ML Intern", org: "TANSAM Center of Excellence", desc: "Developed predictive models and data pipelines." },
                  { role: "AI Engineer", org: "Independent Projects", desc: "Building scalable AI solutions and multi-agent systems." }
                ].map((item, i) => (
                  <div key={i} className="glass-card" style={{ padding: 24 }}>
                    <div style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)" }}>{item.role}</div>
                    <div style={{ color: "var(--accent-cyan)", fontSize: 14, fontWeight: 500, marginBottom: 8 }}>{item.org}</div>
                    <div style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                ))}
              </div>

              <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 32 }}>Achievements</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: "🏆", text: "International Hackathon Finalist (3x)" },
                  { icon: "🚀", text: "Participated in 4+ Hackathons" },
                  { icon: "🤖", text: "Built Multi-Agent AI System" },
                  { icon: "💼", text: "Founder of TulasiAI" },
                  { icon: "🎤", text: "Tech Community Participant" },
                  { icon: "📚", text: "Continuous AI Learner" }
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px", background: "rgba(255,255,255,0.02)", borderRadius: 12, border: "1px solid var(--border-subtle)" }}>
                    <span style={{ fontSize: 20 }}>{item.icon}</span>
                    <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: What I'm Building & Learning */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              
              <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 32 }}>What I&apos;m Building</h2>
              <div className="glass-card" style={{ padding: 40, marginBottom: 64, background: "rgba(0,212,255,0.03)", borderColor: "rgba(0,212,255,0.1)" }}>
                <div style={{ width: 48, height: 48, background: "rgba(0,212,255,0.1)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 700, color: "var(--text-primary)", marginBottom: 12 }}>Current Focus</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.7 }}>
                  Building production-ready AI systems using autonomous agents, LLMs, and modern cloud infrastructure. Actively engineering solutions that move beyond simple chatbots into complex, reasoning-based workflows.
                </p>
              </div>

              <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 32 }}>Learning Now</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {[
                  "Agentic AI", "MCP (Model Context Protocol)", "Computer Vision", 
                  "AI Automation", "Generative AI", "LLM Engineering"
                ].map((topic, i) => (
                  <div key={i} style={{ 
                    padding: "12px 20px", 
                    background: "rgba(255,255,255,0.05)", 
                    borderRadius: 99, 
                    color: "var(--text-primary)", 
                    fontSize: 15,
                    fontWeight: 500,
                    border: "1px solid var(--border-medium)"
                  }}>
                    {topic}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
