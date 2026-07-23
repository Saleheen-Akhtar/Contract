"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ArrowRight, Plus, Minus } from "lucide-react";

const CITIES = [
  { name: "Mumbai", rate: 10000 },
  { name: "Bangalore", rate: 7000 },
  { name: "Hyderabad", rate: 6500 },
  { name: "Chennai", rate: 6000 },
];

const FLOORS = [
  { label: "G", value: 1 },
  { label: "G+1", value: 2 },
  { label: "G+2", value: 3 },
  { label: "G+3", value: 4 },
];

const TIERS = [
  { label: "Basic", multiplier: 0.10 },
  { label: "Premium", multiplier: 0.25 },
  { label: "Luxury", multiplier: 0.45 },
];

interface CalcResult {
  base: number;
  basement: number;
  rooms: number;
  interior: number;
  subtotal: number;
  total: number;
}

export default function Calculator() {
  // Inputs
  const [city, setCity] = useState(CITIES[0]);
  const [sqft, setSqft] = useState<string>("1000");
  const [floors, setFloors] = useState(FLOORS[0]);
  const [rooms, setRooms] = useState<number>(3);
  const [hasBasement, setHasBasement] = useState<boolean>(false);
  const [basementSqft, setBasementSqft] = useState<string>("");
  const [tier, setTier] = useState(TIERS[2]);

  // Output
  const [result, setResult] = useState<CalcResult | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial Reveal Animation
    if (containerRef.current && cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to the center of the card
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Gentle tilt
    gsap.to(card, {
      rotateY: x * 0.01,
      rotateX: -y * 0.01,
      ease: "power2.out",
      duration: 0.5,
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      ease: "power3.out",
      duration: 1,
    });
  };

  const calculateEstimation = () => {
    const area = parseFloat(sqft);
    if (isNaN(area) || area <= 0) {
      setResult(null);
      return;
    }

    const base = area * city.rate * (1 + (floors.value - 1) * 0.85);

    let basementCost = 0;
    if (hasBasement) {
      const bSqft = parseFloat(basementSqft);
      if (!isNaN(bSqft) && bSqft > 0) {
        basementCost = bSqft * city.rate * 1.3;
      }
    }

    const roomsCost = rooms * 150000;
    const subtotal = base + basementCost + roomsCost;
    const interior = subtotal * tier.multiplier;
    const total = subtotal + interior;

    setResult({
      base,
      basement: basementCost,
      rooms: roomsCost,
      interior,
      subtotal,
      total
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Helper to reset result when inputs change
  const handleInputChange = <T,>(setter: React.Dispatch<React.SetStateAction<T>>, value: T) => {
    setter(value);
    setResult(null);
  };

  return (
    <section
      ref={containerRef}
      className="py-32 px-6 lg:px-12 bg-sand text-charcoal flex justify-center relative overflow-hidden"
    >
      {/* Abstract Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full bg-white blur-3xl mix-blend-overlay"></div>
      </div>

      <div
        className="w-full max-w-6xl perspective-1000 z-10"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={cardRef}
          className="bg-cream/90 backdrop-blur-xl p-8 md:p-16 shadow-2xl border border-white/50 rounded-sm relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Internal shadow/highlight to enhance 3D feel */}
          <div className="absolute inset-0 border border-white/40 pointer-events-none rounded-sm translate-z-[1px]"></div>

          <div className="mb-12 text-center transform translate-z-[20px]">
            <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-4">
              Vision to Reality
            </h2>
            <p className="text-charcoal/60 text-sm uppercase tracking-widest">
              Ultra-Luxury Estimation
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 transform translate-z-[10px]">
            {/* Inputs Column */}
            <div className="space-y-8">
              {/* Row 1: City & Sqft */}
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-charcoal/50 mb-3">
                    Prime Location
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {CITIES.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => handleInputChange(setCity, c)}
                        className={`py-3 border text-xs transition-all duration-300 ${
                          city.name === c.name
                            ? "border-charcoal bg-charcoal text-white shadow-lg shadow-black/10 scale-[1.02]"
                            : "border-charcoal/20 text-charcoal hover:border-charcoal/50 bg-white hover:bg-cream"
                        }`}
                      >
                        {c.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-charcoal/50 mb-3">
                    Plot Area (sq.ft)
                  </label>
                  <input
                    type="number"
                    value={sqft}
                    onChange={(e) => handleInputChange(setSqft, e.target.value)}
                    className="w-full bg-white border border-charcoal/20 py-3 px-4 text-2xl font-serif focus:outline-none focus:border-charcoal transition-colors placeholder:text-charcoal/20"
                    placeholder="e.g. 2500"
                  />
                </div>
              </div>

              {/* Row 2: Floors & Rooms */}
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-charcoal/50 mb-3">
                    Floors
                  </label>
                  <div className="flex bg-white border border-charcoal/20">
                    {FLOORS.map((f) => (
                      <button
                        key={f.label}
                        onClick={() => handleInputChange(setFloors, f)}
                        className={`flex-1 py-3 text-xs transition-colors border-r border-charcoal/10 last:border-0 ${
                          floors.label === f.label
                            ? "bg-charcoal text-white"
                            : "hover:bg-cream"
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-charcoal/50 mb-3">
                    Rooms (BHK)
                  </label>
                  <div className="flex items-center justify-between bg-white border border-charcoal/20 px-4 py-2">
                    <button
                      onClick={() => handleInputChange(setRooms, Math.max(1, rooms - 1))}
                      className="p-2 hover:bg-cream text-charcoal/50 hover:text-charcoal transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-xl font-serif">{rooms}</span>
                    <button
                      onClick={() => handleInputChange(setRooms, Math.min(6, rooms + 1))}
                      className="p-2 hover:bg-cream text-charcoal/50 hover:text-charcoal transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Row 3: Basement & Interior */}
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-charcoal/50 mb-3">
                    <span>Basement</span>
                    <button
                      onClick={() => handleInputChange(setHasBasement, !hasBasement)}
                      className={`text-[10px] px-2 py-1 border ${hasBasement ? 'bg-charcoal text-white border-charcoal' : 'border-charcoal/20 hover:border-charcoal/50'}`}
                    >
                      {hasBasement ? 'ON' : 'OFF'}
                    </button>
                  </label>
                  <div className={`transition-opacity duration-300 ${hasBasement ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
                    <input
                      type="number"
                      value={basementSqft}
                      onChange={(e) => handleInputChange(setBasementSqft, e.target.value)}
                      className="w-full bg-white border border-charcoal/20 py-3 px-4 text-xl font-serif focus:outline-none focus:border-charcoal transition-colors placeholder:text-charcoal/20"
                      placeholder="Basement area..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-charcoal/50 mb-3">
                    Interior Finish
                  </label>
                  <div className="flex bg-white border border-charcoal/20">
                    {TIERS.map((t) => (
                      <button
                        key={t.label}
                        onClick={() => handleInputChange(setTier, t)}
                        className={`flex-1 py-3 text-[10px] uppercase tracking-wider transition-colors border-r border-charcoal/10 last:border-0 ${
                          tier.label === t.label
                            ? "bg-charcoal text-white"
                            : "hover:bg-cream"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={calculateEstimation}
                className="w-full py-5 bg-bronze hover:bg-bronze-light text-white uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-2 group mt-4 overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Discover the Investment
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-charcoal transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0"></div>
              </button>
            </div>

            {/* Results Column (Cart-Style) */}
            <div className="bg-white/50 backdrop-blur-sm p-8 lg:p-12 border border-charcoal/10 flex flex-col min-h-[400px] relative overflow-hidden">
              {result === null ? (
                <div className="flex-1 flex items-center justify-center text-center text-charcoal/40 font-serif italic text-lg">
                  Enter your specifications to reveal the estimated investment breakdown.
                </div>
              ) : (
                <div className="flex flex-col h-full relative z-10 animate-fade-in">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-charcoal/40 border-b border-charcoal/10 pb-4 mb-6">
                    Investment Breakdown
                  </h3>

                  <div className="space-y-4 flex-1">
                    <div className="flex justify-between items-end">
                      <span className="text-sm text-charcoal/70">Base Structure ({floors.label})</span>
                      <span className="font-serif text-lg">{formatCurrency(result.base)}</span>
                    </div>

                    {result.basement > 0 && (
                      <div className="flex justify-between items-end">
                        <span className="text-sm text-charcoal/70">Basement</span>
                        <span className="font-serif text-lg">{formatCurrency(result.basement)}</span>
                      </div>
                    )}

                    <div className="flex justify-between items-end">
                      <span className="text-sm text-charcoal/70">Rooms ({rooms} BHK)</span>
                      <span className="font-serif text-lg">{formatCurrency(result.rooms)}</span>
                    </div>

                    <div className="flex justify-between items-end pt-4 border-t border-charcoal/10">
                      <span className="text-sm text-charcoal/90">Subtotal</span>
                      <span className="font-serif text-xl">{formatCurrency(result.subtotal)}</span>
                    </div>

                    <div className="flex justify-between items-end">
                      <span className="text-sm text-charcoal/70">Interior Finish ({tier.label})</span>
                      <span className="font-serif text-lg">{formatCurrency(result.interior)}</span>
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t-2 border-charcoal">
                    <p className="text-xs text-charcoal/50 uppercase tracking-widest mb-2">Estimated Total Investment</p>
                    <p className="text-5xl lg:text-6xl font-serif text-charcoal bg-clip-text text-transparent bg-gradient-to-r from-charcoal to-bronze">
                      {formatCurrency(result.total)}
                    </p>
                    <p className="text-[10px] text-charcoal/40 mt-4 leading-relaxed">
                      *Estimation based on selected parameters in {city.name}. Final cost may vary based on specific architectural requirements, topography, and material selections. This is not a binding quote.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
