"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Vision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current && textRef.current && bgRef.current) {
      // Parallax background
      gsap.fromTo(
        bgRef.current,
        { y: "-20%" },
        {
          y: "20%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Massive text reveal
      const words = textRef.current.querySelectorAll('.word');

      gsap.fromTo(
        words,
        { opacity: 0, y: 50, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "center center",
            scrub: 1,
          },
        }
      );
    }
  }, []);

  const text = "We craft timeless environments that elevate the art of living.";
  const splitText = text.split(" ").map((word, i) => (
    <span key={i} className="word inline-block mr-4 mb-4 origin-bottom" style={{ perspective: "1000px" }}>
      {word}
    </span>
  ));

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal text-white py-32 px-6 lg:px-12"
    >
      {/* Background Parallax Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 opacity-40 scale-110"
      >
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Vision Background"
          className="w-full h-full object-cover grayscale mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <p className="uppercase tracking-[0.2em] text-sm text-white/50 mb-12">
          The Vision
        </p>

        <h2
          ref={textRef}
          className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight text-white flex flex-wrap justify-center"
        >
          {splitText}
        </h2>
      </div>
    </section>
  );
}
