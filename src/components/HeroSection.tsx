"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Leaf,
  Layers,
  Award,
  Maximize2,
  Check,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function HeroSection() {
  const { openSampleModal } = useCart();

  // Interactive Card Finishes Simulator State
  const [activeStock, setActiveStock] = useState<"cotton" | "noir" | "kraft" | "linen">("cotton");
  const [activeFinish, setActiveFinish] = useState<"gold" | "holo" | "spotuv" | "deboss">("gold");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const getCardStockBg = () => {
    switch (activeStock) {
      case "cotton":
        return "bg-[#FAF7F2] text-[#0F172A] border-[#E5DFD3]";
      case "noir":
        return "bg-[#111622] text-[#F8FAFC] border-[#252D3F]";
      case "kraft":
        return "bg-[#C4A47C] text-[#2C1D0E] border-[#A38258]";
      case "linen":
        return "bg-[#F3EFE6] text-[#1E293B] border-[#D8D0C0]";
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-[#E8E2D8] paper-texture">
      {/* Background Decorative Registration & Measurement Lines */}
      <div className="absolute top-6 left-6 hidden xl:flex items-center gap-2 font-mono text-[10px] text-zinc-400 select-none">
        <div className="w-3 h-3 border border-zinc-400 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-zinc-400" />
        </div>
        <span>TRIM SAFE 3.0mm</span>
      </div>

      <div className="absolute top-6 right-6 hidden xl:flex items-center gap-2 font-mono text-[10px] text-zinc-400 select-none">
        <span>FOGRA39 / ISO 12647-2</span>
        <div className="flex gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" title="Cyan" />
          <span className="w-2.5 h-2.5 rounded-full bg-pink-500" title="Magenta" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" title="Yellow" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-900" title="Key Black" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Brand Headline & Mission */}
          <div className="lg:col-span-7 space-y-6">
            {/* Cultural Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F1EB] border border-[#E8E2D8] text-xs font-mono text-[#0B0F19]">
              <span className="text-amber-600 font-serif font-bold text-sm">नमस्ते</span>
              <span className="text-zinc-400">|</span>
              <span className="text-zinc-700 tracking-wider">BESPOKE PRINT ATELIER</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B0F19] tracking-tight leading-[1.08]">
              Where Artisan Paper Meets{" "}
              <span className="foil-gold-text italic block sm:inline font-serif">
                Precision Metallic Ink.
              </span>
            </h1>

            {/* Purpose & Value Proposition */}
            <p className="text-lg text-[#576175] max-w-2xl leading-relaxed">
              We engineer tactile print identities that refuse to be discarded.
              From 600 GSM double-thick cotton boards and deep brass debossing
              to holographic foils and custom rigid packaging — crafted with
              sublime reverence for the physical medium.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#calculator"
                className="px-6 py-3.5 rounded-xl bg-[#0B0F19] text-[#FAF8F5] text-sm font-semibold hover:bg-amber-950 shadow-md hover:shadow-lg transition flex items-center gap-2 group cursor-pointer"
              >
                <span>Instant Quote Calculator</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition" />
              </a>

              <button
                onClick={openSampleModal}
                className="px-6 py-3.5 rounded-xl bg-white border border-[#D97706]/40 text-[#D97706] text-sm font-semibold hover:bg-amber-50 shadow-xs transition flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Order Free Swatch Pack</span>
              </button>
            </div>

            {/* Trust Points Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#E8E2D8]">
              <div className="space-y-1">
                <div className="font-mono text-xl font-bold text-[#0B0F19] flex items-center gap-1">
                  <span>600+</span>
                  <span className="text-xs text-amber-600 font-sans">GSM</span>
                </div>
                <div className="text-xs text-[#576175]">Ultra-thick Duplex Stocks</div>
              </div>

              <div className="space-y-1">
                <div className="font-mono text-xl font-bold text-[#0B0F19] flex items-center gap-1">
                  <span>24–48h</span>
                  <Zap className="w-3.5 h-3.5 text-amber-600" />
                </div>
                <div className="text-xs text-[#576175]">Express Press Dispatch</div>
              </div>

              <div className="space-y-1">
                <div className="font-mono text-xl font-bold text-[#0B0F19] flex items-center gap-1">
                  <span>99.8%</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="text-xs text-[#576175]">Pantone Spectro-Match</div>
              </div>

              <div className="space-y-1">
                <div className="font-mono text-xl font-bold text-[#0B0F19] flex items-center gap-1">
                  <span>FSC®</span>
                  <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="text-xs text-[#576175]">Tree-Free Cotton & Soy Inks</div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive 3D Paper & Finish Simulator */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md bg-white rounded-2xl p-6 border border-[#E8E2D8] paper-sheet-shadow relative">
              {/* Simulator Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E8E2D8]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
                  <span className="text-xs font-mono font-bold tracking-wider text-[#0B0F19] uppercase">
                    Tactile Finish Simulator
                  </span>
                </div>
                <span className="text-[11px] font-mono text-zinc-400">Live 3D Spec</span>
              </div>

              {/* The Interactive 3D Card Stage */}
              <div
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setMousePosition({ x: 0, y: 0 });
                }}
                className="relative h-64 w-full rounded-xl flex items-center justify-center p-4 cursor-grab select-none overflow-hidden transition-all duration-200"
                style={{
                  perspective: "1000px",
                }}
              >
                {/* Simulated Business Card with 3D tilt */}
                <div
                  className={`w-full max-w-[340px] aspect-[1.75/1] rounded-lg p-5 border shadow-xl flex flex-col justify-between transition-transform duration-100 ease-out relative overflow-hidden ${getCardStockBg()}`}
                  style={{
                    transform: isHovered
                      ? `rotateY(${mousePosition.x * 24}deg) rotateX(${-mousePosition.y * 24}deg) scale(1.03)`
                      : "rotateY(0deg) rotateX(0deg) scale(1)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Dynamic Shimmer light sweep based on mouse position */}
                  {isHovered && (
                    <div
                      className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at ${
                          (mousePosition.x + 0.5) * 100
                        }% ${(mousePosition.y + 0.5) * 100}%, rgba(255,255,255,0.45) 0%, transparent 60%)`,
                      }}
                    />
                  )}

                  {/* Top line of Card */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded bg-amber-600/20 border border-amber-600/40 flex items-center justify-center">
                        <span className="font-serif font-bold text-amber-600 text-xs">न</span>
                      </div>
                      <span className="font-mono text-[9px] tracking-widest uppercase opacity-75">
                        NAMASTE ATELIER
                      </span>
                    </div>

                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border border-current/20">
                      {activeStock.toUpperCase()} · 600 GSM
                    </span>
                  </div>

                  {/* Middle Display: Foil or Emboss Name */}
                  <div className="py-2">
                    <div
                      className={`text-xl sm:text-2xl font-black tracking-tight ${
                        activeFinish === "gold"
                          ? "foil-gold-text font-serif"
                          : activeFinish === "holo"
                          ? "foil-holographic-text"
                          : activeFinish === "spotuv"
                          ? "spot-uv-sheen text-[#0B0F19] font-serif underline decoration-amber-400"
                          : "tactile-deboss font-serif text-current/80"
                      }`}
                    >
                      AARAV SHRESTHA
                    </div>
                    <div className="font-mono text-[10px] tracking-wider uppercase opacity-70 mt-0.5">
                      Managing Partner & Architect
                    </div>
                  </div>

                  {/* Bottom line: Finish Indicator & Spec */}
                  <div className="flex items-center justify-between text-[10px] font-mono opacity-80 pt-1 border-t border-current/15">
                    <span>
                      FINISH:{" "}
                      <strong className="uppercase">
                        {activeFinish === "gold"
                          ? "Gold Hot-Foil"
                          : activeFinish === "holo"
                          ? "Holo Prismatic"
                          : activeFinish === "spotuv"
                          ? "Raised Spot UV"
                          : "Blind Letterpress"}
                      </strong>
                    </span>
                    <span>32pt Cotton Duplex</span>
                  </div>
                </div>
              </div>

              {/* Card Controls: Stock Switcher */}
              <div className="mt-5 space-y-3">
                <div>
                  <label className="text-[11px] font-mono uppercase text-[#576175] flex items-center justify-between mb-1.5">
                    <span>1. Select Paper Stock Substrate</span>
                    <span className="text-amber-700 font-bold">{activeStock.toUpperCase()}</span>
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[
                      { id: "cotton", label: "Cotton", gsm: "600 GSM" },
                      { id: "noir", label: "Noir", gsm: "450 GSM" },
                      { id: "kraft", label: "Kraft", gsm: "400 GSM" },
                      { id: "linen", label: "Linen", gsm: "300 GSM" },
                    ].map((stock) => (
                      <button
                        key={stock.id}
                        onClick={() => setActiveStock(stock.id as any)}
                        className={`py-1.5 px-2 rounded-lg text-xs font-medium border text-center transition cursor-pointer ${
                          activeStock === stock.id
                            ? "bg-[#0B0F19] text-white border-[#0B0F19]"
                            : "bg-[#F5F1EB] text-[#0B0F19] border-[#E8E2D8] hover:bg-white"
                        }`}
                      >
                        <div className="font-bold">{stock.label}</div>
                        <div className="text-[9px] font-mono opacity-70">{stock.gsm}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Card Controls: Specialty Finish Switcher */}
                <div>
                  <label className="text-[11px] font-mono uppercase text-[#576175] flex items-center justify-between mb-1.5">
                    <span>2. Select Specialty Embellishment</span>
                    <span className="text-amber-700 font-bold">{activeFinish.toUpperCase()}</span>
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[
                      { id: "gold", label: "Gold Foil" },
                      { id: "holo", label: "Holo Prism" },
                      { id: "spotuv", label: "Spot UV" },
                      { id: "deboss", label: "Deboss" },
                    ].map((finish) => (
                      <button
                        key={finish.id}
                        onClick={() => setActiveFinish(finish.id as any)}
                        className={`py-1.5 px-2 rounded-lg text-xs font-medium border text-center transition cursor-pointer ${
                          activeFinish === finish.id
                            ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                            : "bg-[#F5F1EB] text-[#0B0F19] border-[#E8E2D8] hover:bg-white"
                        }`}
                      >
                        {finish.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link to Calculator */}
                <div className="pt-2">
                  <a
                    href="#calculator"
                    className="w-full py-2 px-3 rounded-lg bg-[#FAF8F5] border border-[#E8E2D8] text-xs font-semibold text-[#0B0F19] hover:bg-amber-50 hover:border-amber-600 transition flex items-center justify-center gap-1.5"
                  >
                    <span>Price this combination in Calculator</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

