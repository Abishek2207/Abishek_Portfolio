"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills"   },
  { label: "Journey",  href: "#timeline" },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActiveSection(e.target.id);
        }
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          height: "var(--nav-height)",
          background: scrolled ? "rgba(9,9,11,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(28px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(28px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "background 0.3s, border-color 0.3s",
        }}
      >
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 24px",
          height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}
          >
            <div style={{
              width: 32, height: 32, borderRadius: 9,
              background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, color: "#000",
            }}>
              A
            </div>
            <span style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15,
              letterSpacing: "-0.02em", color: "#fff",
            }}>
              Abishek R
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden-mobile" style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    padding: "6px 14px", borderRadius: 8,
                    fontFamily: "var(--font-body)", fontSize: 13,
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "var(--accent-cyan)" : "var(--text-secondary)",
                    transition: "color 0.2s",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => { if (!isActive) (e.currentTarget).style.color = "#fff"; }}
                  onMouseLeave={(e) => { if (!isActive) (e.currentTarget).style.color = "var(--text-secondary)"; }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      style={{
                        position: "absolute", bottom: 2, left: "50%",
                        transform: "translateX(-50%)",
                        width: 4, height: 4, borderRadius: "50%",
                        background: "var(--accent-cyan)",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
              className="btn-primary hidden-mobile"
              style={{ padding: "8px 20px", fontSize: 12 }}
            >
              Hire Me
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="show-mobile"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8, padding: "8px 10px",
                cursor: "pointer", display: "flex", flexDirection: "column", gap: 4,
              }}
            >
              {[0, 1, 2].map((i) => (
                <span key={i} style={{
                  display: "block", width: 18, height: 1.5,
                  background: "#fff", borderRadius: 999,
                  transition: "all 0.3s",
                  transform: mobileOpen && i === 0 ? "rotate(45deg) translateY(5.5px)" :
                             mobileOpen && i === 2 ? "rotate(-45deg) translateY(-5.5px)" : "none",
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            style={{
              position: "fixed",
              top: "var(--nav-height)", left: 0, right: 0,
              zIndex: 999,
              background: "rgba(3,3,3,0.97)",
              backdropFilter: "blur(28px)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              padding: "16px 24px 28px",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.href)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  background: "none", border: "none", cursor: "pointer",
                  padding: "13px 0",
                  fontFamily: "var(--font-body)", fontSize: 16,
                  color: activeSection === link.href.replace("#", "") ? "var(--accent-cyan)" : "#fff",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <div style={{ marginTop: 20 }}>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
