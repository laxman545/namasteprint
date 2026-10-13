import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Namaste Print | Bespoke Print Craftsmanship, Luxury Papers & Foil Embellishment",
  description:
    "Namaste Print (नमस्ते प्रिंट) — Precision printing atelier. Ultra-premium business cards, hot foil stamping, custom rigid packaging, luxury wedding stationery, apparel, and stickers with next-day turnaround and tactile paper stocks.",
  keywords: [
    "custom printing",
    "foil stamping",
    "luxury business cards",
    "embossed stationery",
    "wedding invitations",
    "cotton paper",
    "Namaste Print",
    "Nepal print",
    "India print",
    "custom packaging",
    "spot UV",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased selection:bg-amber-200 selection:text-amber-950`}
    >
      <body className="min-h-screen bg-[#FAF8F5] text-[#0A0E17] font-sans antialiased overflow-x-hidden flex flex-col">
        {children}
      </body>
    </html>
  );
}
