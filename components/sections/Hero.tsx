"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { Magnetic } from "@/components/Magnetic";

interface HeroTypographyProps {
  firstName: string;
  lastName: string;
  role: string;
  bio: string;
}

function HeroTypography({ firstName, lastName, role, bio }: HeroTypographyProps) {
  return (
    <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 md:mb-8">
          <div className="h-[1px] w-8 md:w-12 bg-white/40" />
          <p className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.6em] text-white/60">
            Portfolio v.26
          </p>
        </div>
        
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[9rem] font-serif uppercase tracking-tighter leading-[0.85] lg:leading-[0.75] mb-6 md:mb-8">
          <span className="text-gradient block">{firstName}</span>
          <span className="text-white/40 block lg:ml-[0.1em]">{lastName}</span>
        </h1>

        <div className="flex flex-col gap-8 lg:gap-12 items-center lg:items-start">
          <p className="text-base md:text-xl lg:text-2xl text-white/80 leading-relaxed font-serif italic max-w-md">
            {bio}
          </p>
          
          <Magnetic strength={0.2}>
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#works" 
                className="px-8 md:px-10 py-4 md:py-5 rounded-full text-[9px] md:text-[10px] font-mono uppercase tracking-widest bg-white text-black font-bold w-full sm:w-auto text-center shadow-[0_20px_40px_-15px_rgba(255,255,255,0.3)] hover:shadow-[0_20px_50px_-10px_rgba(255,255,255,0.5)] transition-all duration-500"
              >
                View Projects
              </motion.a>
              <div className="flex items-center justify-center gap-4 px-4 sm:px-6">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest text-white/50 whitespace-nowrap">Available for projects</span>
              </div>
            </div>
          </Magnetic>
        </div>
      </motion.div>
    </div>
  );
}

interface ProfileCardProps {
  image: string;
  name: string;
}

function ProfileCard({ image, name }: ProfileCardProps) {
  return (
    <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="group relative"
      >
        <div className="relative w-56 h-80 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden glass p-2 md:p-3 border border-white/10 shadow-2xl">
          <div className="relative w-full h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              priority
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              sizes="(max-width: 768px) 224px, (max-width: 1200px) 320px, 384px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            
            <div className="absolute top-4 left-4 md:top-6 md:left-6">
              <span className="font-mono text-[7px] md:text-[8px] uppercase tracking-widest text-white/80 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                Verified Identity
              </span>
            </div>
          </div>
        </div>
        
        <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700 -z-10" />
        <div className="absolute -top-6 -left-6 w-16 h-16 md:w-24 md:h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-700 -z-10" />
      </motion.div>
    </div>
  );
}

interface HeroProps {
  firstName: string;
  lastName: string;
  role: string;
  bio: string;
  image: string;
}

export function Hero({ firstName, lastName, role, bio, image }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 lg:pt-0 overflow-hidden">
      {/* Background Narrative Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.015] pointer-events-none select-none z-0 overflow-hidden w-full text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
          className="text-[20vw] md:text-[15vw] font-serif uppercase tracking-tighter leading-none whitespace-nowrap"
        >
          ARCHITECT
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center relative z-10 px-6">
        <HeroTypography 
          firstName={firstName} 
          lastName={lastName} 
          role={role} 
          bio={bio} 
        />
        <ProfileCard image={image} name={`${firstName} ${lastName}`} />
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <div className="h-8 md:h-12 w-[1px] bg-gradient-to-b from-white/20 to-transparent" />
        <span className="font-mono text-[7px] md:text-[8px] uppercase tracking-[0.5em] whitespace-nowrap">Scroll to Explore</span>
      </div>
    </section>
  );
}
