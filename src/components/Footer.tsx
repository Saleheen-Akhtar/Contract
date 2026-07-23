"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-32 pb-12 px-6 lg:px-12 rounded-t-[3rem] -mt-10 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-12">
          <div className="max-w-md">
            <h3 className="text-3xl font-serif mb-6">Ready to shape your story?</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Reach out to begin the dialogue. We take on a select number of projects each year to ensure uncompromising quality and attention to detail.
            </p>
            <a
              href="mailto:contact@classicsgroup.com"
              className="inline-flex items-center gap-2 pb-2 border-b border-white/30 hover:border-white transition-colors text-sm uppercase tracking-widest"
            >
              contact@classicsgroup.com
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="flex gap-16 text-sm uppercase tracking-widest">
            <div className="flex flex-col gap-4">
              <span className="text-white/40 mb-2">Offices</span>
              <p>Mumbai</p>
              <p>Bangalore</p>
              <p>Hyderabad</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white/40 mb-2">Socials</span>
              <a href="#" className="hover:text-bronze transition-colors">Instagram</a>
              <a href="#" className="hover:text-bronze transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-bronze transition-colors">Pinterest</a>
            </div>
          </div>
        </div>

        {/* Oversized Typography */}
        <div className="relative w-full border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <h2 className="text-[15vw] leading-none font-serif tracking-tighter text-white/90 text-center md:text-left">
              CLASSICS
            </h2>
          </motion.div>

          <div className="flex gap-6 text-xs text-white/40 uppercase tracking-widest whitespace-nowrap pb-4">
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
