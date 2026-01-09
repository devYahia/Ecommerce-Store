import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

// Brand data
const brandData: Record<string, { name: string; description: string; productCount: number; logo?: string }> = {
  "creality": {
    name: "Creality",
    description: "World's leading FDM 3D printer manufacturer. Known for the legendary Ender series and innovative K1 high-speed printers.",
    productCount: 89,
  },
  "anycubic": {
    name: "Anycubic",
    description: "Pioneers in affordable resin printing with the Photon series. Also offering excellent FDM options with Kobra.",
    productCount: 56,
  },
  "elegoo": {
    name: "Elegoo",
    description: "Best value resin printers with the Mars and Saturn series. Popular choice for miniature hobbyists.",
    productCount: 42,
  },
  "bambu-lab": {
    name: "Bambu Lab",
    description: "Premium high-speed 3D printers with cutting-edge technology. The future of desktop 3D printing.",
    productCount: 15,
  },
  "esun": {
    name: "eSUN",
    description: "Leading filament and resin manufacturer. High-quality materials for every application.",
    productCount: 178,
  },
  "phrozen": {
    name: "Phrozen",
    description: "Professional-grade resin printers with large build volumes. Perfect for professionals and businesses.",
    productCount: 23,
  },
};

const sampleProducts = [
  { id: 1, name: "Ender 3 V3", price: 8500, category: "FDM Printers" },
  { id: 2, name: "Ender 3 S1 Pro", price: 12500, category: "FDM Printers" },
  { id: 3, name: "K1C", price: 28000, category: "FDM Printers" },
  { id: 4, name: "CR-Touch", price: 850, category: "Spare Parts" },
  { id: 5, name: "Sonic Pad", price: 3500, category: "Accessories" },
  { id: 6, name: "Halot One Plus", price: 9800, category: "Resin Printers" },
  { id: 7, name: "Ender 5 S1", price: 18500, category: "FDM Printers" },
  { id: 8, name: "K1 Max", price: 42000, category: "FDM Printers" },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const brand = brandData[slug];
  if (!brand) {
    return { title: "Brand Not Found" };
  }
  return {
    title: `${brand.name} Products | ${siteConfig.name}`,
    description: brand.description,
  };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = brandData[slug];
  
  if (!brand) {
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
            <span className="text-gray-900 font-medium">{brand.name}</span>
          </nav>
        </div>
      </div>

      {/* Brand Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center">
              <span className="text-2xl font-bold text-orange-500">{brand.name.charAt(0)}</span>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{brand.name}</h1>
              <p className="text-orange-100 max-w-2xl">{brand.description}</p>
              <p className="text-white mt-4 font-medium">{brand.productCount} products available</p>
            </div>
          </div>
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
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Categories</h4>
                <div className="space-y-2">
                  {["FDM Printers", "Resin Printers", "Spare Parts", "Accessories", "Filament"].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      <span className="text-sm text-gray-600">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

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
                Showing <span className="font-medium">{sampleProducts.length}</span> of <span className="font-medium">{brand.productCount}</span> products
              </p>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-orange-500 focus:border-orange-500">
                <option>Sort by: Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
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
                    <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                    <h3 className="font-medium text-gray-900 group-hover:text-orange-500 transition-colors line-clamp-2 mb-2">
                      {brand.name} {product.name}
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

