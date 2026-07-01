"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Artificial Intelligence",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "LLMs", "RAG", "Multi AI Agents"]
  },
  {
    title: "Engineering & Frameworks",
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit Learn", "FastAPI", "React", "Next.js", "TypeScript", "Node.js"]
  },
  {
    title: "AI Integrations & APIs",
    skills: ["OpenAI API", "Gemini API", "LangChain", "CrewAI", "AutoGen", "Claude"]
  },
  {
    title: "Infrastructure & Tools",
    skills: ["MongoDB", "PostgreSQL", "Docker", "Git", "AWS", "Vercel", "Cursor", "Figma"]
  }
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "120px 24px", position: "relative" }}>
      <div className="section-container" style={{ padding: 0 }}>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, marginBottom: 16 }}>
            Technical Arsenal
          </h2>
          <p style={{ fontSize: 18, color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
            The tools and frameworks I use to build scalable AI systems and full-stack applications.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
          {skillCategories.map((cat, i) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card"
              style={{ padding: 32 }}
            >
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 24, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
                {cat.title}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {cat.skills.map((skill, j) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    style={{ 
                      padding: "8px 16px", 
                      background: "rgba(255,255,255,0.03)", 
                      border: "1px solid var(--border-subtle)", 
                      borderRadius: "8px", 
                      fontSize: 14, 
                      color: "var(--text-secondary)",
                      transition: "color 0.2s"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
