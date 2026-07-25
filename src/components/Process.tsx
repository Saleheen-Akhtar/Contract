"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const STEPS = [
  {
    number: "01",
    title: "Discovery & Vision",
    description: "We begin by understanding your aspirations, lifestyle, and the essence of what you wish to create. This foundational dialogue shapes the soul of the project.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "Architectural Concept",
    description: "Our designers translate your vision into spatial poetry. We present initial concepts, exploring form, light, and context to define the architectural narrative.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "Refinement & Details",
    description: "Every material is selected with intent. We refine the concept, engineering the intricate details that transform a space into a quiet luxury experience.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop"
  },
  {
    number: "04",
    title: "Realisation",
    description: "Our master craftsmen and project managers bring the vision to life, ensuring flawless execution and a seamless transition into your new masterpiece.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1000&auto=format&fit=crop"
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorImageRef = useRef<HTMLImageElement>(null);

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

  // Cursor-driven image follow logic (Tattoo Projects style)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cursorImageRef.current) {
      gsap.to(cursorImageRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  };

  const handleMouseEnter = (imageUrl: string) => {
    if (cursorImageRef.current) {
      cursorImageRef.current.src = imageUrl;
      gsap.to(cursorImageRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (cursorImageRef.current) {
      gsap.to(cursorImageRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <section
      id="process"
      ref={containerRef}
      className="py-48 px-6 lg:px-12 bg-cream text-charcoal border-t border-charcoal/10 relative"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Cursor Image */}
      <img
        ref={cursorImageRef}
        src=""
        alt="Process Visual"
        className="fixed top-0 left-0 w-[30vw] max-w-[400px] aspect-[4/3] object-cover pointer-events-none z-50 rounded-sm opacity-0 scale-50 -translate-x-1/2 -translate-y-1/2 shadow-2xl mix-blend-luminosity hidden md:block"
      />

      <div className="max-w-[1400px] mx-auto">
        <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
          <h2 className="text-[clamp(4rem,8vw,10rem)] leading-none font-serif tracking-tighter uppercase">
            THE<br/>PROCESS
          </h2>
          <p className="text-xl max-w-md text-charcoal/70 pb-4 leading-relaxed font-light">
            A meticulous methodology designed to translate your abstract vision into tangible spatial poetry.
          </p>
        </div>

        <div className="flex flex-col gap-16 relative z-10">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="process-step relative group"
              onMouseEnter={() => handleMouseEnter(step.image)}
              onMouseLeave={handleMouseLeave}
            >

              <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start md:items-center py-12 cursor-none">
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
