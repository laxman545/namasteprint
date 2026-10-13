export interface PrintFaq {
  question: string;
  answer: string;
  category: "artwork" | "materials" | "shipping" | "pricing";
}

export const PRINT_FAQS: PrintFaq[] = [
  {
    category: "artwork",
    question: "What bleed and safe margin specifications should I set up in my files?",
    answer: "We recommend adding a 3mm (0.125 in) full bleed around all outer edges of your document, with critical text, logos, and borders placed at least 4mm inside the trim line (safe margin). Files should be exported in 300 DPI resolution in CMYK color space (FOGRA39 or Coated GRACoL) with all fonts converted to vector curves/outlines.",
  },
  {
    category: "artwork",
    question: "How do I provide vector artwork for hot foil stamping or spot UV glaze?",
    answer: "When setting up specialty finishes like foil, deboss, or spot UV, provide your artwork with a dedicated 100% solid Black vector layer (100% K) labeled 'FOIL' or 'UV' aligned perfectly on top of your CMYK artwork. Our pre-press team will send a digital 3D proof showing exact alignment prior to plate making.",
  },
  {
    category: "materials",
    question: "Can I inspect the physical paper stocks before placing a high-volume print order?",
    answer: "Absolutely. We ship our curated Artisan Swatch Pack anywhere globally. The kit includes pre-printed swatches of all 6 paper stocks (Cotton Duplex, Velvet Soft-Touch, Linen, Kraft, Vellum, Silk), sample foil stampings, debossing depths, and a CMYK Pantone color chart so you can feel the exact weight and texture in your hands.",
  },
  {
    category: "shipping",
    question: "What is your typical turnaround time, and is same-day rush printing available?",
    answer: "Standard production for business cards and stickers is 24 to 48 business hours. Intricate multi-layer finishes (such as duplexing, custom die-cutting, or multi-color foil) typically require 3 to 4 business days. We offer Rush Express dispatch options at checkout with guaranteed next-day carrier handover.",
  },
  {
    category: "pricing",
    question: "Do you offer wholesale and bulk trade discounts for design agencies and corporate teams?",
    answer: "Yes, our Trade Partner Program offers volume tiered discounts up to 35% off retail rates, unbranded white-label dropshipping directly to your end clients, dedicated press operator liaison, and complimentary hardcopy proofs for large print runs.",
  },
];

