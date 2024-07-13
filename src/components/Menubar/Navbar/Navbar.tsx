/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { FaSearch } from "react-icons/fa";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Notes", href: "/notes" },
  { label: "Pyqs", href: "/pyqs" },
  { label: "Labs", href: "/labs" },
];

const Nav = () => {
  const pathname = usePathname(); 

  const getLinkClass = (href: string) => {
    return pathname === href ? "text-green-500 underline" : "text-black";
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-16">
      <nav className=" flex justify-between items-center px-4 py-2">
        <Link href="/" passHref>
          <div>
            <div className="flex gap-4 items-center justify-center">
              {/* <img src"" alt="Logo" /> */}
              <p className="text-[#b631db] text-3xl font-semibold italic hidden md:block">
                K -  <span className="text-[#681272]">Prep</span>
              </p>
            </div>
          </div>
        </Link>

        <ul className="flex justify-between space-x-20 text-purple-600">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href} passHref>
                <div className={`nav-link font-[590] ${getLinkClass(link.href)}`}>
                  {link.label}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex space-x-4 items-center justify-center">

          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-purple-600"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Nav;
