export interface SpecialtyFinish {
  id: string;
  name: string;
  category: "foil" | "varnish" | "emboss" | "edge";
  description: string;
  visualPreviewClass: string;
  extraMultiplier: number;
  highlightText: string;
  processTime: string;
}

export const SPECIALTY_FINISHES: SpecialtyFinish[] = [
  {
    id: "gold-foil",
    name: "Classic Gold Foil",
    category: "foil",
    description: "Heat-pressed metallic brass foil with mirror-like brilliance and tactile depth.",
    visualPreviewClass: "foil-gold-text font-serif font-bold",
    extraMultiplier: 1.25,
    highlightText: "Most popular for royal identity & wedding suites",
    processTime: "+24 Hours",
  },
  {
    id: "rose-gold-foil",
    name: "Copper & Rose Gold Foil",
    category: "foil",
    description: "Warm pinkish copper metallic reflection delivering modern luxury and understated elegance.",
    visualPreviewClass: "text-[#E07A5F] font-serif font-bold",
    extraMultiplier: 1.28,
    highlightText: "Loved by boutique studios and jewelry brands",
    processTime: "+24 Hours",
  },
  {
    id: "spot-uv",
    name: "Raised Spot UV Glaze",
    category: "varnish",
    description: "Ultra-glossy clear liquid polymer cured with ultraviolet light over specific elements.",
    visualPreviewClass: "text-zinc-900 drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)] font-bold",
    extraMultiplier: 1.2,
    highlightText: "Dramatic contrast when paired with soft-touch matte",
    processTime: "+24 Hours",
  },
  {
    id: "blind-deboss",
    name: "Blind Letterpress Deboss",
    category: "emboss",
    description: "Heavy plate indentation pressed into pillowy cotton paper without ink or foil.",
    visualPreviewClass: "tactile-deboss text-zinc-700 font-serif font-medium",
    extraMultiplier: 1.22,
    highlightText: "Subtle architectural shadow play and fingertip relief",
    processTime: "+24 Hours",
  },
  {
    id: "holographic-foil",
    name: "Prismatic Holographic Foil",
    category: "foil",
    description: "Laser diffraction grating foil that erupts into vivid spectral rainbows when angled in light.",
    visualPreviewClass: "foil-holographic-text font-bold",
    extraMultiplier: 1.32,
    highlightText: "Eye-catching for streetwear, artists, and music releases",
    processTime: "+48 Hours",
  },
  {
    id: "edge-gilding",
    name: "3-Sided Edge Gilding",
    category: "edge",
    description: "Beveled card perimeter hand-leafed with genuine metallic foil or custom Pantone color.",
    visualPreviewClass: "text-amber-600 font-semibold",
    extraMultiplier: 1.35,
    highlightText: "Stands out immediately inside cardholders and stacks",
    processTime: "+48 Hours",
  },
];

