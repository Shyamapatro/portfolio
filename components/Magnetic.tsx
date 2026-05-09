"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, ReactNode, useEffect, useState } from "react";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
}

export function Magnetic({ children, strength = 0.5 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  
  // Use Motion Values to bypass React's render cycle for high-frequency updates
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    
    setReducedMotion(mediaQuery.matches || mobileQuery.matches);
    
    const handler = () => setReducedMotion(mediaQuery.matches || mobileQuery.matches);
    mediaQuery.addEventListener("change", handler);
    mobileQuery.addEventListener("change", handler);
    return () => {
      mediaQuery.removeEventListener("change", handler);
      mobileQuery.removeEventListener("change", handler);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || reducedMotion) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const targetX = (clientX - centerX) * strength;
    const targetY = (clientY - centerY) * strength;
    
    x.set(targetX);
    y.set(targetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
