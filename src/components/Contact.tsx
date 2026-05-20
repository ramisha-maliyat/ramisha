"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-black text-white py-28 px-6 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.10),transparent_60%)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* title */}
        <h2 className="text-5xl font-bold mb-4">Contact Me</h2>

        <p className="text-gray-400 mb-12">
          Let’s build something amazing together 🚀
        </p>

        {/* glass card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-10 shadow-lg">

          <div className="grid md:grid-cols-3 gap-8 text-center">

            {/* Email */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 hover:border-pink-500 transition">
              <h3 className="text-pink-400 font-semibold">Email</h3>
              <p className="text-gray-300 mt-2 break-all">
                ramisha4627@gmail.com
              </p>
            </div>

            {/* Phone */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 hover:border-blue-500 transition">
              <h3 className="text-blue-400 font-semibold">Phone</h3>
              <p className="text-gray-300 mt-2">
                
              </p>
            </div>

            {/* Location */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 hover:border-green-500 transition">
              <h3 className="text-green-400 font-semibold">Location</h3>
              <p className="text-gray-300 mt-2">
                Dhaka, Bangladesh
              </p>
            </div>

          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="mailto:ramisha4627@gmail.com"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium hover:scale-105 transition"
            >
              Send Email
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md hover:border-white/40 hover:scale-105 transition"
            >
              View Projects
            </a>

          </div>

        </div>
      </motion.div>
    </section>
  );
}