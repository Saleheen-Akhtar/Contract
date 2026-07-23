"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
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
      rotateY: x * 0.02,
      rotateX: -y * 0.02,
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
    <section
      ref={containerRef}
      className="py-32 px-6 lg:px-12 bg-sand text-charcoal flex justify-center relative overflow-hidden"
    >
      {/* Abstract Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full bg-white blur-3xl mix-blend-overlay"></div>
      </div>

      <div
        className="w-full max-w-5xl perspective-1000 z-10"
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

          <div className="grid md:grid-cols-2 gap-12 transform translate-z-[10px]">
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
                      className={`py-4 border text-sm transition-all duration-300 ${
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
                  className="w-full bg-transparent border-b-2 border-charcoal/20 py-3 text-4xl font-serif focus:outline-none focus:border-charcoal transition-colors placeholder:text-charcoal/20"
                  placeholder="Enter area..."
                />
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

            {/* Results */}
            <div className="bg-white/50 backdrop-blur-sm p-8 border border-charcoal/10 flex flex-col justify-center min-h-[300px] relative overflow-hidden group">
              {result === null ? (
                <div className="text-center text-charcoal/40 font-serif italic text-lg px-8">
                  Enter your specifications to reveal the estimated investment.
                </div>
              ) : (
                <div className="text-center relative z-10">
                  <p className="text-sm text-charcoal/60 mb-2 uppercase tracking-widest animate-fade-in">
                    Estimated Base Cost
                  </p>
                  <p className="text-5xl lg:text-7xl font-serif text-charcoal my-6 animate-slide-up bg-clip-text text-transparent bg-gradient-to-r from-charcoal to-bronze">
                    {formatCurrency(result)}
                  </p>
                  <div className="w-12 h-[1px] bg-charcoal/20 mx-auto my-6"></div>
                  <p className="text-xs text-charcoal/50 leading-relaxed max-w-[250px] mx-auto">
                    *Estimation based on ultra-luxury finishes in {city.name}. Final cost may vary based on specific architectural requirements, topography, and material selections.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
