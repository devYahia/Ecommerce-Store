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
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  TrendingUp,
  AlertTriangle,
  Package,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { formatCurrency, formatRelativeTime } from "@/lib/format";

// ============================================
// NORTH STAR METRICS (Business Priority)
// ============================================
// 1. Revenue - Primary business health indicator
// 2. Orders - Customer demand signal
// 3. Conversion Rate - Efficiency metric
// 4. Inventory Alerts - Operational health

// Mock data - In production, this would come from the database
// via server actions or API routes
function getBusinessMetrics() {
  return {
    // Today's performance (Top Priority)
    todayRevenue: 15420,
    todayOrders: 12,
    todayRevenueChange: 18.5,
    todayOrdersChange: 8.3,
    
    // Overall stats
    totalRevenue: 125430,
    totalOrders: 452,
    totalProducts: 128,
    totalUsers: 1530,
    
    // Change percentages (vs last period)
    revenueChange: 12.5,
    ordersChange: -3.2,
    productsChange: 5.1,
    usersChange: 7.8,
    
    // Alerts (Critical for business owner)
    alerts: {
      lowStockCount: 5,
      pendingOrders: 8,
      failedPayments: 0,
    },
    
    // Recent activity
    recentOrders: [
      { id: "ORD-001", customer: "Ahmed Mohamed", total: 2500, status: "processing", createdAt: new Date(Date.now() - 1000 * 60 * 30) },
      { id: "ORD-002", customer: "Sara Ali", total: 1800, status: "shipped", createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2) },
      { id: "ORD-003", customer: "Mohamed Hassan", total: 3200, status: "delivered", createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5) },
      { id: "ORD-004", customer: "Fatma Youssef", total: 950, status: "pending", createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8) },
      { id: "ORD-005", customer: "Omar Khaled", total: 4100, status: "processing", createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12) },
    ],
    
    // Top products
    topProducts: [
      { name: "Creality Ender 3 V3", sales: 156, revenue: 312000, change: 22 },
      { name: "Anycubic Photon Mono X", sales: 89, revenue: 178000, change: 8 },
      { name: "eSUN PLA+ Filament", sales: 234, revenue: 46800, change: 23 },
      { name: "Bambu Lab P1S", sales: 45, revenue: 225000, change: 10 },
    ],
    
    // Low stock items (Alerts)
    lowStockItems: [
      { name: "Hotend Kit for Ender 3", stock: 3, threshold: 10 },
      { name: "PLA Filament White 1kg", stock: 5, threshold: 15 },
      { name: "Print Bed Glass", stock: 2, threshold: 8 },
    ],
  };
}

