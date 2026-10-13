"use client";

import React, { useState } from "react";
import {
  X,
  Sparkles,
  CheckCircle2,
  PackageCheck,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function SampleKitModal() {
  const { isSampleModalOpen, closeSampleModal } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    address: "",
    city: "",
    country: "Nepal",
  });

  if (!isSampleModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    closeSampleModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#E8E2D8] shadow-2xl relative max-h-[95vh] overflow-y-auto">
        <button
          onClick={closeSampleModal}
          className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition cursor-pointer"
          aria-label="Close sample modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-mono font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>COMPLIMENTARY ARTISAN SWATCH PACK</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#0B0F19]">
                Feel the Paper in Your Hands.
              </h3>

              <p className="text-xs sm:text-sm text-[#576175] mt-2 leading-relaxed">
                We will dispatch our signature Presentation Sample Box containing all 6 physical
                mill stocks, tactile foils, blind deboss depths, and edge-gilded cards.
              </p>
            </div>

            {/* Inclusions Box */}
            <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E8E2D8] mb-6 text-xs space-y-1.5">
              <div className="font-mono font-bold text-[#0B0F19] uppercase text-[10px]">
                What&apos;s inside your sample kit:
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-zinc-600">
                <span>✓ 600 GSM Cotton Duplex</span>
                <span>✓ 450 GSM Velvet Soft-Touch</span>
                <span>✓ Gold & Rose Gold Foils</span>
                <span>✓ Raised Spot UV Glaze</span>
                <span>✓ Blind Letterpress Deboss</span>
                <span>✓ CMYK Pantone Swatch Guide</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-500 mb-1">YOUR FULL NAME *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Maya Bajracharya"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl p-2.5 text-sm font-sans text-[#0B0F19] focus:outline-none focus:border-amber-600 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-zinc-500 mb-1">STUDIO / BRAND NAME</label>
                  <input
                    type="text"
                    placeholder="e.g. Mandala Design Lab"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl p-2.5 text-sm font-sans text-[#0B0F19] focus:outline-none focus:border-amber-600 focus:bg-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-500 mb-1">WORK EMAIL ADDRESS *</label>
                <input
                  required
                  type="email"
                  placeholder="maya@studio.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl p-2.5 text-sm font-sans text-[#0B0F19] focus:outline-none focus:border-amber-600 focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-zinc-500 mb-1">SHIPPING STREET ADDRESS *</label>
                <input
                  required
                  type="text"
                  placeholder="Street, Studio or Suite number"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl p-2.5 text-sm font-sans text-[#0B0F19] focus:outline-none focus:border-amber-600 focus:bg-white transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-500 mb-1">CITY / DISTRICT *</label>
                  <input
                    required
                    type="text"
                    placeholder="Kathmandu"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl p-2.5 text-sm font-sans text-[#0B0F19] focus:outline-none focus:border-amber-600 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-zinc-500 mb-1">COUNTRY *</label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl p-2.5 text-sm font-sans text-[#0B0F19] focus:outline-none focus:border-amber-600 focus:bg-white transition cursor-pointer"
                  >
                    <option value="Nepal">Nepal</option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Other">Other Global</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>Send My Free Artisan Sample Pack</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Free Shipping · No Credit Card Required</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <PackageCheck className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl font-black text-[#0B0F19]">
              Your Sample Pack is on the Press!
            </h3>

            <p className="text-xs sm:text-sm text-[#576175] max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Your custom sample kit will be prepared
              and dispatched to <strong>{formData.address}, {formData.city}</strong> within 24 hours.
            </p>

            <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#E8E2D8] text-xs font-mono text-zinc-600">
              Tracking code will be sent to <strong>{formData.email}</strong>
            </div>

            <button
              onClick={handleReset}
              className="py-2.5 px-6 rounded-xl bg-[#0B0F19] text-white text-xs font-semibold hover:bg-zinc-800 transition cursor-pointer"
            >
              Close & Continue Browsing
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

