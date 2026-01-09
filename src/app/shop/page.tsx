import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse our collection of 3D printers, filaments, and accessories",
};

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="font-semibold text-lg mb-4">Filters</h2>
            
            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Categories</h3>
              <ul className="space-y-2">
                {[
                  "FDM 3D Printers",
                  "Resin 3D Printers",
                  "Filament",
                  "Resin Materials",
                  "Spare Parts",
                  "Electrical Parts",
                ].map((category) => (
                  <li key={category}>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm text-gray-700">{category}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Brands */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Brands</h3>
              <ul className="space-y-2">
                {["Creality", "Anycubic", "Elegoo", "eSUN", "Bambu Lab"].map((brand) => (
                  <li key={brand}>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm text-gray-700">{brand}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Price Range */}
            <div>
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full px-3 py-2 border rounded text-sm"
                />
                <span className="text-gray-400">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full px-3 py-2 border rounded text-sm"
                />
              </div>
            </div>
          </div>
        </aside>
        
        {/* Products Grid */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <p className="text-gray-600">
              Showing <span className="font-medium">1-24</span> of <span className="font-medium">716</span> products
            </p>
            <div className="flex items-center gap-4">
              <select className="px-4 py-2 border rounded-lg text-sm">
                <option>Default sorting</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Best Sellers</option>
              </select>
            </div>
          </div>
          
          {/* Products Grid Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden product-card">
                <div className="aspect-square bg-gray-100 skeleton"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-100 rounded skeleton mb-2"></div>
                  <div className="h-4 bg-gray-100 rounded skeleton w-2/3 mb-3"></div>
                  <div className="h-6 bg-gray-100 rounded skeleton w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            {[1, 2, 3, "...", 17, 18].map((page, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded ${
                  page === 1
                    ? "bg-orange-500 text-white"
                    : "bg-white border hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

