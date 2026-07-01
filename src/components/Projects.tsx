"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "120px 24px", position: "relative" }}>
      <div className="section-container" style={{ padding: 0 }}>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, marginBottom: 16 }}>
            Featured Projects
          </h2>
          <p style={{ fontSize: 18, color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
            Real-world AI systems built for scale, performance, and user impact.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 0,
                overflow: "hidden"
              }}
            >
              {/* Premium Thumbnail Header */}
              <div style={{
                height: "200px",
                background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%)`,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "40px",
                borderBottom: "1px solid var(--border-subtle)"
              }}>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(circle at right, ${project.glowColor} 0%, transparent 60%)`,
                  opacity: 0.5,
                  zIndex: 0
                }} />
                
                <div style={{ zIndex: 1 }}>
                  <div style={{ 
                    display: "inline-block", 
                    padding: "4px 12px", 
                    borderRadius: 99, 
                    fontSize: 12, 
                    fontWeight: 600, 
                    background: "rgba(255,255,255,0.1)", 
                    color: "var(--text-primary)", 
                    marginBottom: 16 
                  }}>
                    Featured Project
                  </div>
                  <h3 style={{ fontSize: "32px", fontWeight: 800, color: "var(--text-primary)", marginBottom: 8, letterSpacing: "-0.02em" }}>
                    {project.title}
                  </h3>
                  <div style={{ color: project.accentColor, fontWeight: 500, fontSize: 16 }}>
                    {project.subtitle}
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div style={{ padding: "40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
                
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  <div>
                    <h4 style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: 8 }}>The Problem</h4>
                    <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.6 }}>{project.problem}</p>
                  </div>
                  <div>
                    <h4 style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: 8 }}>The Solution</h4>
                    <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.6 }}>{project.solution}</p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
                    {project.tech.map((t, i) => (
                      <span key={i} style={{ padding: "4px 10px", background: "rgba(255,255,255,0.05)", borderRadius: 6, fontSize: 12, color: "var(--text-secondary)", border: "1px solid var(--border-subtle)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", gap: 16, marginBottom: 32 }}>
                    {project.metrics.map((m, i) => (
                      <div key={i}>
                        <div style={{ fontSize: 24, fontWeight: 700, color: "var(--text-primary)" }}>{m.value}</div>
                        <div style={{ fontSize: 12, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: 16 }}>
                    <Link href={`/projects/${project.id}`} className="btn-primary" style={{ flex: 1, padding: "12px 0" }}>
                      View Details
                    </Link>
                    {project.demo !== "#" && (
                      <a href={project.demo} target="_blank" className="btn-secondary" style={{ flex: 1, padding: "12px 0" }}>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
