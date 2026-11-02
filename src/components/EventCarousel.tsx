"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CircularCarousel from "./ReactBits/CircularCarousel";

export const eventPhotos = [
  { 
    src: "/nasa hackathon.jpg", 
    alt: "NASA Space Apps Challenge Hackathon",
    title: "NASA Space Apps Challenge", 
    subtitle: "Global Space Innovation" 
  },
  { 
    src: "/nasasac_shortlist.png", 
    alt: "NASA Space Apps Challenge Shortlisted Team",
    title: "NASA SAC Global Shortlist", 
    subtitle: "Top Innovation Teams" 
  },
  { 
    src: "/forge2qualifierproof.png", 
    alt: "Forge 2 AI Builder Challenge Top 53 Finalist",
    title: "Forge 2 AI Builder Finalist", 
    subtitle: "Top 53 of 850+ Participants" 
  },
  { 
    src: "/cgiabiphoto.png", 
    alt: "CGI AI Hackathon Recognition",
    title: "CGI AI Hackathon Stage", 
    subtitle: "AI Solution Showcase" 
  },
  { 
    src: "/cgiphoto1.png", 
    alt: "CGI AI Hackathon Team Showcase",
    title: "CGI Hackathon Delegation", 
    subtitle: "Collaborative Innovation" 
  },
  { 
    src: "/cgiphoto2.jpg", 
    alt: "CGI Hackathon Project Presentation",
    title: "CGI Technical Demo", 
    subtitle: "Production Model Pitch" 
  },
  { 
    src: "/gdg.png", 
    alt: "Google Developer Groups DevFest",
    title: "Google Developer Groups", 
    subtitle: "Community & Developer Summit" 
  },
  { 
    src: "/panimalar_event.png", 
    alt: "Panimalar Engineering College Innovation Expo",
    title: "Panimalar AIML Expo", 
    subtitle: "Campus AI Project Showcase" 
  },
  { 
    src: "/rightxsummit_event.png", 
    alt: "RightX Global Tech Summit",
    title: "RightX AI Summit", 
    subtitle: "Next-Gen AI Forum" 
  },
  { 
    src: "/united_nation.png", 
    alt: "United Nations AI for Good Challenge",
    title: "United Nations SDG AI Challenge", 
    subtitle: "AI for Sustainability" 
  },
  { 
    src: "/quantum_computing.png", 
    alt: "Quantum Computing & Advanced AI",
    title: "Quantum Computing Summit", 
    subtitle: "Deep Tech & Future Systems" 
  },
  { 
    src: "/workshopimage.png", 
    alt: "Machine Learning Hands-on Workshop",
    title: "AI & ML Technical Workshop", 
    subtitle: "Hands-on Model Training" 
  },
  { 
    src: "/bigcode2206.png", 
    alt: "BigCode AI Challenge",
    title: "BigCode 2206 Challenge", 
    subtitle: "High-Performance Algorithms" 
  },
  { 
    src: "/IMG-20250804-WA0017.jpeg", 
    alt: "National Handloom Hackathon Finalist",
    title: "Handloom Hackathon Finalist", 
    subtitle: "National AI Showcase" 
  },
  { 
    src: "/IMG-20250804-WA0042.jpg", 
    alt: "Smart India Hackathon Internal Winner",
    title: "SIH Internal Winning Team", 
    subtitle: "1st Place Recognition" 
  },
  { 
    src: "/IMG_20250719_202203.jpg", 
    alt: "TANSAM AI Lab Research",
    title: "TANSAM AI/ML Lab", 
    subtitle: "Industrial IoT & Vision" 
  },
  { 
    src: "/IMG_20250804_161149.jpg", 
    alt: "National Finalist Team Delegation",
    title: "National Finalist Delegation", 
    subtitle: "Team Presentation" 
  },
];

