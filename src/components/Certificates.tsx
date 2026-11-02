"use client";

import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";
import { Spotlight } from "@/components/ReactBits/Spotlight";

export default function Certificates() {
  return (
    <section id="certificates" className="section" style={{ background: "rgba(0,0,0,0.35)", position: "relative", overflow: "hidden" }}>
      <Spotlight color="rgba(124,58,237,0.06)" size={600} />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "15%",
          right: "5%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(108,92,231,0.06) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      
      <div className="section-container" style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Centered Apple Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
                background: "var(--accent-purple)",
                boxShadow: "0 0 8px var(--accent-purple)",
              }}
            />
            Verifiable Credentials
          </div>
          <h2 className="section-title" style={{ textAlign: "center", maxWidth: 800 }}>
            Certifications &amp; <span className="gradient-text">Credentials.</span>
          </h2>
          <p className="section-sub" style={{ textAlign: "center", margin: "0 auto", maxWidth: 660 }}>
            Official recognitions, global hackathon finals, and virtual job simulations demonstrating industry-ready skills.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 24,
        }}>
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "24px",
                background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(12,12,16,0.7) 100%)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "22px",
                color: "#fff",
                transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)";
                e.currentTarget.style.boxShadow = `0 20px 45px ${cert.glow || "rgba(0,212,255,0.15)"}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
              }}
            >
              <div>
                {/* Media Container: Certificate Image */}
                {cert.image ? (
                  <div style={{ height: "180px", marginBottom: "20px", borderRadius: "14px", overflow: "hidden", background: "#0B0F1A", position: "relative", border: "1px solid rgba(255,255,255,0.08)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={cert.image} alt={cert.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.92, transition: "opacity 0.3s" }} />
                  </div>
                ) : (
                  <div style={{ height: "180px", marginBottom: "20px", borderRadius: "14px", background: `linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))`, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.08)", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at center, ${cert.glow}, transparent 70%)`, opacity: 0.5 }} />
                    <div style={{ fontSize: 48, zIndex: 1, filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))" }}>
                      {cert.icon}
                    </div>
                    <div style={{ position: "absolute", bottom: 12, right: 12, fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-mono)", zIndex: 1, display: "flex", alignItems: "center", gap: 4 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                      PDF
                    </div>
                  </div>
                )}
                
                {/* Content: Category & Certificate Name */}
                <div style={{ color: cert.color, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6, fontFamily: "var(--font-mono)" }}>
                  {cert.category}
                </div>
                <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "8px", lineHeight: 1.35, color: "#ffffff" }}>
                  {cert.title}
                </h3>
                
                {/* Organization & Year */}
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: 18, lineHeight: 1.5 }}>
                  {cert.issuer} &bull; {cert.date}
                </p>
              </div>

              {/* Button: View Certificate */}
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                  padding: "10px 16px",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 600,
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0, 212, 255, 0.15)";
                  e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.4)";
                  e.currentTarget.style.color = "var(--accent-cyan)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                <span>View Certificate</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
