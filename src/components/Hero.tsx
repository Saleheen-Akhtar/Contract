"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Calculator } from "lucide-react";

const CITIES = [
  { name: "Mumbai", rate: 10000 },
  { name: "Bangalore", rate: 7000 },
  { name: "Hyderabad", rate: 6500 },
  { name: "Chennai", rate: 6000 },
];

export default function Hero() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [sqft, setSqft] = useState<string>("1000");
  const [city, setCity] = useState(CITIES[0]);
  const [result, setResult] = useState<number | null>(null);

  const calculateEstimation = () => {
    const area = parseFloat(sqft);
    if (!isNaN(area) && area > 0) {
      setResult(area * city.rate);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-sand">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Luxury Architecture"
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-white/80 uppercase tracking-[0.3em] text-sm mb-6 font-medium">
            Classics Group
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-8"
        >
          Quiet Luxury, <br />
          <span className="italic font-light">Shaped by Stories.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 mt-8"
        >
          <button className="px-8 py-4 bg-white text-black text-sm uppercase tracking-widest hover:bg-cream transition-colors duration-300">
            View Projects
          </button>
          <button
            onClick={() => setIsCalculatorOpen(true)}
            className="px-8 py-4 border border-white/30 text-white backdrop-blur-sm bg-black/10 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Calculator size={16} />
            Envision Your Residence
          </button>
        </motion.div>
      </div>

      {/* Calculator Modal / Overlay */}
      {isCalculatorOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={() => setIsCalculatorOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="bg-cream w-full max-w-xl p-8 md:p-12 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsCalculatorOpen(false)}
              className="absolute top-6 right-6 text-charcoal/50 hover:text-charcoal transition-colors"
            >
              Close [X]
            </button>

            <h2 className="text-3xl font-serif text-charcoal mb-2">
              Vision to Reality
            </h2>
            <p className="text-charcoal/60 mb-8 text-sm uppercase tracking-widest">
              Ultra-Luxury Estimation
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-charcoal/80 mb-2">
                  Prime Location
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {CITIES.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => {
                        setCity(c);
                        setResult(null);
                      }}
                      className={`py-3 border text-sm transition-colors ${
                        city.name === c.name
                          ? "border-charcoal bg-charcoal text-white"
                          : "border-charcoal/20 text-charcoal hover:border-charcoal/50"
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal/80 mb-2">
                  Square Footage (sq.ft)
                </label>
                <input
                  type="number"
                  value={sqft}
                  onChange={(e) => {
                    setSqft(e.target.value);
                    setResult(null);
                  }}
                  className="w-full bg-transparent border-b border-charcoal/20 py-3 text-2xl font-serif focus:outline-none focus:border-charcoal transition-colors"
                  placeholder="Enter area..."
                />
              </div>

              <div className="pt-4">
                <button
                  onClick={calculateEstimation}
                  className="w-full py-4 bg-bronze hover:bg-bronze-light text-white uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-2 group"
                >
                  Discover the Investment
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {result !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="pt-6 border-t border-charcoal/10 mt-6"
                >
                  <p className="text-sm text-charcoal/60 mb-1">Estimated Base Cost</p>
                  <p className="text-4xl font-serif text-charcoal">
                    {formatCurrency(result)}
                  </p>
                  <p className="text-xs text-charcoal/40 mt-2">
                    *Estimation based on ultra-luxury finishes in {city.name}. Final cost may vary based on specific architectural requirements and material selections.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
