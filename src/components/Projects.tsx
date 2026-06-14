"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Transcom Electronics Chatbot",
    desc: "AI-powered customer support chatbot handling product queries, policies, and showroom information with real-time Firebase logging and LLaMA 3 integration via Groq API.",
    tag: "AI + Full Stack",
    color: "from-orange-500 to-pink-500",
  },
  {
  title: "Timr.MR - Global Time Platform",
  desc: "Built a production-ready global time platform with real-time clock synchronization, timezone conversion, dynamic city pages, countdown timers, stopwatch functionality, calendar integration, and responsive cross-device support using Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
  tag: "Full Stack + Real-Time",
  color: "from-cyan-500 to-blue-500",
},
  {
    title: "Business Analytics Dashboard (Demo)",
    desc: "Designed a simulated analytics system using Looker and BigQuery-style SQL modeling to visualize revenue, product performance, and regional insights.",
    tag: "Looker + Data Analytics",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Cloudways",
    desc: "Airline ticketing system built with Java and database integration for booking and management operations.",
    tag: "Java + DBMS",
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Autism Detection System",
    desc: "Deep learning-based system for autism detection and facial emotion recognition using AI models.",
    tag: "AI + Deep Learning",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Cross Cinema",
    desc: "Web-based movie ticketing platform with full database integration and user management system.",
    tag: "Web App",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Cake Baking Website",
    desc: "Responsive frontend website for a bakery business with modern UI design and smooth user experience.",
    tag: "Frontend",
    color: "from-yellow-400 to-orange-400",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-black text-white py-28 px-6 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.08),transparent_60%)]"></div>

      {/* title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-16"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            {/* glow layer */}
            <div
              className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl
                         bg-gradient-to-r from-pink-500/20 to-blue-500/20"
            ></div>

            {/* card */}
            <div
              className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
                         transition duration-300 hover:scale-[1.03] hover:border-white/30"
            >
              {/* badge */}
              <div
                className={`inline-block px-3 py-1 text-xs rounded-full bg-gradient-to-r ${project.color} mb-4`}
              >
                {project.tag}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {project.desc}
              </p>

              {/* hover underline */}
              <div className="mt-4 h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-pink-500 to-blue-500"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}