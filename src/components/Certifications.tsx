"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

type Certificate = {
  title: string;
  platform: string;
  desc: string;
  color: string;
  image: string;
};

const certificates: Certificate[] = [
  {
    title: "Data Visualization with Looker",
    platform: "Coursera",
    desc: "Learned data modeling, dashboards, and business analytics using Looker.",
    color: "from-blue-500 to-cyan-500",
    image: "/certificates/looker-certificate.jpg",
  },
];

const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

export default function Certifications() {
 

  return (
    <section className="relative bg-black text-white py-28 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.10),transparent_60%)]"></div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-16 relative z-10"
      >
        Certifications
      </motion.h2>

      {/* Certificates */}
      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedCert(cert)}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl cursor-pointer hover:border-blue-500 transition-all duration-300"
          >
            <div
              className={`inline-block px-3 py-1 text-xs rounded-full bg-gradient-to-r ${cert.color} mb-3`}
            >
              {cert.platform}
            </div>

            <h3 className="text-xl font-semibold">{cert.title}</h3>

            <p className="text-gray-400 mt-2">{cert.desc}</p>

            <p className="mt-4 text-blue-400 text-sm">
              Click to view certificate →
            </p>
          </motion.div>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-blue-400"
            >
              ×
            </button>

            {/* Certificate Image */}
            <Image
              src={selectedCert.image}
              alt={selectedCert.title}
              width={1200}
              height={800}
              className="rounded-xl w-full h-auto shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}