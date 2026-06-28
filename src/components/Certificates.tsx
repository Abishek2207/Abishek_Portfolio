"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "@/data/certificates";

function CertModal({ cert, onClose }: { cert: typeof certificates[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(16px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25 }}
        className="glass-strong"
        style={{
          borderRadius: 24,
          padding: 40,
          maxWidth: 600,
          width: "100%",
          maxHeight: "90vh",
          overflow: "auto",
          border: `1px solid ${cert.color}33`,
          boxShadow: `0 0 80px ${cert.glow}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
          <div>
            <span style={{ fontSize: 40 }}>{cert.icon}</span>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginTop: 8,
              marginBottom: 4,
            }}>{cert.title}</h2>
            <p style={{ color: cert.color, fontSize: 13, fontWeight: 500 }}>{cert.issuer}</p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 8,
              width: 36,
              height: 36,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#fff", fontSize: 18, flexShrink: 0,
            }}
          >
            \u00D7
          </button>
        </div>

        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 24, fontSize: 14 }}>
          {cert.description}
        </p>

        <div style={{
          height: 200,
          borderRadius: 16,
          marginBottom: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid var(--border-subtle)",
          background: `linear-gradient(135deg, ${cert.glow}, rgba(0,0,0,0.4))`,
          overflow: "hidden",
          position: "relative",
        }}>
          <img
            src={cert.image}
            alt={cert.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const placeholder = document.createElement("div");
              placeholder.style.cssText = "position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;";
              placeholder.innerHTML = `<span style="font-size:36px">${cert.icon}</span><span style="font-family:var(--font-mono);font-size:11px;color:var(--text-muted)">Upload certificate to ${cert.image}</span>`;
              target.parentElement?.appendChild(placeholder);
            }}
          />
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href={cert.image}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ flex: 1, justifyContent: "center", minWidth: 140 }}
          >
            View Certificate
          </a>
          <a
            href={cert.pdf || "#"}
            download
            className="btn-primary"
            style={{ flex: 1, justifyContent: "center", minWidth: 140 }}
          >
            Download PDF
          </a>
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-purple"
            style={{ flex: 1, justifyContent: "center", minWidth: 140 }}
          >
            Verify Credential
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Certificates() {
  const [selected, setSelected] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="section" style={{ background: "rgba(0,0,0,0.3)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 64, textAlign: "center" }}
        >
          <div className="section-label" style={{ justifyContent: "center" }}>
            Certificates
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Certificate{" "}
            <span className="text-gradient-cyan">Vault.</span>
          </h2>
          <p className="section-sub" style={{ margin: "0 auto", textAlign: "center" }}>
            Verified credentials and professional certifications across AI engineering and software development.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
        }}>
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="cert-card"
              onClick={() => setSelected(cert)}
              style={{ cursor: "pointer" }}
            >
              <div style={{
                height: 180,
                background: `linear-gradient(135deg, ${cert.glow}, rgba(0,0,0,0.4))`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                borderBottom: "1px solid var(--border-subtle)",
              }}>
                <div style={{ fontSize: 48 }}>{cert.icon}</div>
                <div style={{
                  position: "absolute",
                  top: 12, right: 12,
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  padding: "3px 10px",
                  borderRadius: 999,
                  background: "rgba(0,0,0,0.6)",
                  border: `1px solid ${cert.color}55`,
                  color: cert.color,
                  backdropFilter: "blur(8px)",
                }}>
                  {cert.date}
                </div>
              </div>

              <div style={{ padding: "20px 24px 24px" }}>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: cert.color,
                  letterSpacing: "0.1em",
                  marginBottom: 8,
                  textTransform: "uppercase",
                }}>
                  {cert.issuer}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: "#fff",
                  marginBottom: 10,
                  lineHeight: 1.3,
                }}>
                  {cert.title}
                </h3>
                <p style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                  marginBottom: 16,
                }}>
                  {cert.description}
                </p>

                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelected(cert); }}
                    className="btn-ghost"
                    style={{ flex: 1, justifyContent: "center", fontSize: 12, padding: "8px" }}
                  >
                    View Certificate
                  </button>
                  <a
                    href={cert.pdf || cert.image}
                    download
                    onClick={(e) => e.stopPropagation()}
                    className="btn-ghost"
                    style={{ padding: "8px 14px", fontSize: 12 }}
                    title="Download PDF"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <CertModal cert={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
