"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("about");

  const sections = [
    "about",
    "career",
    "projects",
    "skills",
    "certifications",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight * 0.4; // Apple-style center bias

      let current = "about";

      for (const section of sections) {
        const el = document.getElementById(section);

        if (!el) continue;

        const offsetTop = el.offsetTop;
        const offsetBottom = offsetTop + el.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          current = section;
          break;
        }
      }

      setActive((prev) => (prev !== current ? current : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll(); // initial sync

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: string) =>
    `relative px-3 py-2 text-sm transition duration-300 ${
      active === id ? "text-white" : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-2xl border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* logo */}
        <h1 className="text-white font-semibold tracking-wide">
          Ramisha
        </h1>

        {/* links */}
        <div className="flex items-center gap-6">

          {sections.map((id) => (
            <a key={id} href={`#${id}`} className={linkClass(id)}>
              <span className="capitalize">{id}</span>

              {/* active underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300
                ${
                  active === id
                    ? "w-full bg-gradient-to-r from-pink-500 to-blue-500"
                    : "w-0 bg-transparent"
                }`}
              />
            </a>
          ))}

        </div>
      </div>
    </nav>
  );
}