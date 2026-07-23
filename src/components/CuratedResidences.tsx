"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "The Vertex",
    location: "Mumbai",
    category: "Residential",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Aura Oasis",
    location: "Bangalore",
    category: "Residential",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Lumina Estate",
    location: "Hyderabad",
    category: "Hospitality",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function CuratedResidences() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card') as HTMLElement[];

      cards.forEach((card) => {
        const imgContainer = card.querySelector('.img-container');
        const img = card.querySelector('.parallax-img');
        const textBlock = card.querySelector('.text-block');

        // Extreme clip-path reveal (Era style)
        if (imgContainer) {
          gsap.fromTo(
            imgContainer,
            { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              ease: "power4.inOut",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 40%",
                scrub: 1.5, // Smooth scrubbing enabled
              },
            }
          );
        }

        // Inner Image scale & parallax
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.3, y: "-20%" },
            {
              scale: 1,
              y: "10%",
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }

        // Text block staggered reveal
        if (textBlock) {
          gsap.fromTo(
            textBlock,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 70%",
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={containerRef} className="py-48 px-6 lg:px-12 bg-white text-charcoal overflow-hidden relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-6 border-b border-charcoal/20 pb-12">
          <div>
            <h2 className="text-[clamp(4rem,8vw,10rem)] leading-none font-serif tracking-tighter">
              CURATED<br/>RESIDENCES
            </h2>
          </div>
          <button className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-bronze transition-colors group mb-4">
            View Archive
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={`project-card group cursor-pointer flex flex-col md:flex-row gap-12 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Massive Image Container */}
              <div className="w-full md:w-[65%] relative overflow-hidden aspect-[16/10] img-container bg-charcoal/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="parallax-img w-full h-full object-cover transform-gpu"
                />
              </div>

              {/* Text Block */}
              <div className="text-block w-full md:w-[35%] flex flex-col justify-center px-4 md:px-12">
                <span className="text-sm text-charcoal/40 font-serif italic mb-6">
                  {`0${index + 1}`} — {project.year}
                </span>
                <h3 className="text-5xl lg:text-7xl font-serif mb-8 group-hover:text-bronze transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-4 text-xs text-charcoal/60 uppercase tracking-[0.2em]">
                  <span>{project.location}</span>
                  <span>•</span>
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
