"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isLoading ? 0 : "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-50 bg-[#f2f2f2] flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="bg-[#e5e5e5] rounded-lg px-8 py-4 flex items-center justify-center shadow-sm">
        <h1 className="text-xl font-bold tracking-tighter">CLASSICS<span className="font-normal">GROUP</span></h1>
      </div>
    </motion.div>
  );
}
