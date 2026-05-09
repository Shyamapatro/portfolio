"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  const [firstName, lastName] = SITE_CONFIG.name.split(" ");

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center">
      {/* Background Narrative Watermark */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.015, scale: 1 }}
          transition={{ duration: 3 }}
          className="text-[15vw] font-serif uppercase tracking-tighter leading-none whitespace-nowrap"
        >
          ARCHITECT
        </motion.h2>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Typography */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-white/20" />
              <p className="font-mono text-[10px] uppercase tracking-[0.6em] text-white/40">
                Portfolio v.26
              </p>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-serif uppercase tracking-tighter leading-[0.75] mb-8">
              <span className="text-gradient block">{firstName}</span>
              <span className="text-white/20 block ml-[0.1em]">{lastName}</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
              <p className="text-lg md:text-2xl text-white/50 leading-relaxed font-serif italic max-w-md">
                {SITE_CONFIG.bio}
              </p>
              
              <div className="flex flex-col gap-6 w-full md:w-auto">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href="#works" 
                  className="px-10 py-5 rounded-full text-[10px] font-mono uppercase tracking-widest bg-white text-black font-bold w-full md:w-auto text-center shadow-[0_20px_40px_-15px_rgba(255,255,255,0.3)] hover:shadow-[0_20px_50px_-10px_rgba(255,255,255,0.5)] transition-all duration-500"
                >
                  View Projects
                </motion.a>
                <div className="flex items-center justify-center md:justify-start gap-4 px-6">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">Available for projects</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: The Iconic Photo Card */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: 20 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="group relative"
          >
            <div className="relative w-64 h-96 md:w-96 md:h-[32rem] rounded-[2.5rem] overflow-hidden glass p-3 border border-white/10 shadow-2xl">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt={SITE_CONFIG.name}
                  fill
                  sizes="(max-width: 768px) 256px, (max-width: 1200px) 384px, 416px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                  priority
                />
                
                {/* Meta Overlay on the Card */}
                <div className="absolute top-6 left-6 flex flex-col gap-1">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-white/80 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 w-fit">
                    Verified Identity
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col">
                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/40 mb-1">Current Status</span>
                      <span className="text-white text-xs font-serif italic tracking-wide">Available for projects</span>
                    </div>
                    <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                      <span className="text-[10px] font-mono text-white/80">ID</span>
                    </div>
                  </div>
                  <div className="h-[1px] w-full bg-white/10 mb-4" />
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">Location / {SITE_CONFIG.location}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Glass Accents */}
            <div className="absolute -top-6 -right-6 h-24 w-24 glass rounded-full border border-white/10 -z-10 blur-xl opacity-50" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 glass rounded-full border border-white/10 -z-10 blur-2xl opacity-30" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="h-12 w-[1px] bg-gradient-to-b from-white/20 to-transparent" />
        <span className="font-mono text-[8px] uppercase tracking-[0.5em] text-white/20">Scroll to Explore</span>
      </div>
    </section>
  );
}
