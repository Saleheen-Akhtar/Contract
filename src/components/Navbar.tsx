"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 pt-8 flex justify-between items-start"
    >
      <div className="bg-[#f2f2f2] px-6 py-4 flex gap-12 items-center text-sm font-medium tracking-tight rounded-[4px]">
        <div className="font-bold text-lg tracking-tighter pr-4">CLASSICS</div>
        <div className="hidden md:flex gap-8 text-[15px]">
          <a href="#" className="hover:opacity-60 transition-opacity">Work</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Approach</a>
          <a href="#" className="hover:opacity-60 transition-opacity">About</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Process</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Contact</a>
        </div>
      </div>

      <div className="bg-[#f2f2f2] px-6 py-4 rounded-[4px] text-[15px] font-medium flex items-center gap-2 cursor-pointer hover:bg-[#e5e5e5] transition-colors">
        Start Project
        <span className="w-2 h-2 bg-red-500 rounded-full inline-block"></span>
      </div>
    </motion.nav>
  );
}
