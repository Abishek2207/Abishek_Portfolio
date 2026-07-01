"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" style={{ 
      position: "relative", 
      padding: "160px 24px 80px", 
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      overflow: "hidden"
    }}>
      {/* Background Gradient Mesh */}
      <div style={{
        position: "absolute",
        top: "-10%", left: "50%", transform: "translateX(-50%)",
        width: "800px", height: "800px",
        background: "radial-gradient(circle, rgba(108,92,231,0.08) 0%, rgba(9,9,11,0) 70%)",
        zIndex: 0, pointerEvents: "none"
      }} />

      <div className="section-container" style={{ padding: 0, zIndex: 1, position: "relative", width: "100%" }}>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "64px", 
          alignItems: "center",
          marginBottom: "80px"
        }}>
          
          {/* LEFT COLUMN */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ 
              display: "inline-flex", alignItems: "center", gap: 8, 
              padding: "6px 12px", borderRadius: "99px", 
              background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.2)", 
              marginBottom: 24, fontSize: 12, fontWeight: 600, color: "var(--accent-green)", letterSpacing: "0.05em" 
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent-green)", boxShadow: "0 0 8px var(--accent-green)" }} />
              OPEN TO AI ENGINEERING OPPORTUNITIES
            </div>

            <h1 style={{ marginBottom: 16 }}>
              ABISHEK R
            </h1>
            
            <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", color: "var(--text-secondary)", marginBottom: 24, fontWeight: 500, letterSpacing: "-0.02em" }}>
              AI Engineer <br/>
              Founder @ TulasiAI <br/>
              <span className="gradient-text-accent" style={{ fontWeight: 600 }}>Building AI Products that Solve Real Problems.</span>
            </h2>

            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: 40, maxWidth: 540 }}>
              B.Tech Artificial Intelligence & Machine Learning student passionate about Generative AI, AI Agents, Machine Learning and Full Stack Engineering. I enjoy building products that combine intelligence, design and user experience.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#projects" className="btn-primary">
                View Projects 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="/Abishek.pdf" target="_blank" className="btn-secondary">
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <div style={{ position: "relative", width: "100%", maxWidth: "380px" }}>
              {/* Abstract mesh behind portrait */}
              <div style={{
                position: "absolute",
                top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                width: "120%", height: "120%",
                background: "radial-gradient(circle, rgba(108,92,231,0.15) 0%, rgba(0,210,255,0.05) 50%, transparent 70%)",
                filter: "blur(40px)",
                zIndex: 0
              }} />
              
              {/* Portrait Image */}
              <div style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                aspectRatio: "3/4",
                borderRadius: "var(--radius-xl)",
                background: "var(--bg-elevated)",
                border: "1px solid var(--border-medium)",
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
                transform: "translateY(-10px)"
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/abishekphoto.jpg" 
                  alt="Abishek R" 
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "contrast(1.05) brightness(0.95)" }} 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/abishekphoto.png"; // Fallback
                  }}
                />
              </div>

              {/* Quick Info Card */}
              <div className="glass-card" style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                zIndex: 2,
                padding: "20px",
                width: "calc(100% - 40px)",
                background: "rgba(18,18,20,0.8)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
              }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", fontSize: "13px" }}>
                  <div>
                    <div style={{ color: "var(--text-muted)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em", fontSize: 11 }}>Experience</div>
                    <div style={{ color: "var(--text-primary)", fontWeight: 500 }}>AI Engineer<br/>Founder<br/>Tech Creator</div>
                  </div>
                  <div>
                    <div style={{ color: "var(--text-muted)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em", fontSize: 11 }}>Location</div>
                    <div style={{ color: "var(--text-primary)", fontWeight: 500, marginBottom: 12 }}>India</div>
                    <div style={{ color: "var(--text-muted)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em", fontSize: 11 }}>Available For</div>
                    <div style={{ color: "var(--text-primary)", fontWeight: 500 }}>Internships & AI Roles</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* HERO METRICS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
            marginTop: "60px"
          }}
        >
          {[
            { value: "4+", label: "Hackathons Participated" },
            { value: "3", label: "International Hackathon Finalist" },
            { value: "1", label: "Multi-Agent AI System Built" },
            { value: "Live", label: "AI Products Deployed" }
          ].map((metric, i) => (
            <div key={i} style={{
              padding: "24px",
              background: "transparent",
              borderLeft: "1px solid var(--border-medium)",
              display: "flex",
              flexDirection: "column",
              gap: 8
            }}>
              <div style={{ fontSize: "36px", fontWeight: 700, fontFamily: "var(--font-display)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                {metric.value}
              </div>
              <div style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.4 }}>
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
