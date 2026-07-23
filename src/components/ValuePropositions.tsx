"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Scale, Wallet, Construction } from "lucide-react";

const PROPOSITIONS = [
  {
    icon: Construction,
    title: "470+ Quality Audits",
    description: "Every stage, from foundation to ultra-luxury finishes, undergoes rigorous multi-stage QASCON checks to ensure unparalleled precision.",
  },
  {
    icon: Scale,
    title: "Zero Price Escalation",
    description: "Absolute transparency. Once the contract is signed and the vision is set, there are no hidden costs or sudden price hikes.",
  },
  {
    icon: Wallet,
    title: "Secure Escrow Model",
    description: "Payments are linked exclusively to progress. Funds are released only upon the flawless completion of predefined architectural milestones.",
  },
  {
    icon: ShieldCheck,
    title: "10-Year Warranty",
    description: "We stand by our masterpieces. A comprehensive decade-long warranty covers the structural integrity and core foundation of your residence.",
  },
];

export default function ValuePropositions() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white text-charcoal">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <p className="uppercase tracking-[0.2em] text-sm text-charcoal/50 mb-4">Our Commitment</p>
          <h2 className="text-3xl md:text-5xl font-serif max-w-3xl leading-tight">
            Redefining trust in ultra-luxury construction.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-charcoal/10 pt-16">
          {PROPOSITIONS.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="flex flex-col"
            >
              <div className="mb-6 h-12 w-12 rounded-full border border-charcoal/10 flex items-center justify-center text-bronze">
                <prop.icon strokeWidth={1.5} size={24} />
              </div>
              <h3 className="text-xl font-serif mb-4">{prop.title}</h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
