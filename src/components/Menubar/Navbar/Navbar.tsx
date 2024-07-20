"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import ModalMenu from "@/components/Modal/modal";
import { denkOne } from "@/app/font";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Notes", href: "/notes" },
  { label: "Pyqs", href: "/pyqs" },
  { label: "Labs", href: "/labs" },
];

const menuItems: Record<string, { label: string; route: string }[]> = {
  "/notes": [
    { label: "CSE", route: "/cse" },
    { label: "CSCE", route: "/csce" },
    { label: "IT", route: "/it" },
    { label: "CSSE", route: "/csse" }
  ],
  "/pyqs": [
    // Add items for pyqs
  ],
  "/labs": [
    // Add items for labs
  ]
};

const Nav = () => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItems, setModalItems] = useState<{ label: string; route: string }[]>([]);
  const [currentNav, setCurrentNav] = useState<string>("");

  const getLinkClass = (href: string) => {
    return pathname === href ? "text-green-500 underline" : "text-white";
  };

  const handleNavClick = (href: string) => {
    setCurrentNav(href);
    setModalItems(menuItems[href] || []);
    setIsModalOpen(true);
  };

  return (
    <div className={`sticky z-50 flex gap-5 ${denkOne.className}`}>
      <div className="w-1/12 rounded-xl bg-gradient-to-r from-[#6b03a8] to-[#843ab1]">
        <Link href="/" passHref>
          <div className="w-16 h-16">
            <img src="/k-prep2.png" alt="logo" className="h-16 p-1.5 w-16 rounded-xl mx-4 bg-transparent" />
          </div>
        </Link>
      </div>
      <nav className="flex w-full rounded-xl justify-between items-center px-16 py-2 bg-gradient-to-r from-[#843AB1] to-[#D57EBD]">
        <ul className="flex justify-center space-x-32 text-white">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`nav-link text-white font-bold ${getLinkClass(link.href)}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex space-x-4 items-center justify-center">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="border w-96 border-gray-300 rounded-full bg-[#ffffffa4] py-2 px-4 pl-10 focus:outline-none focus:border-purple-600"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </nav>
      <ModalMenu
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        items={modalItems}
      />
    </div>
  );
};

export default Nav;