export default function EventCarousel() {
  const [selected, setSelected] = useState<{ src: string; title?: string; subtitle?: string } | null>(null);
  const [preset, setPreset] = useState<"cylinder" | "orbit" | "panorama">("cylinder");

  return (
    <section className="section" style={{ background: "rgba(0,0,0,0.45)", overflow: "hidden", position: "relative" }}>
      {/* Centered Apple Header */}
      <div className="section-container" style={{ marginBottom: "32px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
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
          Interactive 3D Stage
        </div>
        <h2 className="section-title" style={{ textAlign: "center", maxWidth: 800 }}>
          Event <span className="gradient-text">Highlights.</span>
        </h2>
        <p className="section-subtitle" style={{ textAlign: "center", margin: "0 auto", maxWidth: 680 }}>
          Interactive 3D spatial ring of national hackathons, global summits, innovation challenges, and tech showcases. Grab and throw or click any moment to inspect.
        </p>

        {/* Apple Style Segmented Pill Controls */}
        <div 
          style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "6px",
            marginTop: "24px",
            padding: "4px 6px",
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "30px",
            backdropFilter: "blur(12px)",
          }}
        >
          {(["cylinder", "orbit", "panorama"] as const).map((p) => {
            const active = preset === p;
            const labels = {
              cylinder: "3D Cylinder",
              orbit: "Facing Orbit",
              panorama: "Panoramic View"
            };
            return (
              <button
                key={p}
                onClick={() => setPreset(p)}
                style={{
                  padding: "6px 14px",
                  borderRadius: "20px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: 500,
                  transition: "all 0.25s ease",
                  background: active ? "rgba(0, 212, 255, 0.15)" : "transparent",
                  color: active ? "var(--accent-cyan)" : "rgba(255, 255, 255, 0.6)",
                  boxShadow: active ? "0 0 16px rgba(0, 212, 255, 0.25), inset 0 0 0 1px rgba(0, 212, 255, 0.4)" : "none",
                }}
              >
                {labels[p]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Audio tag for voiceover */}
      <audio id="voiceover" loop>
        <source src="/voice/voiceover.mp3" type="audio/mpeg" />
      </audio>

      {/* 3D Circular Carousel Container */}
      <div 
        style={{ 
          position: "relative", 
          width: "100%", 
          height: "600px", 
          overflow: "hidden",
          margin: "0 auto",
          maxWidth: "1400px"
        }}
      >
        <CircularCarousel
          items={eventPhotos}
          preset={preset}
          intro="rise"
          cardWidth={260}
          aspectRatio={1.25}
          speed={11}
          gap={24}
          captions={true}
          draggable={true}
          focusOnClick={true}
          pauseOnHover={true}
          cornerRadius={18}
          onItemClick={(item: any) => setSelected(item)}
        />
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
              background: "rgba(0,0,0,0.92)",
              backdropFilter: "blur(24px)",
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
              style={{ maxWidth: "90vw", maxHeight: "82vh", position: "relative", textAlign: "center" }}
            >
              <button 
                onClick={() => setSelected(null)}
                aria-label="Close"
                style={{ 
                  position: "absolute", top: -46, right: 0, 
                  background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "50%", width: 38, height: 38,
                  color: "#fff", fontSize: 22, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.2s"
                }}
              >
                &times;
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={selected.src} 
                alt={selected.title || "Event Image"} 
                style={{ 
                  maxWidth: "100%", 
                  maxHeight: "75vh", 
                  borderRadius: 20, 
                  objectFit: "contain", 
                  background: "#050508", 
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.8)" 
                }} 
              />
              {selected.title && (
                <div style={{ marginTop: 16 }}>
                  <div style={{ color: "#fff", fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700 }}>
                    {selected.title}
                  </div>
                  {selected.subtitle && (
                    <div style={{ color: "var(--accent-cyan)", fontSize: 14, fontWeight: 500, marginTop: 4 }}>
                      {selected.subtitle}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
