"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  ChevronLeft,
  ChevronRight,
  UserPlus,
  Mail,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const users = [
  { id: 1, name: "Ahmed Mohamed", email: "ahmed@email.com", role: "Customer", orders: 5, spent: 12500, status: "Active", joined: "2025-06-15" },
  { id: 2, name: "Sara Ali", email: "sara@email.com", role: "Customer", orders: 3, spent: 4800, status: "Active", joined: "2025-08-22" },
  { id: 3, name: "Mohamed Hassan", email: "mhassan@email.com", role: "Customer", orders: 8, spent: 28900, status: "Active", joined: "2025-03-10" },
  { id: 4, name: "Admin User", email: "admin@omega3d.com", role: "Admin", orders: 0, spent: 0, status: "Active", joined: "2024-01-01" },
  { id: 5, name: "Fatma Youssef", email: "fatma@email.com", role: "Customer", orders: 2, spent: 1950, status: "Inactive", joined: "2025-11-05" },
  { id: 6, name: "Omar Khaled", email: "omar@email.com", role: "Customer", orders: 12, spent: 45600, status: "Active", joined: "2024-09-18" },
  { id: 7, name: "Manager User", email: "manager@omega3d.com", role: "Manager", orders: 0, spent: 0, status: "Active", joined: "2024-06-01" },
  { id: 8, name: "Nour Ahmed", email: "nour@email.com", role: "Customer", orders: 1, spent: 850, status: "Active", joined: "2025-12-20" },
];

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Users</h1>
          <p className="text-gray-500">Manage customer and staff accounts</p>
        </div>
        <Button className="bg-orange-700 hover:bg-orange-800 gap-2">
          <UserPlus className="h-4 w-4" />
          Add User
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Users", count: users.length, color: "bg-gray-100" },
          { label: "Customers", count: users.filter((u) => u.role === "Customer").length, color: "bg-blue-100" },
          { label: "Admins", count: users.filter((u) => u.role === "Admin").length, color: "bg-orange-100" },
          { label: "Managers", count: users.filter((u) => u.role === "Manager").length, color: "bg-purple-100" },
        ].map((stat) => (
          <div key={stat.label} className={`p-4 rounded-xl ${stat.color}`}>
            <p className="text-2xl font-bold text-gray-900">{stat.count}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by name or email..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-700 focus:border-orange-700"
          >
            <option value="all">All Roles</option>
            <option value="Customer">Customer</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Spent
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Joined
                </th>
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center text-white font-medium">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${
                        user.role === "Admin"
                          ? "bg-orange-100 text-orange-700"
                          : user.role === "Manager"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {user.role === "Admin" && <Shield className="h-3 w-3" />}
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{user.orders}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    EGP {user.spent.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{user.joined}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg">
                        <Mail className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-orange-700 hover:bg-orange-50 rounded-lg">
                        <Edit className="h-4 w-4" />
                      </button>
                      {user.role !== "Admin" && (
                        <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
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
            Showing 1 to {filteredUsers.length} of {users.length} users
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


