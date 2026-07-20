"use client";

import { motion } from "framer-motion";

export default function Stats() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 1 }}
      className="mt-32 pb-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-[22px] font-bold tracking-tight"
    >
      <div>
        100% On-time delivery guarantee
      </div>
      <div className="md:text-center">
        10,000+ Homes built and counting
      </div>
      <div className="md:text-right">
        $1B+ Managed in escrow construction value
      </div>
    </motion.section>
  );
}
