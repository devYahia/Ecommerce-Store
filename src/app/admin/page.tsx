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
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

// Stats data - This will be connected to real database in production
function getStats() {
  return {
    totalRevenue: 0,
    totalOrders: 0,
    totalProducts: 0,
    totalUsers: 0,
    recentOrders: [] as Array<{ id: string; user: { name: string | null } | null; total: number; status: string; createdAt: Date }>,
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

// Static placeholder for top products
const topProducts = [
  { name: "Creality Ender 3 V3", sales: 156, revenue: 312000 },
  { name: "Anycubic Photon Mono X", sales: 89, revenue: 178000 },
  { name: "eSUN PLA+ Filament", sales: 234, revenue: 46800 },
  { name: "Bambu Lab P1S", sales: 45, revenue: 225000 },
];

export default function AdminDashboard() {
  const stats = getStats();

  const statCards = [
    {
      title: "Total Revenue",
      value: stats.totalRevenue > 0 ? formatCurrency(stats.totalRevenue) : "—",
      change: stats.revenueChange,
      icon: WalletIcon,
      iconBg: "bg-emerald-500",
      iconShadow: "shadow-emerald-500/25",
    },
    {
      title: "Total Orders",
      value: stats.totalOrders > 0 ? stats.totalOrders.toLocaleString() : "—",
      change: stats.orderChange,
      icon: CartIcon,
      iconBg: "bg-blue-500",
      iconShadow: "shadow-blue-500/25",
    },
    {
      title: "Total Products",
      value: stats.totalProducts > 0 ? stats.totalProducts.toLocaleString() : "—",
      change: stats.productChange,
      icon: BoxIcon,
      iconBg: "bg-orange-500",
      iconShadow: "shadow-orange-500/25",
    },
    {
      title: "Total Users",
      value: stats.totalUsers > 0 ? stats.totalUsers.toLocaleString() : "—",
      change: stats.userChange,
      icon: UsersIcon,
      iconBg: "bg-violet-500",
      iconShadow: "shadow-violet-500/25",
    },
  ];

  return (
    <div className="space-y-5">
      {/* Page Header with Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm">Overview of your store performance</p>
        </div>
        
        {/* Quick Actions Toolbar */}
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600 shadow-sm h-8 text-xs">
            <Link href="/admin/products/new" className="flex items-center gap-1.5">
              <PlusIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Add Product</span>
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="shadow-sm h-8 text-xs">
            <Link href="/admin/orders" className="flex items-center gap-1.5">
              <EyeIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Orders</span>
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="shadow-sm h-8 text-xs">
            <Link href="/admin/analytics" className="flex items-center gap-1.5">
              <ReportIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Reports</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Grid - 4-column strict grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {statCards.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-xl p-4 border border-gray-100 hover:border-gray-200 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`${stat.iconBg} ${stat.iconShadow} w-10 h-10 rounded-lg flex items-center justify-center shadow-lg`}>
                <stat.icon className="h-5 w-5 text-white" />
              </div>
              {stat.change !== 0 ? (
                <div className={`flex items-center gap-0.5 text-[11px] font-semibold px-1.5 py-0.5 rounded-md ${
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
              ) : (
                <span className="text-[11px] text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded-md">
                  —
                </span>
              )}
            </div>
            {/* Typography Hierarchy: Bold value, Regular muted label */}
            <h3 className="text-2xl font-bold text-gray-900 leading-none">{stat.value}</h3>
            <p className="text-gray-500 text-xs font-normal mt-1">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Two Column Grid - Strict alignment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Orders - High Density Table */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-900">Recent Orders</h2>
            <Link
              href="/admin/orders"
              className="text-orange-500 text-xs font-medium hover:text-orange-600 transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50/80">
                <tr>
                  <th className="px-4 py-2 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Order</th>
                  <th className="px-4 py-2 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-4 py-2 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Total</th>
                  <th className="px-4 py-2 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {stats.recentOrders.length > 0 ? (
                  stats.recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-4 py-2.5 text-xs font-medium text-gray-900">
                        #{order.id.slice(0, 8)}
                      </td>
                      <td className="px-4 py-2.5 text-xs text-gray-600">
                        {order.user?.name || "Guest"}
                      </td>
                      <td className="px-4 py-2.5 text-xs font-medium text-gray-900">
                        {formatCurrency(Number(order.total) || 0)}
                      </td>
                      <td className="px-4 py-2.5">
                        <span className={`inline-flex px-2 py-0.5 text-[10px] font-medium rounded-full ${
                          order.status === "delivered" ? "bg-emerald-50 text-emerald-700" :
                          order.status === "shipped" ? "bg-blue-50 text-blue-700" :
                          order.status === "processing" ? "bg-amber-50 text-amber-700" :
                          order.status === "cancelled" ? "bg-red-50 text-red-700" :
                          "bg-gray-50 text-gray-600"
                        }`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-4 py-8 text-center">
                      <div className="flex flex-col items-center">
                        <CartIcon className="h-8 w-8 text-gray-200 mb-2" />
                        <p className="text-xs font-medium text-gray-500">No orders yet</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">Orders will appear here once customers start purchasing</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products - High Density List */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-900">Top Products</h2>
            <Link
              href="/admin/products"
              className="text-orange-500 text-xs font-medium hover:text-orange-600 transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="p-3 space-y-1">
            {topProducts.map((product, index) => (
              <div 
                key={product.name} 
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50/70 transition-colors group"
              >
                <span className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                  index === 0 ? "bg-amber-100 text-amber-700" :
                  index === 1 ? "bg-gray-100 text-gray-600" :
                  index === 2 ? "bg-orange-100 text-orange-700" :
                  "bg-gray-50 text-gray-400"
                }`}>
                  {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  {/* Bold product name, Regular muted sales count */}
                  <p className="text-xs font-medium text-gray-900 truncate">{product.name}</p>
                  <p className="text-[10px] text-gray-400 font-normal">{product.sales} sales</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-gray-900">{formatCurrency(product.revenue)}</span>
                  <div className="flex items-center justify-end gap-0.5 text-emerald-600">
                    <TrendingUp className="h-2.5 w-2.5" />
                    <span className="text-[9px] font-medium">+{Math.floor(Math.random() * 20 + 5)}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats Row - 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Conversion Rate */}
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-medium text-gray-500">Conversion Rate</h3>
            <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+2.4%</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">3.2%</p>
          <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-[32%] bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
          </div>
        </div>

        {/* Average Order Value */}
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-medium text-gray-500">Avg. Order Value</h3>
            <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+8.1%</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">EGP 2,450</p>
          <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-[68%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
          </div>
        </div>

        {/* Customer Satisfaction */}
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-medium text-gray-500">Customer Satisfaction</h3>
            <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+1.2%</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">94.8%</p>
          <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-[94.8%] bg-gradient-to-r from-violet-500 to-purple-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
