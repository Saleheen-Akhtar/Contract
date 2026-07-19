"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Hammer, Key } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
    title: "100% Transparency",
    description: "Every cost is outlined from day one. No hidden fees, no sudden price spikes. Escrow-backed security for absolute peace of mind."
  },
  {
    icon: <Clock className="w-8 h-8 text-cyan-400" />,
    title: "Zero Delays",
    description: "Your timeline is our deadline. We enforce strict penalties on ourselves if we fail to deliver on the agreed handover date."
  },
  {
    icon: <Hammer className="w-8 h-8 text-blue-500" />,
    title: "Premium Build Quality",
    description: "We use only A-grade materials and employ 400+ quality checks throughout the construction lifecycle."
  },
  {
    icon: <Key className="w-8 h-8 text-cyan-400" />,
    title: "10-Year Warranty",
    description: "Our relationship doesn't end at handover. We back our craftsmanship with a solid 10-year structural warranty."
  }
];

export default function About() {
  return (
    <section className="py-32 px-6 md:px-12 bg-zinc-950 text-white relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            The New Standard in <br className="hidden md:block" />
            <span className="text-zinc-500">Real Estate Development.</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl font-light">
            We are redefining how homes are built by combining architectural excellence with rigorous project management. Welcome to stress-free construction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
