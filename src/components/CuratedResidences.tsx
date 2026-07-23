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
    speed: 0.8,
  },
  {
    id: 2,
    title: "Aura Oasis",
    location: "Bangalore",
    category: "Residential",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    speed: 1.2,
  },
  {
    id: 3,
    title: "Lumina Estate",
    location: "Hyderabad",
    category: "Hospitality",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2000&auto=format&fit=crop",
    speed: 0.9,
  },
  {
    id: 4,
    title: "Serene Heights",
    location: "Chennai",
    category: "Residential",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop",
    speed: 1.1,
  },
];

export default function CuratedResidences() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray('.project-card') as HTMLElement[];

    cards.forEach((card, i) => {
      const speed = PROJECTS[i].speed;

      // Vertical staggered parallax
      gsap.fromTo(
        card,
        { y: 100 * speed },
        {
          y: -100 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Image inside card parallax (inner parallax)
      const img = card.querySelector('.parallax-img');
      if (img) {
        gsap.fromTo(
          img,
          { y: "-10%" },
          {
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
    });
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 lg:px-12 bg-white text-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
          <div>
            <p className="uppercase tracking-[0.2em] text-sm text-charcoal/50 mb-4">Portfolio</p>
            <h2 className="text-5xl md:text-6xl font-serif">Curated Residences</h2>
          </div>
          <button className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-bronze transition-colors group">
            All Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={`project-card group cursor-pointer ${index % 2 !== 0 ? "md:mt-48" : ""}`}
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-8">
                <div className="w-full h-full scale-[1.2]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="parallax-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              <div className="flex justify-between items-start">
                <div className="overflow-hidden">
                  <h3 className="text-3xl font-serif mb-2 group-hover:text-bronze transition-colors transform translate-y-0 group-hover:-translate-y-1 duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 text-sm text-charcoal/60 uppercase tracking-wider">
                    <span>{project.location}</span>
                    <span>{project.category}</span>
                  </div>
                </div>
                <span className="text-sm text-charcoal/40 font-serif italic">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
