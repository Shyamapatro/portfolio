"use client";

import { motion } from "framer-motion";

const PHILOSOPHIES = [
  {
    title: "0 to 1 Engineering",
    description: "I specialize in taking raw ideas and turning them into market-ready products with robust foundations.",
    label: "Ideation"
  },
  {
    title: "Performance Obsession",
    description: "Whether it is sub-100ms API responses or Lighthouse 100/100, I build for extreme speed.",
    label: "Efficiency"
  },
  {
    title: "Architected Scale",
    description: "Building systems that don't just work today, but grow gracefully with millions of users.",
    label: "Scalability"
  }
];

export function Philosophy() {
  return (
    <section className="mt-32 md:mt-48 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
        {PHILOSOPHIES.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="flex flex-col gap-6"
          >
            <span className="font-mono text-[8px] uppercase tracking-[0.5em] text-white/30 border-b border-white/5 pb-4">
              {item.label}
            </span>
            <h3 className="text-2xl md:text-3xl font-serif tracking-tight leading-tight">
              {item.title}
            </h3>
            <p className="text-sm md:text-base text-white/50 font-serif italic leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
