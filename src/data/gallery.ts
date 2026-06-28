export const gallery = [
  { id: "g1", type: "image", src: "/profile/photo.jpg", category: "profile", label: "Profile Photo" },
  { id: "g2", type: "image", src: "/childhood/01.jpg", category: "childhood", label: "Childhood Memory 1" },
  { id: "g3", type: "image", src: "/childhood/02.jpg", category: "childhood", label: "Childhood Memory 2" },
  { id: "g4", type: "image", src: "/events/handloom-hackathon.jpg", category: "events", label: "Handloom Hackathon 2025" },
  { id: "g5", type: "image", src: "/events/nasa-spaceapps.jpg", category: "events", label: "NASA Space Apps Challenge 2025" },
  { id: "g6", type: "image", src: "/events/sih-2025.jpg", category: "events", label: "Smart India Hackathon 2025" },
  { id: "g7", type: "image", src: "/projects/tulasiai.png", category: "projects", label: "TulasiAI - Career Intelligence Platform" },
  { id: "g8", type: "image", src: "/projects/tulasihealth.png", category: "projects", label: "TulasiHealth - Healthcare Intelligence" },
  { id: "g9", type: "image", src: "/projects/weavetales.png", category: "projects", label: "WeaveTales - Handloom Commerce" },
  { id: "g10", type: "image", src: "/projects/oceanguard.png", category: "projects", label: "OceanGuard AI - Marine Risk Detection" },
  { id: "g11", type: "image", src: "/certificates/images/ai-engineer-llm.jpg", category: "certificates", label: "AI Engineer Core Track (LLMs)" },
  { id: "g12", type: "image", src: "/certificates/images/tansam-aiml.jpg", category: "certificates", label: "AI & ML Internship - TANSAM" },
  { id: "g13", type: "image", src: "/certificates/images/walmart-forage.jpg", category: "certificates", label: "Advanced Software Engineering - Forage" },
  { id: "g14", type: "video", src: "/videos/intro.mp4", category: "videos", label: "Voice / Video Intro" },
  { id: "g15", type: "video", src: "/videos/project-demo.mp4", category: "videos", label: "Project Demo Reel" },
];

export const galleryFilters = ["All", "Profile", "Childhood", "Events", "Projects", "Videos", "Certificates"] as const;
