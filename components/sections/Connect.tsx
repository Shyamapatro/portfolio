"use client";

import { SITE_CONFIG } from "@/lib/constants";

export function Connect() {
  return (
    <section id="connect" className="mt-64 max-w-7xl mx-auto text-center py-32 glass rounded-[3rem] overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
      <div className="relative z-10">
        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20 mb-3">03 / Contact</p>
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-12 text-gradient px-4 tracking-tighter uppercase">
          Say Hello
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 px-6">
          <a 
            href={`mailto:${SITE_CONFIG.email}`} 
            className="w-full md:w-auto bg-white text-black px-10 py-4 rounded-full text-[10px] font-mono uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Email Me
          </a>
          <a 
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto glass px-10 py-4 rounded-full text-[10px] font-mono uppercase tracking-widest hover:scale-105 transition-transform"
          >
            LinkedIn
          </a>
        </div>
        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">
          {SITE_CONFIG.location}
        </p>
      </div>
    </section>
  );
}
