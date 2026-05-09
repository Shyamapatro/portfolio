"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const pathVariants = {
    initial: {
      d: "M0 0 L100 0 L100 100 L0 100 Z",
    },
    exit: {
      d: "M0 0 L100 0 L100 0 L0 0 Z",
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] as any },
    },
  };

  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] pointer-events-none"
        >
          <svg 
            className="absolute top-0 w-full h-full fill-[#050505]"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              variants={pathVariants}
              initial="initial"
              exit="exit"
            />
          </svg>
          
          <div className="relative h-full flex flex-col items-center justify-center">
            <div className="overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%", opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="text-6xl md:text-9xl font-mono tracking-tighter tabular-nums block text-white"
              >
                {progress}%
              </motion.span>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8 flex flex-col items-center gap-2"
            >
              <span className="font-mono text-[8px] uppercase tracking-[1em] text-white/30">
                Architectural Integrity
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
