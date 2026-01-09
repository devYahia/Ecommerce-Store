"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  Truck, 
  Shield, 
  RotateCcw,
  Minus,
  Plus,
  Check,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";

// Mock product data
const products: Record<string, {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  brand: string;
  category: string;
  images: string[];
  features: string[];
  specifications: Record<string, string>;
  stock: number;
  rating: number;
  reviewCount: number;
}> = {
  "1": {
    id: "1",
    name: "Creality Ender 3 V3",
    slug: "creality-ender-3-v3",
    description: "The Creality Ender 3 V3 is an upgraded version of the legendary Ender 3 series, featuring CoreXZ structure for faster and more precise printing. Perfect for beginners and enthusiasts alike.",
    price: 8500,
    compareAtPrice: 9500,
    brand: "Creality",
    category: "FDM 3D Printers",
    images: ["/products/placeholder.jpg"],
    features: [
      "CoreXZ Structure for stable high-speed printing",
      "Auto Bed Leveling with CR Touch",
      "Direct Drive Extruder",
      "220x220x250mm Build Volume",
      "Up to 500mm/s printing speed"
    ],
    specifications: {
      "Print Technology": "FDM",
      "Build Volume": "220 x 220 x 250 mm",
      "Max Print Speed": "500 mm/s",
      "Layer Resolution": "0.1-0.4 mm",
      "Nozzle Diameter": "0.4 mm",
      "Filament Diameter": "1.75 mm",
      "Supported Materials": "PLA, PETG, TPU, ABS"
    },
    stock: 15,
    rating: 4.8,
    reviewCount: 234
  },
  "2": {
    id: "2",
    name: "Creality Ender 3 S1 Pro",
    slug: "creality-ender-3-s1-pro",
    description: "The Ender 3 S1 Pro features a Sprite direct extruder and can handle high-temperature filaments up to 300°C. Comes with PEI spring steel build plate for perfect adhesion.",
    price: 12500,
    compareAtPrice: 14000,
    brand: "Creality",
    category: "FDM 3D Printers",
    images: ["/products/placeholder.jpg"],
    features: [
      "Sprite Direct Drive Extruder",
      "300°C High-Temp Printing",
      "CR Touch Auto Leveling",
      "PEI Spring Steel Build Plate",
      "LED Lighting Bar"
    ],
    specifications: {
      "Print Technology": "FDM",
      "Build Volume": "220 x 220 x 270 mm",
      "Max Nozzle Temp": "300°C",
      "Layer Resolution": "0.05-0.4 mm",
      "Nozzle Diameter": "0.4 mm",
      "Supported Materials": "PLA, PETG, TPU, ABS, Nylon"
    },
    stock: 8,
    rating: 4.7,
    reviewCount: 189
  },
  "3": {
    id: "3",
    name: "Anycubic Kobra 2",
    slug: "anycubic-kobra-2",
    description: "The Anycubic Kobra 2 delivers 5X faster printing speeds with LeviQ 2.0 auto-leveling. A great choice for both beginners and experienced makers.",
    price: 9800,
    brand: "Anycubic",
    category: "FDM 3D Printers",
    images: ["/products/placeholder.jpg"],
    features: [
      "250mm/s Max Print Speed",
      "LeviQ 2.0 Auto Leveling",
      "Direct Drive Extruder",
      "Double-sided PEI Plate",
      "4.3\" Touch Screen"
    ],
    specifications: {
      "Print Technology": "FDM",
      "Build Volume": "220 x 220 x 250 mm",
      "Max Print Speed": "250 mm/s",
      "Layer Resolution": "0.05-0.3 mm",
      "Supported Materials": "PLA, PETG, TPU"
    },
    stock: 12,
    rating: 4.6,
    reviewCount: 156
  },
  "4": {
    id: "4",
    name: "Elegoo Neptune 4",
    slug: "elegoo-neptune-4",
    description: "Experience lightning-fast printing with the Elegoo Neptune 4, featuring Klipper firmware pre-installed for speeds up to 500mm/s.",
    price: 8200,
    brand: "Elegoo",
    category: "FDM 3D Printers",
    images: ["/products/placeholder.jpg"],
    features: [
      "Klipper Firmware Pre-installed",
      "500mm/s Max Print Speed",
      "Auto Bed Leveling",
      "Direct Drive Extruder",
      "WiFi Connectivity"
    ],
    specifications: {
      "Print Technology": "FDM",
      "Build Volume": "225 x 225 x 265 mm",
      "Max Print Speed": "500 mm/s",
      "Layer Resolution": "0.05-0.3 mm",
      "Supported Materials": "PLA, PETG, TPU, ABS"
    },
    stock: 20,
    rating: 4.5,
    reviewCount: 98
  },
  "5": {
    id: "5",
    name: "Bambu Lab A1 Mini",
    slug: "bambu-lab-a1-mini",
    description: "The Bambu Lab A1 Mini brings premium features to a compact form factor. Features multi-color printing capability with the AMS Lite system.",
    price: 15000,
    brand: "Bambu Lab",
    category: "FDM 3D Printers",
    images: ["/products/placeholder.jpg"],
    features: [
      "Multi-Color Printing with AMS Lite",
      "500mm/s Max Print Speed",
      "Fully Automatic Calibration",
      "Compact Desktop Design",
      "WiFi & Cloud Connectivity"
    ],
    specifications: {
      "Print Technology": "FDM",
      "Build Volume": "180 x 180 x 180 mm",
      "Max Print Speed": "500 mm/s",
      "Layer Resolution": "0.05-0.3 mm",
      "Supported Materials": "PLA, PETG, TPU, PVA"
    },
    stock: 5,
    rating: 4.9,
    reviewCount: 312
  },
  "6": {
    id: "6",
    name: "Creality K1C",
    slug: "creality-k1c",
    description: "The Creality K1C is a high-speed enclosed printer designed for carbon fiber and engineering materials. Features AI camera monitoring and 600mm/s speeds.",
    price: 28000,
    brand: "Creality",
    category: "FDM 3D Printers",
    images: ["/products/placeholder.jpg"],
    features: [
      "600mm/s Max Print Speed",
      "Fully Enclosed Chamber",
      "AI Camera Monitoring",
      "Carbon Fiber Compatible",
      "Quick-swap Nozzle System"
    ],
    specifications: {
      "Print Technology": "FDM",
      "Build Volume": "220 x 220 x 250 mm",
      "Max Print Speed": "600 mm/s",
      "Layer Resolution": "0.05-0.35 mm",
      "Supported Materials": "PLA, PETG, ABS, CF-PLA, CF-PETG"
    },
    stock: 3,
    rating: 4.8,
    reviewCount: 87
  },
  "7": {
    id: "7",
    name: "Anycubic Photon Mono X",
    slug: "anycubic-photon-mono-x",
    description: "Large-format resin printer with 4K monochrome LCD for incredibly detailed prints. Ideal for miniatures, jewelry, and dental applications.",
    price: 12000,
    brand: "Anycubic",
    category: "Resin 3D Printers",
    images: ["/products/placeholder.jpg"],
    features: [
      "4K Monochrome LCD",
      "Large 192x120x245mm Build Volume",
      "2.5s Layer Cure Time",
      "Matrix UV Light Source",
      "WiFi Connectivity"
    ],
    specifications: {
      "Print Technology": "MSLA (Resin)",
      "Build Volume": "192 x 120 x 245 mm",
      "XY Resolution": "0.05 mm",
      "Layer Thickness": "0.01-0.15 mm",
      "Light Source": "UV LED Matrix"
    },
    stock: 7,
    rating: 4.7,
    reviewCount: 203
  },
  "8": {
    id: "8",
    name: "Elegoo Mars 4 Ultra",
    slug: "elegoo-mars-4-ultra",
    description: "The Elegoo Mars 4 Ultra features a 7\" 9K mono LCD for exceptional detail resolution. Perfect for miniature enthusiasts and professionals.",
    price: 14500,
    brand: "Elegoo",
    category: "Resin 3D Printers",
    images: ["/products/placeholder.jpg"],
    features: [
      "9K Mono LCD Screen",
      "18μm XY Resolution",
      "1.5-2s Layer Cure Time",
      "WiFi & USB Connectivity",
      "Linear Rail Z-Axis"
    ],
    specifications: {
      "Print Technology": "MSLA (Resin)",
      "Build Volume": "153.36 x 77.52 x 165 mm",
      "XY Resolution": "0.018 mm",
      "Layer Thickness": "0.01-0.2 mm",
      "Light Source": "COB UV LED"
    },
    stock: 10,
    rating: 4.8,
    reviewCount: 145
  }
};

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products[id];
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const addToCart = useCartStore((state) => state.addItem);
  const { addItem: addToWishlist, isInWishlist, removeItem: removeFromWishlist } = useWishlistStore();
  
  if (!product) {
    notFound();
  }

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
    });
  };

  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        slug: product.slug,
      });
    }
  };

  const discount = product.compareAtPrice 
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-orange-500">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/shop" className="text-gray-500 hover:text-orange-500">Shop</Link>
            <span className="text-gray-300">/</span>
            <Link href={`/brand/${product.brand.toLowerCase().replace(' ', '-')}`} className="text-gray-500 hover:text-orange-500">
              {product.brand}
            </Link>
            <span className="text-gray-300">/</span>
            <span className="font-medium text-gray-700">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-2xl border border-gray-200 overflow-hidden flex items-center justify-center">
              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                <span className="text-lg">Product Image</span>
              </div>
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg border-2 overflow-hidden ${
                      selectedImage === index ? "border-orange-500" : "border-gray-200"
                    }`}
                  >
                    <div className="w-full h-full bg-gray-100" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Brand & Title */}
            <div>
              <Link 
                href={`/brand/${product.brand.toLowerCase().replace(' ', '-')}`}
                className="text-orange-500 text-sm font-medium hover:underline"
              >
                {product.brand}
              </Link>
              <h1 className="text-3xl font-bold text-gray-900 mt-1">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-gray-900">
                EGP {product.price.toLocaleString()}
              </span>
              {product.compareAtPrice && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    EGP {product.compareAtPrice.toLocaleString()}
                  </span>
                  <span className="bg-red-100 text-red-600 text-sm font-medium px-2 py-1 rounded">
                    -{discount}%
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              {product.stock > 0 ? (
                <>
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-green-600 font-medium">In Stock</span>
                  <span className="text-gray-400">({product.stock} available)</span>
                </>
              ) : (
                <span className="text-red-500 font-medium">Out of Stock</span>
              )}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-100 transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-6 py-3 font-medium text-center min-w-[60px]">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="p-3 hover:bg-gray-100 transition-colors"
                  disabled={quantity >= product.stock}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg"
                disabled={product.stock === 0}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              
              <Button 
                variant="outline" 
                size="icon"
                onClick={handleWishlist}
                className={`h-12 w-12 ${inWishlist ? "text-red-500 border-red-500" : ""}`}
              >
                <Heart className={`h-5 w-5 ${inWishlist ? "fill-red-500" : ""}`} />
              </Button>
              
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div className="flex flex-col items-center text-center">
                <Truck className="h-6 w-6 text-orange-500 mb-1" />
                <span className="text-xs text-gray-600">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-6 w-6 text-orange-500 mb-1" />
                <span className="text-xs text-gray-600">1 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RotateCcw className="h-6 w-6 text-orange-500 mb-1" />
                <span className="text-xs text-gray-600">14-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features & Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Features */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Key Features</h2>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Specifications</h2>
            <dl className="space-y-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                  <dt className="text-gray-500">{key}</dt>
                  <dd className="text-gray-900 font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

