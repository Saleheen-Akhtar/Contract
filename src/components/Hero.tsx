"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment, MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-zinc-950 text-white px-6 md:px-12">
      {/* 3D Background Element */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Sphere args={[1, 64, 64]} scale={2.5} position={[2, 0, -2]}>
            <MeshDistortMaterial
              color="#3b82f6"
              attach="material"
              distort={0.4}
              speed={1.5}
              roughness={0.2}
            />
          </Sphere>
          <Environment preset="city" />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-blue-500 font-mono tracking-widest text-sm md:text-base uppercase">
            Elevating Real Estate
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold leading-none tracking-tighter">
            Classics
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300">
              Group.
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 max-w-xl"
        >
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            We build modern, reliable, and aesthetically driven homes. From architectural planning to the final handover, we bring your vision to reality with zero delays and absolute transparency.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
           <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-blue-600 rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative">Start Your Project</span>
           </button>
        </motion.div>
      </div>
    </section>
  );
}
