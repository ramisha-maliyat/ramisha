"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const items = [
  { label: "Email", value: "ramisha4627@gmail.com", href: "mailto:ramisha4627@gmail.com" },
  { label: "Location", value: "Dhaka, Bangladesh" },
  { label: "Resume", value: "Download my CV (PDF)", href: "/cv.pdf" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-surface/40 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl text-center"
      >
        <SectionHeading eyebrow="Contact" title="Let's work together" />
        <p className="-mt-6 mb-12 text-muted">
          Open to software development and data engineering roles. Send me a message and I&apos;ll reply
          as soon as I can.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((it) => {
            const body = (
              <>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-accent">{it.label}</h3>
                <p className="mt-2 break-all text-slate-200">{it.value}</p>
              </>
            );
            const cls =
              "rounded-2xl border border-white/10 bg-surface/60 p-6 transition hover:border-accent/40";
            return it.href ? (
              <a key={it.label} href={it.href} {...(it.label === "Resume" ? { download: true } : {})} className={cls}>
                {body}
              </a>
            ) : (
              <div key={it.label} className={cls}>{body}</div>
            );
          })}
        </div>

        <a
          href="mailto:ramisha4627@gmail.com"
          className="mt-10 inline-block rounded-xl bg-accent px-8 py-3 font-semibold text-slate-950 shadow-lg shadow-teal-500/20 transition hover:-translate-y-0.5 hover:bg-teal-300"
        >
          Send Email
        </a>

        <p className="mt-16 text-xs text-muted">© {new Date().getFullYear()} Shaikh Ramisha Maliyat</p>
      </motion.div>
    </section>
  );
}