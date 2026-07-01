"use client";

import Link from "next/link";
import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 mt-24">
      <div className="container-1440 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold tracking-tight mb-2">Abishek R</h3>
          <p className="text-[#A1A1AA] text-sm">Let's Build AI That Matters.</p>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="mailto:contact@abishek.com"
            className="text-[#A1A1AA] hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/abishek2207"
            target="_blank"
            className="text-[#A1A1AA] hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/Abishek2207"
            target="_blank"
            className="text-[#A1A1AA] hover:text-white transition-colors"
          >
            <GithubIcon className="w-5 h-5" />
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="text-[#A1A1AA] hover:text-white transition-colors"
          >
            <FileText className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
