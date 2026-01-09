import Link from "next/link";
import {
  WalletIcon,
  CartIcon,
  BoxIcon,
  UsersIcon,
  PlusIcon,
  EyeIcon,
  ReportIcon,
} from "@/components/icons/solar-icons";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Stats data - This will be connected to real database in production
// For development without database connection, we use placeholder data
function getStats() {
  // TODO: Replace with actual database queries when Prisma is fully configured
  // Example of how it would work:
  // const totalOrders = await prisma.order.count();
  // const totalProducts = await prisma.product.count();
  // etc.
  
  return {
    totalRevenue: 0,
    totalOrders: 0,
    totalProducts: 0,
    totalUsers: 0,
    recentOrders: [] as Array<{ id: string; user: { name: string | null } | null; total: number; status: string }>,
    orderChange: 0,
    revenueChange: 0,
    productChange: 0,
    userChange: 0,
  };
}

// Format currency for Egyptian Pounds
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("ar-EG", {
    style: "currency",
    currency: "EGP",
    minimumFractionDigits: 0,
  }).format(amount);
}

// Static placeholder for top products (will be replaced with dynamic query)
const topProducts = [
  { name: "Creality Ender 3 V3", sales: 156, revenue: "EGP 312,000" },
  { name: "Anycubic Photon Mono X", sales: 89, revenue: "EGP 178,000" },
  { name: "eSUN PLA+ Filament", sales: 234, revenue: "EGP 46,800" },
  { name: "Bambu Lab P1S", sales: 45, revenue: "EGP 225,000" },
];

export default function AdminDashboard() {
  const stats = getStats();

  const statCards = [
    {
      title: "Total Revenue",
      value: stats.totalRevenue > 0 ? formatCurrency(stats.totalRevenue) : "—",
      change: stats.revenueChange,
      icon: WalletIcon,
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      lightColor: "bg-emerald-50",
    },
    {
      title: "Total Orders",
      value: stats.totalOrders > 0 ? stats.totalOrders.toLocaleString() : "—",
      change: stats.orderChange,
      icon: CartIcon,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      lightColor: "bg-blue-50",
    },
    {
      title: "Total Products",
      value: stats.totalProducts > 0 ? stats.totalProducts.toLocaleString() : "—",
      change: stats.productChange,
      icon: BoxIcon,
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      lightColor: "bg-orange-50",
    },
    {
      title: "Total Users",
      value: stats.totalUsers > 0 ? stats.totalUsers.toLocaleString() : "—",
      change: stats.userChange,
      icon: UsersIcon,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      lightColor: "bg-purple-50",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header with Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm">Welcome back! Here&apos;s what&apos;s happening with your store.</p>
        </div>
        
        {/* Quick Actions Toolbar */}
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600 shadow-sm">
            <Link href="/admin/products/new" className="flex items-center gap-2">
              <PlusIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Add Product</span>
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="shadow-sm">
            <Link href="/admin/orders" className="flex items-center gap-2">
              <EyeIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Orders</span>
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="shadow-sm">
            <Link href="/admin/settings" className="flex items-center gap-2">
              <ReportIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Reports</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Grid - Compact Design */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className={`${stat.color} w-11 h-11 rounded-xl flex items-center justify-center shadow-sm`}>
                <stat.icon className="h-5 w-5 text-white" />
              </div>
              {stat.change !== 0 && (
                <div className={`flex items-center gap-0.5 text-xs font-semibold px-2 py-1 rounded-full ${
                  stat.change > 0 
                    ? "text-emerald-700 bg-emerald-50" 
                    : "text-red-700 bg-red-50"
                }`}>
                  {stat.change > 0 ? "+" : ""}{stat.change}%
                  {stat.change > 0 ? (
                    <ArrowUpRight className="h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3" />
                  )}
                </div>
              )}
              {stat.change === 0 && (
                <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full">
                  No data
                </span>
              )}
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-500 text-sm mt-0.5">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
            <Link
              href="/admin/orders"
              className="text-orange-500 text-sm font-medium hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                  <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {stats.recentOrders.length > 0 ? (
                  stats.recentOrders.map((order: { id: string; user: { name: string | null } | null; total: number | unknown; status: string }) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-5 py-4 text-sm font-medium text-gray-900">
                        {order.id.slice(0, 8)}...
                      </td>
                      <td className="px-5 py-4 text-sm text-gray-500">
                        {order.user?.name || "Guest"}
                      </td>
                      <td className="px-5 py-4 text-sm text-gray-900">
                        {formatCurrency(Number(order.total) || 0)}
                      </td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full ${
                          order.status === "delivered" ? "bg-emerald-100 text-emerald-700" :
                          order.status === "shipped" ? "bg-blue-100 text-blue-700" :
                          order.status === "processing" ? "bg-yellow-100 text-yellow-700" :
                          order.status === "cancelled" ? "bg-red-100 text-red-700" :
                          "bg-gray-100 text-gray-700"
                        }`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-5 py-8 text-center text-gray-500">
                      <div className="flex flex-col items-center">
                        <CartIcon className="h-8 w-8 text-gray-300 mb-2" />
                        <p className="text-sm">No orders yet</p>
                        <p className="text-xs text-gray-400">Orders will appear here once customers start purchasing</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Top Products</h2>
            <Link
              href="/admin/products"
              className="text-orange-500 text-sm font-medium hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="p-5 space-y-4">
            {topProducts.map((product, index) => (
              <div key={product.name} className="flex items-center gap-4">
                <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                  index === 0 ? "bg-yellow-100 text-yellow-700" :
                  index === 1 ? "bg-gray-100 text-gray-600" :
                  index === 2 ? "bg-orange-100 text-orange-700" :
                  "bg-gray-50 text-gray-500"
                }`}>
                  {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                  <p className="text-xs text-gray-500">{product.sales} sales</p>
                </div>
                <span className="text-sm font-semibold text-gray-900">{product.revenue}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
