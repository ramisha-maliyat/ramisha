"use client";

import { useState } from "react";

const links = [
  ["about", "About"],
  ["career", "Experience"],
  ["skills", "Tech Stack"],
  ["projects", "Projects"],
  ["github", "GitHub"],
  ["certifications", "Achievements"],
  ["contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          Ramisha<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-3">
          <div className="mr-4 hidden items-center gap-6 lg:flex">
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="text-sm text-muted transition hover:text-white">
                {label}
              </a>
            ))}
          </div>
          <a
            href="/cv.pdf"
            download
            className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-black transition hover:bg-accent"
          >
            Resume ↓
          </a>
          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-lg lg:hidden"
          >
            {open ? "×" : "≡"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-background px-6 py-4 lg:hidden">
          {links.map(([id, label], i) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-4 border-b border-white/5 py-3 text-sm last:border-0"
            >
              <span className="text-xs text-accent">0{i + 1}</span>
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}