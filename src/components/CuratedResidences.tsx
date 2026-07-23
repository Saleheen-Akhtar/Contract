"use client";

import { motion } from "framer-motion";
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
  {
    id: 4,
    title: "Serene Heights",
    location: "Chennai",
    category: "Residential",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function CuratedResidences() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white text-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <p className="uppercase tracking-[0.2em] text-sm text-charcoal/50 mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-serif">Curated Residences</h2>
          </div>
          <button className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-bronze transition-colors group">
            All Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group cursor-pointer ${index % 2 !== 0 ? "md:mt-24" : ""}`}
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif mb-2 group-hover:text-bronze transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 text-sm text-charcoal/60 uppercase tracking-wider">
                    <span>{project.location}</span>
                    <span>{project.category}</span>
                  </div>
                </div>
                <span className="text-sm text-charcoal/40">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
