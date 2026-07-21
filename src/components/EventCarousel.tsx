"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const eventPhotos = [
  { src: "/abishek-childhood.jpg", title: "abishek childhood" },
  { src: "/abishekchildhood.jpeg", title: "abishekchildhood" },
  { src: "/abishekphoto.jpg", title: "abishekphoto" },
  { src: "/bigcode2206.png", title: "bigcode2206" },
  { src: "/cgiabiphoto.png", title: "cgiabiphoto" },
  { src: "/cgiphoto1.png", title: "cgiphoto1" },
  { src: "/cgiphoto2.jpg", title: "cgiphoto2" },
  { src: "/forge2qualifier2.png", title: "forge2qualifier2" },
  { src: "/forge2qualifierproof.png", title: "forge2qualifierproof" },
  { src: "/gdg.png", title: "gdg" },
  { src: "/graphical_design.png", title: "graphical design" },
  { src: "/IMG-20250516-WA0015.jpg", title: "IMG 20250516 WA0015" },
  { src: "/IMG-20250723-WA0002.jpg", title: "IMG 20250723 WA0002" },
  { src: "/IMG-20250726-WA0009.jpeg", title: "IMG 20250726 WA0009" },
  { src: "/IMG-20250804-WA0017.jpeg", title: "IMG 20250804 WA0017" },
  { src: "/IMG-20250804-WA0042.jpg", title: "IMG 20250804 WA0042" },
  { src: "/IMG-20250804-WA0047.jpg", title: "IMG 20250804 WA0047" },
  { src: "/IMG-20250804-WA0060.jpg", title: "IMG 20250804 WA0060" },
  { src: "/IMG_20250505_095551.jpg", title: "IMG 20250505 095551" },
  { src: "/IMG_20250505_095750.jpg", title: "IMG 20250505 095750" },
  { src: "/IMG_20250526_185648_540.webp", title: "IMG 20250526 185648 540" },
  { src: "/IMG_20250719_202203.jpg", title: "IMG 20250719 202203" },
  { src: "/IMG_20250804_161149.jpg", title: "IMG 20250804 161149" },
  { src: "/jobready.png", title: "jobready" },
  { src: "/nasa hackathon.jpg", title: "nasa hackathon" },
  { src: "/nasasac_shortlist.png", title: "nasasac shortlist" },
  { src: "/panimalar_event.png", title: "panimalar event" },
  { src: "/quantum_computing.png", title: "quantum computing" },
  { src: "/rightxsummit_event.png", title: "rightxsummit event" },
  { src: "/Screenshot 2026-06-29 224351.png", title: "Screenshot 2026 06 29 224351" },
  { src: "/Screenshot 2026-06-29 224419.png", title: "Screenshot 2026 06 29 224419" },
  { src: "/Screenshot 2026-06-29 224441.png", title: "Screenshot 2026 06 29 224441" },
  { src: "/Screenshot 2026-06-29 224457.png", title: "Screenshot 2026 06 29 224457" },
  { src: "/Screenshot 2026-06-29 224522.png", title: "Screenshot 2026 06 29 224522" },
  { src: "/Screenshot_2025-07-23-21-46-16-403_com.whatsapp (1).jpg", title: "Screenshot 2025 07 23 21 46 16 403 com.whatsapp (1)" },
  { src: "/Screenshot_2025-07-23-21-46-16-403_com.whatsapp.jpg", title: "Screenshot 2025 07 23 21 46 16 403 com.whatsapp" },
  { src: "/Screenshot_2025-07-31-19-27-55-856_us.zoom.videomeetings.jpg", title: "Screenshot 2025 07 31 19 27 55 856 us.zoom.videomeetings" },
  { src: "/Screenshot_2025-12-07-19-21-00-604_com.google.android.gm.jpg", title: "Screenshot 2025 12 07 19 21 00 604 com.google.android.gm" },
  { src: "/Snapchat-1614618662.jpg", title: "Snapchat 1614618662" },
  { src: "/Snapchat-717765166.jpg", title: "Snapchat 717765166" },
  { src: "/united_nation.png", title: "united nation" },
  { src: "/WhatsApp Image 2025-07-19 at 20.26.07_c6bd0cf3.jpg", title: "WhatsApp Image 2025 07 19 at 20.26.07 c6bd0cf3" },
  { src: "/WhatsApp Image 2025-07-19 at 20.26.08_cbabab27.jpg", title: "WhatsApp Image 2025 07 19 at 20.26.08 cbabab27" },
  { src: "/WhatsApp Image 2025-07-19 at 20.26.09_7aa8c684.jpg", title: "WhatsApp Image 2025 07 19 at 20.26.09 7aa8c684" },
  { src: "/WhatsApp Image 2025-07-19 at 20.30.38_7d72cd35.jpg", title: "WhatsApp Image 2025 07 19 at 20.30.38 7d72cd35" },
  { src: "/WhatsApp Image 2025-07-19 at 20.31.36_4d59a7d4.jpg", title: "WhatsApp Image 2025 07 19 at 20.31.36 4d59a7d4" },
  { src: "/workshopimage.png", title: "workshopimage" },
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
                background: "#000"
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
