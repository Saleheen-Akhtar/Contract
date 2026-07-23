"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "How long does a typical ultra-luxury project take?",
    answer: "Our timeline is meticulously planned to ensure no compromises on quality. A typical ground-up residence takes between 14 to 18 months, depending on scale, custom finishes, and site topography."
  },
  {
    question: "Do you handle all interior design and material sourcing?",
    answer: "Yes. We offer an end-to-end turnkey solution. Our in-house design team sources exclusive materials globally, from Italian marble to bespoke European fixtures, ensuring every element aligns with your vision."
  },
  {
    question: "How does the zero price escalation guarantee work?",
    answer: "Once the design is finalized and the contract signed, we freeze the pricing. We absorb any market fluctuations in raw materials to give you complete financial peace of mind, provided the core design remains unchanged."
  },
  {
    question: "Can I track the progress of my project remotely?",
    answer: "Absolutely. We provide a dedicated client portal with weekly visual updates, live milestone tracking, and direct access to your dedicated project manager, ensuring transparency no matter where you are in the world."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 px-6 lg:px-12 bg-white text-charcoal">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <p className="uppercase tracking-[0.2em] text-sm text-charcoal/50 mb-4">Knowledge Base</p>
          <h2 className="text-4xl md:text-6xl font-serif">Frequently Asked Questions</h2>
        </div>

        <div className="border-t border-charcoal/20">
          {FAQS.map((faq, index) => (
            <div key={index} className="border-b border-charcoal/20">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex justify-between items-center text-left group"
              >
                <span className="text-2xl md:text-3xl font-serif group-hover:text-bronze transition-colors duration-300 pr-8">
                  {faq.question}
                </span>
                <span className="text-charcoal/40 group-hover:text-charcoal transition-colors duration-300 flex-shrink-0">
                  {openIndex === index ? <Minus strokeWidth={1} size={32} /> : <Plus strokeWidth={1} size={32} />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-lg text-charcoal/60 leading-relaxed font-light max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
