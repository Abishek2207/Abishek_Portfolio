import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abishek R — Aspiring AI Engineer & Founder of TulasiAI",
  description:
    "Abishek R is an Aspiring AI Engineer, B.Tech AIML student at Panimalar Engineering College, and Founder of TulasiAI — building intelligent systems across career intelligence, healthcare, handloom commerce, and marine risk detection.",
  keywords: [
    "Abishek R",
    "Aspiring AI Engineer",
    "TulasiAI",
    "Machine Learning",
    "Panimalar Engineering College",
    "LLMs",
    "RAG",
    "AI Agents",
    "FastAPI",
    "Next.js",
    "Computer Vision",
    "LangChain",
  ],
  authors: [{ name: "Abishek R", url: "https://github.com/Abishek2207" }],
  creator: "Abishek R",

  // ✅ Google Search Console Verification
  verification: {
    google: "mkWSHb7cUf1HC2KipfoSv-TzT9SqaXFpZgYdmUXHJ7A",
  },

  openGraph: {
    title: "Abishek R — Aspiring AI Engineer & Founder of TulasiAI",
    description: "Building intelligent systems that solve real-world problems.",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abishek R — Aspiring AI Engineer",
    description:
      "B.Tech AIML student & Founder of TulasiAI. Building production-grade AI systems.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#030303" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        style={{
          background: "#030303",
          color: "#ffffff",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}