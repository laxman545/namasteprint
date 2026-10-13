"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Layers,
  Leaf,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Feather,
  Gauge,
} from "lucide-react";
import { PAPER_STOCKS, PaperStock } from "@/data/paperStocks";
import { useCart } from "@/context/CartContext";

export default function PaperSwatchLab() {
  const { openSampleModal } = useCart();
  const [selectedStock, setSelectedStock] = useState<PaperStock>(PAPER_STOCKS[0]);

  return (
    <section id="paper-lab" className="py-16 lg:py-24 border-b border-[#E8E2D8] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F1EB] border border-[#E8E2D8] text-xs font-mono text-[#D97706] mb-3">
            <Feather className="w-3.5 h-3.5" />
            <span>THE TACTILE SUBSTRATE LAB</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0F19] tracking-tight">
            The Physics of Artisan Paper.
          </h2>

          <p className="text-[#576175] text-base sm:text-lg mt-3">
            Print is a physical, sensory encounter. Explore our carefully sourced mill stocks,
            weight calibers, and tactile grain structures engineered for unforgettable touch.
          </p>
        </div>

        {/* Interactive Swatch Lab Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Swatch Selector Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <label className="text-xs font-mono uppercase tracking-wider text-[#576175] block mb-2 font-semibold">
              Select Paper Mill Stock to Inspect
            </label>

            <div className="grid grid-cols-1 gap-2.5">
              {PAPER_STOCKS.map((stock) => (
                <button
                  key={stock.id}
                  onClick={() => setSelectedStock(stock)}
                  className={`w-full p-4 rounded-xl border text-left transition flex items-center justify-between cursor-pointer ${
                    selectedStock.id === stock.id
                      ? "bg-white border-amber-600 ring-2 ring-amber-600/20 shadow-md"
                      : "bg-[#F5F1EB] border-[#E8E2D8] hover:bg-white hover:border-zinc-400"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Visual Color/Texture Swatch Tile */}
                    <div
                      className={`w-10 h-10 rounded-lg border shadow-xs flex items-center justify-center font-mono text-[10px] font-bold ${stock.textureVisual}`}
                    >
                      {stock.gsm}
                    </div>

                    <div>
                      <div className="font-bold text-sm text-[#0B0F19]">{stock.name}</div>
                      <div className="text-xs text-[#576175] font-mono">{stock.texture}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-mono text-xs font-bold text-amber-700">
                      {stock.thicknessPt} pt
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Bottom Swatch Kit Request CTA */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-950 mt-4 space-y-2">
              <div className="flex items-center gap-2 font-serif font-bold text-sm">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Want to feel these in your own hands?</span>
              </div>
              <p className="text-xs text-amber-900 leading-relaxed">
                We deliver a complimentary physical swatch pack featuring all 6 paper stocks with
                sample foils and deboss depth measurements.
              </p>
              <button
                onClick={openSampleModal}
                className="mt-1 py-2 px-3.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Request Free Swatch Pack</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Right Column: Detailed Spec Inspector (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E2D8] shadow-sm space-y-6">
            {/* Stock Title & Caliber */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E8E2D8] gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase text-amber-700 tracking-wider font-bold">
                  SUBSTRATE SPECIFICATION SHEET
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#0B0F19]">
                  {selectedStock.name}
                </h3>
                <p className="text-sm text-[#576175] mt-1">{selectedStock.texture}</p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <div className="text-center px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                  <span className="text-[10px] font-mono text-zinc-400 block">WEIGHT</span>
                  <span className="font-mono text-base font-black text-[#0B0F19]">
                    {selectedStock.gsm} GSM
                  </span>
                </div>
                <div className="text-center px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                  <span className="text-[10px] font-mono text-zinc-400 block">CALIBER</span>
                  <span className="font-mono text-base font-black text-[#0B0F19]">
                    {selectedStock.thicknessPt} pt
                  </span>
                </div>
              </div>
            </div>

            {/* Tactile Experience Description */}
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold mb-1">
                Sensory & Tactile Fingerprint
              </div>
              <p className="text-sm text-[#0B0F19] leading-relaxed font-serif italic">
                &ldquo;{selectedStock.tactileDescription}&rdquo;
              </p>
            </div>

            {/* Stiffness Meter & Physical Metrics */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500 flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5 text-amber-600" />
                  Stiffness & Board Rigidity Gauge
                </span>
                <span className="font-bold text-[#0B0F19]">
                  {selectedStock.stiffnessRating} / 10.0
                </span>
              </div>
              {/* Progress bar */}
              <div className="h-2.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-amber-500 to-amber-700 rounded-full transition-all duration-500"
                  style={{ width: `${(selectedStock.stiffnessRating / 10) * 100}%` }}
                />
              </div>
            </div>

            {/* Best For and Eco Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-[#E8E2D8] bg-[#FAF8F5]">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold mb-1 flex items-center gap-1">
                  <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                  Eco-Certification
                </div>
                <div className="text-xs text-[#0B0F19] font-semibold mt-1">
                  {selectedStock.ecoCredential}
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[#E8E2D8] bg-[#FAF8F5]">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold mb-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  Optimal Applications
                </div>
                <div className="text-xs text-[#0B0F19] font-semibold mt-1">
                  {selectedStock.bestFor}
                </div>
              </div>
            </div>

            {/* Finish Compatibility */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold mb-2">
                Recommended Finish Compatibility
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedStock.finishCompatibility.map((finish, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-800"
                  >
                    ✓ {finish}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

