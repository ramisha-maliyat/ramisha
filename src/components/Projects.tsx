"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Canteen Management System",
    desc: "Vendor and customer based canteen platform with an admin stock check report and Supabase database functions (RPC).",
    tech: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    title: "Timr.MR – Global Time Platform",
    desc: "Production web app with real-time clocks, timezone conversion, dynamic city pages, countdowns, stopwatch and calendar tools, responsive across devices.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Transcom Electronics Chatbot",
    desc: "AI support assistant answering product, policy and showroom queries, with real-time Firebase logging and LLaMA 3 via the Groq API.",
    tech: ["LLaMA 3", "Groq API", "Firebase"],
  },
  {
    title: "Business Analytics Dashboard (Demo)",
    desc: "Demo analytics model using Looker and BigQuery-style SQL to visualise revenue, product performance and regional insights.",
    tech: ["Looker", "BigQuery", "SQL"],
  },
  {
    title: "Autism Detection & Emotion Recognition",
    desc: "Undergraduate thesis: deep learning system for autism detection and facial emotion recognition.",
    tech: ["Python", "Deep Learning"],
  },
  {
    title: "Cloudways & Cross Cinema",
    desc: "Airline and cinema ticketing systems with booking, user management and full database integration.",
    tech: ["Java", "HTML/CSS", "SQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Work" title="Selected Projects" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="group flex flex-col rounded-2xl border border-white/10 bg-surface/60 p-6 transition hover:-translate-y-1 hover:border-accent/40"
            >
              <h3 className="text-lg font-semibold text-white transition group-hover:text-accent">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 leading-relaxed text-muted">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}