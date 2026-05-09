"use client";

import { Dock } from "@/components/Dock";
import { Hero } from "@/components/sections/Hero";
import { Works } from "@/components/sections/Works";
import { TechStack } from "@/components/sections/TechStack";
import { Connect } from "@/components/sections/Connect";

export default function Home() {
  return (
    <main className="relative min-h-screen grid-pattern selection:bg-white selection:text-black">
      {/* Background radial gradient for depth */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_0%,transparent_50%)]" />

      {/* Content wrapper */}
      <div className="relative z-10 px-4 pt-12 md:px-12 md:pt-16 lg:px-24 pb-40">
        <Hero />
        <Works />
        <TechStack />
        <Connect />
      </div>

      <Dock />
    </main>
  );
}
