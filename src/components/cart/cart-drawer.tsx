"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore, CartItem } from "@/store/cart-store";

export function CartDrawer() {
  const { 
    items, 
    isOpen, 
    closeCart, 
    removeItem, 
    updateQuantity, 
    getSubtotal,
    getItemCount
  } = useCartStore();

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeCart]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const subtotal = getSubtotal();
  const itemCount = getItemCount();

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Cart ({itemCount})
          </h2>
          <button 
            onClick={closeCart}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <Button onClick={closeCart} asChild>
                <Link href="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <CartItemCard 
                  key={`${item.productId}-${item.variantId || "default"}`} 
                  item={item}
                  onRemove={() => removeItem(item.productId, item.variantId)}
                  onUpdateQuantity={(qty) => updateQuantity(item.productId, qty, item.variantId)}
                />
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Subtotal</span>
              <span>EGP {subtotal.toLocaleString()}</span>
            </div>
            <p className="text-sm text-gray-500">
              Shipping and taxes calculated at checkout
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" onClick={closeCart} asChild>
                <Link href="/cart">View Cart</Link>
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600" onClick={closeCart} asChild>
                <Link href="/checkout">Checkout</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function CartItemCard({ 
  item, 
  onRemove, 
  onUpdateQuantity 
}: { 
  item: CartItem;
  onRemove: () => void;
  onUpdateQuantity: (qty: number) => void;
}) {
  return (
    <li className="flex gap-4 bg-gray-50 rounded-lg p-3">
      {/* Image */}
      <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
        <span className="text-xs text-gray-400">Image</span>
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
        {item.options && Object.entries(item.options).map(([key, value]) => (
          <p key={key} className="text-sm text-gray-500">{key}: {value}</p>
        ))}
        <p className="font-semibold text-orange-500 mt-1">
          EGP {item.price.toLocaleString()}
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border rounded-lg">
            <button
              onClick={() => onUpdateQuantity(item.quantity - 1)}
              className="p-1.5 hover:bg-gray-100 transition-colors"
              disabled={item.quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="px-3 text-sm font-medium">{item.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(item.quantity + 1)}
              className="p-1.5 hover:bg-gray-100 transition-colors"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
          <button
            onClick={onRemove}
            className="p-1.5 text-red-500 hover:bg-red-50 rounded transition-colors"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </li>
  );
}

