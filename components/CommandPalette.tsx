"use client";

import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
  Action,
} from "kbar";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { SITE_CONFIG } from "@/lib/constants";

export function CommandPalette({ children }: { children: ReactNode }) {
  const router = useRouter();

  const actions: Action[] = [
    {
      id: "home",
      name: "Home",
      shortcut: ["h"],
      keywords: "home index",
      perform: () => router.push("/"),
    },
    {
      id: "projects",
      name: "View Projects",
      shortcut: ["p"],
      keywords: "projects works portfolio",
      perform: () => {
        const el = document.getElementById("works");
        el?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "experience",
      name: "Experience",
      shortcut: ["e"],
      keywords: "experience work history jobs",
      perform: () => {
        const el = document.getElementById("experience");
        el?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "contact",
      name: "Contact Me",
      shortcut: ["c"],
      keywords: "contact email reach out linkedin",
      perform: () => {
        const el = document.getElementById("connect");
        el?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      shortcut: ["l"],
      keywords: "linkedin social profile",
      perform: () => window.open(SITE_CONFIG.linkedin, "_blank"),
    },
    {
      id: "email",
      name: "Send Email",
      shortcut: ["m"],
      keywords: "email mail contact",
      perform: () => window.location.href = `mailto:${SITE_CONFIG.email}`,
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm p-4 md:p-6">
          <KBarAnimator className="max-w-xl w-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-white/5">
              <KBarSearch className="w-full bg-transparent border-none outline-none text-white font-mono placeholder:text-white/20" />
            </div>
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
}

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-white/30">
            {item}
          </div>
        ) : (
          <div
            className={`px-4 py-3 flex items-center justify-between cursor-pointer transition-colors ${
              active ? "bg-white/5" : "bg-transparent"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono text-white/80">{item.name}</span>
            </div>
            {item.shortcut?.length ? (
              <div className="flex gap-1">
                {item.shortcut.map((sc) => (
                  <kbd
                    key={sc}
                    className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-white/40"
                  >
                    {sc}
                  </kbd>
                ))}
              </div>
            ) : null}
          </div>
        )
      }
    />
  );
}
