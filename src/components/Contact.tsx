"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" style={{ 
      padding: "160px 24px", 
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "80vh",
      overflow: "hidden"
    }}>
      
      {/* Animated Background Mesh */}
      <div style={{
        position: "absolute",
        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: "100%", height: "100%",
        background: "radial-gradient(circle at center, rgba(108,92,231,0.15) 0%, rgba(0,210,255,0.05) 40%, transparent 70%)",
        filter: "blur(60px)",
        zIndex: 0,
        pointerEvents: "none"
      }} />

      <div className="section-container" style={{ position: "relative", zIndex: 1, textAlign: "center", padding: 0 }}>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card"
          style={{ 
            padding: "80px 40px", 
            borderRadius: "var(--radius-xl)", 
            maxWidth: 800, 
            margin: "0 auto",
            background: "rgba(255,255,255,0.01)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)"
          }}
        >
          <div style={{ 
            display: "inline-flex", alignItems: "center", gap: 8, 
            padding: "6px 12px", borderRadius: "99px", 
            background: "rgba(255, 255, 255, 0.05)", border: "1px solid var(--border-subtle)", 
            marginBottom: 32, fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", letterSpacing: "0.05em" 
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent-cyan)", boxShadow: "0 0 8px var(--accent-cyan)" }} />
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <h2 style={{ 
            fontSize: "clamp(32px, 5vw, 56px)", 
            fontWeight: 800, 
            lineHeight: 1.1,
            color: "var(--text-primary)", 
            marginBottom: 24,
            letterSpacing: "-0.03em"
          }}>
            Let&apos;s Build Something <br/>
            <span className="gradient-text-accent">Amazing Together.</span>
          </h2>
          
          <p style={{ fontSize: 18, color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto 48px", lineHeight: 1.6 }}>
            Looking for a backend engineer, AI researcher, or full-stack builder? I&apos;m currently open to internships and full-time roles.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
            <a href="mailto:abishek7r@gmail.com" className="btn-primary" style={{ padding: "16px 32px", fontSize: 16 }}>
              Email Me
            </a>
            <a href="https://linkedin.com/in/abishek22" target="_blank" className="btn-secondary" style={{ padding: "16px 32px", fontSize: 16 }}>
              LinkedIn
            </a>
            <a href="https://github.com/Abishek2207" target="_blank" className="btn-secondary" style={{ padding: "16px 32px", fontSize: 16 }}>
              GitHub
            </a>
            <a href="/Abishek.pdf" target="_blank" className="btn-secondary" style={{ padding: "16px 32px", fontSize: 16 }}>
              Resume
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
