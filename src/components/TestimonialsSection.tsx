"use client";

import React from "react";
import { Star, MessageSquareQuote, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 border-b border-[#E8E2D8] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F1EB] border border-[#E8E2D8] text-xs font-mono text-[#D97706] mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>PATRON & BRAND TESTIMONIALS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0F19] tracking-tight">
            Trusted by Creators, Studios & Founders.
          </h2>

          <p className="text-[#576175] text-base sm:text-lg mt-3">
            Discover how visionary brands turn initial client greetings and unboxings into permanent
            tactile memories.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E2D8] flex flex-col justify-between paper-sheet-hover"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Print Client
                  </span>
                </div>

                {/* Quote */}
                <p className="font-serif text-base text-[#0B0F19] leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Print Specs */}
              <div className="pt-6 mt-6 border-t border-[#E8E2D8] space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm text-[#0B0F19]">{item.author}</div>
                    <div className="text-xs text-[#576175]">
                      {item.role} · <span className="font-semibold">{item.company}</span>
                    </div>
                  </div>
                  <div className="text-right text-[11px] font-mono text-zinc-400">
                    {item.location}
                  </div>
                </div>

                <div className="bg-[#FAF8F5] p-2.5 rounded-lg border border-[#E8E2D8] text-[11px] font-mono text-zinc-600 flex items-center justify-between">
                  <span>SPEC: {item.productOrdered}</span>
                  <span className="text-amber-700 font-bold">{item.paperStockUsed}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

