"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
  ChartIcon,
} from "@/components/icons/solar-icons";

// Grouped sidebar navigation
const sidebarGroups = [
  {
    label: "Overview",
    links: [
      {
        title: "Dashboard",
        href: "/admin",
        icon: DashboardIcon,
      },
      {
        title: "Analytics",
        href: "/admin/analytics",
        icon: ChartIcon,
      },
    ],
  },
  {
    label: "Store Management",
    links: [
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
        title: "Brands",
        href: "/admin/brands",
        icon: TagIcon,
      },
      {
        title: "Orders",
        href: "/admin/orders",
        icon: CartIcon,
      },
    ],
  },
  {
    label: "Users & Content",
    links: [
      {
        title: "Users",
        href: "/admin/users",
        icon: UsersIcon,
      },
      {
        title: "Pages",
        href: "/admin/pages",
        icon: FileIcon,
      },
    ],
  },
  {
    label: "System",
    links: [
      {
        title: "Settings",
        href: "/admin/settings",
        icon: SettingsIcon,
      },
    ],
  },
];

// Mock admin user data
const adminUser = {
  name: "Admin User",
  email: "admin@omega3d.com",
  role: "Super Admin",
  avatar: null,
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isLinkActive = (href: string) => {
    if (href === "/admin") {
      return pathname === "/admin";
    }
    return pathname.startsWith(href);
  };

  return (
    <TooltipProvider delayDuration={0}>
      <div className="min-h-screen bg-gray-50/50">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden backdrop-blur-sm transition-opacity"
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
          <div className="flex items-center justify-between h-14 px-4 border-b border-gray-800/50">
            <Link href="/admin" className="flex items-center gap-2.5">
              <Image
                src="/icons/logo.svg"
                alt="Omega3D"
                width={28}
                height={28}
                className="text-orange-500"
                style={{ filter: "invert(60%) sepia(98%) saturate(1000%) hue-rotate(360deg)" }}
              />
              <span className="text-lg font-bold text-orange-500">
                Omega<span className="text-white">3D</span>
              </span>
            </Link>
            <button
              className="lg:hidden text-gray-400 hover:text-white p-1 rounded-md hover:bg-gray-800 transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Admin Profile - Top Anchor */}
          <div className="px-3 py-3 border-b border-gray-800/50">
            <Link
              href="/admin/account"
              className={cn(
                "flex items-center gap-3 p-2.5 rounded-lg transition-all duration-150",
                pathname === "/admin/account"
                  ? "bg-orange-500/10 border border-orange-500/20"
                  : "hover:bg-gray-800/50"
              )}
            >
              <div className={cn(
                "w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold",
                pathname === "/admin/account"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-700 text-gray-300"
              )}>
                {adminUser.avatar ? (
                  <Image
                    src={adminUser.avatar}
                    alt={adminUser.name}
                    width={36}
                    height={36}
                    className="rounded-lg"
                  />
                ) : (
                  adminUser.name.charAt(0)
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className={cn(
                  "text-sm font-medium truncate",
                  pathname === "/admin/account" ? "text-orange-400" : "text-gray-200"
                )}>
                  {adminUser.name}
                </p>
                <p className="text-xs text-gray-500 truncate">{adminUser.role}</p>
              </div>
            </Link>
          </div>

          {/* Navigation Groups */}
          <nav className="flex-1 px-3 py-3 space-y-4 overflow-y-auto scrollbar-thin">
            {sidebarGroups.map((group, groupIndex) => (
              <div key={group.label}>
                {/* Group Label */}
                <p className="px-3 mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  {group.label}
                </p>
                
                {/* Group Links */}
                <div className="space-y-0.5">
                  {group.links.map((link) => {
                    const isActive = isLinkActive(link.href);
                    
                    return (
                      <Tooltip key={link.href}>
                        <TooltipTrigger asChild>
                          <Link
                            href={link.href}
                            onClick={() => setSidebarOpen(false)}
                            className={cn(
                              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150 group relative",
                              isActive
                                ? "bg-orange-500 text-white font-semibold shadow-lg shadow-orange-500/20"
                                : "text-gray-400 hover:bg-gray-800/70 hover:text-gray-200"
                            )}
                          >
                            {/* Active indicator bar */}
                            {isActive && (
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-white rounded-r-full" />
                            )}
                            <link.icon className={cn(
                              "h-[18px] w-[18px] flex-shrink-0",
                              isActive ? "text-white" : "text-gray-500 group-hover:text-orange-400"
                            )} />
                            <span className="truncate">{link.title}</span>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="lg:hidden">
                          {link.title}
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>

                {/* Divider between groups (except last) */}
                {groupIndex < sidebarGroups.length - 1 && (
                  <Separator className="mt-4 bg-gray-800/50" />
                )}
              </div>
            ))}
          </nav>

          {/* Footer Actions */}
          <div className="p-3 border-t border-gray-800/50 space-y-0.5">
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:bg-gray-800/70 hover:text-gray-200 rounded-lg text-sm transition-all duration-150"
            >
              <LogoutIcon className="h-[18px] w-[18px] text-gray-500" />
              <span>Back to Store</span>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:pl-64">
          {/* Mobile Header */}
          <div className="sticky top-0 z-30 flex items-center justify-between h-14 px-4 bg-white/80 backdrop-blur-md border-b border-gray-200/50 lg:hidden">
            <button
              className="text-gray-600 hover:text-gray-900 p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <MenuIcon className="h-5 w-5" />
            </button>
            <Link href="/admin" className="flex items-center gap-2">
              <span className="text-lg font-bold text-orange-500">
                Omega<span className="text-gray-900">3D</span>
              </span>
            </Link>
            <div className="w-10" /> {/* Spacer for centering */}
          </div>

          {/* Page Content - High Density Layout */}
          <main className="p-4 lg:p-5">{children}</main>
        </div>
      </div>
    </TooltipProvider>
  );
}
