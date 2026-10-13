export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  productOrdered: string;
  paperStockUsed: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    author: "Aarav Shrestha",
    role: "Founder & Creative Director",
    company: "Himalayan Atelier Goods",
    location: "Kathmandu & London",
    quote: "When clients hold our 600 GSM duplexed cards with gold foil deboss, the conversation shifts immediately. The weight, tactile edge, and crisp registration speak of serious craftsmanship.",
    productOrdered: "Imperial Foil Business Cards",
    paperStockUsed: "600 GSM Cotton Duplex with Gold Foil",
    rating: 5,
  },
  {
    id: "2",
    author: "Pooja Deshmukh",
    role: "Lead Event Designer",
    company: "Vriksha Luxury Weddings",
    location: "Mumbai & Dubai",
    quote: "Namaste Print executed 350 bespoke wedding suites on deckle-edge handmade rag paper in record time. The copper hot-stamping and custom wax seals made every guest gasp upon opening.",
    productOrdered: "Royal Heritage Wedding Invitations",
    paperStockUsed: "Handmade Deckled Cotton with Copper Foil",
    rating: 5,
  },
  {
    id: "3",
    author: "Marcus Lindqvist",
    role: "Head of Brand Packaging",
    company: "Botanical Reserve Spirits",
    location: "Stockholm & Singapore",
    quote: "Our gin bottles needed labels that wouldn't peel or wrinkle inside ice buckets, while maintaining rich tactile embossing. The Estate #8 felt paper with spot varnish delivered flawless luxury.",
    productOrdered: "Embossed Roll Labels",
    paperStockUsed: "Waterproof Estate Felt Paper with Micro-Embossing",
    rating: 5,
  },
  {
    id: "4",
    author: "Siddharth Thapa",
    role: "Principal Architect",
    company: "Studio Terracotta",
    location: "Pokhara & Kathmandu",
    quote: "The singer-sewn monograph lookbooks are works of art. The lay-flat binding and rich ink density on Fedrigoni paper reproduce our architectural photography with astonishing precision.",
    productOrdered: "Thread-Sewn Corporate Lookbooks",
    paperStockUsed: "Fedrigoni Arena 300 GSM Cover",
    rating: 5,
  },
];

