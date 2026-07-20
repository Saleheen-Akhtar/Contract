"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[50vh] flex flex-col justify-center relative w-full pt-12 md:pt-24 z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="w-full flex justify-start"
      >
        <h1 className="text-title uppercase m-0 p-0 text-left -ml-2 tracking-tighter mix-blend-difference z-20">
          THE ONLY THING<br />THAT MATTERS
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.7, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="w-full flex justify-end mt-4"
      >
        <h2 className="text-title uppercase m-0 p-0 text-right -mr-2 tracking-tighter text-right mix-blend-difference z-20">
          IS HOW YOU<br />BUILD THEM
        </h2>
      </motion.div>
    </section>
  );
}
