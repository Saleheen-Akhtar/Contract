"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Discovery & Vision",
    description: "We begin by understanding your aspirations, lifestyle, and the essence of what you wish to create. This foundational dialogue shapes the soul of the project.",
  },
  {
    number: "02",
    title: "Architectural Concept",
    description: "Our designers translate your vision into spatial poetry. We present initial concepts, exploring form, light, and context to define the architectural narrative.",
  },
  {
    number: "03",
    title: "Refinement & Details",
    description: "Every material is selected with intent. We refine the concept, engineering the intricate details that transform a space into a quiet luxury experience.",
  },
  {
    number: "04",
    title: "Realisation",
    description: "Our master craftsmen and project managers bring the vision to life, ensuring flawless execution and a seamless transition into your new masterpiece.",
  },
];

export default function Process() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-sand text-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="uppercase tracking-[0.2em] text-sm text-charcoal/50 mb-4">Methodology</p>
          <h2 className="text-4xl md:text-5xl font-serif">The Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="text-6xl font-light text-charcoal/10 mb-6 font-serif group-hover:text-bronze/20 transition-colors">
                {step.number}
              </div>
              <h3 className="text-xl font-serif mb-4">{step.title}</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                {step.description}
              </p>

              {/* Divider line that grows on hover */}
              <div className="mt-8 h-[1px] w-full bg-charcoal/10 relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full w-full bg-bronze origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 + (index * 0.2) }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
