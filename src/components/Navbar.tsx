"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Sparkles,
  Search,
  Menu,
  X,
  Layers,
  FileCheck2,
  PhoneCall,
  ChevronDown,
  Percent,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";

export default function Navbar() {
  const { items, openCart, openSampleModal } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const filteredProducts = searchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4)
    : [];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D8]">
      {/* Top Heritage & Turnaround Notice Bar */}
      <div className="bg-[#0B0F19] text-[#FAF8F5] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] text-amber-300">PRESS STATUS: ACTIVE</span>
            <span className="text-zinc-400 hidden md:inline">|</span>
            <span className="text-zinc-300 hidden md:inline">Same-Day Dispatch available for orders placed by 1:00 PM</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-amber-400 font-medium flex items-center gap-1">
              <Percent className="w-3 h-3" />
              Use code <strong className="underline tracking-wider">NAMASTE10</strong> for 10% off
            </span>
            <span className="text-zinc-500 hidden lg:inline">|</span>
            <button
              onClick={openSampleModal}
              className="text-zinc-300 hover:text-white transition flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              Free Swatch Kit
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo & Devanagari Touch */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            {/* CMYK Registration mark logo symbol */}
            <div className="relative w-11 h-11 rounded-lg bg-[#0B0F19] flex items-center justify-center border border-amber-600/30 shadow-md group-hover:border-amber-500 transition">
              <span className="font-serif text-amber-400 text-xl font-bold tracking-tight">न</span>
              {/* Registration crosshair marks */}
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 border border-[#FAF8F5]" title="Cyan" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-pink-500 border border-[#FAF8F5]" title="Magenta" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 rounded-full bg-amber-400 border border-[#FAF8F5]" title="Yellow" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-2xl font-black tracking-tight text-[#0B0F19]">
                  Namaste
                </span>
                <span className="font-sans text-2xl font-light tracking-wide text-amber-700">
                  Print
                </span>
              </div>
              <span className="font-mono text-[10px] tracking-widest text-[#576175] uppercase">
                Artisan Paper & Precision Ink
              </span>
            </div>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden lg:block relative flex-1 max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products, foils, 600 GSM cotton..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 250)}
                className="w-full bg-[#F5F1EB] border border-[#E8E2D8] rounded-full py-2 pl-10 pr-4 text-sm text-[#0B0F19] placeholder:text-[#576175] focus:outline-none focus:border-amber-600 focus:bg-white transition"
              />
              <Search className="w-4 h-4 text-[#576175] absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>

            {/* Live Autocomplete Results Dropdown */}
            {searchFocused && searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-[#E8E2D8] p-2 z-50">
                {filteredProducts.length > 0 ? (
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 px-3 py-1">
                      Matching Print Products
                    </div>
                    {filteredProducts.map((p) => (
                      <a
                        key={p.id}
                        href="#products"
                        onClick={() => setSearchQuery("")}
                        className="flex items-center justify-between p-2.5 rounded-lg hover:bg-amber-50/70 transition"
                      >
                        <div>
                          <div className="font-semibold text-sm text-[#0B0F19]">{p.name}</div>
                          <div className="text-xs text-zinc-500">{p.paperStock} · {p.dimensions}</div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-mono font-bold text-amber-700">
                            From ${p.basePrice}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-sm text-zinc-500">
                    No matching print items found for &quot;{searchQuery}&quot;
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#161D2A]">
            <a href="#products" className="hover:text-amber-700 transition">
              Products
            </a>
            <a href="#calculator" className="hover:text-amber-700 transition flex items-center gap-1">
              Quote Calculator
            </a>
            <a href="#paper-lab" className="hover:text-amber-700 transition">
              Paper Lab
            </a>
            <a href="#preflight" className="hover:text-amber-700 transition flex items-center gap-1">
              <FileCheck2 className="w-3.5 h-3.5 text-amber-600" />
              Artwork Proofing
            </a>
            <a href="#craft" className="hover:text-amber-700 transition">
              Artisan Craft
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Free Swatch Kit CTA button */}
            <button
              onClick={openSampleModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-white border border-[#D97706]/40 text-[#D97706] hover:bg-amber-50 shadow-xs transition cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Free Sample Kit</span>
            </button>

            {/* Cart & Instant Quote Slide-Over Trigger */}
            <button
              onClick={openCart}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0B0F19] text-[#FAF8F5] text-xs font-semibold hover:bg-amber-950 transition cursor-pointer shadow-sm"
              aria-label="View Cart and Quote"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Quote / Cart</span>
              {totalItems > 0 && (
                <span className="w-5 h-5 rounded-full bg-amber-500 text-[#0B0F19] text-[11px] font-bold flex items-center justify-center font-mono">
                  {items.length}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#0B0F19] hover:bg-zinc-100 rounded-lg transition"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8E2D8] bg-[#FAF8F5] px-4 pt-4 pb-6 space-y-4">
          {/* Mobile search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products, foils, papers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F5F1EB] border border-[#E8E2D8] rounded-lg py-2 pl-9 pr-4 text-sm text-[#0B0F19]"
            />
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          <div className="grid grid-cols-1 gap-2 text-sm font-medium text-[#0B0F19]">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-amber-100/60 transition"
            >
              Print Catalog
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-amber-100/60 transition"
            >
              Instant Quote Calculator
            </a>
            <a
              href="#paper-lab"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-amber-100/60 transition"
            >
              Tactile Paper Swatches
            </a>
            <a
              href="#preflight"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-amber-100/60 transition flex items-center gap-2"
            >
              <FileCheck2 className="w-4 h-4 text-amber-600" />
              Artwork Pre-flight & Proofing
            </a>
            <a
              href="#craft"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-amber-100/60 transition"
            >
              Artisan Process & Heidelberg Press
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-amber-100/60 transition"
            >
              Print Specifications & FAQs
            </a>
          </div>

          <div className="pt-2 border-t border-zinc-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openSampleModal();
              }}
              className="w-full py-2.5 rounded-lg bg-amber-600 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              Request Free Swatch Pack
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

