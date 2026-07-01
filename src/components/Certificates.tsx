"use client";

import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" style={{ padding: "120px 24px", position: "relative" }}>
      <div className="section-container" style={{ padding: 0 }}>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, marginBottom: 16 }}>
            Certifications & Proofs
          </h2>
          <p style={{ fontSize: 18, color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
            Verified credentials and hackathon shortlistings from top organizations.
          </p>
        </motion.div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
          gap: 24 
        }}>
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="glass-card"
              style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
            >
              <a 
                href={cert.pdf || cert.credentialUrl || cert.image} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}
              >
                {/* Visual Preview */}
                <div style={{ height: "180px", background: "#000", position: "relative", overflow: "hidden" }}>
                  {cert.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9, transition: "transform 0.5s ease" }} 
                      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                    />
                  ) : (
                    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, rgba(255,255,255,0.05), transparent)" }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* Text Content */}
                <div style={{ padding: 20, flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", marginBottom: 8, lineHeight: 1.4 }}>
                    {cert.title}
                  </h3>
                  <div style={{ fontSize: 14, color: "var(--accent-cyan)", fontWeight: 500, marginTop: "auto" }}>
                    {cert.issuer}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
