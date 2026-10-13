"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Printer,
  Mail,
  ShieldCheck,
  Leaf,
  Check,
  ArrowRight,
  PhoneCall,
  MapPin,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Footer() {
  const { openSampleModal } = useCart();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#0B0F19] text-[#FAF8F5] pt-16 pb-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Registration Mark & CMYK Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-10 border-b border-zinc-800 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-serif text-amber-400 font-bold text-lg">
              न
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl font-bold tracking-tight text-white">
                  Namaste Print
                </span>
                <span className="text-xs font-serif text-amber-400">(नमस्ते प्रिंट)</span>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                Precision Print Craftsmanship & Tactile Artistry
              </span>
            </div>
          </div>

          {/* CMYK Color Bars */}
          <div className="flex items-center gap-3 font-mono text-[11px] text-zinc-400">
            <span>CMYK SPECTRAL CALIBRATION:</span>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-cyan-500 shadow-xs" title="Cyan (100,0,0,0)" />
              <span className="w-3.5 h-3.5 rounded-full bg-pink-500 shadow-xs" title="Magenta (0,100,0,0)" />
              <span className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-xs" title="Yellow (0,0,100,0)" />
              <span className="w-3.5 h-3.5 rounded-full bg-white shadow-xs" title="Key Black (0,0,0,100)" />
            </div>
          </div>
        </div>

        {/* Newsletter & Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-zinc-800">
          {/* Newsletter (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase text-amber-400 tracking-wider font-bold">
              ATELIER DISPATCHES
            </div>
            <h4 className="font-serif text-xl font-bold text-white">
              Receive First-Run Paper Releases & 10% Off.
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We send quarterly paper stock reports, foil embellishment case studies, and secret seasonal discount codes.
            </p>

            {!newsletterSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    required
                    type="email"
                    placeholder="Enter your work email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl py-3 pl-3.5 pr-24 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-amber-500 text-[#0B0F19] text-xs font-bold hover:bg-amber-400 transition cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="text-[10px] text-zinc-500 font-mono">
                  Use voucher <strong className="text-amber-400">NAMASTE10</strong> on your first order.
                </div>
              </form>
            ) : (
              <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs font-mono flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Subscribed! Your 10% voucher code is <strong>NAMASTE10</strong>.</span>
              </div>
            )}
          </div>

          {/* Column 2: Repertoire (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <div className="font-mono text-zinc-400 uppercase tracking-wider font-bold">
              PRINT COLLECTIONS
            </div>
            <ul className="space-y-2 text-zinc-300 font-medium">
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition">
                  Imperial Foil Business Cards (600 GSM)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition">
                  Custom Rigid Presentation Boxes
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition">
                  Deckle-Edge Wedding Invitation Suites
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition">
                  Prismatic Holographic Vinyl Stickers
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition">
                  Singer-Sewn Thread Lookbooks
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition">
                  Heavy Organic Cotton Canvas Totes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Pre-Press & Materials (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <div className="font-mono text-zinc-400 uppercase tracking-wider font-bold">
              PRE-PRESS & MATERIALS
            </div>
            <ul className="space-y-2 text-zinc-300 font-medium">
              <li>
                <a href="#paper-lab" className="hover:text-amber-400 transition">
                  The Tactile Paper Swatch Lab
                </a>
              </li>
              <li>
                <a href="#preflight" className="hover:text-amber-400 transition">
                  Interactive Bleed & Trim Proofer
                </a>
              </li>
              <li>
                <a href="#craft" className="hover:text-amber-400 transition">
                  Heidelberg Offset & Indigo Press Tech
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-amber-400 transition">
                  Bleed (3mm) & Safe Margin Specs
                </a>
              </li>
              <li>
                <button
                  onClick={openSampleModal}
                  className="text-amber-400 hover:underline cursor-pointer flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  Order Free Swatch Pack
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Studio Contacts (2 Cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <div className="font-mono text-zinc-400 uppercase tracking-wider font-bold">
              ATELIER CONTACTS
            </div>
            <div className="space-y-2.5 text-zinc-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-[11px] text-zinc-400">
                  Patan Pressworks, Lalitpur & New Delhi Atelier
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-mono text-[11px]">+977 1-554-PRINT</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-mono text-[11px]">press@namasteprint.com</span>
              </div>
              <div className="pt-2 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <Leaf className="w-3 h-3" />
                <span>100% Carbon Neutral Press Facility</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Guarantee */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-4">
          <div>
            &copy; 2026 Namaste Print (नमस्ते प्रिंट) Atelier. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-zinc-400">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              100% Repress Color Accuracy Guarantee
            </span>
            <span>·</span>
            <span>FSC® Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
