"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlowBorder } from "@/components/ReactBits/GlowBorder";
import { Spotlight } from "@/components/ReactBits/Spotlight";
import Link from "next/link";
import { projects } from "@/data/projects";

function ProjectModal({ proj, onClose }: { proj: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "rgba(0,0,0,0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 24 }}
        transition={{ type: "spring", damping: 28, stiffness: 320 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "rgba(10,10,10,0.95)",
          backdropFilter: "blur(40px)",
          border: `1px solid ${proj.accentColor}33`,
          borderRadius: 24,
          padding: "36px 36px 32px",
          maxWidth: 660,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: `0 0 80px ${proj.glowColor}, 0 40px 100px rgba(0,0,0,0.6)`,
          position: "relative",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 4 }}>
                {proj.title}
              </h2>
              <p style={{ color: proj.accentColor, fontSize: 14, fontWeight: 500 }}>{proj.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10,
              width: 36, height: 36,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "var(--text-muted)", fontSize: 18, flexShrink: 0,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)"; }}
          >
            ×
          </button>
        </div>

        {/* Live Status */}
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          padding: "4px 12px", borderRadius: 999,
          background: "#10b98115", border: "1px solid #10b98133",
          fontFamily: "var(--font-mono)", fontSize: 11, color: "#10b981", letterSpacing: "0.07em",
          marginBottom: 24,
        }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#10b981", animation: "pulse-glow 2s infinite" }} />
          🟢 Live · Production
        </span>

        {/* Sections */}
        {[
          { label: "Problem", content: proj.problem },
          { label: "Solution", content: proj.solution },
          { label: "Architecture", content: proj.architecture, mono: true },
          { label: "Lessons Learned", content: proj.lessons },
        ].map(({ label, content, mono }) => (
          <div key={label} style={{ marginBottom: 22 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: proj.accentColor, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
              {label}
            </div>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.75, fontFamily: mono ? "var(--font-mono)" : undefined }}>
              {content}
            </p>
          </div>
        ))}

        {/* Tech stack */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: proj.accentColor, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Tech Stack</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {proj.tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 12, paddingTop: 4 }}>
          <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Visit Website
          </a>
          <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ flex: 1, justifyContent: "center" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
          <button onClick={onClose} className="btn-ghost" style={{ justifyContent: "center" }}>Close</button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="section" style={{ background: "rgba(0,0,0,0.35)", position: "relative" }}>
      <Spotlight color="rgba(0,212,255,0.06)" size={600} />
      <div className="ambient-blob" style={{ width: 500, height: 500, background: "var(--accent-cyan)", top: "10%", right: "-15%", opacity: 0.04 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Centered Apple Header */}
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
                background: "var(--accent-cyan)",
                boxShadow: "0 0 8px var(--accent-cyan)",
              }}
            />
            Projects
          </div>
          <h2 className="section-title" style={{ textAlign: "center", maxWidth: 800 }}>
            What I&apos;ve{" "}
            <span className="text-gradient-cyan">Built.</span>
          </h2>
          <p className="section-sub" style={{ textAlign: "center", margin: "0 auto", maxWidth: 680 }}>
            Production AI systems spanning career intelligence, multi-agent automation, machine learning, generative AI, and marine safety.
          </p>
        </motion.div>

        {/* Flagship Card: TulasiAI */}
        {projects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 32 }}
          >
            <GlowBorder glowColor="rgba(0, 212, 255, 0.4)" borderRadius={24}>
              <div
                style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(10,12,18,0.85) 100%)",
                  backdropFilter: "blur(28px)",
                  border: "1px solid rgba(0, 212, 255, 0.2)",
                  padding: "40px",
                  position: "relative",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
                }}
              >
                {/* Top delicate specular highlight line */}
                <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 1, background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.6), transparent)" }} />

                <div className="flagship-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 40, alignItems: "center" }}>
                  <div>
                    {/* Header badge row */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "4px 12px",
                          borderRadius: 999,
                          background: "rgba(0, 212, 255, 0.1)",
                          border: "1px solid rgba(0, 212, 255, 0.3)",
                          fontFamily: "var(--font-mono)",
                          fontSize: 11,
                          color: "var(--accent-cyan)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                        }}
                      >
                        ⚡ Flagship Platform
                      </span>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "4px 12px",
                          borderRadius: 999,
                          background: "rgba(16, 185, 129, 0.12)",
                          border: "1px solid rgba(16, 185, 129, 0.3)",
                          fontFamily: "var(--font-mono)",
                          fontSize: 11,
                          color: "#10b981",
                        }}
                      >
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", animation: "pulse-glow 2s infinite" }} />
                        Live in Production
                      </span>
                    </div>

                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff", marginBottom: 6 }}>
                      {projects[0].title}
                    </h3>
                    <p style={{ color: "var(--accent-cyan)", fontSize: 16, fontWeight: 500, marginBottom: 16 }}>
                      {projects[0].subtitle}
                    </p>

                    <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 20 }}>
                      {projects[0].description}
                    </p>

                    {/* Features row */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                      {projects[0].features.map((f) => (
                        <span
                          key={f}
                          style={{
                            padding: "4px 12px",
                            borderRadius: 8,
                            fontSize: 12,
                            fontFamily: "var(--font-mono)",
                            background: "rgba(0, 212, 255, 0.08)",
                            border: "1px solid rgba(0, 212, 255, 0.25)",
                            color: "var(--accent-cyan)",
                          }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 28 }}>
                      {projects[0].tech.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
                      <a
                        href={projects[0].demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        aria-label={`Visit ${projects[0].title}`}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        Launch Platform
                      </a>
                      <button
                        onClick={() => setSelected(projects[0])}
                        className="btn-ghost"
                        style={{ cursor: "pointer" }}
                      >
                        Explore Architecture
                      </button>
                      <Link
                        href={`/projects/${projects[0].id}`}
                        className="btn-ghost"
                      >
                        Deep Dive
                      </Link>
                      <a
                        href={projects[0].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                        style={{ padding: "10px 14px" }}
                        aria-label="GitHub"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Right side metrics showcase */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14 }}>
                    {projects[0].metrics?.map((m) => (
                      <div
                        key={m.label}
                        style={{
                          padding: "20px 24px",
                          borderRadius: 16,
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                          {m.label}
                        </span>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 800, color: "var(--accent-cyan)" }}>
                          {m.value}
                        </span>
                      </div>
                    ))}
                    <div
                      style={{
                        padding: "16px 20px",
                        borderRadius: 16,
                        background: "rgba(0, 212, 255, 0.05)",
                        border: "1px dashed rgba(0, 212, 255, 0.2)",
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                        color: "rgba(255,255,255,0.75)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: "var(--accent-cyan)", fontWeight: 600 }}>Architecture: </span>
                      {projects[0].architecture}
                    </div>
                  </div>
                </div>
              </div>
            </GlowBorder>
          </motion.div>
        )}

        {/* 3 Companion Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {projects.slice(1).map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.1, duration: 0.55 }}
            >
              <GlowBorder
                glowColor={proj.glowColor.replace("0.12", "0.5")}
                borderRadius={20}
                style={{ height: "100%" }}
              >
                <div
                  className="project-card"
                  style={{
                    borderRadius: 20,
                    overflow: "hidden",
                    height: "100%",
                    background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(12,12,16,0.65) 100%)",
                    backdropFilter: "blur(24px)",
                    border: `1px solid ${proj.accentColor}25`,
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
                    transition: "transform 0.3s ease, border-color 0.3s ease",
                  }}
                >
                  {/* Top accent line */}
                  <div style={{ height: 2, background: `linear-gradient(90deg, ${proj.accentColor}, transparent)` }} />

                  <div style={{ padding: "28px 26px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                    {/* Header */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: proj.accentColor, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                        {proj.category}
                      </span>
                      {/* Live badge */}
                      <span style={{
                        display: "flex", alignItems: "center", gap: 5,
                        fontFamily: "var(--font-mono)", fontSize: 10,
                        color: "#10b981", letterSpacing: "0.06em",
                        padding: "3px 10px", borderRadius: 999,
                        background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)",
                      }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#10b981", flexShrink: 0, animation: "pulse-glow 2s infinite" }} />
                        Live
                      </span>
                    </div>

                    {/* Title */}
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px, 2.5vw, 24px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#fff", marginBottom: 4 }}>
                      {proj.title}
                    </h3>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: proj.accentColor, marginBottom: 14, fontWeight: 500 }}>
                      {proj.subtitle}
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 18, flex: 1 }}>
                      {proj.description}
                    </p>

                    {/* Feature pills */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                      {proj.features.map((f) => (
                        <span key={f} style={{
                          padding: "3px 10px", borderRadius: 6, fontSize: 11,
                          fontFamily: "var(--font-mono)",
                          background: proj.glowColor,
                          border: `1px solid ${proj.accentColor}33`,
                          color: proj.accentColor,
                        }}>
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 22 }}>
                      {proj.tech.slice(0, 4).map((t) => (<span key={t} className="tag">{t}</span>))}
                      {proj.tech.length > 4 && <span className="tag">+{proj.tech.length - 4}</span>}
                    </div>

                    {/* Actions */}
                    <div style={{ display: "flex", gap: 8 }}>
                      <button
                        onClick={() => setSelected(proj)}
                        className="btn-primary"
                        style={{ flex: 1, justifyContent: "center", padding: "10px", fontSize: 13, cursor: "pointer" }}
                      >
                        Explore
                      </button>
                      <Link
                        href={`/projects/${proj.id}`}
                        className="btn-ghost"
                        style={{ padding: "10px 14px", fontSize: 13 }}
                      >
                        Details
                      </Link>
                      {proj.demo && proj.demo !== "#" && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost"
                          style={{ padding: "10px 12px", fontSize: 13 }}
                          aria-label={`Visit ${proj.title}`}
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        </a>
                      )}
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                        style={{ padding: "10px 12px", fontSize: 13 }}
                        aria-label={`View ${proj.title} on GitHub`}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </GlowBorder>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal proj={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .flagship-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
