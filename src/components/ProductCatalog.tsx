"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  Clock,
  Layers,
  Check,
  Star,
  SlidersHorizontal,
  X,
  ShoppingBag,
} from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

type CategoryTab = "all" | "stationery" | "packaging" | "weddings" | "stickers" | "marketing" | "apparel";

export default function ProductCatalog() {
  const { addItem } = useCart();
  const [activeTab, setActiveTab] = useState<CategoryTab>("all");
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const categories = [
    { id: "all", label: "All Masterpieces" },
    { id: "stationery", label: "Business Stationery" },
    { id: "packaging", label: "Rigid Packaging" },
    { id: "weddings", label: "Weddings & Suites" },
    { id: "stickers", label: "Holographic & Labels" },
    { id: "marketing", label: "Lookbooks & Banners" },
    { id: "apparel", label: "Merch & Totes" },
  ];

  const filteredProducts =
    activeTab === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section id="products" className="py-16 lg:py-24 border-b border-[#E8E2D8] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F1EB] border border-[#E8E2D8] text-xs font-mono text-[#D97706] mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>THE CURATED PRINT REPERTOIRE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0F19] tracking-tight">
              Bespoke Print Collections.
            </h2>

            <p className="text-[#576175] text-base sm:text-lg mt-3 max-w-2xl">
              Engineered with heavy artisan cottons, German foil stamping presses, and museum-grade
              pigments designed to leave an unforgettable tactile impression.
            </p>
          </div>

          {/* Catalog Count */}
          <div className="font-mono text-xs text-[#576175] bg-white px-3.5 py-2 rounded-xl border border-[#E8E2D8] self-start md:self-auto">
            Showing <strong className="text-[#0B0F19]">{filteredProducts.length}</strong> collections
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as CategoryTab)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition cursor-pointer border ${
                activeTab === tab.id
                  ? "bg-[#0B0F19] text-[#FAF8F5] border-[#0B0F19] shadow-sm"
                  : "bg-white text-[#576175] border-[#E8E2D8] hover:border-amber-600 hover:text-[#0B0F19]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-[#E8E2D8] p-5 flex flex-col justify-between paper-sheet-hover relative group"
            >
              <div>
                {/* Top Tags & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#E8E2D8] text-[#0B0F19]">
                    {product.paperGsm} GSM
                  </span>

                  {product.badge && (
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Devanagari Title & English Title */}
                {product.devanagariName && (
                  <div className="text-xs font-serif text-amber-700/80 mb-0.5">
                    {product.devanagariName}
                  </div>
                )}
                <h3 className="font-serif text-lg font-bold text-[#0B0F19] group-hover:text-amber-800 transition leading-snug">
                  {product.name}
                </h3>

                <p className="text-xs text-[#576175] mt-2 line-clamp-2 leading-relaxed">
                  {product.tagline}
                </p>

                {/* Finishes Pills */}
                <div className="flex flex-wrap gap-1 mt-4">
                  {product.popularFinishes.slice(0, 3).map((finish, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5F1EB] text-zinc-700 border border-[#E8E2D8]"
                    >
                      {finish}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Specs & Actions */}
              <div className="pt-5 mt-5 border-t border-[#E8E2D8]">
                <div className="flex items-center justify-between text-xs mb-3">
                  <div className="flex items-center gap-1 text-emerald-700 font-mono text-[11px]">
                    <Clock className="w-3 h-3" />
                    <span>{product.turnaroundDays}</span>
                  </div>

                  <div className="flex items-center gap-1 text-amber-600 text-xs font-semibold">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span>{product.rating}</span>
                    <span className="text-zinc-400 font-mono text-[10px]">({product.reviewsCount})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 block">STARTING FROM</span>
                    <span className="font-mono text-base font-black text-[#0B0F19]">
                      ${product.basePrice}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono"> / {product.minQuantity} {product.unit}</span>
                  </div>

                  <button
                    onClick={() => setModalProduct(product)}
                    className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] hover:bg-[#0B0F19] hover:text-white hover:border-[#0B0F19] transition cursor-pointer"
                    title="Configure details & specifications"
                    aria-label={`Configure ${product.name}`}
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick View / Product Detail Modal */}
      {modalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-[#E8E2D8] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-zinc-500 hover:bg-zinc-100 transition cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-amber-700 uppercase">
                    {modalProduct.devanagariName || "Bespoke Collection"}
                  </span>
                  <span className="text-zinc-300">·</span>
                  <span className="font-mono text-xs text-zinc-500">{modalProduct.dimensions}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#0B0F19]">
                  {modalProduct.name}
                </h3>
                <p className="text-sm text-[#576175] mt-2 leading-relaxed">
                  {modalProduct.description}
                </p>
              </div>

              {/* Specs Table */}
              <div className="bg-[#FAF8F5] rounded-xl p-4 border border-[#E8E2D8] space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold mb-1">
                  Master Specifications
                </div>
                {modalProduct.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between text-xs py-1 border-b border-zinc-200/60 font-mono">
                    <span className="text-zinc-500">{spec.label}</span>
                    <span className="font-semibold text-[#0B0F19]">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Finishes */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold mb-2">
                  Available Embellishments & Hand Finishes
                </div>
                <div className="flex flex-wrap gap-2">
                  {modalProduct.popularFinishes.map((f, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 text-xs font-medium"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E8E2D8]">
                <div>
                  <span className="text-xs text-zinc-400 font-mono block">STARTING AT</span>
                  <span className="font-mono text-2xl font-black text-[#0B0F19]">
                    ${modalProduct.basePrice}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono"> / {modalProduct.minQuantity} units</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="#calculator"
                    onClick={() => setModalProduct(null)}
                    className="flex-1 sm:flex-initial py-3 px-4 rounded-xl border border-[#0B0F19] text-xs font-bold text-[#0B0F19] hover:bg-zinc-100 transition text-center"
                  >
                    Open in Calculator
                  </a>

                  <button
                    onClick={() => {
                      addItem({
                        productId: modalProduct.id,
                        name: modalProduct.name,
                        paperStock: `${modalProduct.paperStock} (${modalProduct.paperGsm} GSM)`,
                        finish: modalProduct.popularFinishes[0] || "Standard Foil",
                        quantity: modalProduct.minQuantity,
                        unitPrice: Number((modalProduct.basePrice / modalProduct.minQuantity).toFixed(2)),
                        totalPrice: modalProduct.basePrice,
                        turnaround: modalProduct.turnaroundDays,
                        specsSummary: modalProduct.dimensions,
                      });
                      setModalProduct(null);
                    }}
                    className="flex-1 sm:flex-initial py-3 px-5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Quote / Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

