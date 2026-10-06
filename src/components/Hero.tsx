"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "225+", label: "Field users supported" },
  { value: "7", label: "Business systems delivered" },
  { value: "End-to-end", label: "Requirement to production" },
];

const stack = ["C# / .NET", "SQL Server", "BigQuery", "Looker", "REST APIs", "Next.js"];

export default function Hero() {
  const reduce = useReducedMotion();

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#070B14] text-white"
    >
      {/* subtle grid + glow (teal / indigo to match the CV) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-teal-500/15 blur-[120px]" />
      <div className="absolute -bottom-40 right-0 h-[400px] w-[400px] rounded-full bg-indigo-500/15 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-[1.2fr_0.8fr]">
        {/* LEFT */}
        <div>
          <motion.div
            {...fade(0.05)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-1.5 text-xs font-medium tracking-wide text-teal-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            Open to new opportunities
          </motion.div>

          <motion.p {...fade(0.1)} className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            {...fade(0.15)}
            className="mt-2 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Shaikh Ramisha{" "}
            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Maliyat
            </span>
          </motion.h1>

          <motion.p {...fade(0.25)} className="mt-4 text-lg font-medium text-slate-200 md:text-xl">
            Software Developer · Data Engineering · BI &amp; API Integration
          </motion.p>

          <motion.p {...fade(0.3)} className="mt-4 max-w-xl leading-relaxed text-slate-400">
            I turn business requirements into working systems and trusted data, from BigQuery
            warehouses and Looker dashboards to APIs and production deployments at Bangladesh
            Lamps PLC.
          </motion.p>

          {/* tech chips */}
          <motion.div {...fade(0.35)} className="mt-6 flex flex-wrap gap-2">
            {stack.map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
              >
                {t}
              </span>
            ))}
          </motion.div>

          {/* buttons */}
          <motion.div {...fade(0.4)} className="mt-9 flex flex-wrap gap-4">
            <a
              href="/CV.pdf"
              download
              className="rounded-xl bg-teal-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-teal-500/20 transition hover:-translate-y-0.5 hover:bg-teal-300"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/40"
            >
              View Projects
            </a>
            <a
              href="mailto:ramisha4627@gmail.com"
              className="rounded-xl px-6 py-3 font-medium text-slate-300 transition hover:text-teal-300"
            >
              Get in touch →
            </a>
          </motion.div>

          {/* stats */}
          <motion.dl
            {...fade(0.5)}
            className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-6"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xl font-bold text-white md:text-2xl">{s.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-slate-400">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative h-64 w-64 md:h-80 md:w-80">
            {/* rotating gradient ring (framer-motion, no custom CSS needed) */}
            <motion.div
              aria-hidden
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,#2dd4bf,#6366f1,#22d3ee,#2dd4bf)] opacity-80 blur-[2px]"
            />
            <div className="absolute inset-[3px] rounded-full bg-[#070B14]" />
            <div className="absolute inset-0 rounded-full shadow-[0_0_70px_rgba(45,212,191,0.25)]" />

            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[#070B14]">
              <Image
                src="/profile-soft.jpeg"
                alt="Shaikh Ramisha Maliyat"
                fill
                sizes="(min-width: 768px) 320px, 256px"
                className="object-cover"
                priority
              />
            </div>

            {/* floating badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-[#0F1629]/90 px-4 py-1.5 text-xs text-slate-200 backdrop-blur-md">
              Software Developer, MIS &amp; IT · Bangladesh Lamps PLC
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}