"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

const groups: Record<string, string[]> = {
  Languages: ["C#", "SQL / T-SQL", "Python", "C", "C++", "TypeScript"],
  Backend: ["ASP.NET", "REST APIs", "Next.js", "Supabase", "Firebase"],
  "Data & BI": ["BigQuery", "SQL Server", "MySQL", "PostgreSQL", "Looker", "Data Warehousing"],
  Tools: ["Git", "VS Code", "IIS", "Tailwind CSS", "HTML / CSS", "Framer Motion"],
  Exposure: ["Flutter / Dart", "LLM APIs", "Arduino", "IoT"],
};

const total = Object.values(groups).reduce((n, g) => n + g.length, 0);

export default function Skills() {
  const tabs = Object.keys(groups);
  const [tab, setTab] = useState(tabs[0]);

  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="03 — Tech Stack" title="Tools I work with" />

        <div className="rounded-3xl border border-white/10 bg-surface/60 p-5 sm:p-8">
          <div className="mb-6 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-lg border px-3.5 py-1.5 text-sm transition ${
                  tab === t
                    ? "border-accent bg-accent text-black font-semibold"
                    : "border-white/10 text-muted hover:text-white"
                }`}
              >
                {t}
                <span className="ml-1.5 text-[10px] opacity-60">{groups[t].length}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3"
          >
            {groups[tab].map((s) => (
              <div key={s} className="flex items-center gap-3 rounded-xl border border-white/10 bg-background/60 px-4 py-3.5 text-sm">
                <span className="h-2 w-2 rounded-full bg-accent" />
                {s}
              </div>
            ))}
          </motion.div>

          <p className="mt-6 text-xs text-muted">
            {total} tools across {tabs.length} categories
          </p>
        </div>
      </div>
    </section>
  );
}