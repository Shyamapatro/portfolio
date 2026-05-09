"use client";

import { useState } from "react";
import { Magnetic } from "@/components/Magnetic";

interface ConnectProps {
  email: string;
  linkedin: string;
  location: string;
}

export function Connect({ email, linkedin, location }: ConnectProps) {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    // Copy to clipboard as fallback
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="connect" className="mt-32 md:mt-64 max-w-7xl mx-auto text-center py-20 md:py-32 glass rounded-[2rem] md:rounded-[3rem] overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="relative z-10">
        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/50 mb-3">04 / Contact</p>
        <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl mb-8 md:mb-12 text-gradient px-4 tracking-tighter uppercase">
          Say Hello
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 px-6">
          <Magnetic strength={0.4}>
            <a 
              href={`mailto:${email}`}
              onClick={handleEmailClick}
              className="flex items-center justify-center w-full md:w-auto bg-white text-black px-10 py-4 rounded-full text-[10px] font-mono uppercase tracking-widest hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg active:scale-95"
            >
              {copied ? "Email Copied!" : "Email Me"}
            </a>
          </Magnetic>
          <Magnetic strength={0.4}>
            <a 
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full md:w-auto glass px-10 py-4 rounded-full text-[10px] font-mono uppercase tracking-widest hover:scale-105 transition-all duration-300 cursor-pointer border border-white/10 active:scale-95"
            >
              LinkedIn
            </a>
          </Magnetic>
        </div>
        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/60">
          {location}
        </p>
      </div>
    </section>
  );
}
