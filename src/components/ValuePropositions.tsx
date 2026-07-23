"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ShieldCheck, Scale, Wallet, Construction } from "lucide-react";

const PROPOSITIONS = [
  {
    icon: Construction,
    title: "470+ Audits",
    description: "Every stage undergoes rigorous multi-stage QASCON checks.",
    number: "01"
  },
  {
    icon: Scale,
    title: "Zero Price Escalation",
    description: "Absolute transparency. No hidden costs or sudden hikes.",
    number: "02"
  },
  {
    icon: Wallet,
    title: "Secure Escrow",
    description: "Funds released only upon flawless completion of milestones.",
    number: "03"
  },
  {
    icon: ShieldCheck,
    title: "10-Year Warranty",
    description: "A decade-long warranty covers the structural integrity.",
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

    let ctx = gsap.context(() => {
      if (container && scrollEl) {
        const scrollWidth = scrollEl.scrollWidth - window.innerWidth;

        gsap.to(scrollEl, {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            start: "top top",
            end: `+=${scrollWidth}`,
          }
        });
      }
    }, containerRef); // Scopes all animations and ScrollTriggers to this component

    return () => ctx.revert(); // Automatically cleans up everything inside the context
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-screen bg-charcoal text-white overflow-hidden relative border-y border-white/10"
    >
      <div className="absolute top-12 left-6 lg:left-12 z-10">
        <h2 className="text-[clamp(2rem,4vw,4rem)] font-serif leading-none mix-blend-difference">
          Trust &<br/>Transparency
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex h-full w-[350vw] md:w-[250vw] lg:w-[200vw] items-center px-[20vw]"
      >
        {PROPOSITIONS.map((prop) => (
          <div
            key={prop.title}
            className="w-[80vw] sm:w-[50vw] lg:w-[40vw] flex-shrink-0 px-8 lg:px-16 flex flex-col justify-center border-l border-white/20 h-[50vh]"
          >
            <div className="flex justify-between items-start mb-12">
              <span className="text-xl font-serif text-bronze">{prop.number}</span>
              <prop.icon strokeWidth={1} size={48} className="text-white/30" />
            </div>
            <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight max-w-sm">{prop.title}</h3>
            <p className="text-lg text-white/60 leading-relaxed max-w-sm font-light">
              {prop.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
