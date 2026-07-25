"use client";

import { motion } from "framer-motion";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Select all elements with the .mask-text class
      const lines = gsap.utils.toArray('.mask-text');

      gsap.fromTo(
        lines,
        { y: "110%", rotateZ: 2 }, // Start slightly rotated and pushed down out of the mask
        {
          y: "0%",
          rotateZ: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.5 // Wait for page transition
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center relative w-full pt-12 md:pt-24 z-10 px-6 lg:px-12">

      <div className="w-full flex flex-col items-start mb-4">
        {/* Each line is wrapped in a container with hidden overflow to create the mask effect */}
        <div className="overflow-hidden pb-2 -ml-2">
          <h1 className="mask-text origin-top-left text-title uppercase m-0 p-0 text-left tracking-tighter text-charcoal z-20 leading-[0.85]">
            THE ONLY THING
          </h1>
        </div>
        <div className="overflow-hidden pb-2 -ml-2">
          <h1 className="mask-text origin-top-left text-title uppercase m-0 p-0 text-left tracking-tighter text-charcoal z-20 leading-[0.85]">
            THAT MATTERS
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-col items-end mt-4">
        <div className="overflow-hidden pb-2 -mr-2">
          <h2 className="mask-text origin-top-left text-title uppercase m-0 p-0 text-right tracking-tighter text-charcoal z-20 leading-[0.85]">
            IS HOW YOU
          </h2>
        </div>
        <div className="overflow-hidden pb-2 -mr-2">
          <h2 className="mask-text origin-top-left text-title uppercase m-0 p-0 text-right tracking-tighter text-charcoal z-20 leading-[0.85]">
            BUILD THEM
          </h2>
        </div>
      </div>

      {/* Decorative subtle element indicating scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-6 lg:left-12 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-charcoal/50"
      >
        <div className="w-12 h-[1px] bg-charcoal/30"></div>
        Scroll to discover
      </motion.div>
    </section>
  );
}
