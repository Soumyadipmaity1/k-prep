"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AdminSidebar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  // const { firstName, role }: { firstName: any; role: any } = session?.user || {};
  let firstName = session?.user.firstName;
  let role = session?.user?.role;

  const user = {
    name: firstName || "Admin", // Default to "Admin" if firstName is not available
    role: role || "User", // Default to "User" if role is not available
  };

  const handleLogout = async () => {
 
    await signOut();
  };

  const path = usePathname();

  const menuItems =
    session?.user?.role != "admin"
      ? [
          { name: "Dashboard", path: "/admin" },
          { name: "Add Note", path: "/admin/add-note" },
          { name: "View Notes", path: "/admin/view-note" },
          { name: "Profile", path: "/admin/view-profile" },
        ]
      : [
          { name: "Dashboard", path: "/admin" },
          { name: "Add Note", path: "/admin/add-note" },
          { name: "Add User", path: "/admin/add-user" },
          { name: "View Notes", path: "/admin/view-note" },
          { name: "Profile", path: "/admin/view-profile" },
        ];

  return (
    <aside className="relative w-64 bg-fuchsia-800 rounded-xl text-white h-[90vh]">
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

      <div className="absolute top-[60vh] w-full p-4">
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
