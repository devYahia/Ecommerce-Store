"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  DashboardIcon,
  BoxIcon,
  FolderIcon,
  CartIcon,
  UsersIcon,
  TagIcon,
  FileIcon,
  SettingsIcon,
  UserIcon,
  LogoutIcon,
  MenuIcon,
  CloseIcon,
} from "@/components/icons/solar-icons";

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: DashboardIcon,
  },
  {
    title: "Products",
    href: "/admin/products",
    icon: BoxIcon,
  },
  {
    title: "Categories",
    href: "/admin/categories",
    icon: FolderIcon,
  },
  {
    title: "Orders",
    href: "/admin/orders",
    icon: CartIcon,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: UsersIcon,
  },
  {
    title: "Brands",
    href: "/admin/brands",
    icon: TagIcon,
  },
  {
    title: "Pages",
    href: "/admin/pages",
    icon: FileIcon,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: SettingsIcon,
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform transition-transform duration-200 ease-in-out lg:translate-x-0 flex flex-col",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-800">
          <Link href="/admin" className="flex items-center gap-3">
            <Image
              src="/icons/logo.svg"
              alt="Omega3D"
              width={32}
              height={32}
              className="text-orange-500"
              style={{ filter: "invert(60%) sepia(98%) saturate(1000%) hue-rotate(360deg)" }}
            />
            <span className="text-xl font-bold text-orange-500">
              Omega<span className="text-white">3D</span>
            </span>
          </Link>
          <button
            className="lg:hidden text-gray-400 hover:text-white p-1"
            onClick={() => setSidebarOpen(false)}
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href || 
              (link.href !== "/admin" && pathname.startsWith(link.href));
            
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150",
                  isActive
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                )}
              >
                <link.icon className="h-5 w-5" />
                {link.title}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-gray-800 space-y-1">
          <Link
            href="/admin/account"
            onClick={() => setSidebarOpen(false)}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150",
              pathname === "/admin/account"
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            )}
          >
            <UserIcon className="h-5 w-5" />
            Admin Account
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg text-sm font-medium transition-all duration-150"
          >
            <LogoutIcon className="h-5 w-5" />
            Back to Store
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Mobile Header */}
        <div className="sticky top-0 z-30 flex items-center justify-between h-14 px-4 bg-white border-b border-gray-200 lg:hidden">
          <button
            className="text-gray-600 hover:text-gray-900 p-1"
            onClick={() => setSidebarOpen(true)}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
          <Link href="/admin" className="flex items-center gap-2">
            <span className="text-lg font-bold text-orange-500">
              Omega<span className="text-gray-900">3D</span>
            </span>
          </Link>
          <div className="w-8" /> {/* Spacer for centering */}
        </div>

        {/* Page Content */}
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
