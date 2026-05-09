"use client";

import { motion } from "framer-motion";
import { ExperienceItem } from "@/lib/constants";

interface ExperienceProps {
  items: ExperienceItem[];
}

export function Experience({ items }: ExperienceProps) {
  return (
    <section id="experience" className="mt-32 md:mt-64 max-w-7xl mx-auto px-6 relative">
      <div className="mb-20 md:mb-32">
        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/50 mb-3 text-center">02 / Career History</p>
        <h2 className="text-5xl md:text-8xl font-serif tracking-tighter text-center uppercase italic text-gradient">
          The Journey
        </h2>
      </div>

      {/* Vertical Progress Line */}
      <div className="absolute left-1/2 top-[200px] bottom-0 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent hidden md:block" />

      <div className="flex flex-col gap-32 md:gap-48">
        {items.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Background Year Watermark */}
            <div className="absolute -top-8 md:-top-12 left-1/2 -translate-x-1/2 opacity-[0.02] select-none pointer-events-none transition-all duration-1000 group-hover:opacity-[0.05]">
              <span className="text-[25vw] md:text-[15vw] font-serif italic uppercase leading-none">
                {exp.year.split(" — ")[0] || exp.year.split(" ")[0]}
              </span>
            </div>

            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center md:items-start relative z-10`}>
              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30 mb-4 block">
                  {exp.year}
                </span>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-4 tracking-tight leading-tight">
                  {exp.company}
                </h3>
                <div className="h-[1px] w-16 bg-white/10 mb-6 hidden md:block" />
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-6 italic">
                  {exp.role}
                </p>
              </motion.div>

              {/* Description Side */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="w-full md:w-1/2 lg:w-1/3"
              >
                <ul className="flex flex-col gap-4 border-l border-white/5 pl-6 md:pl-8">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-sm md:text-base text-white/40 font-serif leading-relaxed italic hover:text-white/70 transition-colors duration-500">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            {/* Connection Node */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2 h-2 rounded-full bg-white/10 border border-white/5 hidden md:block group-hover:bg-white/30 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
