import { TechGroup } from "@/lib/constants";

interface TechStackProps {
  stack: TechGroup[];
}

export function TechStack({ stack }: TechStackProps) {
  return (
    <section id="stack" className="mt-32 md:mt-64 max-w-7xl mx-auto px-6">
      <div className="mb-12 md:mb-20">
        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/50 mb-3">03 / Technical Stack</p>
        <h2 className="text-4xl md:text-5xl font-serif tracking-tight">The Stack</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
        {stack.map((item) => (
          <div key={item.group} className="flex flex-col gap-6">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-white/60 border-b border-white/10 pb-4">
              {item.group}
            </h3>
            <ul className="flex flex-col gap-3">
              {item.skills.map((skill) => (
                <li key={skill} className="text-lg font-serif text-white/70">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
