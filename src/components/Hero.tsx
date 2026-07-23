"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative w-full pt-12 md:pt-24 z-10 px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="w-full flex justify-start"
      >
        <h1 className="text-title uppercase m-0 p-0 text-left -ml-2 tracking-tighter text-charcoal z-20">
          THE ONLY THING<br />THAT MATTERS
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="w-full flex justify-end mt-4"
      >
        <h2 className="text-title uppercase m-0 p-0 text-right -mr-2 tracking-tighter text-charcoal z-20">
          IS HOW YOU<br />BUILD THEM
        </h2>
      </motion.div>

      {/* Decorative subtle element indicating scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-6 lg:left-12 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-charcoal/50"
      >
        <div className="w-12 h-[1px] bg-charcoal/30"></div>
        Scroll to discover
      </motion.div>
    </section>
  );
}
