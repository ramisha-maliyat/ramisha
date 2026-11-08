"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import SectionHeading from "./SectionHeading";

type Project = {
  title: string;
  tag: string;
  desc: string;
  tech: string[];
  href?: string; // GitHub or live link
  image?: string; // optional screenshot in /public, e.g. "/projects/canteen.png"
};

const projects: Project[] = [
  { title: "Canteen Management System", tag: "Full Stack", desc: "Vendor and customer based canteen platform with an admin stock check report and Supabase database functions (RPC).", tech: ["Next.js", "TypeScript", "Supabase"], href: "https://github.com/ramisha-maliyat/cmanagement" },
  { title: "Timr.MR – Global Time Platform", tag: "Full Stack · Real-time", desc: "Production web app with real-time clocks, timezone conversion, countdowns, stopwatch and calendar tools.", tech: ["Next.js", "Tailwind", "Framer Motion"] },
  { title: "Transcom Electronics Chatbot", tag: "AI", desc: "AI support assistant answering product, policy and showroom queries, with Firebase logging and LLaMA 3 via Groq.", tech: ["LLaMA 3", "Groq API", "Firebase"] },
  { title: "Business Analytics Dashboard", tag: "Data · Demo", desc: "Demo analytics model using Looker and BigQuery-style SQL to visualise revenue, product and regional performance.", tech: ["Looker", "BigQuery", "SQL"] },
  { title: "Autism Detection & Emotion Recognition", tag: "Research · Thesis", desc: "Undergraduate thesis: deep learning for autism detection and facial emotion recognition.", tech: ["Python", "Deep Learning"] },
  { title: "Cloudways & Cross Cinema", tag: "Web App", desc: "Airline and cinema ticketing systems with booking, user management and database integration.", tech: ["Java", "HTML/CSS", "SQL"] },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const drag = useRef({ down: false, x: 0, left: 0 });

  const go = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement;
    el.scrollBy({ left: dir * (card.offsetWidth + 16), behavior: "smooth" });
  };
  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return; // touch already swipes natively
    const el = ref.current!;
    drag.current = { down: true, x: e.clientX, left: el.scrollLeft };
    el.classList.remove("snap-mandatory");
  };
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.down) return;
    ref.current!.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };
  const onUp = () => {
    if (!drag.current.down) return;
    drag.current.down = false;
    ref.current?.classList.add("snap-mandatory");
  };

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement;
    setI(Math.min(projects.length - 1, Math.round(el.scrollLeft / (card.offsetWidth + 16))));
  };

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="04 — Selected Work" title="Things I've built" />
      </div>

      <div
        ref={ref}
        onScroll={onScroll}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        className="mx-auto flex max-w-6xl cursor-grab snap-x snap-mandatory gap-4 active:cursor-grabbing overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p, n) => (
          <article
            key={p.title}
            className="group flex w-[86%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/60 transition hover:border-accent/40 sm:w-[360px]"
          >
            {p.image && (
              <div className="relative aspect-video border-b border-white/10">
                <Image src={p.image} alt={p.title} fill sizes="360px" className="object-cover" />
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-accent">0{n + 1}</span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-300">{p.tag}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold transition group-hover:text-accent">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300">{t}</span>
                ))}
              </div>
              {p.href && (
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="mt-5 text-sm font-medium text-accent hover:underline">
                  View project ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between px-6 text-xs text-muted">
        <span>{String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
        <div className="flex gap-2">
          <button onClick={() => go(-1)} disabled={i === 0} aria-label="Previous project" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-base transition hover:border-accent hover:text-accent disabled:opacity-30">←</button>
          <button onClick={() => go(1)} disabled={i === projects.length - 1} aria-label="Next project" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-base transition hover:border-accent hover:text-accent disabled:opacity-30">→</button>
        </div>
      </div>
    </section>
  );
}