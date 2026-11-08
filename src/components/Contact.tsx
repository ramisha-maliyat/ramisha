"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EMAIL = "ramisha4627@gmail.com";
const sitemap = [["about", "About"], ["career", "Experience"], ["skills", "Tech Stack"], ["projects", "Projects"]];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <section id="contact" className="relative px-6 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs text-slate-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" /> Open to new opportunities
        </p>
        <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Let&apos;s build<br />something great.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted">
          Have a role or project in mind? Send me a message and I&apos;ll reply as soon as I can.
        </p>

        <button
          onClick={copy}
          className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-2.5 text-sm transition hover:border-accent"
        >
          {EMAIL} <span className="text-xs text-accent">{copied ? "Copied ✓" : "Copy"}</span>
        </button>

        <div className="mt-4">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-block w-full max-w-sm rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-accent"
          >
            Send an email ↗
          </a>
        </div>
      </motion.div>

      <footer className="mx-auto mt-24 grid max-w-6xl gap-10 border-t border-white/10 py-12 sm:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold">Ramisha<span className="text-accent">.</span></p>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Software developer building reliable systems and trusted data. Based in Dhaka, Bangladesh.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Sitemap</p>
          <ul className="mt-3 space-y-2 text-sm">
            {sitemap.map(([id, l]) => (
              <li key={id}><a href={`#${id}`} className="transition hover:text-accent">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Get in touch</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={`mailto:${EMAIL}`} className="transition hover:text-accent">Email</a></li>
            <li><a href="/cv.pdf" download className="transition hover:text-accent">Download CV</a></li>
          </ul>
        </div>
        <p className="text-xs text-muted sm:col-span-3">© {new Date().getFullYear()} Shaikh Ramisha Maliyat</p>
      </footer>
    </section>
  );
}