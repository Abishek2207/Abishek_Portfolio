"use client";

import { motion } from "framer-motion";

const eventPhotos = [
  "/IMG-20250804-WA0017.jpeg",
  "/IMG_20250804_161149.jpg",
  "/IMG-20250804-WA0042.jpg",
  "/nasa hackathon.jpg",
  "/nasasac_shortlist.png",
  "/cgiphoto2.jpg",
  "/rightxsummit_event.png",
  "/united_nation.png",
  "/tansam intenship.png",
  "/Screenshot_2025-12-07-19-21-00-604_com.google.android.gm.jpg",
  "/Screenshot_2025-07-31-19-27-55-856_us.zoom.videomeetings.jpg",
];

export default function EventCarousel() {
  return (
    <section style={{ padding: "60px 0", background: "var(--bg-card)", overflow: "hidden" }}>
      <div className="section-container" style={{ marginBottom: "40px" }}>
        <h2 className="section-title">
          <span className="gradient-text">Event</span> Highlights
        </h2>
        <p className="section-subtitle">Moments from hackathons, summits, and tech events.</p>
      </div>

      <div style={{ position: "relative", width: "100%", display: "flex", overflow: "hidden" }}>
        {/* Left/Right fading gradients for smooth entering/exiting */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "15%",
            background: "linear-gradient(to right, var(--bg-card), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "15%",
            background: "linear-gradient(to left, var(--bg-card), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          style={{
            display: "flex",
            gap: "24px",
            padding: "0 24px",
            width: "max-content",
          }}
        >
          {/* Double the array to make the infinite scroll seamless */}
          {[...eventPhotos, ...eventPhotos].map((src, i) => (
            <div
              key={i}
              style={{
                width: "300px",
                height: "200px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid var(--border-subtle)",
                flexShrink: 0,
                position: "relative",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="Event memory"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
