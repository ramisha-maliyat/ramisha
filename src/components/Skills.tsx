"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "C", "C++"],
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS"],
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Data & Analytics",
    skills: ["MS SQL", "BigQuery", "Looker"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Tools",
    skills: ["Git", "VS Code"],
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Systems",
    skills: ["Arduino"],
    color: "from-emerald-500 to-green-500",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-black text-white py-28 px-6 overflow-hidden"
    >
      {/* glow background (same system as hero/projects) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.08),transparent_60%)]"></div>

      {/* title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-16"
      >
        Skills
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-10">

        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
                       hover:border-white/30 transition"
          >
            {/* glow hover layer */}
            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition duration-500
                            bg-gradient-to-r from-pink-500/5 to-blue-500/5"></div>

            {/* header */}
            <div className="flex items-center justify-between mb-5 relative z-10">
              <h3 className="text-lg font-semibold">{group.title}</h3>

              <div
                className={`h-2 w-20 rounded-full bg-gradient-to-r ${group.color}`}
              />
            </div>

            {/* skills */}
            <div className="flex flex-wrap gap-2 relative z-10">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full border border-white/10
                             bg-black/30 text-gray-300
                             hover:text-white hover:border-white/30 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}