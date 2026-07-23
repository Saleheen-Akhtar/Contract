"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const steps = gsap.utils.toArray('.process-step') as HTMLElement[];

    steps.forEach((step) => {
      const line = step.querySelector('.process-line');
      const content = step.querySelector('.process-content');

      // Animate line growing
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: step,
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          }
        );
      }

      // Fade in content
      if (content) {
        gsap.fromTo(
          content,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 70%",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 lg:px-12 bg-sand text-charcoal">
      <div className="max-w-4xl mx-auto">
        <div className="mb-24 text-center">
          <p className="uppercase tracking-[0.2em] text-sm text-charcoal/50 mb-4">Methodology</p>
          <h2 className="text-5xl md:text-6xl font-serif">The Process</h2>
        </div>

        <div className="flex flex-col">
          {STEPS.map((step, index) => (
            <div key={step.number} className="process-step relative flex gap-8 md:gap-16 pb-24 last:pb-0">

              {/* Vertical Timeline */}
              <div className="relative flex flex-col items-center">
                <div className="text-3xl font-serif text-bronze mb-4 bg-sand z-10 py-2">
                  {step.number}
                </div>
                {index !== STEPS.length - 1 && (
                  <div className="absolute top-16 bottom-0 w-[1px] bg-charcoal/10">
                    <div className="process-line w-full h-full bg-bronze origin-top"></div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="process-content pt-4">
                <h3 className="text-3xl font-serif mb-6">{step.title}</h3>
                <p className="text-lg text-charcoal/70 leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
