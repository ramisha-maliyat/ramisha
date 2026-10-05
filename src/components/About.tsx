"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const focus = [
  { t: "Data Engineering", d: "Data warehouses, BigQuery and SQL pipelines, scheduled automation and reconciliation." },
  { t: "BI & Reporting", d: "Looker dashboards and reports that turn raw data into clear business decisions." },
  { t: "Business Applications", d: "Internal tools and workflows built with C#, .NET and SQL Server." },
  { t: "APIs & Integration", d: "REST APIs that connect applications, databases and reporting systems." },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title="Building reliable software and trusted data" align="left" />

        <div className="grid items-start gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5 leading-relaxed text-slate-300"
          >
            <p>
              I&apos;m a <span className="font-medium text-white">software developer</span> with a Computer
              Science and Engineering degree from AUST, working across business applications, data
              engineering and BI reporting.
            </p>
            <p>
              I take work from requirement to production: modelling data in SQL and BigQuery, building
              APIs and dashboards, testing, deploying and supporting the people who use them.
            </p>
            <p className="text-muted">
              I also build full-stack and AI projects with Next.js, TypeScript and LLM APIs, and I&apos;m
              looking for a role where I can keep growing as an engineer in a collaborative team.
            </p>

            <dl className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-sm">
              <div><dt className="text-muted">Location</dt><dd className="mt-1 text-white">Dhaka, Bangladesh</dd></div>
              <div><dt className="text-muted">Education</dt><dd className="mt-1 text-white">BSc CSE, AUST (2025)</dd></div>
              <div><dt className="text-muted">Core stack</dt><dd className="mt-1 text-white">C#, SQL, BigQuery, Looker</dd></div>
              <div><dt className="text-muted">Languages</dt><dd className="mt-1 text-white">Bengali, English</dd></div>
            </dl>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {focus.map((f, i) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-surface/60 p-5 transition hover:border-accent/40"
              >
                <h3 className="font-semibold text-white">{f.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}