"use client";

import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" style={{ padding: "100px 24px", background: "var(--bg-base)", position: "relative" }}>
      {/* Decorative background elements */}
      <div style={{ position: "absolute", top: "10%", right: "5%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(108,92,231,0.05) 0%, transparent 70%)", zIndex: 0, pointerEvents: "none" }} />
      
      <div className="section-container" style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 64, textAlign: "center" }}
        >
          <div style={{ display: "inline-block", padding: "8px 16px", borderRadius: "99px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", marginBottom: 24, fontSize: 13, color: "var(--accent-purple)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Verifiable Credentials
          </div>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
            Achievements & <span style={{ background: "linear-gradient(135deg, #6C5CE7 0%, #00D2FF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Certificates</span>
          </h2>
          <p style={{ color: "#AAB0C0", fontSize: 18, maxWidth: "600px", margin: "0 auto" }}>
            Official recognitions, global hackathon finals, and virtual job simulations demonstrating industry-ready skills.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 24,
        }}>
          {certificates.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "24px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "20px",
                textDecoration: "none",
                color: "#fff",
                transition: "all 0.3s",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.boxShadow = `0 20px 40px ${cert.glow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Media Container */}
              {cert.image ? (
                <div style={{ height: "180px", marginBottom: "20px", borderRadius: "12px", overflow: "hidden", background: "#0B0F1A", position: "relative", border: "1px solid rgba(255,255,255,0.05)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={cert.image} alt={cert.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9, transition: "opacity 0.3s" }} />
                </div>
              ) : (
                <div style={{ height: "180px", marginBottom: "20px", borderRadius: "12px", background: `linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))`, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.05)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at center, ${cert.glow}, transparent 70%)`, opacity: 0.5 }} />
                  <div style={{ fontSize: 48, zIndex: 1, filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))" }}>
                    {cert.icon}
                  </div>
                  <div style={{ position: "absolute", bottom: 12, right: 12, fontSize: 12, color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-mono)", zIndex: 1, display: "flex", alignItems: "center", gap: 4 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                    PDF
                  </div>
                </div>
              )}
              
              {/* Content */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                <div>
                  <div style={{ color: cert.color, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>
                    {cert.category}
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "6px", lineHeight: 1.3 }}>{cert.title}</h3>
                  <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: 12, lineHeight: 1.5 }}>{cert.issuer} &bull; {cert.date}</p>
                </div>
                
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--text-secondary)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
