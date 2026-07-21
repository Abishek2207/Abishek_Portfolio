const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir);

const certFiles = [];
const eventFiles = [];

files.forEach(f => {
  if (f.match(/\.(pdf|jpg|jpeg|png|gif|webp)$/i)) {
    const fLower = f.toLowerCase();
    // determine if cert
    if (fLower.includes('cert') || fLower.includes('pdf') || fLower.includes('tansam') || fLower.includes('usaii')) {
      certFiles.push(f);
    } else {
      eventFiles.push(f);
    }
  }
});

let certOutput = 'export const certificates = [\n';
certFiles.forEach(f => {
  const isPdf = f.toLowerCase().endsWith('.pdf');
  const title = f.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
  certOutput += `  {
    id: "${f.replace(/[^a-zA-Z0-9]/g, '')}",
    title: "${title}",
    issuer: "Verified",
    date: "2025/2026",
    credentialUrl: "/${f}",
    description: "Verified credential.",
    color: "#e879f9",
    glow: "rgba(232,121,249,0.2)",
    icon: "🏆",
    image: "${isPdf ? '' : `/${f}`}",
    pdf: "${isPdf ? `/${f}` : ''}",
    category: "Certificate",
  },\n`;
});
certOutput += '];\n';

fs.writeFileSync('src/data/certificates.ts', certOutput);

let eventOutput = 'export const eventPhotos = [\n';
eventFiles.forEach(f => {
  const title = f.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
  eventOutput += `  { src: "/${f}", title: "${title}" },\n`;
});
eventOutput += '];\n';

const eventCarouselPath = 'src/components/EventCarousel.tsx';
let carouselContent = fs.readFileSync(eventCarouselPath, 'utf8');
const startIdx = carouselContent.indexOf('const eventPhotos = [');
const endIdx = carouselContent.indexOf('];', startIdx) + 2;

carouselContent = carouselContent.substring(0, startIdx) + eventOutput + carouselContent.substring(endIdx);
fs.writeFileSync(eventCarouselPath, carouselContent);

console.log('Updated certificates and event carousel');
