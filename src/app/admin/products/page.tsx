"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Plus,
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  ChevronLeft,
  ChevronRight,
  Copy,
  Archive,
  Filter,
  SlidersHorizontal,
  X,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

// Mock data
const initialProducts = [
  { id: 1, name: "Creality Ender 3 V3", category: "FDM Printers", price: 8500, stock: 25, status: "Active", image: "/products/ender3.jpg" },
  { id: 2, name: "Anycubic Photon Mono X", category: "Resin Printers", price: 12000, stock: 15, status: "Active", image: "/products/photon.jpg" },
  { id: 3, name: "eSUN PLA+ 1kg Black", category: "Filament", price: 450, stock: 150, status: "Active", image: "/products/esun-pla.jpg" },
  { id: 4, name: "Bambu Lab P1S", category: "FDM Printers", price: 32000, stock: 5, status: "Active", image: "/products/bambu-p1s.jpg" },
  { id: 5, name: "Elegoo Mars 3 Pro", category: "Resin Printers", price: 9500, stock: 0, status: "Out of Stock", image: "/products/mars3.jpg" },
  { id: 6, name: "Creality CR-Touch", category: "Spare Parts", price: 850, stock: 45, status: "Active", image: "/products/cr-touch.jpg" },
  { id: 7, name: "Hotend Kit for Ender 3", category: "Spare Parts", price: 350, stock: 80, status: "Active", image: "/products/hotend.jpg" },
  { id: 8, name: "eSUN Resin 1kg Grey", category: "Resin", price: 650, stock: 60, status: "Active", image: "/products/esun-resin.jpg" },
];

