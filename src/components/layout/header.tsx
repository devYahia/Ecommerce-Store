"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  Search, 
  User, 
  Heart, 
  ShoppingCart, 
  Menu, 
  X,
  MapPin,
  Phone,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  const cartItemCount = useCartStore((state) => state.getItemCount());
  const wishlistCount = useWishlistStore((state) => state.getItemCount());
  const openCart = useCartStore((state) => state.openCart);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="hidden md:block bg-gray-900 text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Cairo, Egypt</span>
            </span>
            <span className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <a href={`tel:${siteConfig.contact.phone}`}>
                {siteConfig.contact.phone}
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Welcome to {siteConfig.name}</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-orange-500">
              Lancer<span className="text-gray-900">3D</span>
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search for products..."
                className="w-full pl-4 pr-12 h-10 border-gray-300 focus:border-orange-500"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0 h-full px-3 hover:bg-orange-50"
              >
                <Search className="h-5 w-5 text-gray-500" />
              </Button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Mobile Search Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Account */}
            <Link href="/account" className="hidden sm:flex items-center gap-2 text-sm hover:text-orange-500">
              <User className="h-5 w-5" />
              <span className="hidden lg:inline">Account</span>
            </Link>

            {/* Wishlist */}
            <Link href="/wishlist" className="relative p-2 hover:text-orange-500">
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <button
              onClick={openCart}
              className="relative p-2 hover:text-orange-500"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="md:hidden pb-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search for products..."
                className="w-full pl-4 pr-12"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0 h-full"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Bar */}
      <nav className="hidden md:block border-t bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-3 bg-orange-500 text-white font-medium hover:bg-orange-600">
                <Menu className="h-5 w-5" />
                <span>Browse Categories</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full w-64 bg-white shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="py-2">
                  {siteConfig.categories.map((category) => (
                    <li key={category.slug}>
                      <Link
                        href={`/category/${category.slug}`}
                        className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Navigation */}
            <ul className="flex items-center gap-6">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="py-3 inline-block text-gray-700 hover:text-orange-500 font-medium"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Promo Banner */}
            <div className="text-sm">
              <Link href="/shop" className="text-orange-500 font-semibold hover:underline">
                🚚 Free Shipping on All Printers!
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-2">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-orange-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className="border-t pt-2 mt-2">
                <span className="block py-2 font-semibold text-gray-900">Categories</span>
                <ul className="pl-4 space-y-1">
                  {siteConfig.categories.slice(0, 6).map((category) => (
                    <li key={category.slug}>
                      <Link
                        href={`/category/${category.slug}`}
                        className="block py-1.5 text-gray-600 hover:text-orange-500"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

