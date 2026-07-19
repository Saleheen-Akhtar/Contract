"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery & Planning",
    desc: "We align on your vision, budget, and timeline. Our architects draft custom blueprints ensuring optimal use of space and aesthetics."
  },
  {
    num: "02",
    title: "Approvals & Prep",
    desc: "We handle all the red tape. From city permits to site clearing, we ensure everything is legally sound before ground breaks."
  },
  {
    num: "03",
    title: "Live Construction",
    desc: "Track progress in real-time via our portal. We execute with precision, running quality checks at every major milestone."
  },
  {
    num: "04",
    title: "Handover",
    desc: "A final walkthrough, keys handed over, and you step into your pristine, move-in-ready home backed by our warranty."
  }
];

export default function Process() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white text-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            How we <span className="text-blue-600">build.</span>
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl">
            A seamless, transparent journey from a vacant plot to your dream home.
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col md:flex-row gap-6 md:gap-16 border-t border-zinc-200 pt-12 group"
            >
              <div className="text-6xl md:text-8xl font-bold text-zinc-200 group-hover:text-blue-600 transition-colors duration-500">
                {step.num}
              </div>
              <div className="md:mt-4">
                <h3 className="text-3xl md:text-4xl font-semibold mb-4">{step.title}</h3>
                <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
