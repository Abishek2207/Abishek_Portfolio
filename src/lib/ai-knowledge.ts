import projects from "../data/projects.json";
import certificates from "../data/certificates.json";
import experiences from "../data/experiences.json";

export function getPlatformContext() {
  const context = `
    Knowledge Base for Abishek R (AI Product Engineer):
    
    1. PROJECTS:
    ${projects.map(p => `- ${p.title}: ${p.tagline}. Status: ${p.status}. Tech: ${p.techStack.join(", ")}`).join("\n")}
    
    2. CERTIFICATIONS:
    ${certificates.map(c => `- ${c.title} by ${c.issuer} (${c.date}). UID: ${c.uid}`).join("\n")}
    
    3. EXPERIENCE:
    ${experiences.map(e => `- ${e.role} at ${e.company} (${e.duration}).`).join("\n")}
  `;
  
  return context;
}

export function generateLocalResponse(query: string) {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes("project") || lowerQuery.includes("work")) {
    return `Abishek has worked on several key AI projects including ${projects[0].title} (${projects[0].tagline}) and ${projects[1].title}. Would you like to see the live demos?`;
  }
  
  if (lowerQuery.includes("cert") || lowerQuery.includes("nasa") || lowerQuery.includes("forage")) {
    const certNames = certificates.map(c => c.issuer);
    return `Abishek holds verified certifications from ${certNames.slice(0, 3).join(", ")}, and more. I can help you verify the IDs if you jump to the Certifications section.`;
  }
  
  if (lowerQuery.includes("skill") || lowerQuery.includes("stack") || lowerQuery.includes("tech")) {
    return `He primarily builds with Next.js, FastAPI, and Python, specializing in RAG and LLM applications.`;
  }
  
  return `I'm Abishek's local portfolio AI. I can tell you about his ${projects.length} major projects, his verified certifications (like NASA Space Apps), or his latest work at TANSAM. What would you like to know?`;
}
