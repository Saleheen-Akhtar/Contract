"use client";

export default function DarkSection() {
  return (
    <section className="bg-black text-white w-full min-h-screen py-32 px-6 md:px-12 flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-12 mt-12">
        {/* Left Document Box representing the "Manifesto" style from TinyWins */}
        <div className="flex-1 bg-[#f0ede6] text-black p-12 rounded-[2px] shadow-2xl relative z-10 transform md:translate-x-12">
          <div className="text-center font-serif text-[10px] tracking-[0.2em] mb-12 uppercase text-gray-500">
            The Guarantee
          </div>
          <p className="font-serif text-lg leading-relaxed text-center text-gray-800 mb-8 max-w-sm mx-auto">
            Today, homeowners lack the modern frameworks needed to make these high-stakes construction decisions with clarity and confidence. Without these tools, they cannot effectively plan for, mitigate risks of, or capture the benefits from what lies ahead.
          </p>
          <p className="font-serif text-sm leading-relaxed text-center text-gray-400 max-w-sm mx-auto">
            Given the magnitude of this moment, poor planning and preparation could lead to massive cost overruns and delays.
          </p>
        </div>

        {/* Right side large text / graphic area */}
        <div className="flex-1 flex flex-col justify-end relative z-0 md:-ml-12 mt-12 md:mt-32">
          <h2 className="text-[12rem] font-bold leading-[0.8] tracking-tighter text-white">
            BUILT
          </h2>
        </div>
      </div>
    </section>
  );
}
