"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-10 ${align === "center" ? "text-center" : ""}`}
    >
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
        <span className="h-px w-8 bg-accent/60" />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </motion.div>
  );
}