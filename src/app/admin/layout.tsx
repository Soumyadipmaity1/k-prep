"use client";

import React from "react";
import AdminSidebar from "@/components/Menubar/AdminSidebar/AdminSidebar";

import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="flex h-[88vh] overflow-y-hidden  ">
      <AdminSidebar />

      <div className="flex-1 justify-center">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
