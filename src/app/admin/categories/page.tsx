"use client";

import { useState } from "react";
import { Plus, Search, Edit, Trash2, FolderTree } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = [
  { id: 1, name: "FDM 3D Printers", slug: "fdm-3d-printers", products: 45, status: "Active" },
  { id: 2, name: "Resin 3D Printers", slug: "resin-3d-printers", products: 28, status: "Active" },
  { id: 3, name: "Filament", slug: "filament", products: 156, status: "Active" },
  { id: 4, name: "Resin", slug: "resin", products: 42, status: "Active" },
  { id: 5, name: "Spare Parts & Tools", slug: "spare-parts-tools", products: 234, status: "Active" },
  { id: 6, name: "Electrical Parts", slug: "3d-printer-electrical-parts", products: 89, status: "Active" },
  { id: 7, name: "Mechanical Parts", slug: "3d-printer-mechanical-parts", products: 112, status: "Active" },
  { id: 8, name: "Arduino & Sensors", slug: "arduino-sensors", products: 67, status: "Active" },
];

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<typeof categories[0] | null>(null);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
          <p className="text-gray-500">Organize your products into categories</p>
        </div>
        <Button
          className="bg-orange-500 hover:bg-orange-600 gap-2"
          onClick={() => {
            setEditingCategory(null);
            setShowModal(true);
          }}
        >
          <Plus className="h-4 w-4" />
          Add Category
        </Button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search categories..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <FolderTree className="h-6 w-6 text-orange-500" />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setEditingCategory(category);
                    setShowModal(true);
                  }}
                  className="p-2 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-lg"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
            <p className="text-sm text-gray-500 mb-3">/{category.slug}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{category.products} products</span>
              <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                {category.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {editingCategory ? "Edit Category" : "Add New Category"}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category Name <span className="text-red-500">*</span>
                </label>
                <Input
                  defaultValue={editingCategory?.name || ""}
                  placeholder="Enter category name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Slug <span className="text-red-500">*</span>
                </label>
                <Input
                  defaultValue={editingCategory?.slug || ""}
                  placeholder="category-slug"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  defaultValue={editingCategory?.status || "Active"}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <Button variant="outline" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button
                className="bg-orange-500 hover:bg-orange-600"
                onClick={() => setShowModal(false)}
              >
                {editingCategory ? "Save Changes" : "Add Category"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