export default function AdminDashboard() {
  const metrics = getBusinessMetrics();
  const hasAlerts = metrics.alerts.lowStockCount > 0 || 
                    metrics.alerts.pendingOrders > 0 || 
                    metrics.alerts.failedPayments > 0;

  return (
    <div className="space-y-5">
      {/* ================================================
          TIER 0: PAGE HEADER + QUICK ACTIONS
          ================================================ */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm">Business overview at a glance</p>
        </div>
        
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

      {/* ================================================
          TIER 1: ALERTS & TODAY'S PERFORMANCE
          (Most actionable - Business Owner sees this first)
          ================================================ */}
      {hasAlerts && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="bg-amber-500 rounded-lg p-2">
              <AlertTriangle className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-amber-900 text-sm">Action Required</h3>
              <div className="mt-2 flex flex-wrap gap-4 text-sm">
                {metrics.alerts.lowStockCount > 0 && (
                  <Link href="/admin/products?filter=low_stock" className="flex items-center gap-1.5 text-amber-800 hover:text-amber-900">
                    <Package className="h-3.5 w-3.5" />
                    <span className="font-medium">{metrics.alerts.lowStockCount} low stock items</span>
                  </Link>
                )}
                {metrics.alerts.pendingOrders > 0 && (
                  <Link href="/admin/orders?status=pending" className="flex items-center gap-1.5 text-amber-800 hover:text-amber-900">
                    <Clock className="h-3.5 w-3.5" />
                    <span className="font-medium">{metrics.alerts.pendingOrders} orders pending</span>
                  </Link>
                )}
                {metrics.alerts.failedPayments > 0 && (
                  <Link href="/admin/orders?payment=failed" className="flex items-center gap-1.5 text-red-700 hover:text-red-800">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    <span className="font-medium">{metrics.alerts.failedPayments} failed payments</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Today's Performance - Quick Glance */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-4 text-white">
          <p className="text-emerald-100 text-xs font-medium mb-1">Today&apos;s Revenue</p>
          <p className="text-2xl font-bold">{formatCurrency(metrics.todayRevenue)}</p>
          <div className="flex items-center gap-1 mt-1">
            <ArrowUpRight className="h-3.5 w-3.5" />
            <span className="text-xs font-medium">+{metrics.todayRevenueChange}% vs yesterday</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white">
          <p className="text-blue-100 text-xs font-medium mb-1">Today&apos;s Orders</p>
          <p className="text-2xl font-bold">{metrics.todayOrders}</p>
          <div className="flex items-center gap-1 mt-1">
            <ArrowUpRight className="h-3.5 w-3.5" />
            <span className="text-xs font-medium">+{metrics.todayOrdersChange}% vs yesterday</span>
          </div>
        </div>
      </div>

      {/* ================================================
          TIER 2: OVERALL STATS (4-Column Grid)
          ================================================ */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { title: "Total Revenue", value: formatCurrency(metrics.totalRevenue), change: metrics.revenueChange, icon: WalletIcon, color: "emerald" },
          { title: "Total Orders", value: metrics.totalOrders.toLocaleString("en-US"), change: metrics.ordersChange, icon: CartIcon, color: "blue" },
          { title: "Total Products", value: metrics.totalProducts.toLocaleString("en-US"), change: metrics.productsChange, icon: BoxIcon, color: "orange" },
          { title: "Total Users", value: metrics.totalUsers.toLocaleString("en-US"), change: metrics.usersChange, icon: UsersIcon, color: "violet" },
        ].map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-xl p-4 border border-gray-100 hover:border-gray-200 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`bg-${stat.color}-500 shadow-lg shadow-${stat.color}-500/25 w-10 h-10 rounded-lg flex items-center justify-center`}>
                <stat.icon className="h-5 w-5 text-white" />
              </div>
              <div className={`flex items-center gap-0.5 text-[11px] font-semibold px-1.5 py-0.5 rounded-md ${
                stat.change > 0 
                  ? "text-emerald-700 bg-emerald-50" 
                  : stat.change < 0
                  ? "text-red-700 bg-red-50"
                  : "text-gray-500 bg-gray-50"
              }`}>
                {stat.change > 0 ? "+" : ""}{stat.change}%
                {stat.change > 0 ? (
                  <ArrowUpRight className="h-3 w-3" />
                ) : stat.change < 0 ? (
                  <ArrowDownRight className="h-3 w-3" />
                ) : null}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 leading-none">{stat.value}</h3>
            <p className="text-gray-500 text-xs font-normal mt-1">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* ================================================
          TIER 3: PERFORMANCE METRICS (3-Column)
          ================================================ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-medium text-gray-500">Avg. Order Value</h3>
            <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+8.1%</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatCurrency(2450)}</p>
          <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-[68%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-medium text-gray-500">Fulfillment Rate</h3>
            <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+1.2%</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">94.8%</p>
          <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-[94.8%] bg-gradient-to-r from-violet-500 to-purple-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* ================================================
          TIER 4: DATA TABLES (2-Column Grid)
          ================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-900">Recent Orders</h2>
            <Link href="/admin/orders" className="text-orange-500 text-xs font-medium hover:text-orange-600 transition-colors">
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
                {metrics.recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-4 py-2.5">
                      <div>
                        <p className="text-xs font-medium text-gray-900">{order.id}</p>
                        <p className="text-[10px] text-gray-400">{formatRelativeTime(order.createdAt)}</p>
                      </div>
                    </td>
                    <td className="px-4 py-2.5 text-xs text-gray-600">{order.customer}</td>
                    <td className="px-4 py-2.5 text-xs font-medium text-gray-900">{formatCurrency(order.total)}</td>
                    <td className="px-4 py-2.5">
                      <StatusBadge status={order.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-900">Top Products</h2>
            <Link href="/admin/products" className="text-orange-500 text-xs font-medium hover:text-orange-600 transition-colors">
              View All
            </Link>
          </div>
          <div className="p-3 space-y-1">
            {metrics.topProducts.map((product, index) => (
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
                  <p className="text-xs font-medium text-gray-900 truncate">{product.name}</p>
                  <p className="text-[10px] text-gray-400 font-normal">{product.sales} sales</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-gray-900">{formatCurrency(product.revenue)}</span>
                  <div className="flex items-center justify-end gap-0.5 text-emerald-600">
                    <TrendingUp className="h-2.5 w-2.5" />
                    <span className="text-[9px] font-medium">+{product.change}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================
          TIER 5: LOW STOCK ALERTS (If any)
          ================================================ */}
      {metrics.lowStockItems.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-amber-100 p-1.5 rounded-lg">
                <Package className="h-4 w-4 text-amber-600" />
              </div>
              <h2 className="text-sm font-semibold text-gray-900">Low Stock Alert</h2>
            </div>
            <Link href="/admin/products?filter=low_stock" className="text-orange-500 text-xs font-medium hover:text-orange-600 transition-colors">
              View All
            </Link>
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            {metrics.lowStockItems.map((item) => (
              <div key={item.name} className="flex items-center justify-between p-3 bg-amber-50/50 rounded-lg border border-amber-100">
                <div>
                  <p className="text-xs font-medium text-gray-900">{item.name}</p>
                  <p className="text-[10px] text-amber-600 font-medium">{item.stock} left (min: {item.threshold})</p>
                </div>
                <Button size="sm" variant="outline" className="h-7 text-xs border-amber-200 text-amber-700 hover:bg-amber-100">
                  Restock
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
