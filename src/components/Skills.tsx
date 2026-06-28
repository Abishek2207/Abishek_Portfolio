"use client";

import { motion } from "framer-motion";
import { LogoLoop } from "@/components/ReactBits/LogoLoop";
import { Spotlight } from "@/components/ReactBits/Spotlight";

/* ── SVG icon strings (inline, no external deps) ── */
const pythonSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.959 3.403 5.959h2.03v-2.867s-.109-3.43 3.371-3.43h5.769s3.26.053 3.26-3.153V3.26S18.368 0 11.914 0zm-3.2 1.877a1.077 1.077 0 1 1 0 2.153 1.077 1.077 0 0 1 0-2.153z" fill="#3776AB"/><path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826H20.1S24 18.211 24 12.031c0-6.18-3.403-5.959-3.403-5.959h-2.03v2.867s.109 3.43-3.371 3.43H9.427s-3.26-.053-3.26 3.153V20.74S5.632 24 12.086 24zm3.2-1.877a1.077 1.077 0 1 1 0-2.153 1.077 1.077 0 0 1 0 2.153z" fill="#FFD43B"/></svg>`;

const javaSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149m-.575-2.627s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218m4.84-4.458c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573" fill="#5382A1"/><path d="M15.172 20.857s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.526-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82m-9.295-7.066s-4.358 1.035-1.544 1.412c1.188.159 3.553.123 5.758-.062 1.803-.152 3.612-.477 3.612-.477s-.636.272-1.097.587c-4.428 1.165-12.979.623-10.522-.568 2.082-1.006 3.793-.892 3.793-.892m7.824 4.367c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 0 .07-.062.09-.118" fill="#5382A1"/><path d="M13.576 1s2.49 2.49-2.363 6.322c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.052-3.943-3.858-2.824-5.542 1.648-2.472 6.213-3.671 5.188-7.616" fill="#E76F00"/><path d="M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0 0 .553.457 3.393.639" fill="#5382A1"/></svg>`;

const nextSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C6.07.392 2.252 3.308.725 7.39a11.977 11.977 0 0 0-.702 5.595 12.054 12.054 0 0 0 2.6 6.081c1.75 2.106 4.21 3.56 6.892 4.073a12.22 12.22 0 0 0 4.989-.057 11.99 11.99 0 0 0 4.454-2.065 12.081 12.081 0 0 0 3.466-4.198 11.986 11.986 0 0 0 1.103-7.045 12.03 12.03 0 0 0-2.6-6.082 11.922 11.922 0 0 0-3.877-3.193 12.053 12.053 0 0 0-4.69-1.33 12.13 12.13 0 0 0-1.53.024zm4.615 13.97l-3.95-5.79v5.79h-1.234V8.97h1.344l3.84 5.636V8.97h1.234v5.0h-1.234z" fill="white"/></svg>`;

const reactSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M14.448 13.748a2.432 2.432 0 1 1-4.864 0 2.432 2.432 0 0 1 4.864 0z" fill="#61DAFB"/><path d="M12.016 7.547c3.617 0 7.001.614 9.538 1.641C24.028 10.33 25.5 11.886 25.5 13.748c0 1.929-1.576 3.534-4.13 4.621C18.89 19.417 15.572 20 12.016 20c-3.558 0-6.877-.583-9.358-1.631C.107 17.282-1.5 15.677-1.5 13.748c0-1.862 1.473-3.417 3.945-4.56 2.538-1.027 5.921-1.641 9.571-1.641zm0 1c-3.502 0-6.786.601-9.223 1.598C.693 11.109-.5 12.387-.5 13.748c0 1.439 1.281 2.758 3.457 3.747 2.368.958 5.59 1.505 9.059 1.505 3.468 0 6.689-.547 9.057-1.505 2.177-.99 3.427-2.308 3.427-3.747 0-1.361-1.193-2.639-3.293-3.603-2.437-.997-5.721-1.598-9.191-1.598z" fill="#61DAFB"/><path d="M7.698 10.657c1.808-3.134 4.073-5.587 6.181-7.09 2.291-1.623 4.384-2.002 5.956-1.103 1.615.928 2.218 3.013 1.69 5.859-.498 2.695-2.017 5.83-4.082 8.71-2.066 2.882-4.407 5.215-6.586 6.683-2.364 1.594-4.546 2.065-6.137 1.149C3.134 23.836 2.5 21.75 3.028 18.905c.498-2.695 2.015-5.828 4.068-8.248zm.866.5C6.674 13.44 5.219 16.424 4.747 18.99c-.468 2.53.059 4.31 1.374 5.065 1.358.78 3.281.37 5.506-1.138C13.759 21.47 16 19.22 18 16.44c2-2.782 3.443-5.762 3.895-8.327.466-2.53-.094-4.311-1.434-5.083-1.299-.747-3.138-.296-5.29 1.136-1.977 1.4-4.148 3.726-5.906 6.99l-.701.001z" fill="#61DAFB"/></svg>`;

const tailwindSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#38BDF8"/></svg>`;

const fastapiSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M12 0C5.375 0 0 5.375 0 12c0 6.626 5.375 12 12 12 6.626 0 12-5.374 12-12 0-6.625-5.374-12-12-12zm-.624 21.62v-7.227H7.19L13.203 2.38v7.227h4.029L11.376 21.62z" fill="#009688"/></svg>`;

const dockerSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z" fill="#2496ED"/></svg>`;

const githubSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" fill="#ffffff"/></svg>`;

const pgSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.82.827 2.865.305 4.482.415 6.682c.03.607.191 1.873.842 3.115.448.851 1.017 1.54 1.749 1.977.328.195.683.322 1.048.377a3.269 3.269 0 0 0 1.021-.047l.024-.005v4.682a1.66 1.66 0 0 0 0 .217v4.343c.006.468.042 1.089.345 1.673.166.318.4.579.709.762.267.159.569.243.876.245h.03l.012-.001c.557-.003 1.082-.201 1.466-.46.311.264.762.489 1.358.489h.044c.578-.01 1.028-.259 1.34-.51.25-.199.432-.417.555-.625.148.208.33.414.563.603.374.3.888.489 1.513.501h.02c.52 0 .962-.152 1.308-.377.27-.175.486-.407.655-.654v.15c0 .36.175.618.4.783.226.164.497.234.76.226.526-.017.99-.293 1.1-.944l-.002-.014.674-7.553.093-.392.222 3.167.002.019c.136 1.002.636 1.474 1.154 1.778.217.127.5.194.788.197l.034.001a2.362 2.362 0 0 0 .667-.106 2.09 2.09 0 0 0 1.071-.714c.334-.427.514-.977.6-1.543.253-1.66.518-6.405.542-6.905v-.015c.036-.766-.059-2.072-.92-3.109C21.106.94 19.06.06 17.128 0z" fill="#336791"/></svg>`;

const tensorflowSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M13.676.7L1.88 7.4v6.01l6.44-3.72v3.71l5.356-3.09V13l5.356-3.09v6.01l1.087-.628V3.79L13.676.7zm5.356 15.57l-4.27 2.466v-3.711l-5.355 3.09v3.711l5.355-3.09v3.71L18.17 21.5l1.087-.628v-4.992l-.225.39z" fill="#FF6F00"/></svg>`;

const opencvSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 3.5A6.5 6.5 0 1 1 5.5 12 6.5 6.5 0 0 1 12 5.5z" fill="#5C3EE8"/><path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" fill="#5C3EE8" opacity="0.6"/></svg>`;

const langchainSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M8 3h8l3 5-3 5H8L5 8l3-5z" fill="#1C3C3C" stroke="#3ECF8E" strokeWidth="1.5"/><path d="M8 11h8l3 5-3 5H8l-3-5 3-5z" fill="#1C3C3C" stroke="#3ECF8E" strokeWidth="1.5"/></svg>`;

const pandasSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M9.536 8.221V4.5H7.5v11.714h2.036V8.221zm4.928 0V4.5h2.036v11.714H14.464V8.221zM9.536 19.5v-2.25H7.5V19.5h2.036zm4.928 0v-2.25h2.036V19.5h-2.036z" fill="#150458"/><rect x="9.536" y="10.179" width="4.928" height="3.643" fill="#E70488"/></svg>`;

const skills: {
  category: string;
  color: string;
  items: string[];
}[] = [
  {
    category: "Languages",
    color: "var(--accent-cyan)",
    items: ["Python", "Java", "SQL", "C"],
  },
  {
    category: "AI / ML",
    color: "var(--accent-purple)",
    items: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Generative AI", "LLMs", "RAG", "AI Agents"],
  },
  {
    category: "Frameworks",
    color: "#e879f9",
    items: ["FastAPI", "Next.js", "React", "Tailwind CSS", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    category: "Databases",
    color: "#10b981",
    items: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    category: "Tools & DevOps",
    color: "#f59e0b",
    items: ["Git", "GitHub", "Docker", "VS Code"],
  },
];

const logoItems = [
  { name: "Python",     svg: pythonSvg,     color: "#3776AB" },
  { name: "Java",       svg: javaSvg,       color: "#E76F00" },
  { name: "Next.js",    svg: nextSvg,       color: "#ffffff" },
  { name: "React",      svg: reactSvg,      color: "#61DAFB" },
  { name: "Tailwind",   svg: tailwindSvg,   color: "#38BDF8" },
  { name: "FastAPI",    svg: fastapiSvg,    color: "#009688" },
  { name: "Docker",     svg: dockerSvg,     color: "#2496ED" },
  { name: "GitHub",     svg: githubSvg,     color: "#ffffff" },
  { name: "PostgreSQL", svg: pgSvg,         color: "#336791" },
  { name: "TensorFlow", svg: tensorflowSvg, color: "#FF6F00" },
  { name: "OpenCV",     svg: opencvSvg,     color: "#5C3EE8" },
  { name: "LangChain",  svg: langchainSvg,  color: "#3ECF8E" },
  { name: "Pandas",     svg: pandasSvg,     color: "#E70488" },
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div className="ambient-blob" style={{ width: 500, height: 500, background: "var(--accent-cyan)", top: "30%", left: "-15%", opacity: 0.04 }} />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 64, textAlign: "center" }}
        >
          <div className="section-label" style={{ justifyContent: "center" }}>Skills</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Technical{" "}
            <span className="text-gradient-cyan">Arsenal.</span>
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Technologies and tools I use to build production-grade AI systems.
          </p>
        </motion.div>

        {/* LogoLoop marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 80 }}
        >
          <LogoLoop
            items={logoItems}
            speed={55}
            pauseOnHover
            gap={48}
            itemHeight={48}
            fadePadding={100}
          />
          <div style={{ height: 32 }} />
          <LogoLoop
            items={[...logoItems].reverse()}
            speed={40}
            pauseOnHover
            direction="right"
            gap={48}
            itemHeight={48}
            fadePadding={100}
          />
        </motion.div>

        {/* Skills categories */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              whileHover={{ y: -4 }}
              style={{
                padding: "26px 26px 22px",
                background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.3) 100%)",
                backdropFilter: "blur(20px)",
                border: `1px solid ${group.color}22`,
                borderRadius: 20,
                transition: "border-color 0.3s, box-shadow 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${group.color}44`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${group.color}15`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${group.color}22`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Category header */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: group.color,
                    boxShadow: `0 0 10px ${group.color}`,
                    flexShrink: 0,
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: group.color,
                  }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Items */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {group.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: "4px 11px",
                      borderRadius: 7,
                      fontSize: 12,
                      fontFamily: "var(--font-mono)",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
