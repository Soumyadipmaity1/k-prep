"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import ModalMenu from "@/components/Modal/modal";
import { denkOne } from "@/app/font";
import Image from "next/image";
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
    { label: "CSE", route: "/cse-notes" },
    { label: "CSCE", route: "/csce-notes" },
    { label: "IT", route: "/it-notes" },
    { label: "CSSE", route: "/csse-notes" }
  ],
  "/pyqs": [
    { label: "CSE", route: "/cse-pyqs" },
    { label: "CSCE", route: "/cse-pyqs" },
    { label: "IT", route: "/cse-pyqs" },
    { label: "CSSE", route: "/cse-pyqs" }
  ],
  "/labs": [
    { label: "CSE", route: "/cse-labs" },
    { label: "CSCE", route: "/cse-labs" },
    { label: "IT", route: "/cse-labs" },
    { label: "CSSE", route: "/cse-labs" }
  ]
};

const Nav = () => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItems, setModalItems] = useState<{ label: string; route: string }[]>([]);
  const [currentNav, setCurrentNav] = useState<string>("");

  const getLinkClass = (href: string) => {
    if (href === "/notes" && pathname.includes("notes")) {
      return "sm:border-b-4 border-b-2  border-white ";
    }
    if (href === "/pyqs" && pathname.includes("pyqs")) {
      return "sm:border-b-4 border-b-2 border-white";
    }
    if (href === "/labs" && pathname.includes("labs")) {
      return "sm:border-b-4 border-b-2 border-white";
    }
    return "text-white";
  };

  const handleNavClick = (href: string) => {
    setCurrentNav(href);
    setModalItems(menuItems[href] || []);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const matchedNavLink = navLinks.find(nav => pathname.startsWith(nav.href));
    if (matchedNavLink) {
      setCurrentNav(matchedNavLink.href);
      setModalItems(menuItems[matchedNavLink.href] || []);
      setIsModalOpen(true);
    } else {
      setCurrentNav("");
      setIsModalOpen(false);
    }
  }, [pathname]);

  return (
<div>
<div className={`sticky z-50 sm:flex hidden  gap-5 ${denkOne.className}`}>
      <div className="w-1/12 rounded-xl bg-gradient-to-r from-[#6b03a8] to-[#843ab1]">
        <Link href="/" passHref>
          <div className="w-16 h-16">
            <Image src="/k-prep2.png" width={144} height={144} alt="logo" className="h-16 p-1.5 w-16 rounded-xl mx-4 bg-transparent" />
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

    {/*  for mobileNAVBAR */}

    <div className={`sticky z-50 flex sm:hidden px-1 sm:gap-5 ${denkOne.className}`}>
  <nav className=" w-full  items-center rounded-xl px-8 py-2 bg-gradient-to-r from-[#843AB1] to-[#D57EBD]">
    <ul className="flex justify-between  text-white">
      {navLinks.map((link) => (
        <li key={link.href} className="my-2 sm:my-0">
          <button
            onClick={() => handleNavClick(link.href)}
            className={`nav-link text-white text-xl font-bold ${getLinkClass(link.href)}`}
          >
            {link.label}
          </button>
        </li>
      ))}
    </ul>
  </nav>
  <ModalMenu
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    items={modalItems}
  />
</div>



</div>
  );
};

export default Nav;
