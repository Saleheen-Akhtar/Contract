"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-32 px-6 md:px-12 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            Ready to <br /> Break Ground?
          </h2>
          <p className="text-xl text-zinc-400 font-light max-w-md mb-12">
            Leave your details below. Our technical experts will reach out within 24 hours to discuss your plot, budget, and vision.
          </p>

          <div className="space-y-4 text-zinc-500 font-mono text-sm">
            <p>MAIL: HELLO@CLASSICSGROUP.COM</p>
            <p>CALL: +1 (800) 555-0199</p>
            <p>HQ: 101 REALTY BLVD, NEW YORK, NY</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-zinc-900 p-8 md:p-12 rounded-3xl border border-zinc-800"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">City / Location</label>
                <input
                  type="text"
                  placeholder="e.g. Brooklyn, NY"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Project Details</label>
              <textarea
                rows={4}
                placeholder="Tell us about your plot size, budget, and timeline..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button className="w-full group relative inline-flex items-center justify-center px-8 py-5 font-bold text-white bg-blue-600 rounded-xl overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]">
               <span className="flex items-center gap-2">
                 Submit Inquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
