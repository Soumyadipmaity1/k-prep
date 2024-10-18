"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"
const AdminDashboard = () => {
  const router = useRouter();
 

//  console.log("--------->",session)
  return (
    <div className="flex ">
      <div className="flex-1 p-6 ">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      
        </div>

        <div className="mt-6">
          <p>Welcome to the Admin Dashboard. Use the sidebar to navigate to different sections.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
