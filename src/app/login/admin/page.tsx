import AdminSidebar from "@/components/Menubar/AdminSidebar/AdminSidebar";
import React from "react";
// import {isAuthenticated}
import { isAuthenticated } from "./../../../lib/Auth";
import { redirect } from "next/navigation";
function AdminDashboard() {
  const isAuth = isAuthenticated();
  if (!isAuth) {
    redirect("/login");
  }
  return (
    <div>
      <AdminSidebar />
    </div>
  );
}

export default AdminDashboard;
