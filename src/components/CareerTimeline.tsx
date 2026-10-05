"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

type Item = {
  type: "work" | "edu";
  title: string;
  org: string;
  time: string;
  points?: string[];
};

const timeline: Item[] = [
  {
    type: "work",
    title: "Software Developer",
    org: "Bangladesh Lamps PLC",
    time: "Jul 2026 – Present",
  },
  {
    type: "work",
    title: "Executive Software Developer",
    org: "People's Scape Ltd, working at Bangladesh Lamps PLC",
    time: "Aug 2025 – Jun 2026",
    points: [
      "Designed and automated a sales analytics data warehouse in BigQuery and SQL",
      "Built Looker reports and dashboards; optimised queries to reduce processing time",
      "Developed business applications and REST APIs using C#/.NET and SQL Server",
      "Deployed production dashboards (IIS), ran UAT and supported about 225 users",
    ],
  },
  {
    type: "work",
    title: "MIS & IT Intern",
    org: "Transcom Electronics",
    time: "May 2025 – Aug 2025",
    points: [
      "Supported software testing and WordPress updates",
      "Modified SQL queries for business performance reports",
      "Assisted with invoicing and internal system improvements",
    ],
  },
  { type: "edu", title: "BSc in Computer Science & Engineering", org: "Ahsanullah University of Science and Technology", time: "2021 – 2025 · CGPA 3.349 / 4.00" },
  { type: "edu", title: "Higher Secondary Certificate", org: "Viqarunnisa Noon School and College", time: "2020 · GPA 5.00" },
  { type: "edu", title: "Secondary School Certificate", org: "Viqarunnisa Noon School and College", time: "2018 · GPA 5.00" },
];

const filters = [
  { id: "all", label: "All" },
  { id: "work", label: "Experience" },
  { id: "edu", label: "Education" },
];

export default function CareerTimeline() {
  const [filter, setFilter] = useState("all");
  const items = timeline.filter((i) => filter === "all" || i.type === filter);

  return (
    <section id="career" className="relative bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Journey" title="Experience & Education" />

        <div className="mb-12 flex justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                filter === f.id
                  ? "border-accent bg-accent text-slate-950"
                  : "border-white/15 text-muted hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="relative border-l border-white/15 pl-8">
          {items.map((item) => (
            <motion.div
              key={item.title + item.time}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mb-10 last:mb-0"
            >
              <span
                className={`absolute -left-[37px] top-2 h-3 w-3 rounded-full border-2 border-background ${
                  item.type === "work" ? "bg-accent" : "bg-accent-2"
                }`}
              />
              <p className="text-xs font-medium uppercase tracking-widest text-muted">{item.time}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-accent">{item.org}</p>
              {item.points && (
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-300 marker:text-muted">
                  {item.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}