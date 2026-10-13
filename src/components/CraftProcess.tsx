"use client";

import React from "react";
import {
  Cpu,
  Layers,
  Printer,
  Sparkles,
  ShieldCheck,
  Check,
} from "lucide-react";

export default function CraftProcess() {
  const steps = [
    {
      step: "01",
      title: "Laser CTP Plate Setting",
      icon: Cpu,
      subtitle: "2400 DPI Pre-Press Calibration",
      description: "Direct-to-Plate violet laser imaging transfers vector artwork to aluminum offset plates with zero generational loss and sub-pixel edge sharpness.",
      spec: "Tolerance: ±0.01 mm",
    },
    {
      step: "02",
      title: "Substrate Conditioning",
      icon: Layers,
      subtitle: "Cotton & Fine Mill Paper Acclimatization",
      description: "Sheets are conditioned in our temperature and humidity-controlled pressroom (21°C, 50% RH) to eliminate curl and optimize ink absorption.",
      spec: "Origin: FSC® European Mills",
    },
    {
      step: "03",
      title: "Heidelberg Press Run",
      icon: Printer,
      subtitle: "Soy Inks & Spectrophotometer Control",
      description: "Precision ink fountain keys meter non-toxic vegetable inks onto paper fibers, achieving deep obsidian blacks and vivid Pantone matches.",
      spec: "Speed: 12,000 sheets/hr",
    },
    {
      step: "04",
      title: "Hot Foil & Brass Deboss",
      icon: Sparkles,
      subtitle: "130°C Thermomechanical Stamping",
      description: "Hand-crafted magnesium or brass dies apply 5 tons of hydraulic force, fusing metallic foil and creating profound sculptural relief.",
      spec: "Die Depth: Up to 0.8 mm",
    },
    {
      step: "05",
      title: "German Polar Guillotine & QC",
      icon: ShieldCheck,
      subtitle: "White-Glove Inspection & Edge Gilding",
      description: "Laser-aligned hydraulic cutting blades trim cleanly through 800 GSM duplex stocks. Each print run is hand-inspected under 5000K daylight lamps.",
      spec: "Inspection: 100% Sheet Audited",
    },
  ];

  return (
    <section id="craft" className="py-16 lg:py-24 border-b border-[#E8E2D8] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F1EB] border border-[#E8E2D8] text-xs font-mono text-[#D97706] mb-3">
            <Printer className="w-3.5 h-3.5" />
            <span>THE 5-STAGE PRINT ATELIER CHRONICLE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0F19] tracking-tight">
            How Masterpiece Printing is Made.
          </h2>

          <p className="text-[#576175] text-base sm:text-lg mt-3">
            Behind every crisp edge and glittering foil lies a relentless discipline of mechanical
            precision and hand-guided craftsmanship.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E8E2D8] flex flex-col justify-between paper-sheet-hover relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-amber-700/80">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-base font-bold text-[#0B0F19] leading-snug">
                    {item.title}
                  </h3>
                  <div className="font-mono text-[10px] text-amber-700 mt-1 uppercase">
                    {item.subtitle}
                  </div>

                  <p className="text-xs text-[#576175] mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E2D8] font-mono text-[10px] text-zinc-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{item.spec}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

