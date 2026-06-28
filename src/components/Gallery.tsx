"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";

import { gallery, galleryFilters } from "@/data/gallery";

function PlaceholderImage({ label }: { label: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        background: "linear-gradient(135deg, rgba(0,212,255,0.06), rgba(124,58,237,0.06))",
        color: "var(--text-muted)",
        borderRadius: 16,
        border: "1px dashed var(--border-medium)",
      }}
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ opacity: 0.4 }}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span style={{ fontSize: 12, opacity: 0.5 }}>{label}</span>
    </div>
  );
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeFilter === "All"
      ? gallery
      : gallery.filter((g) => g.category === activeFilter.toLowerCase());

  const currentIndex = lightbox ? filtered.findIndex((g) => g.src === lightbox) : -1;

  const goNext = () => {
    if (currentIndex < filtered.length - 1) setLightbox(filtered[currentIndex + 1].src);
  };
  const goPrev = () => {
    if (currentIndex > 0) setLightbox(filtered[currentIndex - 1].src);
  };

  return (
    <section id="gallery" className="section" style={{ background: "rgba(0,0,0,0.3)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 48, textAlign: "center" }}
        >
          <div className="section-label" style={{ justifyContent: "center" }}>
            Gallery
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Moments &{" "}
            <span className="text-gradient-cyan">Milestones.</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 8,
            marginBottom: 40,
          }}
        >
          {galleryFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: "6px 16px",
                borderRadius: 999,
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.06em",
                fontWeight: activeFilter === f ? 700 : 500,
                color: activeFilter === f ? "#000" : "var(--text-secondary)",
                background: activeFilter === f ? "var(--accent-cyan)" : "transparent",
                border: activeFilter === f ? "none" : "1px solid var(--border-medium)",
                cursor: "pointer",
                transition: "all 0.25s",
                textTransform: "uppercase",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              onClick={() => setLightbox(item.src)}
              className="gallery-card"
              style={{
                position: "relative",
                borderRadius: 16,
                overflow: "hidden",
                aspectRatio: "4 / 3",
                cursor: "pointer",
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-card)",
                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              {item.type === "video" ? (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.3)",
                  }}
                >
                  <Play size={36} color="#00d4ff" />
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector(".gallery-placeholder")) {
                      const placeholder = document.createElement("div");
                      placeholder.className = "gallery-placeholder";
                      placeholder.style.cssText = "width:100%;height:100%;display:flex;align-items:center;justify-content:center;";
                      placeholder.innerHTML =
                        '<span style="color:var(--text-muted);font-size:12px;font-family:var(--font-mono)">Media not uploaded</span>';
                      parent.appendChild(placeholder);
                    }
                  }}
                />
              )}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "12px 14px",
                  background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.85))",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "#fff",
                  letterSpacing: "0.04em",
                }}
              >
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 3000,
              background: "rgba(0,0,0,0.92)",
              backdropFilter: "blur(20px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
          >
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: 10,
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#fff",
                zIndex: 10,
              }}
            >
              <X size={18} />
            </button>

            {currentIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                style={{
                  position: "absolute",
                  left: 20,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: 10,
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#fff",
                  zIndex: 10,
                }}
              >
                <ChevronLeft size={20} />
              </button>
            )}

            {currentIndex < filtered.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                style={{
                  position: "absolute",
                  right: 20,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: 10,
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#fff",
                  zIndex: 10,
                }}
              >
                <ChevronRight size={20} />
              </button>
            )}

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90vw",
                maxHeight: "85vh",
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-card)",
              }}
            >
              {lightbox.endsWith(".mp4") || lightbox.endsWith(".webm") ? (
                <video
                  src={lightbox}
                  controls
                  autoPlay
                  style={{ width: "100%", maxHeight: "85vh", display: "block" }}
                />
              ) : (
                <img
                  src={lightbox}
                  alt="Gallery preview"
                  style={{
                    maxWidth: "90vw",
                    maxHeight: "85vh",
                    objectFit: "contain",
                    display: "block",
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.insertAdjacentHTML(
                      "afterend",
                      '<div style="padding:60px;text-align:center;color:var(--text-muted);font-family:var(--font-mono);font-size:13px">Media will appear here once uploaded to the matching /public/ folder.</div>'
                    );
                  }}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-card:hover {
          border-color: rgba(0,212,255,0.25);
          box-shadow: 0 0 40px rgba(0,212,255,0.1);
        }
        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)) !important;
          }
        }
      `}</style>
    </section>
  );
}
