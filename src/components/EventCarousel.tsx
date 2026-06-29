"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const eventPhotos = [
  { src: "/IMG-20250804-WA0017.jpeg", title: "Handloom Hackathon 2025 - National Finalist" },
  { src: "/IMG_20250804_161149.jpg", title: "Handloom Hackathon 2025 @ IIT Delhi" },
  { src: "/IMG-20250804-WA0042.jpg", title: "Handloom Hackathon 2025" },
  { src: "/nasa hackathon.jpg", title: "NASA Space Apps Challenge 2025" },
  { src: "/nasasac_shortlist.png", title: "NASA Space Apps Challenge 2025 Shortlist" },
  { src: "/cgiphoto2.jpg", title: "Future Ready AI Summit @ CGI Bangalore" },
  { src: "/cgiphoto1.png", title: "Future Ready AI Summit @ CGI Bangalore" },
  { src: "/rightxsummit_event.png", title: "RightsX Summit - Geneva" },
  { src: "/united_nation.png", title: "RightsX Summit - UN Human Rights" },
  { src: "/tansam intenship.png", title: "TANSAM Centre of Excellence Internship" },
  { src: "/forge2qualifier2.png", title: "USAII Global AI Hackathon" },
  { src: "/panimalar_event.png", title: "SIH 2k25 Intra-College Winners" },
  { src: "/Screenshot_2025-12-07-19-21-00-604_com.google.android.gm.jpg", title: "RightsX Summit Selection" },
  { src: "/Screenshot_2025-07-31-19-27-55-856_us.zoom.videomeetings.jpg", title: "Hackathon Presentation" },
];

export default function EventCarousel() {
  const [selected, setSelected] = useState<{src: string, title: string} | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section style={{ padding: "60px 0", background: "var(--bg-card)", overflow: "hidden", position: "relative" }}>
      <div className="section-container" style={{ marginBottom: "40px" }}>
        <h2 className="section-title">
          <span className="gradient-text">Event</span> Highlights
        </h2>
        <p className="section-subtitle">Moments from hackathons, summits, and tech events.</p>
      </div>

      {/* Adding a hidden audio tag for voiceover as requested */}
      <audio id="voiceover" loop>
        <source src="/voice/voiceover.mp3" type="audio/mpeg" />
      </audio>

      <div 
        style={{ position: "relative", width: "100%", display: "flex", overflow: "hidden" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left/Right fading gradients */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "15%", background: "linear-gradient(to right, var(--bg-card), transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "15%", background: "linear-gradient(to left, var(--bg-card), transparent)", zIndex: 2, pointerEvents: "none" }} />

        <motion.div
          animate={{ x: isHovered ? "0%" : ["0%", "-50%"] }} // Pause on hover by stopping animation
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 50, // Slower scrolling so it's easier to see
          }}
          style={{
            display: "flex",
            gap: "24px",
            padding: "0 24px",
            width: "max-content",
            cursor: "pointer"
          }}
        >
          {/* Double the array to make the infinite scroll seamless */}
          {[...eventPhotos, ...eventPhotos].map((photo, i) => (
            <div
              key={i}
              onClick={() => setSelected(photo)}
              style={{
                width: "320px",
                height: "220px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid var(--border-subtle)",
                flexShrink: 0,
                position: "relative",
                background: "#000",
                group: "true"
              }}
              className="carousel-item-group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease, opacity 0.5s ease",
                  opacity: 0.85
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.opacity = "0.85";
                }}
              />
              <div 
                style={{
                  position: "absolute",
                  bottom: 0, left: 0, right: 0,
                  padding: "40px 16px 16px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                  pointerEvents: "none",
                }}
              >
                <h4 style={{ 
                  margin: 0, 
                  color: "#fff", 
                  fontSize: "14px", 
                  fontWeight: 600, 
                  lineHeight: 1.3,
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)"
                }}>
                  {photo.title}
                </h4>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 9999,
              background: "rgba(0,0,0,0.9)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              padding: "40px"
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: "90vw", maxHeight: "80vh", position: "relative" }}
            >
              <button 
                onClick={() => setSelected(null)}
                style={{ 
                  position: "absolute", top: -40, right: 0, 
                  background: "transparent", border: "none", color: "#fff", 
                  fontSize: 32, cursor: "pointer" 
                }}
              >
                &times;
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={selected.src} 
                alt={selected.title} 
                style={{ maxWidth: "100%", maxHeight: "80vh", borderRadius: 12, objectFit: "contain", background: "#000" }} 
              />
              <div style={{ 
                position: "absolute", bottom: -50, left: 0, right: 0, 
                textAlign: "center", color: "#fff", fontFamily: "var(--font-display)", 
                fontSize: 20, fontWeight: 600, padding: 10 
              }}>
                {selected.title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
