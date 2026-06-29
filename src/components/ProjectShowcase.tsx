"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

type Project = typeof projects[0];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function ProjectShowcase({ project }: { project: Project }) {
  return (
    <div style={{ backgroundColor: "#0B0F1A", color: "#FFFFFF", minHeight: "100vh", overflowX: "hidden" }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ 
        position: "relative", 
        padding: "160px 24px 100px", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        textAlign: "center",
        overflow: "hidden"
      }}>
        {/* Animated Background Gradients */}
        <div style={{
          position: "absolute",
          top: "-20%", left: "50%", transform: "translateX(-50%)",
          width: "800px", height: "800px",
          background: "radial-gradient(circle, rgba(108,92,231,0.15) 0%, rgba(11,15,26,0) 70%)",
          zIndex: 0, pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute",
          top: "10%", right: "-10%",
          width: "600px", height: "600px",
          background: "radial-gradient(circle, rgba(0,210,255,0.1) 0%, rgba(11,15,26,0) 70%)",
          zIndex: 0, pointerEvents: "none"
        }} />

        <motion.div 
          initial="hidden" animate="visible" variants={stagger}
          style={{ position: "relative", zIndex: 1, maxWidth: "900px" }}
        >
          <motion.div variants={fadeIn} style={{ display: "inline-block", padding: "6px 16px", borderRadius: "99px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", marginBottom: 24, fontSize: 14, color: "#00D2FF", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            {project.category}
          </motion.div>
          <motion.h1 variants={fadeIn} style={{ fontSize: "clamp(48px, 6vw, 72px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 24 }}>
            {project.title}
          </motion.h1>
          <motion.p variants={fadeIn} style={{ fontSize: "clamp(18px, 2vw, 22px)", color: "#AAB0C0", marginBottom: 40, lineHeight: 1.6, maxWidth: "700px", margin: "0 auto 40px" }}>
            {project.subtitle}
          </motion.p>
          
          <motion.div variants={fadeIn} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginBottom: 48 }}>
            {project.tech.map(t => (
              <span key={t} style={{ padding: "6px 14px", borderRadius: "8px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", fontSize: 13, color: "#E2E8F0" }}>{t}</span>
            ))}
          </motion.div>

          <motion.div variants={fadeIn} style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
              padding: "14px 28px", borderRadius: "12px", background: "linear-gradient(135deg, #6C5CE7 0%, #00D2FF 100%)", color: "#fff", fontWeight: 600, fontSize: 16, textDecoration: "none", boxShadow: "0 0 30px rgba(108,92,231,0.4)", display: "flex", alignItems: "center", gap: 8, transition: "transform 0.2s"
            }}>
              Live Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
              padding: "14px 28px", borderRadius: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontWeight: 600, fontSize: 16, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, backdropFilter: "blur(10px)", transition: "background 0.2s"
            }}>
              View Code
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. DEMO / SCREENSHOTS SECTION (Floating Window) */}
      <section style={{ padding: "0 24px 100px", display: "flex", justifyContent: "center" }}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
          style={{
            width: "100%", maxWidth: "1100px", aspectRatio: "16/9", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", overflow: "hidden", position: "relative", boxShadow: "0 40px 100px rgba(0,0,0,0.5)"
          }}
        >
          {/* Mac window header */}
          <div style={{ height: "40px", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", padding: "0 16px", gap: 8 }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F56" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FFBD2E" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#27C93F" }} />
          </div>
          <div style={{ width: "100%", height: "calc(100% - 40px)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
             {/* If we had an actual screenshot, it would go here. Using an interactive placeholder representing the UI */}
             <div style={{ position: "absolute", inset: 0, background: `linear-gradient(45deg, rgba(108,92,231,0.05), rgba(0,210,255,0.05))` }} />
             <div style={{ textAlign: "center", zIndex: 1 }}>
                <ProjectLogo logoUrl={project.logoUrl} title={project.title} />
                <h3 style={{ marginTop: 24, fontSize: 24, fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>{project.title} Interactive Interface</h3>
             </div>
          </div>
        </motion.div>
      </section>

      {/* 3. PROBLEM VS SOLUTION */}
      <section style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ padding: "40px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "24px" }}>
            <div style={{ width: 48, height: 48, borderRadius: "12px", background: "rgba(255,95,86,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, color: "#FF5F56" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>The Problem</h3>
            <p style={{ color: "#AAB0C0", lineHeight: 1.7, fontSize: 16 }}>{project.problem}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ padding: "40px", background: "rgba(108,92,231,0.05)", border: "1px solid rgba(108,92,231,0.2)", borderRadius: "24px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: "200px", height: "200px", background: "radial-gradient(circle, rgba(108,92,231,0.2) 0%, transparent 70%)", filter: "blur(30px)", zIndex: 0 }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ width: 48, height: 48, borderRadius: "12px", background: "rgba(108,92,231,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, color: "#6C5CE7" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>The Solution</h3>
              <p style={{ color: "#fff", lineHeight: 1.7, fontSize: 16 }}>{project.solution}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. ARCHITECTURE FLOW */}
      <section style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 40px)", fontWeight: 700, marginBottom: 16 }}>Architecture & Pipeline</h2>
        <p style={{ color: "#AAB0C0", marginBottom: 64 }}>The technical flow of data and machine learning models.</p>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
          {project.architecture.split("→").map((step, index, arr) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <div style={{ 
                padding: "16px 32px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px",
                fontSize: 16, fontWeight: 600, color: "#00D2FF", letterSpacing: "0.05em", backdropFilter: "blur(10px)"
              }}>
                {step.trim()}
              </div>
              {index !== arr.length - 1 && (
                <div style={{ width: 2, height: 40, background: "linear-gradient(to bottom, rgba(0,210,255,0.5), transparent)" }} />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. FEATURES & CAPABILITIES */}
      <section style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
           <h2 style={{ fontSize: "clamp(32px, 4vw, 40px)", fontWeight: 700, marginBottom: 16 }}>Key Features</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {project.features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, background: "rgba(255,255,255,0.05)", borderColor: "rgba(108,92,231,0.4)" }}
              style={{ padding: "32px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "20px", transition: "all 0.3s" }}
            >
              <div style={{ width: 40, height: 40, borderRadius: "10px", background: "rgba(0,210,255,0.1)", color: "#00D2FF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h4 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>{feature}</h4>
              <p style={{ color: "#AAB0C0", fontSize: 14, lineHeight: 1.6 }}>Core functionality powering the platform's AI intelligence and user experience.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. RESULTS & METRICS */}
      {project.metrics && (
        <section style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
           <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent, rgba(108,92,231,0.05), transparent)", pointerEvents: "none" }} />
           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 32, position: "relative", zIndex: 1 }}>
              {project.metrics.map((metric, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ textAlign: "center" }}>
                   <div style={{ fontSize: "clamp(48px, 6vw, 64px)", fontWeight: 800, color: "#fff", textShadow: "0 0 40px rgba(108,92,231,0.5)", marginBottom: 8 }}>
                     {metric.value}
                   </div>
                   <div style={{ fontSize: 16, color: "#00D2FF", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                     {metric.label}
                   </div>
                </motion.div>
              ))}
           </div>
        </section>
      )}

      {/* 7. FOOTER CTA */}
      <section style={{ padding: "120px 24px 160px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: 80 }}>
         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, marginBottom: 24 }}>Ready to explore the code?</h2>
            <p style={{ color: "#AAB0C0", fontSize: 18, marginBottom: 48, maxWidth: "600px", margin: "0 auto 48px" }}>
              Dive into the repository to see the implementation details, or try out the live product directly.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                padding: "16px 32px", borderRadius: "12px", background: "#fff", color: "#000", fontWeight: 700, fontSize: 16, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, transition: "transform 0.2s"
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
                GitHub Repository
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
                padding: "16px 32px", borderRadius: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontWeight: 700, fontSize: 16, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, transition: "background 0.2s"
              }}>
                Live Project Demo
              </a>
            </div>
         </motion.div>
      </section>

      {/* Navigation back */}
      <div style={{ position: "fixed", top: 32, left: 32, zIndex: 100 }}>
         <Link href="/" style={{ 
           display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderRadius: "99px",
           background: "rgba(11,15,26,0.5)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", textDecoration: "none", backdropFilter: "blur(10px)", fontSize: 14, fontWeight: 500
         }}>
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
           Back to Portfolio
         </Link>
      </div>

    </div>
  );
}

function ProjectLogo({ logoUrl, title }: { logoUrl: string; title: string }) {
  return (
    <div style={{ width: 80, height: 80, borderRadius: 20, border: `1px solid rgba(255,255,255,0.1)`, background: `rgba(255,255,255,0.05)`, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", margin: "0 auto" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logoUrl} alt={title} width={48} height={48} style={{ objectFit: "contain" }} onError={(e) => { const target = e.currentTarget as HTMLImageElement; target.style.display = "none"; const parent = target.parentElement; if (parent) parent.innerHTML = `<span style="font-size:32px;font-weight:800;color:#fff;font-family:system-ui">${title[0]}</span>`; }} />
    </div>
  );
}
