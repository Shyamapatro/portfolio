import { Dock } from "@/components/Dock";
import { Hero } from "@/components/sections/Hero";
import { Works } from "@/components/sections/Works";
import { Experience } from "@/components/sections/Experience";
import { Philosophy } from "@/components/sections/Philosophy";
import { TechStack } from "@/components/sections/TechStack";
import { Connect } from "@/components/sections/Connect";
import { Loader } from "@/components/Loader";
import { PROJECTS, EXPERIENCE, TECH_STACK, SITE_CONFIG } from "@/lib/constants";

export default function Home() {
  const [firstName, lastName] = SITE_CONFIG.name.split(" ");

  return (
    <main className="relative min-h-screen grid-pattern selection:bg-white selection:text-black">
      <Loader />
      <Dock />
      
      {/* Background radial gradient for depth */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_0%,transparent_50%)]" />

      {/* Content wrapper */}
      <div className="relative z-10 px-4 pt-12 md:px-12 md:pt-16 lg:px-24 pb-40">
        <Hero 
          firstName={firstName}
          lastName={lastName}
          role={SITE_CONFIG.role}
          bio={SITE_CONFIG.bio}
          image={SITE_CONFIG.image}
        />
        <Works projects={PROJECTS} />
        <Experience items={EXPERIENCE} />
        <Philosophy />
        <TechStack stack={TECH_STACK} />
        <Connect 
          email={SITE_CONFIG.email} 
          linkedin={SITE_CONFIG.linkedin} 
          location={SITE_CONFIG.location} 
        />
      </div>
    </main>
  );
}
