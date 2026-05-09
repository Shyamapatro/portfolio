"use client";

import { motion } from "framer-motion";
import { Home, Briefcase, Cpu, Mail } from "lucide-react";
import { useState, useEffect } from "react";


const items = [
  { icon: Home, label: "Home", href: "#" },
  { icon: Briefcase, label: "Works", href: "#works" },
  { icon: Cpu, label: "Stack", href: "#stack" },
  { icon: Mail, label: "Connect", href: "#connect" },
];

export function Dock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { 
        timeZone: "Asia/Kolkata", 
        hour: "2-digit", 
        minute: "2-digit",
        hour12: false 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass flex items-center gap-2 p-2 rounded-2xl"
      >
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 mr-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-white/50">
            India • {time}
          </span>
        </div>

        <div className="h-4 w-[1px] bg-white/10 mr-2" />

        {items.map((item) => (
// ... existing map ...
          <a
            key={item.label}
            href={item.href}
            className="group relative flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:bg-white/10"
          >
            <item.icon className="h-5 w-5 text-white/70 transition-colors group-hover:text-white" />

            {/* Tooltip */}
            <span className="absolute -top-10 scale-0 rounded bg-white px-2 py-1 text-[10px] font-mono text-black transition-all group-hover:scale-100">
              {item.label}
            </span>
          </a>
        ))}
      </motion.nav>
    </div>
  );
}
