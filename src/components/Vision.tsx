"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-cream text-charcoal flex items-center justify-center min-h-[70vh]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.2em] text-sm text-charcoal/50 mb-8"
        >
          The Vision
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-charcoal"
        >
          We craft <span className="italic font-light text-bronze">timeless</span> environments that elevate the art of living. Every detail considered, every space designed with profound intention.
        </motion.h2>
      </div>
    </section>
  );
}
