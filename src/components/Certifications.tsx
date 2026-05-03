"use client";

import { motion } from "framer-motion";

const certificates = [
  {
    title: "Data Visualization with Looker",
    platform: "Coursera",
    desc: "Learned data modeling, dashboards, and business analytics using Looker.",
    color: "from-blue-500 to-cyan-500",
  },
];

export default function Certifications() {
  return (
    <section className="relative bg-black text-white py-28 px-6 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.10),transparent_60%)]"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-16"
      >
        Certifications
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-6">

        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >

            <div className={`inline-block px-3 py-1 text-xs rounded-full bg-gradient-to-r ${cert.color} mb-3`}>
              {cert.platform}
            </div>

            <h3 className="text-xl font-semibold">
              {cert.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {cert.desc}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}