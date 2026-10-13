"use client";

import React, { useState } from "react";
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  FileDown,
  Clock,
  CheckCircle2,
  Tag,
} from "lucide-react";
import confetti from "canvas-confetti";
import { useCart } from "@/context/CartContext";

export default function CartQuoteDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    isCartOpen,
    closeCart,
    promoCode,
    applyPromo,
    discountPercentage,
    rushShipping,
    setRushShipping,
    subtotal,
    discountAmount,
    shippingCost,
    grandTotal,
  } = useCart();

  const [promoInput, setPromoInput] = useState("");
  const [promoError, setPromoError] = useState(false);
  const [promoSuccess, setPromoSuccess] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [simulatedOrderId, setSimulatedOrderId] = useState("");

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const success = applyPromo(promoInput);
    if (success) {
      setPromoSuccess(true);
      setPromoError(false);
    } else {
      setPromoError(true);
      setPromoSuccess(false);
    }
  };

  const handleCheckout = () => {
    // Fire confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D97706", "#F59E0B", "#0B0F19", "#0284C7", "#DB2777"],
      });
    } catch (e) {
      // fallback if confetti unavailable
    }

    const orderNum = "NP-" + Math.floor(100000 + Math.random() * 900000);
    setSimulatedOrderId(orderNum);
    setOrderPlaced(true);
  };

  const handleResetOrder = () => {
    setOrderPlaced(false);
    clearCart();
    closeCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl border-l border-[#E8E2D8] relative animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#E8E2D8] flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0B0F19] text-amber-400 flex items-center justify-center font-serif font-bold text-sm">
              न
            </div>
            <div>
              <h3 className="font-serif font-black text-lg text-[#0B0F19] leading-tight">
                Print Order & Quote
              </h3>
              <span className="text-[10px] font-mono text-zinc-500 uppercase">
                {items.length} {items.length === 1 ? "Custom Run" : "Custom Runs"}
              </span>
            </div>
          </div>

          <button
            onClick={closeCart}
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200/60 transition cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!orderPlaced ? (
          <>
            {/* Items List (Scrollable Area) */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-zinc-400 space-y-3">
                  <ShoppingBag className="w-12 h-12 stroke-[1.2] text-zinc-300" />
                  <div className="font-serif text-lg font-bold text-[#0B0F19]">
                    Your Quote Drawer is Empty
                  </div>
                  <p className="text-xs text-[#576175] max-w-xs">
                    Configure your cards, boxes, or invitations in our Quote Calculator to add custom
                    print specifications.
                  </p>
                  <a
                    href="#calculator"
                    onClick={closeCart}
                    className="mt-2 py-2 px-4 rounded-xl bg-amber-600 text-white text-xs font-bold hover:bg-amber-500 transition cursor-pointer shadow-xs"
                  >
                    Open Quote Calculator
                  </a>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] space-y-3 relative group"
                  >
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h4 className="font-serif font-bold text-sm text-[#0B0F19] leading-snug">
                          {item.name}
                        </h4>
                        <div className="text-[11px] font-mono text-amber-700 font-semibold mt-0.5">
                          {item.paperStock}
                        </div>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-zinc-400 hover:text-red-600 transition p-1 cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-xs text-zinc-600 space-y-1 font-mono">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Finish:</span>
                        <span className="text-zinc-800 font-medium">{item.finish}</span>
                      </div>
                      {item.specsSummary && (
                        <div className="flex justify-between text-[11px] text-zinc-500">
                          <span>Spec:</span>
                          <span>{item.specsSummary}</span>
                        </div>
                      )}
                    </div>

                    {/* Quantity Controls & Price */}
                    <div className="flex items-center justify-between pt-2 border-t border-zinc-200/80 font-mono">
                      <div className="flex items-center border border-[#E8E2D8] rounded-lg bg-white overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 50)}
                          className="p-1.5 hover:bg-zinc-100 text-zinc-600 transition cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-bold text-[#0B0F19]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 50)}
                          className="p-1.5 hover:bg-zinc-100 text-zinc-600 transition cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs text-zinc-400 block">${item.unitPrice.toFixed(2)}/unit</span>
                        <span className="text-sm font-black text-[#0B0F19]">
                          ${item.totalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Bottom Calculation & Checkout Controls */}
            {items.length > 0 && (
              <div className="p-5 border-t border-[#E8E2D8] bg-[#FAF8F5] space-y-4">
                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Promo Code (try NAMASTE10)"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="w-full bg-white border border-[#E8E2D8] rounded-xl py-2 px-3 text-xs uppercase font-mono text-[#0B0F19] focus:outline-none focus:border-amber-600"
                    />
                    <Tag className="w-3.5 h-3.5 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2" />
                  </div>
                  <button
                    type="submit"
                    className="py-2 px-3 rounded-xl bg-zinc-900 text-white text-xs font-mono font-bold hover:bg-zinc-800 transition cursor-pointer"
                  >
                    Apply
                  </button>
                </form>

                {promoSuccess && (
                  <div className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    ✓ Promo <strong>{promoCode}</strong> applied ({discountPercentage}% discount)!
                  </div>
                )}
                {promoError && (
                  <div className="text-[11px] font-mono text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
                    Invalid promo code. Try <strong>NAMASTE10</strong> or <strong>ARTISAN20</strong>.
                  </div>
                )}

                {/* Rush Shipping Toggle */}
                <label className="flex items-center justify-between p-2.5 rounded-xl border border-[#E8E2D8] bg-white cursor-pointer text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <div>
                      <span className="font-bold text-[#0B0F19] block">Rush 24h Express Dispatch</span>
                      <span className="text-[10px] text-zinc-500">Priority plate scheduling</span>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={rushShipping}
                    onChange={(e) => setRushShipping(e.target.checked)}
                    className="w-4 h-4 accent-amber-600"
                  />
                </label>

                {/* Subtotal Breakdown */}
                <div className="space-y-1.5 text-xs font-mono text-zinc-600 pt-1">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-bold">
                      <span>Discount ({discountPercentage}%)</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Courier Delivery</span>
                    <span>{shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-base font-black text-[#0B0F19] pt-2 border-t border-[#E8E2D8]">
                    <span>Grand Total</span>
                    <span>${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <div className="space-y-2 pt-1">
                  <button
                    onClick={handleCheckout}
                    className="w-full py-3.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm transition flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-amber-200" />
                    <span>Confirm Order & Send to Press (${grandTotal.toFixed(2)})</span>
                  </button>

                  <button
                    onClick={() => {
                      alert(`Formal PDF Quotation Generated!\nQuote Ref: NP-QUOTE-${Date.now().toString().slice(-6)}\nGrand Total: $${grandTotal.toFixed(2)}\n\nA copy has been compiled for your corporate procurement department.`);
                    }}
                    className="w-full py-2 px-4 rounded-xl border border-zinc-300 text-zinc-700 hover:bg-zinc-100 text-xs font-mono transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Download Formal Corporate Quote PDF</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-400 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Free Pre-Press PDF Proofing Prior to Plate Output</span>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Order Confirmation Screen */
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="font-mono text-xs text-amber-700 uppercase font-bold tracking-wider">
                TRANSACTION CONFIRMED
              </span>
              <h3 className="font-serif text-2xl font-black text-[#0B0F19] mt-1">
                Order Locked into Press!
              </h3>
              <p className="font-mono text-sm font-bold text-zinc-700 mt-1">
                Reference: <span className="text-amber-700">{simulatedOrderId}</span>
              </p>
            </div>

            <p className="text-xs text-[#576175] max-w-xs leading-relaxed">
              Our pre-press technicians are now conducting a final 300 DPI pre-flight file
              inspection. You will receive an SMS and email notification when plates are imaged.
            </p>

            <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#E8E2D8] text-xs font-mono text-zinc-600 w-full max-w-xs text-left space-y-1">
              <div className="flex justify-between">
                <span>Total Charged:</span>
                <strong className="text-[#0B0F19]">${grandTotal.toFixed(2)}</strong>
              </div>
              <div className="flex justify-between">
                <span>Estimated Turnaround:</span>
                <strong className="text-emerald-700">{rushShipping ? "24 Hours Priority" : "48 Hours Standard"}</strong>
              </div>
            </div>

            <button
              onClick={handleResetOrder}
              className="py-3 px-6 rounded-xl bg-[#0B0F19] text-white text-xs font-mono font-bold hover:bg-zinc-800 transition cursor-pointer"
            >
              Start New Print Run
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

