
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { v: "6", l: "Projects showcased" },
  { v: "3", l: "Core domains" },
  { v: "1+", l: "Years in industry" },
];

// SSR-safe animation: identical initial values
// on both the server and the client.
const fade = (delay: number = 0) => ({
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.6,
    delay,
    ease: "easeOut" as const,
  },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-20 pt-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

        {/* Portrait card */}
        <motion.div
          {...fade(0.05)}
          className="mx-auto w-full max-w-sm md:order-2"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-accent">
            <Image
              src="/profile-cutout.png"
              alt="Shaikh Ramisha Maliyat"
              fill
              priority
              sizes="(min-width: 768px) 384px, 90vw"
              className="object-cover object-bottom"
            />

            <p
              className="pointer-events-none absolute bottom-3 left-0 right-0 text-center text-6xl text-accent drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)] sm:text-7xl"
              style={{
                fontFamily: "var(--font-script), cursive",
              }}
            >
              Ramisha
            </p>

            <span className="absolute left-4 top-4 rounded-full bg-black/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
              Welcome
            </span>
          </div>
        </motion.div>

        {/* Text content */}
        <div className="text-center md:text-left">

          <motion.h1
            {...fade(0.1)}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Shaikh Ramisha Maliyat
          </motion.h1>

          <motion.p
            {...fade(0.15)}
            className="mt-3 text-lg text-slate-200 sm:text-xl"
          >
            Crafting reliable software and data systems.
          </motion.p>

          <motion.p
            {...fade(0.2)}
            className="mt-2 text-sm text-muted"
          >
            Software Developer | Data Engineering | BI &amp; API Integration
          </motion.p>

          {/* Action buttons */}
          <motion.div
            {...fade(0.25)}
            className="mt-7 flex flex-col gap-3 sm:flex-row md:justify-start"
          >
            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-3 text-center text-sm font-semibold text-black transition hover:bg-accent"
            >
              View Selected Work →
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-7 py-3 text-center text-sm font-semibold transition hover:border-accent hover:text-accent"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Statistics */}
          <motion.dl
            {...fade(0.3)}
            className="mt-8 grid grid-cols-3 gap-3"
          >
            {stats.map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-white/10 bg-surface/60 px-3 py-4 text-center md:text-left md:px-5"
              >
                <dt className="text-2xl font-bold text-white">
                  {s.v}
                </dt>

                <dd className="mt-1 text-[11px] leading-snug text-muted">
                  {s.l}
                </dd>
              </div>
            ))}
          </motion.dl>

          {/* Location */}
          <motion.p
            {...fade(0.35)}
            className="mt-6 text-xs text-muted"
          >
            📍 Dhaka, Bangladesh
          </motion.p>

        </div>
      </div>
    </section>
  );
}
