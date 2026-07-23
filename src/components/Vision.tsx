"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Vision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current && textRef.current && bgRef.current && pinContainerRef.current) {

      // Pin the section for an extended scroll effect (Era style)
      gsap.to(pinContainerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          start: "top top",
          end: "+=150%", // Keep it pinned for 1.5x the height
          scrub: true,
        }
      });

      // Extreme Parallax background zoom and pan
      gsap.fromTo(
        bgRef.current,
        { scale: 1.5, y: "-10%" },
        {
          scale: 1,
          y: "10%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Clip-path reveal for text
      const words = textRef.current.querySelectorAll('.word-inner');

      gsap.fromTo(
        words,
        { y: "110%", rotateZ: 5 },
        {
          y: "0%",
          rotateZ: 0,
          stagger: 0.1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            // end: "center center",
            // scrub: true, // we could scrub, but Era often uses triggered animations for text
          },
        }
      );
    }
  }, []);

  const text = "We craft timeless environments that elevate the art of living.";
  const splitText = text.split(" ").map((word, i) => (
    <span key={i} className="word inline-block mr-4 mb-4 overflow-hidden relative pb-2">
      <span className="word-inner inline-block origin-top-left">
        {word}
      </span>
    </span>
  ));

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-charcoal text-white"
    >
      <div ref={pinContainerRef} className="w-full h-full flex items-center justify-center relative">
        {/* Background Parallax Image */}
        <div
          ref={bgRef}
          className="absolute inset-0 z-0 opacity-50"
        >
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
            alt="Vision Background"
            className="w-full h-full object-cover grayscale mix-blend-overlay"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
          <p className="uppercase tracking-[0.2em] text-sm text-white/50 mb-12">
            The Vision
          </p>

          <h2
            ref={textRef}
            className="text-[clamp(3rem,6vw,7rem)] font-serif leading-[1.1] text-white flex flex-wrap justify-center"
          >
            {splitText}
          </h2>
        </div>
      </div>
    </section>
  );
}
