"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { Project } from "@/lib/constants";
import { Magnetic } from "@/components/Magnetic";

interface WorksProps {
  projects: Project[];
}

export function Works({ projects }: WorksProps) {
  return (
    <section id="works" className="mt-32 md:mt-48 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/50 mb-3">01 / Selected Works</p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight">My Works</h2>
        </div>
        <p className="max-w-[200px] text-[10px] text-white/50 font-serif italic leading-relaxed">
          Real-world products built with performance in mind.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Magnetic key={project.title} strength={0.1}>
            <ProjectCard 
              {...project} 
              large={false} 
            />
          </Magnetic>
        ))}
      </div>
    </section>
  );
}
