"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  url: string;
  className?: string;
  large?: boolean;
}

export function ProjectCard({ title, category, image, url, className, large }: ProjectCardProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn(
          "group relative overflow-hidden rounded-2xl glass border border-white/5 cursor-pointer aspect-square",
          className
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-5 flex flex-col justify-end">
          <p className="font-mono text-[7px] uppercase tracking-[0.4em] text-white/30 mb-1">
            {category}
          </p>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-serif text-white tracking-tight">{title}</h3>
            <ArrowUpRight className="h-3 w-3 text-white/30 group-hover:text-white transition-colors" />
          </div>
        </div>
      </motion.div>
    </a>
  );
}
