"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, PhoneCall, Mail } from "lucide-react";
import { PRINT_FAQS, PrintFaq } from "@/data/printFaqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "artwork", label: "Artwork & Bleed" },
    { id: "materials", label: "Papers & Foils" },
    { id: "shipping", label: "Dispatch & Express" },
    { id: "pricing", label: "Trade & Wholesale" },
  ];

  const filteredFaqs =
    activeCategory === "all"
      ? PRINT_FAQS
      : PRINT_FAQS.filter((f) => f.category === activeCategory);

  return (
    <section id="faqs" className="py-16 lg:py-24 border-b border-[#E8E2D8] bg-[#F5F1EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E2D8] text-xs font-mono text-[#D97706] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>PRINT PROTOCOL & ARTWORK SPECIFICATIONS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight">
            Frequently Asked Questions.
          </h2>

          <p className="text-[#576175] text-sm sm:text-base mt-3">
            Everything you need to know about preparing your print-ready files, selecting weights,
            and approving proofs.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(null);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
                activeCategory === cat.id
                  ? "bg-[#0B0F19] text-white border-[#0B0F19]"
                  : "bg-white text-zinc-600 border-[#E8E2D8] hover:border-amber-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#E8E2D8] overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-amber-50/30 transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#0B0F19]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#576175] leading-relaxed border-t border-[#FAF8F5]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E8E2D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif font-bold text-base text-[#0B0F19]">
              Have a custom sizing or bespoke packaging requirement?
            </h4>
            <p className="text-xs text-[#576175] mt-1">
              Our master press technicians review bespoke CAD dielines and provide custom estimates within 3 hours.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="mailto:press@namasteprint.com"
              className="py-2.5 px-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] text-xs font-semibold text-[#0B0F19] hover:bg-amber-50 hover:border-amber-600 transition flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-amber-600" />
              <span>press@namasteprint.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

