"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ShieldCheck, Scale, Wallet, Construction } from "lucide-react";

const PROPOSITIONS = [
  {
    icon: Construction,
    title: "470+ Quality Audits",
    description: "Every stage, from foundation to ultra-luxury finishes, undergoes rigorous multi-stage QASCON checks to ensure unparalleled precision.",
    number: "01"
  },
  {
    icon: Scale,
    title: "Zero Price Escalation",
    description: "Absolute transparency. Once the contract is signed and the vision is set, there are no hidden costs or sudden price hikes.",
    number: "02"
  },
  {
    icon: Wallet,
    title: "Secure Escrow Model",
    description: "Payments are linked exclusively to progress. Funds are released only upon the flawless completion of predefined architectural milestones.",
    number: "03"
  },
  {
    icon: ShieldCheck,
    title: "10-Year Warranty",
    description: "We stand by our masterpieces. A comprehensive decade-long warranty covers the structural integrity and core foundation of your residence.",
    number: "04"
  },
];

export default function ValuePropositions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const scrollEl = scrollRef.current;

    if (container && scrollEl) {
      // Calculate how far to scroll horizontally
      const scrollWidth = scrollEl.scrollWidth - window.innerWidth;

      const tween = gsap.to(scrollEl, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: "top top",
          end: `+=${scrollWidth}`,
          // invalidateOnRefresh: true,
        }
      });

      return () => {
        tween.kill();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-screen bg-charcoal text-white overflow-hidden relative"
    >
      <div className="absolute top-12 left-6 lg:left-12 z-10 mix-blend-difference">
        <p className="uppercase tracking-[0.2em] text-sm text-white/50 mb-2">Our Commitment</p>
        <h2 className="text-3xl md:text-5xl font-serif">
          Redefining trust.
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex h-full w-[400vw] sm:w-[300vw] lg:w-[250vw] items-center px-[20vw]"
      >
        {PROPOSITIONS.map((prop) => (
          <div
            key={prop.title}
            className="w-[80vw] sm:w-[50vw] lg:w-[40vw] flex-shrink-0 px-8 lg:px-16 flex flex-col justify-center"
          >
            <div className="text-[10rem] md:text-[15rem] leading-none font-serif text-white/5 absolute -z-10 -translate-y-20 -translate-x-10">
              {prop.number}
            </div>

            <div className="mb-8 h-16 w-16 rounded-full border border-white/20 flex items-center justify-center text-bronze backdrop-blur-md bg-white/5">
              <prop.icon strokeWidth={1.5} size={32} />
            </div>
            <h3 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">{prop.title}</h3>
            <p className="text-lg text-white/60 leading-relaxed max-w-md">
              {prop.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
