"use client";

import React from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/Menubar/AdminSidebar/AdminSidebar";

const AdminDashboard = () => {
  const router = useRouter();

  // Logout handler function
  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/log-out", { method: "GET" });
      if (res.status === 200) {
        router.replace("/login"); // Redirect to login page on successful logout
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-50">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Logout
          </button>
        </div>

        {/* Dashboard Content */}
        <div className="mt-6">
          <p>Welcome to the Admin Dashboard. Use the sidebar to navigate.</p>
          {/* Add additional dashboard components here */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
