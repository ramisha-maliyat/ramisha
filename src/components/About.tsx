"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-black text-white py-32 px-6 overflow-hidden">

      {/* soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(236,72,153,0.10),transparent_60%)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative z-10"
      >

        {/* title */}
        <h2 className="text-5xl font-bold mb-10">
          About Me
        </h2>

        {/* content */}
        <div className="space-y-6 text-lg leading-relaxed">

          <p className="text-gray-300">
            I’m a <span className="text-white font-medium">Software Developer</span> with a background in
            Computer Science and Engineering, currently focused on building
            real-world software solutions and data-driven systems.
          </p>

          <p className="text-gray-400">
            My work primarily involves <span className="text-pink-400">web development, backend systems, and API integration</span>,
            along with developing dashboards and reports using modern tools.
          </p>

          <p className="text-gray-500">
            I have hands-on experience with <span className="text-blue-400">Looker, BigQuery, and MS SQL</span>,
            where I work on data analysis, query optimization, and building
            insights that support business decisions.
          </p>

          <p className="text-gray-600">
            Alongside backend development, I also work on frontend components
            when needed, allowing me to contribute across the full stack and
            deliver complete, functional solutions.
          </p>

        </div>

      </motion.div>
    </section>
  );
}