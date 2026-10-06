"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const milestones = [
  { date: "May 2025", title: "MIS & IT Intern", org: "Transcom Electronics" },
  { date: "Aug 2025", title: "Executive Software Developer", org: "Bangladesh Lamps PLC", via: "via People's Scape Ltd" },
  { date: "Jul 2026", title: "Software Developer", org: "Bangladesh Lamps PLC", now: true },
];

const bllPoints = [
  "Built and automated a sales analytics data warehouse (BigQuery, SQL)",
  "Developed Looker dashboards; optimised queries to cut processing time",
  "Created business apps and REST APIs with C#/.NET and SQL Server",
  "Deployed production dashboards (IIS) and supported about 225 users",
];

const internPoints = [
  "Software testing, WordPress updates and SQL report changes",
  "Assisted with invoicing and internal system improvements",
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-300">
    {items.map((p) => (
      <li key={p} className="flex gap-3">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
        {p}
      </li>
    ))}
  </ul>
);

export default function CareerTimeline() {
  return (
    <section id="career" className="relative bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Journey" title="Experience & Education" />

        {/* journey strip */}
        <div className="relative mb-14 grid gap-8 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-[11px] hidden h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent-2 md:block" />
          {milestones.map((m, i) => (
            <motion.div key={m.date} {...fade(i * 0.12)} className="relative md:pt-10">
              <span className="absolute left-0 top-0 hidden md:block">
                <span className="relative flex h-6 w-6 items-center justify-center">
                  {m.now && <span className="absolute h-6 w-6 animate-ping rounded-full bg-accent/40" />}
                  <span className="h-4 w-4 rounded-full border-2 border-background bg-accent shadow-[0_0_18px_rgba(45,212,191,0.8)]" />
                </span>
              </span>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                {m.date}{m.now ? " – Present" : ""}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white">{m.title}</h3>
              <p className="text-sm text-slate-300">{m.org}</p>
              {m.via && <p className="text-xs text-muted">{m.via}</p>}
            </motion.div>
          ))}
        </div>

        {/* details */}
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <motion.div {...fade()} className="rounded-2xl border border-white/10 bg-surface/60 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Experience</p>

            <h3 className="mt-4 text-xl font-semibold text-white">Bangladesh Lamps PLC</h3>
            <p className="text-xs uppercase tracking-widest text-muted">Aug 2025 – Present · Dhaka</p>
            <Bullets items={bllPoints} />

            <div className="my-6 h-px bg-white/10" />

            <h3 className="text-xl font-semibold text-white">Transcom Electronics</h3>
            <p className="text-xs uppercase tracking-widest text-muted">MIS &amp; IT Intern · May – Aug 2025</p>
            <Bullets items={internPoints} />
          </motion.div>

          <motion.div {...fade(0.1)} className="rounded-2xl border border-white/10 bg-surface/60 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-2">Education</p>

            <h3 className="mt-4 text-xl font-semibold text-white">BSc in Computer Science &amp; Engineering</h3>
            <p className="text-sm text-slate-300">Ahsanullah University of Science and Technology</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="rounded-full border border-accent-2/40 bg-accent-2/10 px-3 py-1 text-xs font-semibold text-indigo-300">
                CGPA 3.349 / 4.00
              </span>
              <span className="text-xs uppercase tracking-widest text-muted">2021 – 2025</span>
            </div>

            <div className="my-6 h-px bg-white/10" />

            <div className="space-y-4 text-sm">
              {[
                ["Higher Secondary Certificate", "2020 · GPA 5.00"],
                ["Secondary School Certificate", "2018 · GPA 5.00"],
              ].map(([t, d]) => (
                <div key={t}>
                  <p className="font-medium text-slate-200">{t}</p>
                  <p className="text-xs text-muted">Viqarunnisa Noon School and College · {d}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}