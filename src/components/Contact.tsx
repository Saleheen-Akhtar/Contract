"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  const [focusedFields, setFocusedFields] = useState<Record<string, boolean>>({});
  const [formValues, setFormValues] = useState({ name: '', email: '', project: '' });

  const handleFocus = (field: string) => {
    setFocusedFields(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setFocusedFields(prev => ({ ...prev, [field]: false }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    setFormValues(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-cream text-charcoal border-t border-charcoal/10">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32">

        {/* Left: Text & Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-[clamp(4rem,7vw,8rem)] leading-none font-serif tracking-tighter mb-8">
              START A<br/>DIALOGUE
            </h2>
            <p className="text-xl max-w-md text-charcoal/70 leading-relaxed font-light mb-16">
              We take on a select number of commissions each year to ensure uncompromising quality. Reach out to discuss your vision.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-12">
            <div>
              <p className="uppercase tracking-[0.2em] text-xs text-charcoal/40 mb-4 font-bold">Mumbai Office</p>
              <p className="font-serif text-lg leading-relaxed">
                Level 42, The Vertex,<br/>
                Bandra Kurla Complex,<br/>
                Mumbai, 400051
              </p>
            </div>
            <div>
              <p className="uppercase tracking-[0.2em] text-xs text-charcoal/40 mb-4 font-bold">Direct Inquiry</p>
              <a href="mailto:vision@classicsgroup.com" className="font-serif text-lg hover:text-bronze transition-colors block mb-2">
                vision@classicsgroup.com
              </a>
              <a href="tel:+919876543210" className="font-serif text-lg hover:text-bronze transition-colors">
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>

        {/* Right: Minimalist Form */}
        <div className="bg-white p-8 md:p-16 shadow-2xl border border-charcoal/5 flex flex-col justify-center">
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>

            <div className="relative">
              <label
                className={`absolute left-0 transition-all duration-300 font-serif ${
                  focusedFields.name || formValues.name.length > 0 ? '-top-6 text-xs text-charcoal/50 uppercase tracking-widest font-sans' : 'top-2 text-xl text-charcoal/50'
                }`}
              >
                Your Name
              </label>
              <input
                type="text"
                value={formValues.name}
                onChange={(e) => handleChange(e, 'name')}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
                className="w-full bg-transparent border-b border-charcoal/20 py-2 text-xl focus:outline-none focus:border-charcoal transition-colors"
              />
            </div>

            <div className="relative">
              <label
                className={`absolute left-0 transition-all duration-300 font-serif ${
                  focusedFields.email || formValues.email.length > 0 ? '-top-6 text-xs text-charcoal/50 uppercase tracking-widest font-sans' : 'top-2 text-xl text-charcoal/50'
                }`}
              >
                Email Address
              </label>
              <input
                type="email"
                value={formValues.email}
                onChange={(e) => handleChange(e, 'email')}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                className="w-full bg-transparent border-b border-charcoal/20 py-2 text-xl focus:outline-none focus:border-charcoal transition-colors"
              />
            </div>

            <div className="relative mt-16">
              <label
                className={`absolute left-0 transition-all duration-300 font-serif ${
                  focusedFields.project || formValues.project.length > 0 ? '-top-6 text-xs text-charcoal/50 uppercase tracking-widest font-sans' : 'top-2 text-xl text-charcoal/50'
                }`}
              >
                Project Details (Location, Scope, Vision)
              </label>
              <textarea
                rows={3}
                value={formValues.project}
                onChange={(e) => handleChange(e, 'project')}
                onFocus={() => handleFocus('project')}
                onBlur={() => handleBlur('project')}
                className="w-full bg-transparent border-b border-charcoal/20 py-2 text-xl focus:outline-none focus:border-charcoal transition-colors resize-none"
              ></textarea>
            </div>

            <button className="w-full py-6 bg-charcoal hover:bg-bronze text-white uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-4 group mt-8">
              Submit Inquiry
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
