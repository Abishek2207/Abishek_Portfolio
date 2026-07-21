const fs = require('fs');

const skillsFile = 'src/components/Skills.tsx';
let content = fs.readFileSync(skillsFile, 'utf8');

const svgsText = fs.readFileSync('svgs.txt', 'utf8');

const vscodeSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 0 1.479l1.323 1.202a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" fill="#007ACC"/></svg>`;

const logoItemsReplacement = `
${svgsText}
const vscodeSvg = \`${vscodeSvg}\`;

const skills: {
  category: string;
  color: string;
  items: string[];
}[] = [
  {
    category: "Languages",
    color: "var(--accent-cyan)",
    items: ["Python", "Java", "C", "SQL"],
  },
  {
    category: "AI / ML",
    color: "var(--accent-purple)",
    items: ["TensorFlow", "Scikit Learn", "NumPy", "Pandas"],
  },
  {
    category: "Frameworks",
    color: "#e879f9",
    items: ["React", "Next.js", "FastAPI", "Tailwind"],
  },
  {
    category: "Databases",
    color: "#10b981",
    items: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    category: "Tools",
    color: "#f59e0b",
    items: ["Docker", "GitHub", "Git", "Figma", "VS Code", "Google Colab"],
  },
];

const logoItems = [
  { name: "Python",     svg: pythonSvg,     color: "#3776AB" },
  { name: "TensorFlow", svg: tensorflowSvg, color: "#FF6F00" },
  { name: "React",      svg: reactSvg,      color: "#61DAFB" },
  { name: "Next.js",    svg: nextjsSvg,     color: "#ffffff" },
  { name: "Docker",     svg: dockerSvg,     color: "#2496ED" },
  { name: "GitHub",     svg: githubSvg,     color: "#ffffff" },
  { name: "Git",        svg: gitSvg,        color: "#F03C2E" },
  { name: "FastAPI",    svg: fastapiSvg,    color: "#009688" },
  { name: "PostgreSQL", svg: postgresqlSvg, color: "#4169E1" },
  { name: "MySQL",      svg: mysqlSvg,      color: "#4479A1" },
  { name: "SQLite",     svg: sqliteSvg,     color: "#003B57" },
  { name: "NumPy",      svg: numpySvg,      color: "#013243" },
  { name: "Pandas",     svg: pandasSvg,     color: "#150458" },
  { name: "Scikit Learn", svg: scikitlearnSvg, color: "#F7931E" },
  { name: "Tailwind",   svg: tailwindSvg,   color: "#06B6D4" },
  { name: "Java",       svg: javaSvg,       color: "#ffffff" },
  { name: "C",          svg: cSvg,          color: "#A8B9CC" },
  { name: "Figma",      svg: figmaSvg,      color: "#F24E1E" },
  { name: "VS Code",    svg: vscodeSvg,     color: "#007ACC" },
  { name: "Google Colab", svg: googlecolabSvg, color: "#F9AB00" },
];
`;

const startIdx = content.indexOf('/* ── SVG icon strings');
const endIdx = content.indexOf('export default function Skills');

content = content.substring(0, startIdx) + logoItemsReplacement + '\n' + content.substring(endIdx);
fs.writeFileSync(skillsFile, content);
console.log('Skills updated');
