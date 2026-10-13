"use client";

import React, { useState } from "react";
import {
  FileCheck2,
  UploadCloud,
  CheckCircle2,
  AlertTriangle,
  Eye,
  Sliders,
  Sparkles,
  Scissors,
  Layers,
  FileCode,
} from "lucide-react";

export default function InteractiveProofChecker() {
  const [showBleed, setShowBleed] = useState(true);
  const [showTrim, setShowTrim] = useState(true);
  const [showSafeZone, setShowSafeZone] = useState(true);
  const [activeChannel, setActiveChannel] = useState<"all" | "c" | "m" | "y" | "k">("all");
  const [fileName, setFileName] = useState("namaste_invitation_proof_v2.pdf");
  const [isSimulatingUpload, setIsSimulatingUpload] = useState(false);

  const handleSimulateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsSimulatingUpload(true);
      const name = e.target.files[0].name;
      setTimeout(() => {
        setFileName(name);
        setIsSimulatingUpload(false);
      }, 700);
    }
  };

  return (
    <section id="preflight" className="py-16 lg:py-24 border-b border-[#E8E2D8] bg-[#F5F1EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E2D8] text-xs font-mono text-[#D97706] mb-3">
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>INTERACTIVE PRE-PRESS DIGITAL PROOFER</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0F19] tracking-tight">
            Inspect Bleed, Trim & Color Profiles.
          </h2>

          <p className="text-[#576175] text-base sm:text-lg mt-3">
            Test your artwork against our industrial Heidelberg tolerances before sending to plate.
            Verify 3mm bleed margins, 300 DPI resolution, and CMYK ink distribution.
          </p>
        </div>

        {/* Proofer Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Canvas & Card Simulator (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E2D8] shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E8E2D8]">
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-amber-600" />
                <span className="font-mono text-xs font-bold text-[#0B0F19] truncate max-w-[200px] sm:max-w-xs">
                  {fileName}
                </span>
              </div>

              <label className="text-xs font-mono text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-300 cursor-pointer transition flex items-center gap-1.5">
                <UploadCloud className="w-3.5 h-3.5" />
                <span>Upload Artwork File</span>
                <input
                  type="file"
                  accept=".pdf,.ai,.psd,.svg,.png,.jpg"
                  onChange={handleSimulateUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* The Visual Artwork Stage */}
            <div className="relative aspect-[1.75/1] w-full rounded-xl bg-[#FAF8F5] border border-dashed border-[#CBD5E1] p-4 flex items-center justify-center overflow-hidden">
              {/* Outer Bleed Container (Red Boundary) */}
              <div
                className={`relative w-full max-w-[420px] aspect-[1.75/1] rounded-md transition-all flex items-center justify-center ${
                  showBleed ? "border-2 border-red-500/80 bg-red-50/20" : ""
                }`}
              >
                {/* Bleed Badge Label */}
                {showBleed && (
                  <span className="absolute -top-3 left-2 font-mono text-[9px] uppercase px-1.5 py-0.5 bg-red-600 text-white rounded font-bold">
                    3mm Bleed Line
                  </span>
                )}

                {/* Trim Container (Actual Physical Cut Boundary) */}
                <div
                  className={`relative w-[92%] h-[90%] rounded-sm transition-all flex items-center justify-center shadow-md ${
                    showTrim ? "border-2 border-zinc-900 bg-white" : "bg-white"
                  } ${
                    activeChannel === "c"
                      ? "hue-rotate-180 contrast-125"
                      : activeChannel === "m"
                      ? "hue-rotate-270 saturate-150"
                      : activeChannel === "y"
                      ? "sepia saturate-200"
                      : activeChannel === "k"
                      ? "grayscale contrast-150"
                      : ""
                  }`}
                >
                  {/* Trim Cut Mark Scissors */}
                  {showTrim && (
                    <div className="absolute -top-3 -right-2 bg-zinc-900 text-white rounded-full p-1" title="Trim Cut Line">
                      <Scissors className="w-2.5 h-2.5" />
                    </div>
                  )}

                  {/* Inner Safe Margin (Green Boundary) */}
                  <div
                    className={`w-[88%] h-[84%] rounded-xs p-4 flex flex-col justify-between transition-all ${
                      showSafeZone ? "border border-dashed border-emerald-500/90 bg-emerald-50/15" : ""
                    }`}
                  >
                    {/* Safe Margin Label */}
                    {showSafeZone && (
                      <span className="absolute top-1 left-2 font-mono text-[9px] uppercase text-emerald-700 font-bold">
                        Safe Margin 4mm
                      </span>
                    )}

                    {/* Simulated Artwork Layout inside Safe Margin */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1.5">
                        <span className="font-serif font-black text-amber-700 text-base">न</span>
                        <span className="font-mono text-[10px] tracking-widest text-[#0B0F19] font-bold">
                          NAMASTE PRINT
                        </span>
                      </div>
                      <span className="font-mono text-[9px] text-zinc-500">CMYK FOGRA39</span>
                    </div>

                    <div className="text-center py-2">
                      <div className="font-serif text-lg sm:text-xl font-black text-[#0B0F19] tracking-tight">
                        Royal Atelier Edition
                      </div>
                      <div className="font-mono text-[9px] text-amber-700 uppercase tracking-widest mt-0.5">
                        600 GSM Cotton Duplex · Gold Hot Foil
                      </div>
                    </div>

                    <div className="flex items-center justify-between font-mono text-[8px] text-zinc-400 border-t border-zinc-200/80 pt-1">
                      <span>VECTOR EMBOSS PATH: OK</span>
                      <span>RESOLUTION: 300.0 DPI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage Controls: Toggles */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs font-mono">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowBleed(!showBleed)}
                  className={`px-3 py-1.5 rounded-lg border transition cursor-pointer flex items-center gap-1.5 ${
                    showBleed ? "bg-red-50 text-red-700 border-red-300 font-bold" : "bg-[#FAF8F5] text-zinc-600 border-[#E8E2D8]"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span>Bleed 3mm</span>
                </button>

                <button
                  onClick={() => setShowTrim(!showTrim)}
                  className={`px-3 py-1.5 rounded-lg border transition cursor-pointer flex items-center gap-1.5 ${
                    showTrim ? "bg-zinc-900 text-white border-zinc-900 font-bold" : "bg-[#FAF8F5] text-zinc-600 border-[#E8E2D8]"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-zinc-300" />
                  <span>Trim Cut Line</span>
                </button>

                <button
                  onClick={() => setShowSafeZone(!showSafeZone)}
                  className={`px-3 py-1.5 rounded-lg border transition cursor-pointer flex items-center gap-1.5 ${
                    showSafeZone ? "bg-emerald-50 text-emerald-700 border-emerald-300 font-bold" : "bg-[#FAF8F5] text-zinc-600 border-[#E8E2D8]"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Safe Margin 4mm</span>
                </button>
              </div>

              {/* CMYK Channel Selector */}
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-zinc-400 mr-1">CHANNELS:</span>
                {[
                  { id: "all", label: "CMYK" },
                  { id: "c", label: "C" },
                  { id: "m", label: "M" },
                  { id: "y", label: "Y" },
                  { id: "k", label: "K" },
                ].map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => setActiveChannel(ch.id as any)}
                    className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold border transition cursor-pointer ${
                      activeChannel === ch.id
                        ? "bg-[#0B0F19] text-white border-[#0B0F19]"
                        : "bg-[#FAF8F5] text-zinc-700 border-[#E8E2D8]"
                    }`}
                  >
                    {ch.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Pre-Flight Automated Audit Report (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E2D8] shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D8]">
              <span className="text-xs font-mono font-bold uppercase text-[#0B0F19] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                AUTOMATED PRE-PRESS REPORT
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                100% READY FOR PLATE
              </span>
            </div>

            {/* Check List */}
            <div className="space-y-3">
              {[
                {
                  label: "Resolution Density",
                  value: "300.0 DPI High Definition",
                  status: "PASS",
                  note: "All raster assets exceed the 300 DPI press threshold.",
                },
                {
                  label: "Color Profile Space",
                  value: "CMYK (FOGRA39 Coated)",
                  status: "PASS",
                  note: "Zero RGB gamut clipping detected; inks calibrated.",
                },
                {
                  label: "Bleed Boundaries",
                  value: "3.0 mm Outer Bleed Verified",
                  status: "PASS",
                  note: "Background color properly extends beyond cut margins.",
                },
                {
                  label: "Typography & Outlines",
                  value: "100% Vector Curves",
                  status: "PASS",
                  note: "No missing or un-embedded font licenses detected.",
                },
                {
                  label: "Specialty Foil Mask",
                  value: "Dedicated 100% K Vector Layer",
                  status: "PASS",
                  note: "Foil stamping brass die vector path aligned perfectly.",
                },
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#0B0F19]">{item.label}</span>
                    <span className="font-mono text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      ✓ {item.status}
                    </span>
                  </div>
                  <div className="font-mono text-zinc-600 text-[11px]">{item.value}</div>
                  <p className="text-[11px] text-[#576175] pt-0.5">{item.note}</p>
                </div>
              ))}
            </div>

            {/* Approval Action */}
            <div className="pt-2">
              <button
                onClick={() => {
                  alert("Pre-flight proof approved! Your artwork has been locked into the press queue with 300 DPI calibration.");
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#0B0F19] hover:bg-amber-950 text-white text-xs font-mono font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Approve Digital Proof & Lock to Press</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

