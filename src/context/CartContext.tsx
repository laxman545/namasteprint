"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  paperStock: string;
  finish: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  turnaround: string;
  specsSummary?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "id">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  isSampleModalOpen: boolean;
  openSampleModal: () => void;
  closeSampleModal: () => void;
  promoCode: string;
  applyPromo: (code: string) => boolean;
  discountPercentage: number;
  rushShipping: boolean;
  setRushShipping: (val: boolean) => void;
  subtotal: number;
  discountAmount: number;
  shippingCost: number;
  grandTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: "demo-item-1",
      productId: "luxury-business-cards",
      name: "Imperial Foil Business Cards",
      paperStock: "100% Cotton Rag Duplex (600 GSM)",
      finish: "Classic Gold Foil + Velvet Lamination",
      quantity: 250,
      unitPrice: 0.36,
      totalPrice: 90.0,
      turnaround: "24–48 Hours",
      specsSummary: "85 × 55 mm | Double-sided Foil | Gilded Edge",
    },
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [rushShipping, setRushShipping] = useState(false);

  const addItem = (item: Omit<CartItem, "id">) => {
    const newItem: CartItem = {
      ...item,
      id: "item-" + Date.now() + "-" + Math.random().toString(36).substr(2, 4),
    };
    setItems((prev) => [newItem, ...prev]);
    setIsCartOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newTotal = Number((item.unitPrice * quantity).toFixed(2));
          return { ...item, quantity, totalPrice: newTotal };
        }
        return item;
      })
    );
  };

  const clearCart = () => setItems([]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const openSampleModal = () => setIsSampleModalOpen(true);
  const closeSampleModal = () => setIsSampleModalOpen(false);

  const applyPromo = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === "NAMASTE10") {
      setPromoCode("NAMASTE10");
      setDiscountPercentage(10);
      return true;
    } else if (clean === "ARTISAN20") {
      setPromoCode("ARTISAN20");
      setDiscountPercentage(20);
      return true;
    }
    return false;
  };

  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const discountAmount = Number(((subtotal * discountPercentage) / 100).toFixed(2));
  const shippingCost = rushShipping ? 25.0 : subtotal > 100 ? 0 : 12.0;
  const grandTotal = Number((subtotal - discountAmount + shippingCost).toFixed(2));

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        isSampleModalOpen,
        openSampleModal,
        closeSampleModal,
        promoCode,
        applyPromo,
        discountPercentage,
        rushShipping,
        setRushShipping,
        subtotal,
        discountAmount,
        shippingCost,
        grandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

