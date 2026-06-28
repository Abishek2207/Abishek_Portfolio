"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import * as THREE from "three";
import { MagneticButton } from "@/components/ReactBits/MagneticButton";
import { GradientText } from "@/components/ReactBits/GradientText";
import { Spotlight } from "@/components/ReactBits/Spotlight";

/* ─── 3D Neural Orb (kept from original, performance-tuned) ─── */
function NeuralOrb() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const particlePositions = (() => {
    const count = 220;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = 1.7 + Math.random() * 0.6;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  })();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.25;
      coreRef.current.rotation.x = Math.sin(t * 0.18) * 0.18;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.35;
      ring1Ref.current.rotation.x = Math.sin(t * 0.12) * 0.3 + 0.5;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.25;
      ring2Ref.current.rotation.y = t * 0.18;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = t * 0.18;
      ring3Ref.current.rotation.z = Math.cos(t * 0.09) * 0.5;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.05;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={2.5} color="#00d4ff" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#7c3aed" />
      <pointLight position={[0, 0, 0]} intensity={3} color="#00d4ff" distance={6} />

      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1, 4]} />
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} wireframe transparent opacity={0.85} />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.65, 32, 32]} />
        <meshStandardMaterial color="#000" emissive="#00d4ff" emissiveIntensity={0.06} transparent opacity={0.9} />
      </mesh>

      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.5, 0.014, 8, 100]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.75} />
      </mesh>

      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.9, 0.01, 8, 100]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.5} />
      </mesh>

      <mesh ref={ring3Ref} rotation={[Math.PI / 6, Math.PI / 4, 0]}>
        <torusGeometry args={[2.2, 0.008, 8, 100]} />
        <meshBasicMaterial color="#e879f9" transparent opacity={0.4} />
      </mesh>

      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={particlePositions}
            itemSize={3}
            count={220}
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.022} color="#00d4ff" transparent opacity={0.8} sizeAttenuation />
      </points>
    </group>
  );
}


export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        paddingTop: "var(--nav-height)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#030303",
      }}
    >
      {/* Spotlight cursor effect */}
      <Spotlight color="rgba(0,212,255,0.07)" size={700} />

      {/* Ambient blobs */}
      <div
        className="ambient-blob"
        style={{ width: 700, height: 700, background: "var(--accent-cyan)", top: -250, left: -200, opacity: 0.06 }}
      />
      <div
        className="ambient-blob"
        style={{ width: 500, height: 500, background: "var(--accent-purple)", bottom: -150, right: -150, opacity: 0.08 }}
      />

      {/* Grid lines overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
            minHeight: "calc(100vh - var(--nav-height))",
            padding: "60px 0",
          }}
        >
          {/* ── LEFT ── */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: 28 }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 16px",
                  borderRadius: 999,
                  border: "1px solid rgba(0,212,255,0.25)",
                  background: "rgba(0,212,255,0.05)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  color: "var(--accent-cyan)",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--accent-cyan)",
                    boxShadow: "0 0 8px var(--accent-cyan)",
                    animation: "pulse-glow 2s infinite",
                  }}
                />
                Open to Opportunities · 2025
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(54px, 8vw, 100px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 0.93,
                marginBottom: 20,
              }}
            >
              <GradientText from="#ffffff" via="rgba(255,255,255,0.9)" to="#00d4ff">
                ABISHEK
                <br />
                R.
              </GradientText>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              style={{ marginBottom: 20 }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(16px, 2.4vw, 22px)",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  letterSpacing: "-0.01em",
                }}
              >
                Aspiring AI Engineer.{" "}
                <GradientText from="#7c3aed" via="#e879f9" to="#7c3aed" animate>
                  Founder.
                </GradientText>{" "}
                Builder.
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              style={{
                fontSize: 16,
                color: "var(--text-muted)",
                lineHeight: 1.75,
                maxWidth: 440,
                marginBottom: 40,
              }}
            >
              B.Tech AIML student at Panimalar Engineering College and
              Founder of <span style={{ color: "var(--accent-cyan)" }}>TulasiAI</span>.
              Building intelligent systems that solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.42 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 48 }}
            >
              <MagneticButton href="#projects" className="btn-primary" id="view-projects-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
                View Projects
              </MagneticButton>

              <MagneticButton
                href="/assets/resume/Abishek_R_Resume.pdf"
                download
                className="btn-ghost"
                id="download-resume-btn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Resume
              </MagneticButton>

              <MagneticButton href="#contact" className="btn-purple" id="contact-btn">
                Let's Talk
              </MagneticButton>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.55 }}
              style={{ display: "flex", gap: 20, flexWrap: "wrap" }}
            >
              {[
                { label: "GitHub", href: "https://github.com/Abishek2207", abbr: "GH" },
                { label: "LinkedIn", href: "https://linkedin.com/in/abishekr22", abbr: "LI" },
                { label: "LeetCode", href: "https://leetcode.com/u/fOtjANkHIG", abbr: "LC" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 700,
                      background: "var(--bg-card)",
                    }}
                  >
                    {s.abbr}
                  </span>
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — 3D Orb ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 24,
              position: "relative",
            }}
          >
            {/* Glow ring behind orb */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                width: 320,
                height: 320,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(0,212,255,0.12) 0%, rgba(124,58,237,0.06) 40%, transparent 70%)",
                filter: "blur(30px)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            <div
              style={{
                width: "100%",
                maxWidth: 400,
                aspectRatio: "1 / 1",
                position: "relative",
                animation: "float 4s ease-in-out infinite",
              }}
            >
              <Canvas
                camera={{ position: [0, 0, 5], fov: 60 }}
                gl={{ antialias: true, alpha: true }}
                style={{ borderRadius: "50%" }}
                aria-label="Animated 3D AI neural network visualization"
              >
                <Suspense fallback={null}>
                  <NeuralOrb />
                </Suspense>
              </Canvas>
            </div>

            {/* Floating chips */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
              {["AI Engineer", "Founder · TulasiAI", "B.Tech AIML"].map((chip, i) => (
                <motion.span
                  key={chip}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.12 }}
                  style={{
                    padding: "5px 14px",
                    borderRadius: 999,
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "var(--text-secondary)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.15em",
          color: "var(--text-muted)",
          textTransform: "uppercase",
        }}
      >
        <span>Scroll</span>
        <div
          style={{
            width: 1,
            height: 48,
            background: "linear-gradient(180deg, var(--accent-cyan), transparent)",
            animation: "pulse-glow 2s infinite",
          }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:last-child { order: -1; }
          .hero-grid > div:last-child > div { max-width: 260px !important; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
