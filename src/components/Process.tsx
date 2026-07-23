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

    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray('.process-step') as HTMLElement[];

      steps.forEach((step) => {
        const line = step.querySelector('.process-line');
        const content = step.querySelector('.process-content');
        const number = step.querySelector('.process-number');

        // Animate line growing
        if (line) {
          gsap.fromTo(
            line,
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: step,
                start: "top 80%",
                end: "center center",
                scrub: true,
              },
            }
          );
        }

        // Fade in content
        if (content && number) {
          gsap.fromTo(
            [number, content],
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.2,
              ease: "power4.out",
              scrollTrigger: {
                trigger: step,
                start: "top 75%",
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={containerRef} className="py-48 px-6 lg:px-12 bg-cream text-charcoal border-t border-charcoal/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
          <h2 className="text-[clamp(4rem,8vw,10rem)] leading-none font-serif tracking-tighter uppercase">
            THE<br/>PROCESS
          </h2>
          <p className="text-xl max-w-md text-charcoal/70 pb-4 leading-relaxed font-light">
            A meticulous methodology designed to translate your abstract vision into tangible spatial poetry.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {STEPS.map((step) => (
            <div key={step.number} className="process-step relative group">

              <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start md:items-center py-12">
                <div className="process-number text-6xl md:text-8xl font-serif text-charcoal/20 group-hover:text-bronze transition-colors duration-500 w-32">
                  {step.number}
                </div>

                <div className="process-content flex-1 max-w-3xl">
                  <h3 className="text-4xl md:text-5xl font-serif mb-6 group-hover:translate-x-4 transition-transform duration-500">{step.title}</h3>
                  <p className="text-lg text-charcoal/60 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Horizontal Divider Line */}
              <div className="w-full h-[1px] bg-charcoal/10 absolute bottom-0 left-0">
                <div className="process-line w-full h-full bg-charcoal origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
