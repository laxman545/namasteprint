"use client";

import React, { useState, useMemo } from "react";
import {
  Calculator,
  Check,
  ShoppingBag,
  FileDown,
  Sparkles,
  Clock,
  ShieldCheck,
  Layers,
  ArrowRight,
  TrendingDown,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { PAPER_STOCKS } from "@/data/paperStocks";
import { SPECIALTY_FINISHES } from "@/data/specialtyFinishes";

export default function InstantQuoteCalculator() {
  const { addItem } = useCart();

  // Selected State
  const [selectedProductId, setSelectedProductId] = useState(PRODUCTS[0].id);
  const [selectedStockId, setSelectedStockId] = useState(PAPER_STOCKS[0].id);
  const [selectedFinishId, setSelectedFinishId] = useState(SPECIALTY_FINISHES[0].id);
  const [isDoubleSided, setIsDoubleSided] = useState(true);
  const [quantity, setQuantity] = useState(250);
  const [customNotes, setCustomNotes] = useState("");
  const [addedToast, setAddedToast] = useState(false);

  // Resolved entities
  const selectedProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];
  const selectedStock = PAPER_STOCKS.find((s) => s.id === selectedStockId) || PAPER_STOCKS[0];
  const selectedFinish = SPECIALTY_FINISHES.find((f) => f.id === selectedFinishId) || SPECIALTY_FINISHES[0];

  // Pricing formula
  const { unitPrice, totalPrice, discountPercent, estimatedSavings } = useMemo(() => {
    // Base unit price at 100 qty
    let baseUnit = (selectedProduct.basePrice / 100);

    // Stock factor based on GSM
    const stockMultiplier = 1 + (selectedStock.gsm - 300) / 1000;

    // Finish multiplier
    const finishMultiplier = selectedFinish.extraMultiplier;

    // Double sided multiplier
    const sideMultiplier = isDoubleSided ? 1.35 : 1.0;

    // Volume discount tiers
    let discount = 0;
    if (quantity >= 5000) discount = 0.40;
    else if (quantity >= 2500) discount = 0.32;
    else if (quantity >= 1000) discount = 0.25;
    else if (quantity >= 500) discount = 0.18;
    else if (quantity >= 250) discount = 0.10;

    const rawUnit = baseUnit * stockMultiplier * finishMultiplier * sideMultiplier;
    const discountedUnit = rawUnit * (1 - discount);

    const calculatedTotal = Number((discountedUnit * quantity).toFixed(2));
    const calculatedUnit = Number((calculatedTotal / quantity).toFixed(3));
    const savings = Number((rawUnit * quantity - calculatedTotal).toFixed(2));

    return {
      unitPrice: calculatedUnit,
      totalPrice: calculatedTotal,
      discountPercent: Math.round(discount * 100),
      estimatedSavings: savings > 0 ? savings : 0,
    };
  }, [selectedProduct, selectedStock, selectedFinish, isDoubleSided, quantity]);

  const handleAddToCart = () => {
    addItem({
      productId: selectedProduct.id,
      name: selectedProduct.name,
      paperStock: `${selectedStock.name} (${selectedStock.gsm} GSM)`,
      finish: `${selectedFinish.name} ${isDoubleSided ? "(Double-Sided)" : "(Single-Sided)"}`,
      quantity: quantity,
      unitPrice: unitPrice,
      totalPrice: totalPrice,
      turnaround: selectedProduct.turnaroundDays,
      specsSummary: `${selectedProduct.dimensions} · ${selectedStock.texture}`,
    });

    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-[#F5F1EB] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E2D8] text-xs font-mono text-[#D97706] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>INSTANT QUOTE & SPECIFICATION ENGINE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0F19] tracking-tight">
            Configure Your Custom Print Run.
          </h2>

          <p className="text-[#576175] text-base sm:text-lg mt-3">
            Live transparent pricing with real-time paper stock modifiers, volume discount curves,
            and immediate pre-press dispatch estimates.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Controls Column (8 Cols) */}
          <div className="lg:col-span-8 space-y-8 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E2D8] shadow-xs">
            {/* 1. Product Selection */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#576175] block mb-3 font-semibold">
                1. Select Print Substrate Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {PRODUCTS.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => setSelectedProductId(prod.id)}
                    className={`p-3 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                      selectedProductId === prod.id
                        ? "bg-[#0B0F19] text-white border-[#0B0F19] shadow-xs"
                        : "bg-[#FAF8F5] text-[#0B0F19] border-[#E8E2D8] hover:border-amber-600 hover:bg-white"
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm leading-snug">{prod.name}</div>
                      <div className="text-[11px] font-mono opacity-70 mt-1 line-clamp-1">
                        {prod.paperGsm} GSM · {prod.dimensions}
                      </div>
                    </div>
                    <div className="text-xs font-mono text-amber-500 font-semibold mt-2">
                      Starts ${prod.basePrice}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Paper Stock Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-mono uppercase tracking-wider text-[#576175] font-semibold">
                  2. Choose Artisan Paper Stock
                </label>
                <a
                  href="#paper-lab"
                  className="text-xs font-mono text-amber-700 hover:underline flex items-center gap-1"
                >
                  Inspect Swatches &rarr;
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {PAPER_STOCKS.map((stock) => (
                  <button
                    key={stock.id}
                    onClick={() => setSelectedStockId(stock.id)}
                    className={`p-3.5 rounded-xl border text-left transition cursor-pointer ${
                      selectedStockId === stock.id
                        ? "bg-amber-50/80 border-amber-600 ring-2 ring-amber-600/20"
                        : "bg-[#FAF8F5] border-[#E8E2D8] hover:bg-white hover:border-zinc-400"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#0B0F19]">{stock.name}</span>
                      <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-white border border-[#E8E2D8] text-[#0B0F19]">
                        {stock.gsm} GSM
                      </span>
                    </div>
                    <p className="text-xs text-[#576175] mt-1 line-clamp-2">
                      {stock.tactileDescription}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Specialty Finishes */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#576175] block mb-3 font-semibold">
                3. Specialty Metallic Foil & Tactile Finish
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {SPECIALTY_FINISHES.map((finish) => (
                  <button
                    key={finish.id}
                    onClick={() => setSelectedFinishId(finish.id)}
                    className={`p-3 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                      selectedFinishId === finish.id
                        ? "bg-[#0B0F19] text-white border-[#0B0F19] shadow-xs"
                        : "bg-[#FAF8F5] text-[#0B0F19] border-[#E8E2D8] hover:bg-white"
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm">{finish.name}</div>
                      <div className="text-[11px] opacity-70 mt-0.5 line-clamp-1">{finish.description}</div>
                    </div>
                    <div className="text-[10px] font-mono text-amber-400 mt-2">
                      {finish.processTime}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Sides & Quantity Presets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#E8E2D8]">
              {/* Print Sides Toggle */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-[#576175] block mb-2 font-semibold">
                  Print Sides
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setIsDoubleSided(false)}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                      !isDoubleSided
                        ? "bg-[#0B0F19] text-white border-[#0B0F19]"
                        : "bg-[#FAF8F5] text-[#0B0F19] border-[#E8E2D8]"
                    }`}
                  >
                    Single-Sided Print
                  </button>
                  <button
                    onClick={() => setIsDoubleSided(true)}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                      isDoubleSided
                        ? "bg-[#0B0F19] text-white border-[#0B0F19]"
                        : "bg-[#FAF8F5] text-[#0B0F19] border-[#E8E2D8]"
                    }`}
                  >
                    Double-Sided Print
                  </button>
                </div>
              </div>

              {/* Quantity Preset Buttons */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#576175] font-semibold">
                    Quantity Run
                  </label>
                  <span className="font-mono text-xs font-bold text-amber-700">
                    {quantity.toLocaleString()} {selectedProduct.unit}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[100, 250, 500, 1000, 2500, 5000].map((qty) => (
                    <button
                      key={qty}
                      onClick={() => setQuantity(qty)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border transition cursor-pointer ${
                        quantity === qty
                          ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                          : "bg-[#FAF8F5] text-[#0B0F19] border-[#E8E2D8] hover:bg-white"
                      }`}
                    >
                      {qty >= 1000 ? `${qty / 1000}k` : qty}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Live Estimate Breakdown Column (4 Cols) */}
          <div className="lg:col-span-4 sticky top-28 bg-[#0B0F19] text-[#FAF8F5] rounded-2xl p-6 sm:p-7 border border-amber-600/30 shadow-xl space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-amber-400 pb-2 border-b border-zinc-800">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  LIVE ESTIMATE SUMMARY
                </span>
                <span>AUDITED</span>
              </div>

              <div className="mt-4">
                <div className="text-sm font-serif text-zinc-300">{selectedProduct.name}</div>
                <div className="text-3xl sm:text-4xl font-mono font-black text-white mt-1">
                  ${totalPrice.toFixed(2)}
                </div>
                <div className="text-xs font-mono text-amber-400 mt-1 flex items-center gap-1.5">
                  <span>${unitPrice.toFixed(2)} / {selectedProduct.unit}</span>
                  {discountPercent > 0 && (
                    <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px] font-bold border border-emerald-800 flex items-center gap-0.5">
                      <TrendingDown className="w-3 h-3" />
                      {discountPercent}% Volume Savings
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Spec Details Breakdown */}
            <div className="space-y-2.5 text-xs border-t border-zinc-800 pt-4 font-mono text-zinc-300">
              <div className="flex justify-between py-1 border-b border-zinc-800/60">
                <span className="text-zinc-400">Stock Weight</span>
                <span className="text-white font-semibold">{selectedStock.gsm} GSM ({selectedStock.name})</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-800/60">
                <span className="text-zinc-400">Specialty Finish</span>
                <span className="text-amber-300 font-semibold">{selectedFinish.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-800/60">
                <span className="text-zinc-400">Configuration</span>
                <span>{isDoubleSided ? "Double-Sided" : "Single-Sided"}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-800/60">
                <span className="text-zinc-400">Production Turnaround</span>
                <span className="flex items-center gap-1 text-emerald-300">
                  <Clock className="w-3 h-3" />
                  {selectedProduct.turnaroundDays}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-800/60">
                <span className="text-zinc-400">Digital Proofing</span>
                <span className="text-white">Included Free (PDF 300 DPI)</span>
              </div>
            </div>

            {/* Savings Callout */}
            {estimatedSavings > 0 && (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs">
                You save <strong>${estimatedSavings.toFixed(2)}</strong> with volume tier printing.
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleAddToCart}
                className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0B0F19] text-sm font-bold flex items-center justify-center gap-2 transition shadow-md cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add Specification to Quote / Cart</span>
              </button>

              {addedToast && (
                <div className="p-2.5 rounded-lg bg-emerald-500 text-black text-center text-xs font-bold animate-bounce">
                  ✓ Added to your Quote & Cart!
                </div>
              )}

              <button
                onClick={() => {
                  alert(`Spec Sheet Generated!\n\nProduct: ${selectedProduct.name}\nStock: ${selectedStock.name} (${selectedStock.gsm} GSM)\nFinish: ${selectedFinish.name}\nQuantity: ${quantity}\nTotal: $${totalPrice.toFixed(2)}`);
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-mono font-medium flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Export Formal Spec Sheet (.PDF)</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400 font-mono pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>100% Reprint Guarantee if Color Tolerances Drift</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

