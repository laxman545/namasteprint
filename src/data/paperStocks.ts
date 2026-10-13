export interface PaperStock {
  id: string;
  name: string;
  gsm: number;
  thicknessPt: number;
  texture: string;
  textureVisual: string;
  colorHex: string;
  textColor: string;
  finishCompatibility: string[];
  bestFor: string;
  ecoCredential: string;
  tactileDescription: string;
  stiffnessRating: number; // 1-10
}

export const PAPER_STOCKS: PaperStock[] = [
  {
    id: "cotton-duplex-600",
    name: "Imperial Cotton Duplex",
    gsm: 600,
    thicknessPt: 32,
    texture: "Felt Wove Organic Texture",
    textureVisual: "bg-[#F7F4EE] border-[#E5E0D5]",
    colorHex: "#F7F4EE",
    textColor: "#1A1A1A",
    finishCompatibility: ["Deep Letterpress", "Hot Gold Foil", "Blind Deboss", "Painted Edges"],
    bestFor: "Luxury business cards, royal wedding suites, prestigious diplomas",
    ecoCredential: "100% Tree-Free Cotton Recovered Linters",
    tactileDescription: "Ultra-thick, luxurious pillowy hand-feel with extraordinary depth when debossed.",
    stiffnessRating: 9.8,
  },
  {
    id: "velvet-softtouch-450",
    name: "Velvet Soft-Touch Noir / Blanc",
    gsm: 450,
    thicknessPt: 24,
    texture: "Micro-Suede Silky Matte Laminate",
    textureVisual: "bg-[#1E232E] text-white border-[#333C4E]",
    colorHex: "#1E232E",
    textColor: "#FFFFFF",
    finishCompatibility: ["Spot UV Gloss", "Rose Gold Foil", "Holographic Foil"],
    bestFor: "Tech founders, architectural firms, high-end lookbooks, VIP passes",
    ecoCredential: "FSC Certified Core Board with Solvent-Free Film",
    tactileDescription: "Smooth like peach skin or Italian leather, eliminating all light glare and fingerprints.",
    stiffnessRating: 8.5,
  },
  {
    id: "pure-linen-laid-300",
    name: "Savile Pure Linen Laid",
    gsm: 300,
    thicknessPt: 16,
    texture: "Woven Textile Cross-Hatch Grid",
    textureVisual: "bg-[#FBF9F5] border-[#E8E4DA]",
    colorHex: "#FBF9F5",
    textColor: "#262626",
    finishCompatibility: ["Blind Emboss", "Copper Foil", "Crisp CMYK Printing"],
    bestFor: "Corporate stationery, fine dining menus, wine bottle necks, luxury letterheads",
    ecoCredential: "Elemental Chlorine Free (ECF) & Biodegradable",
    tactileDescription: "Subtle woven cross-hatch texture that sings when fingers brush across the surface.",
    stiffnessRating: 7.2,
  },
  {
    id: "recycled-kraft-400",
    name: "Artisan Raw Fibrous Kraft",
    gsm: 400,
    thicknessPt: 22,
    texture: "Earthy Visible Flecks & Unbleached Grain",
    textureVisual: "bg-[#C8A882] text-[#2C1D0E] border-[#A8865E]",
    colorHex: "#C8A882",
    textColor: "#2C1D0E",
    finishCompatibility: ["Opaque White Ink", "Black Letterpress", "Gold Foil Contrast"],
    bestFor: "Artisan roasters, sustainable skincare, hang tags, craft breweries",
    ecoCredential: "100% Post-Consumer Waste Recycled",
    tactileDescription: "Honest, sturdy, and rich with natural organic fiber particles and warm character.",
    stiffnessRating: 8.0,
  },
  {
    id: "frosted-vellum-250",
    name: "Alabaster Frosted Vellum",
    gsm: 250,
    thicknessPt: 12,
    texture: "Semi-Translucent Glassine Smooth",
    textureVisual: "bg-[#FFFFFF]/80 backdrop-blur border-white/50",
    colorHex: "#EFEFEF",
    textColor: "#171717",
    finishCompatibility: ["White Screenprint", "Gold Foil Accents", "Belly Bands"],
    bestFor: "Invitation overlays, presentation title pages, packaging wraps",
    ecoCredential: "100% Pure Cellulose without Chemical Additives",
    tactileDescription: "Dreamy translucent haze that allows underlaid imagery and calligraphy to softly glow through.",
    stiffnessRating: 5.5,
  },
  {
    id: "classic-silk-350",
    name: "Monolith Silk Board",
    gsm: 350,
    thicknessPt: 18,
    texture: "Low-Sheen Smooth Satin Coating",
    textureVisual: "bg-[#FAF9F7] border-[#DFDBD3]",
    colorHex: "#FAF9F7",
    textColor: "#1F2937",
    finishCompatibility: ["Matt Lamination", "Gloss Spot UV", "Vibrant CMYK Photography"],
    bestFor: "Marketing brochures, promotional cards, product packaging sleeves",
    ecoCredential: "ISO 14001 Environmental Standard & FSC Mix",
    tactileDescription: "The gold standard for vibrant photographic print definition with a clean, low-glare satin feel.",
    stiffnessRating: 7.8,
  },
];

