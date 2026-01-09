import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Filter, ChevronDown, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

// Category data
const categoryData: Record<string, { name: string; description: string; productCount: number }> = {
  "fdm-3d-printers": {
    name: "FDM 3D Printers",
    description: "Fused Deposition Modeling printers - perfect for prototyping and functional parts",
    productCount: 45,
  },
  "resin-3d-printers": {
    name: "Resin 3D Printers",
    description: "High-detail resin printers for miniatures, jewelry, and dental applications",
    productCount: 28,
  },
  "filament": {
    name: "Filament",
    description: "Wide range of PLA, ABS, PETG, TPU and specialty filaments",
    productCount: 156,
  },
  "resin": {
    name: "Resin",
    description: "Standard, water-washable, and specialty resins for all applications",
    productCount: 42,
  },
  "spare-parts-tools": {
    name: "Spare Parts & Tools",
    description: "Everything you need to maintain and upgrade your 3D printer",
    productCount: 234,
  },
  "3d-printer-electrical-parts": {
    name: "Electrical Parts",
    description: "Motors, boards, sensors, and electrical components",
    productCount: 89,
  },
  "3d-printer-mechanical-parts": {
    name: "Mechanical Parts",
    description: "Bearings, rods, belts, and mechanical components",
    productCount: 112,
  },
  "arduino-sensors": {
    name: "Arduino & Sensors",
    description: "Development boards, sensors, and electronic modules",
    productCount: 67,
  },
};

// Sample products for display
const sampleProducts = [
  { id: 1, name: "Creality Ender 3 V3", price: 8500, image: "/products/placeholder.jpg", brand: "Creality" },
  { id: 2, name: "Creality Ender 3 S1 Pro", price: 12500, image: "/products/placeholder.jpg", brand: "Creality" },
  { id: 3, name: "Anycubic Kobra 2", price: 9800, image: "/products/placeholder.jpg", brand: "Anycubic" },
  { id: 4, name: "Elegoo Neptune 4", price: 8200, image: "/products/placeholder.jpg", brand: "Elegoo" },
  { id: 5, name: "Bambu Lab A1 Mini", price: 15000, image: "/products/placeholder.jpg", brand: "Bambu Lab" },
  { id: 6, name: "Creality K1C", price: 28000, image: "/products/placeholder.jpg", brand: "Creality" },
  { id: 7, name: "Anycubic Photon Mono X", price: 12000, image: "/products/placeholder.jpg", brand: "Anycubic" },
  { id: 8, name: "Elegoo Mars 4 Ultra", price: 14500, image: "/products/placeholder.jpg", brand: "Elegoo" },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryData[slug];
  if (!category) {
    return { title: "Category Not Found" };
  }
  return {
    title: `${category.name} | ${siteConfig.name}`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categoryData[slug];
  
  if (!category) {
    notFound();
  }

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
            <span className="text-gray-900 font-medium">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* Category Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-gray-300 max-w-2xl">{category.description}</p>
          <p className="text-orange-500 mt-4">{category.productCount} products available</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-4">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters
              </h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Price Range</h4>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Brands</h4>
                <div className="space-y-2">
                  {siteConfig.brands.map((brand) => (
                    <label key={brand.slug} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      <span className="text-sm text-gray-600">{brand.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* In Stock */}
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                  <span className="text-sm text-gray-600">In Stock Only</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <p className="text-sm text-gray-500">
                Showing <span className="font-medium">{sampleProducts.length}</span> of <span className="font-medium">{category.productCount}</span> products
              </p>
              <div className="flex items-center gap-4">
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-orange-500 focus:border-orange-500">
                  <option>Sort by: Default</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                  <option>Best Selling</option>
                </select>
              </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sampleProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="aspect-square bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <span className="text-sm">Image</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-orange-500 mb-1">{product.brand}</p>
                    <h3 className="font-medium text-gray-900 group-hover:text-orange-500 transition-colors line-clamp-2 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-lg font-bold text-gray-900">
                      EGP {product.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <nav className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm" className="bg-orange-500 text-white hover:bg-orange-600">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

