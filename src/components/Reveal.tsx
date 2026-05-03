"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}