import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Abishek R — AI Engineer & Founder",
  description:
    "AI Engineer & Founder of TulasiAI. Building intelligent systems that solve real problems.",
  keywords: [
    "Abishek R",
    "AI Engineer",
    "TulasiAI",
    "Machine Learning",
    "Multi-Agent Systems",
    "LLMs",
    "RAG",
    "AI Agents",
  ],
  authors: [{ name: "Abishek R", url: "https://github.com/Abishek2207" }],
  creator: "Abishek R",
  openGraph: {
    title: "Abishek R — AI Engineer & Founder",
    description: "Building AI Systems That Solve Real Problems.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abishek R — AI Engineer",
    description: "AI Engineer & Founder of TulasiAI. Building production-grade AI systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#08090A" />
      </head>
      <body>
        <div className="aurora-bg"></div>
        <div className="noise-overlay"></div>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
