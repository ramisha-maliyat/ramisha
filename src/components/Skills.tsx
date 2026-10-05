"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const groups = [
  { title: "Programming", skills: ["C#", "SQL / T-SQL", "Python", "C", "C++"] },
  { title: "Backend & Web", skills: ["ASP.NET", "REST APIs", "Next.js", "TypeScript", "Supabase", "HTML/CSS", "Tailwind CSS"] },
  { title: "Data & BI", skills: ["BigQuery", "SQL Server", "MySQL", "PostgreSQL", "Looker", "Data Warehousing"] },
  { title: "Delivery & Operations", skills: ["UAT", "IIS Deployment", "Git", "VS Code", "Documentation"] },
  { title: "Exposure", skills: ["Flutter / Dart", "Firebase", "LLM APIs", "Arduino"] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Toolkit" title="Technical Skills" />

        <div className="grid gap-5 md:grid-cols-2">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-surface/60 p-6 transition hover:border-accent/40"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}