"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    type: "work",
    title: "Junior Developer",
    org: "Bangladesh Lamps PLC",
    time: "Aug 2025 – Present",
    icon: "💼",
    color: "from-pink-500 to-red-500",
    points: [
      "Developed and enhanced enterprise systems",
      "Built analytics dashboards using Looker",
      "Optimized SQL queries & API integrations",
      "Supported SAP and business operations",
    ],
  },
  {
    type: "work",
    title: "MIS & IT Intern",
    org: "Transcom Electronics",
    time: "May 2025 – Aug 2025",
    icon: "🧠",
    color: "from-blue-500 to-cyan-500",
    points: [
      "Worked on system testing and WordPress updates",
      "Improved SQL queries for reporting systems",
      "Supported invoicing & internal tools",
    ],
  },
  {
    type: "edu",
    title: "BSc in CSE",
    org: "AUST",
    time: "2021 – 2025 | CGPA: 3.349",
    icon: "🎓",
    color: "from-green-500 to-emerald-500",
  },
  {
    type: "edu",
    title: "HSC",
    org: "Viqarunnisa Noon College",
    time: "2020 | GPA: 5.00",
    icon: "📘",
    color: "from-purple-500 to-indigo-500",
  },
  {
    type: "edu",
    title: "SSC",
    org: "Viqarunnisa Noon College",
    time: "2018 | GPA: 5.00",
    icon: "📗",
    color: "from-yellow-500 to-orange-500",
  },
  {
  type: "edu",
  title: "JSC",
  org: "Viqarunnisa Noon School",
  time: "2015 | GPA: 5.00",
  icon: "📙",
  color: "from-indigo-400 to-blue-400",
  minor: true,
},
{
  type: "edu",
  title: "PEC",
  org: "Viqarunnisa Noon School",
  time: "2012 | GPA: 5.00",
  icon: "📒",
  color: "from-gray-400 to-gray-500",
  minor: true,
},
];

export default function CareerTimeline() {
  const ref = useRef(null);

  // scroll progress line
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
  });

  return (
    <section id="career" ref={ref} className="relative bg-black text-white py-28 px-6 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.08),transparent_60%)]"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-20"
      >
        Career Timeline
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">

        {/* main vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 w-[2px] h-full bg-white/10" />

        {/* animated progress line */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-6 md:left-1/2 top-0 w-[2px] h-full origin-top
                     bg-gradient-to-b from-pink-500 via-blue-500 to-purple-500"
        />

        <div className="space-y-20">

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >

              {/* node */}
              <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-5">
                <div className="w-5 h-5 rounded-full bg-white shadow-[0_0_25px_rgba(255,255,255,0.8)]"></div>
              </div>

              {/* card wrapper */}
              <div className="ml-14 md:ml-0 md:w-[45%] group">

                <div className={`relative p-6 rounded-2xl border backdrop-blur-xl transition duration-500
  ${item.minor 
    ? "bg-white/3 border-white/5 opacity-70" 
    : "bg-white/5 border-white/10 hover:scale-[1.03] hover:border-white/30 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]"
  }`}>

                  {/* floating icon */}
                  <div className="text-2xl mb-3">{item.icon}</div>

                  {/* type badge */}
                  <div className={`inline-block px-3 py-1 text-xs rounded-full bg-gradient-to-r ${item.color} mb-3`}>
                    {item.type.toUpperCase()}
                  </div>

                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-1">
                    {item.org}
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    {item.time}
                  </p>

                  {/* details */}
                  {item.points && (
                    <ul className="mt-4 space-y-2 text-gray-300 text-sm list-disc ml-5">
                      {item.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  )}

                  {/* glow hover effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500
                                  bg-gradient-to-r from-pink-500/5 to-blue-500/5 pointer-events-none" />
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}