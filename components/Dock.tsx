"use client";

import { motion } from "framer-motion";
import { Home, Briefcase, Cpu, Mail, User } from "lucide-react";


const items = [
  { icon: Home, label: "Home", href: "#" },
  { icon: Briefcase, label: "Works", href: "#works" },
  { icon: Cpu, label: "Stack", href: "#stack" },
  { icon: Mail, label: "Connect", href: "#connect" },
];

export function Dock() {
  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass flex items-center gap-2 p-2 rounded-2xl"
      >
        {items.map((item) => (
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
