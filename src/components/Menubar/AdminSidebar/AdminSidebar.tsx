"use client";

// import React { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import DialogBox from "@/components/Dialogs/Dialogs";
import { useState } from "react";

const AdminSidebar = () => {
  const router = useRouter();
  const [showDialog, setShowDialog] = useState(false);
  const user = {
    name: "Admin User",
    role: "Admin",
  };

  const handleLogout = async () => {
    // setShowDialog(true);
    try {
      const res = await fetch("/api/auth/log-out", { method: "GET" });
      if (res.status === 200) {
        router.replace("/login");
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const path = usePathname();

  const menuItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Add Note", path: "/admin/add-note" },
    { name: "Add User", path: "/admin/add-user" },
    { name: "View Notes", path: "/admin/view-note" },
  ];

  return (
    <aside className="w-64 bg-fuchsia-800 rounded-xl text-white ">
      <div className="p-4 border-b border-gray-700">
        <p className="text-lg font-semibold">{user.name}</p>
        <p className="text-sm text-gray-400">{user.role}</p>
      </div>

      <nav className="mt-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path} className="mb-2">
              <Link
                className={`block px-4 py-2 transition-all duration-500 ${
                  path === item.path && "bg-fuchsia-500"
                } hover:bg-fuchsia-400`}
                href={item.path}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="absolute bottom-12 w-full p-4">
        <button
          onClick={handleLogout}
          className="w-20 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>
      {/* <DialogBox title="Hello" text="This is test message" isOpen={showDialog} /> */}
    </aside>
  );
};

export default AdminSidebar;