const categories = ["All", "FDM Printers", "Resin Printers", "Filament", "Resin", "Spare Parts"];

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);
  const [bulkDeleteOpen, setBulkDeleteOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isPending, startTransition] = useTransition();

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleSelectAll = () => {
    if (selectedProducts.length === filteredProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(filteredProducts.map((p) => p.id));
    }
  };

  const toggleSelect = (id: number) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter((p) => p !== id));
    } else {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  // Optimistic Delete - removes from UI instantly
  const handleDelete = (id: number) => {
    setProductToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (!productToDelete) return;
    
    const productName = products.find(p => p.id === productToDelete)?.name;
    
    // Optimistic UI: Remove immediately
    startTransition(() => {
      setProducts(prev => prev.filter(p => p.id !== productToDelete));
      setSelectedProducts(prev => prev.filter(id => id !== productToDelete));
    });
    
    setDeleteDialogOpen(false);
    setProductToDelete(null);
    
    // Show success toast
    toast.success("Product deleted", {
      description: `"${productName}" has been removed from your inventory.`,
      action: {
        label: "Undo",
        onClick: () => {
          // Restore product (in real app, this would call API)
          const deletedProduct = initialProducts.find(p => p.id === productToDelete);
          if (deletedProduct) {
            setProducts(prev => [...prev, deletedProduct].sort((a, b) => a.id - b.id));
            toast.info("Product restored");
          }
        },
      },
    });
    
    // In real app: Call API here
    // await deleteProduct(productToDelete);
  };

  // Bulk Delete
  const handleBulkDelete = () => {
    const count = selectedProducts.length;
    
    // Optimistic UI: Remove all selected immediately
    startTransition(() => {
      setProducts(prev => prev.filter(p => !selectedProducts.includes(p.id)));
    });
    
    setBulkDeleteOpen(false);
    setSelectedProducts([]);
    
    toast.success(`${count} products deleted`, {
      description: "Selected products have been removed from your inventory.",
    });
  };

  // Duplicate Product
  const handleDuplicate = (id: number) => {
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    const newProduct = {
      ...product,
      id: Math.max(...products.map(p => p.id)) + 1,
      name: `${product.name} (Copy)`,
    };
    
    startTransition(() => {
      setProducts(prev => [...prev, newProduct]);
    });
    
    toast.success("Product duplicated", {
      description: `"${newProduct.name}" has been created.`,
    });
  };

  // Archive Product
  const handleArchive = (id: number) => {
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    startTransition(() => {
      setProducts(prev => prev.map(p => 
        p.id === id ? { ...p, status: "Archived" } : p
      ));
    });
    
    toast.success("Product archived", {
      description: `"${product.name}" has been archived.`,
    });
  };

  return (
    <div className="space-y-4">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-500 text-sm">Manage your product inventory</p>
        </div>
        <Link href="/admin/products/new">
          <Button className="bg-orange-700 hover:bg-orange-800 h-8 text-xs">
            <Plus className="h-3.5 w-3.5 mr-1.5" />
            Add Product
          </Button>
        </Link>
      </div>

      {/* Filters & Search - Using white space over lines */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search products..."
            className="pl-9 h-9 text-sm bg-white border-gray-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          {/* Filter Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="h-9 text-xs gap-1.5">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                Filter
                {selectedCategory !== "All" && (
                  <span className="ml-1 bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded text-[10px] font-medium">
                    1
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-3" align="end">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-gray-900">Category</h4>
                  {selectedCategory !== "All" && (
                    <button 
                      onClick={() => setSelectedCategory("All")}
                      className="text-[10px] text-orange-700 hover:text-orange-800"
                    >
                      Clear
                    </button>
                  )}
                </div>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full flex items-center justify-between px-2 py-1.5 rounded text-xs transition-colors ${
                        selectedCategory === category
                          ? "bg-orange-50 text-orange-700"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {category}
                      {selectedCategory === category && <Check className="h-3 w-3" />}
                    </button>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {selectedProducts.length > 0 && (
            <Button 
              variant="destructive" 
              className="h-9 text-xs gap-1.5"
              onClick={() => setBulkDeleteOpen(true)}
            >
              <Trash2 className="h-3.5 w-3.5" />
              Delete ({selectedProducts.length})
            </Button>
          )}
        </div>
      </div>

      {/* Products Table - High Density */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/80 border-b border-gray-100">
              <tr>
                <th className="px-4 py-2.5 text-left w-12">
                  <input
                    type="checkbox"
                    checked={selectedProducts.length === filteredProducts.length && filteredProducts.length > 0}
                    onChange={toggleSelectAll}
                    className="rounded border-gray-300 text-orange-700 focus:ring-orange-700 h-3.5 w-3.5"
                  />
                </th>
                <th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-2.5 text-right text-[10px] font-semibold text-gray-500 uppercase tracking-wider w-20">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredProducts.map((product) => (
                <tr 
                  key={product.id} 
                  className={`hover:bg-gray-50/50 transition-colors ${
                    selectedProducts.includes(product.id) ? "bg-orange-50/30" : ""
                  }`}
                >
                  <td className="px-4 py-2.5">
                    <input
                      type="checkbox"
                      checked={selectedProducts.includes(product.id)}
                      onChange={() => toggleSelect(product.id)}
                      className="rounded border-gray-300 text-orange-700 focus:ring-orange-700 h-3.5 w-3.5"
                    />
                  </td>
                  <td className="px-4 py-2.5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                        <span className="text-gray-400 text-[8px] font-medium">IMG</span>
                      </div>
                      <div className="min-w-0">
                        {/* Bold product name */}
                        <p className="text-xs font-medium text-gray-900 truncate">{product.name}</p>
                        {/* Regular muted ID */}
                        <p className="text-[10px] text-gray-400">ID: {product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2.5 text-xs text-gray-600">{product.category}</td>
                  <td className="px-4 py-2.5 text-xs font-medium text-gray-900">
                    EGP {product.price.toLocaleString()}
                  </td>
                  <td className="px-4 py-2.5">
                    <span className={`text-xs ${
                      product.stock === 0 ? "text-red-600 font-medium" :
                      product.stock < 10 ? "text-amber-600" :
                      "text-gray-600"
                    }`}>
                      {product.stock} units
                    </span>
                  </td>
                  <td className="px-4 py-2.5">
                    <span
                      className={`inline-flex px-2 py-0.5 text-[10px] font-medium rounded-full ${
                        product.status === "Active"
                          ? "bg-emerald-50 text-emerald-700"
                          : product.status === "Archived"
                          ? "bg-gray-100 text-gray-600"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-2.5">
                    {/* Dropdown Menu for Actions */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                          <MoreHorizontal className="h-4 w-4 text-gray-400" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem asChild>
                          <Link href={`/product/${product.id}`} className="flex items-center gap-2 cursor-pointer">
                            <Eye className="h-3.5 w-3.5" />
                            <span className="text-xs">View</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/admin/products/${product.id}/edit`} className="flex items-center gap-2 cursor-pointer">
                            <Edit className="h-3.5 w-3.5" />
                            <span className="text-xs">Edit</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleDuplicate(product.id)}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <Copy className="h-3.5 w-3.5" />
                          <span className="text-xs">Duplicate</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                          onClick={() => handleArchive(product.id)}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <Archive className="h-3.5 w-3.5" />
                          <span className="text-xs">Archive</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleDelete(product.id)}
                          className="flex items-center gap-2 cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          <span className="text-xs">Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination - Reduced padding */}
        <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
          <p className="text-[11px] text-gray-500">
            Showing 1 to {filteredProducts.length} of {products.length} products
          </p>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm" className="h-7 w-7 p-0" disabled>
              <ChevronLeft className="h-3.5 w-3.5" />
            </Button>
            <Button variant="outline" size="sm" className="h-7 w-7 p-0 bg-orange-700 text-white hover:bg-orange-800 border-orange-700">
              1
            </Button>
            <Button variant="outline" size="sm" className="h-7 w-7 p-0 text-xs">
              2
            </Button>
            <Button variant="outline" size="sm" className="h-7 w-7 p-0 text-xs">
              3
            </Button>
            <Button variant="outline" size="sm" className="h-7 w-7 p-0">
              <ChevronRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Product</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this product? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-xs h-8">Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDelete}
              className="bg-red-500 hover:bg-red-600 text-xs h-8"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Bulk Delete Confirmation Dialog */}
      <AlertDialog open={bulkDeleteOpen} onOpenChange={setBulkDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete {selectedProducts.length} Products</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete {selectedProducts.length} selected products? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-xs h-8">Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleBulkDelete}
              className="bg-red-500 hover:bg-red-600 text-xs h-8"
            >
              Delete All
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
