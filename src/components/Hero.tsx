"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.10),transparent_60%)]"></div>

      {/* floating blur blobs */}
      <div className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-20 right-10 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >

        {/* badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1 text-xs rounded-full border border-white/20 bg-white/5 backdrop-blur-md"
        >
          Software Engineer • Full Stack • AI Enthusiast
        </motion.div>

        {/* name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text"
        >
          SHAIKH RAMISHA MALIYAT
        </motion.h1>

        {/* role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-gray-300 mt-5"
        >
          Software Developer
        </motion.p>

        {/* description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-xl mx-auto text-gray-500 mt-4"
        >
          Building scalable systems, dashboards, and modern web solutions with
          AI, IoT, and cloud-based technologies.
        </motion.p>

        {/* buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 flex gap-4 justify-center flex-wrap"
        >

          {/* primary button */}
          <a
            href="/cv.pdf"
            download
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium
                       hover:scale-105 transition"
          >
            Download CV
          </a>

          {/* secondary button */}
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md
                       hover:border-white/40 hover:scale-105 transition"
          >
            View Projects
          </a>

        </motion.div>

        {/* RIGHT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
    

<div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">

  {/* ROTATING GRADIENT RING */}
  <div className="absolute inset-0 rounded-full animate-spin-slow 
                  bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500
                  blur-[6px] opacity-70"></div>

  {/* INNER DARK MASK (to create ring effect) */}
  <div className="absolute inset-[6px] rounded-full bg-black"></div>

  {/* SOFT GLOW */}
  <div className="absolute inset-0 rounded-full 
                  shadow-[0_0_60px_rgba(236,72,153,0.4)]"></div>

  {/* IMAGE */}
  <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
    <Image
      src="/profile.jpeg"
      alt="Ramisha"
      fill
      className="object-cover"
      priority
    />
  </div>

</div>
        </motion.div>

      </motion.div>
    </section>
  );
}