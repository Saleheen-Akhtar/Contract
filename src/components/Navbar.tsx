"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 pt-8 flex justify-between items-start pointer-events-none"
    >
      <div className="bg-white/90 backdrop-blur-md px-6 py-4 flex gap-12 items-center text-sm font-medium tracking-tight rounded-[4px] pointer-events-auto border border-charcoal/10 shadow-sm">
        <div className="font-bold text-lg tracking-tighter pr-4 text-charcoal">CLASSICS</div>
        <div className="hidden md:flex gap-8 text-[15px] text-charcoal/80">
          <a href="#work" className="hover:text-charcoal transition-colors">Work</a>
          <a href="#process" className="hover:text-charcoal transition-colors">Process</a>
          <a href="#faq" className="hover:text-charcoal transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-charcoal transition-colors">Contact</a>
        </div>
      </div>

      <a href="#contact" className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-[4px] text-[15px] font-medium flex items-center gap-3 cursor-pointer hover:bg-cream transition-colors pointer-events-auto border border-charcoal/10 shadow-sm text-charcoal">
        Start Project
        <span className="w-2 h-2 bg-red-500 rounded-full inline-block animate-pulse"></span>
      </a>
    </motion.nav>
  );
}
