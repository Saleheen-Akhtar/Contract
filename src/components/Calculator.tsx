"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const CITIES = [
  { name: "Mumbai", rate: 10000 },
  { name: "Bangalore", rate: 7000 },
  { name: "Hyderabad", rate: 6500 },
  { name: "Chennai", rate: 6000 },
];

export default function Calculator() {
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
    <section className="py-24 px-6 lg:px-12 bg-sand text-charcoal flex justify-center">
      <div className="w-full max-w-4xl bg-cream p-8 md:p-16 shadow-sm border border-charcoal/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">
            Vision to Reality
          </h2>
          <p className="text-charcoal/60 text-sm uppercase tracking-widest">
            Ultra-Luxury Estimation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Inputs */}
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-charcoal/80 mb-4">
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
                        : "border-charcoal/20 text-charcoal hover:border-charcoal/50 bg-white"
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal/80 mb-4">
                Square Footage (sq.ft)
              </label>
              <input
                type="number"
                value={sqft}
                onChange={(e) => {
                  setSqft(e.target.value);
                  setResult(null);
                }}
                className="w-full bg-transparent border-b border-charcoal/20 py-3 text-3xl font-serif focus:outline-none focus:border-charcoal transition-colors"
                placeholder="Enter area..."
              />
            </div>

            <button
              onClick={calculateEstimation}
              className="w-full py-4 bg-bronze hover:bg-bronze-light text-white uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-2 group mt-4"
            >
              Discover the Investment
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Results */}
          <div className="bg-white p-8 border border-charcoal/5 flex flex-col justify-center min-h-[300px]">
            {result === null ? (
              <div className="text-center text-charcoal/40 font-serif italic">
                Enter your details to reveal the estimated investment.
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <p className="text-sm text-charcoal/60 mb-2 uppercase tracking-widest">
                  Estimated Base Cost
                </p>
                <p className="text-5xl lg:text-6xl font-serif text-bronze my-6">
                  {formatCurrency(result)}
                </p>
                <div className="w-12 h-[1px] bg-charcoal/20 mx-auto my-6"></div>
                <p className="text-xs text-charcoal/50 leading-relaxed max-w-[250px] mx-auto">
                  *Estimation based on ultra-luxury finishes in {city.name}. Final cost may vary based on specific architectural requirements, topography, and material selections.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
