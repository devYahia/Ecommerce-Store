/**
 * Reusable Status Badge Component
 * DRY: Single component for all status displays across the app
 */

import { cn } from "@/lib/utils";

type StatusType = 
  | "pending" 
  | "processing" 
  | "shipped" 
  | "delivered" 
  | "cancelled" 
  | "refunded"
  | "active"
  | "inactive"
  | "draft"
  | "archived"
  | "out_of_stock"
  | "low_stock"
  | "in_stock"
  | "paid"
  | "failed"
  | "success"
  | "warning"
  | "error"
  | "info";

interface StatusBadgeProps {
  status: StatusType | string;
  size?: "sm" | "md";
  className?: string;
}

const statusConfig: Record<string, { bg: string; text: string; label?: string }> = {
  // Order statuses
  pending: { bg: "bg-amber-50", text: "text-amber-700" },
  processing: { bg: "bg-blue-50", text: "text-blue-700" },
  shipped: { bg: "bg-indigo-50", text: "text-indigo-700" },
  delivered: { bg: "bg-emerald-50", text: "text-emerald-700" },
  cancelled: { bg: "bg-red-50", text: "text-red-700" },
  refunded: { bg: "bg-gray-50", text: "text-gray-600" },
  
  // Product statuses
  active: { bg: "bg-emerald-50", text: "text-emerald-700" },
  inactive: { bg: "bg-gray-50", text: "text-gray-600" },
  draft: { bg: "bg-gray-50", text: "text-gray-600" },
  archived: { bg: "bg-gray-50", text: "text-gray-500" },
  
  // Stock statuses
  in_stock: { bg: "bg-emerald-50", text: "text-emerald-700", label: "In Stock" },
  low_stock: { bg: "bg-amber-50", text: "text-amber-700", label: "Low Stock" },
  out_of_stock: { bg: "bg-red-50", text: "text-red-700", label: "Out of Stock" },
  
  // Payment statuses
  paid: { bg: "bg-emerald-50", text: "text-emerald-700" },
  failed: { bg: "bg-red-50", text: "text-red-700" },
  
  // Generic statuses
  success: { bg: "bg-emerald-50", text: "text-emerald-700" },
  warning: { bg: "bg-amber-50", text: "text-amber-700" },
  error: { bg: "bg-red-50", text: "text-red-700" },
  info: { bg: "bg-blue-50", text: "text-blue-700" },
};

export function StatusBadge({ status, size = "sm", className }: StatusBadgeProps) {
  const normalizedStatus = status.toLowerCase().replace(/\s+/g, "_");
  const config = statusConfig[normalizedStatus] || { bg: "bg-gray-50", text: "text-gray-600" };
  const label = config.label || status.charAt(0).toUpperCase() + status.slice(1).replace(/_/g, " ");

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full",
        config.bg,
        config.text,
        size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs",
        className
      )}
    >
      {label}
    </span>
  );
}

