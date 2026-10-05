"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

type Certificate = { title: string; platform: string; desc: string; image: string };

const certificates: Certificate[] = [
  {
    title: "Data Visualization with Looker",
    platform: "Coursera",
    desc: "Data modelling, dashboards and business analytics using Looker.",
    image: "/certificates/looker-certificate.png",
  },
];

export default function Certifications() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="certifications" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Credentials" title="Certifications" />

        <div className="space-y-5">
          {certificates.map((c) => (
            <motion.button
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelected(c)}
              className="w-full rounded-2xl border border-white/10 bg-surface/60 p-6 text-left transition hover:border-accent/40"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">{c.platform}</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-muted">{c.desc}</p>
              <p className="mt-4 text-sm text-accent">View certificate →</p>
            </motion.button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelected(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute -top-12 right-0 text-4xl text-white hover:text-accent"
            >
              ×
            </button>
            <Image
              src={selected.image}
              alt={selected.title}
              width={1200}
              height={800}
              className="h-auto w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}