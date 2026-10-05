"use client";

import { useEffect, useState } from "react";

const sections = ["about", "career", "projects", "skills", "certifications", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + window.innerHeight * 0.35;
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link = (id: string) =>
    `text-sm capitalize transition ${active === id ? "text-accent" : "text-muted hover:text-white"}`;

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-semibold tracking-wide text-white">
          Ramisha <span className="text-accent">Maliyat</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {sections.map((id) => (
            <a key={id} href={`#${id}`} className={link(id)}>{id}</a>
          ))}
          <a
            href="/cv.pdf"
            download
            className="rounded-lg border border-accent/50 px-4 py-1.5 text-sm font-medium text-accent transition hover:bg-accent hover:text-slate-950"
          >
            Download CV
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="text-2xl text-white md:hidden"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-5 md:hidden">
          {sections.map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className={link(id)}>{id}</a>
          ))}
          <a href="/cv.pdf" download className="text-sm font-medium text-accent">Download CV</a>
        </div>
      )}
    </nav>
  );
}