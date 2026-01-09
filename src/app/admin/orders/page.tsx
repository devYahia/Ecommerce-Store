"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  Eye,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const orders = [
  { id: "ORD-001", customer: "Ahmed Mohamed", email: "ahmed@email.com", total: 2500, items: 2, status: "Pending", date: "2026-01-09", payment: "Cash on Delivery" },
  { id: "ORD-002", customer: "Sara Ali", email: "sara@email.com", total: 1800, items: 1, status: "Shipped", date: "2026-01-09", payment: "Credit Card" },
  { id: "ORD-003", customer: "Mohamed Hassan", email: "mhassan@email.com", total: 3200, items: 3, status: "Delivered", date: "2026-01-08", payment: "Credit Card" },
  { id: "ORD-004", customer: "Fatma Youssef", email: "fatma@email.com", total: 950, items: 1, status: "Pending", date: "2026-01-08", payment: "Cash on Delivery" },
  { id: "ORD-005", customer: "Omar Khaled", email: "omar@email.com", total: 4100, items: 2, status: "Processing", date: "2026-01-07", payment: "Credit Card" },
  { id: "ORD-006", customer: "Nour Ahmed", email: "nour@email.com", total: 850, items: 1, status: "Cancelled", date: "2026-01-06", payment: "Cash on Delivery" },
  { id: "ORD-007", customer: "Youssef Ibrahim", email: "youssef@email.com", total: 15600, items: 1, status: "Delivered", date: "2026-01-05", payment: "Credit Card" },
  { id: "ORD-008", customer: "Mariam Saeed", email: "mariam@email.com", total: 2300, items: 4, status: "Shipped", date: "2026-01-04", payment: "Credit Card" },
];

const statusColors: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-700",
  Processing: "bg-blue-100 text-blue-700",
  Shipped: "bg-purple-100 text-purple-700",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
          <p className="text-gray-500">Manage and track customer orders</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export Orders
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: "All Orders", count: orders.length, color: "bg-gray-100" },
          { label: "Pending", count: orders.filter((o) => o.status === "Pending").length, color: "bg-yellow-100" },
          { label: "Processing", count: orders.filter((o) => o.status === "Processing").length, color: "bg-blue-100" },
          { label: "Shipped", count: orders.filter((o) => o.status === "Shipped").length, color: "bg-purple-100" },
          { label: "Delivered", count: orders.filter((o) => o.status === "Delivered").length, color: "bg-green-100" },
        ].map((stat) => (
          <button
            key={stat.label}
            onClick={() => setStatusFilter(stat.label === "All Orders" ? "all" : stat.label)}
            className={`p-4 rounded-xl text-left transition-all ${
              (statusFilter === "all" && stat.label === "All Orders") ||
              statusFilter === stat.label
                ? "ring-2 ring-orange-700"
                : ""
            } ${stat.color}`}
          >
            <p className="text-2xl font-bold text-gray-900">{stat.count}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </button>
        ))}
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search orders by ID, customer, or email..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-700 focus:border-orange-700"
          >
            <option value="all">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-orange-700">
                    {order.id}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{order.customer}</p>
                      <p className="text-sm text-gray-500">{order.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{order.items} items</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    EGP {order.total.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{order.payment}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        statusColors[order.status]
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/admin/orders/${order.id}`}>
                        <button className="p-2 text-gray-400 hover:text-orange-700 hover:bg-orange-50 rounded-lg">
                          <Eye className="h-4 w-4" />
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing 1 to {filteredOrders.length} of {orders.length} orders
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="bg-orange-700 text-white hover:bg-orange-800">
              1
            </Button>
            <Button variant="outline" size="sm">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


