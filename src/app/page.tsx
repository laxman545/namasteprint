import React from "react";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InstantQuoteCalculator from "@/components/InstantQuoteCalculator";
import ProductCatalog from "@/components/ProductCatalog";
import PaperSwatchLab from "@/components/PaperSwatchLab";
import InteractiveProofChecker from "@/components/InteractiveProofChecker";
import CraftProcess from "@/components/CraftProcess";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import CartQuoteDrawer from "@/components/CartQuoteDrawer";
import SampleKitModal from "@/components/SampleKitModal";

export default function Home() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <InstantQuoteCalculator />
          <ProductCatalog />
          <PaperSwatchLab />
          <InteractiveProofChecker />
          <CraftProcess />
          <TestimonialsSection />
          <FaqSection />
        </main>
        <Footer />

        {/* Global Drawers & Modals */}
        <CartQuoteDrawer />
        <SampleKitModal />
      </div>
    </CartProvider>
  );
}
