"use client";

import React from "react";
import Link from "next/link";
import { FaHome, FaBook, FaFlask, FaBars, FaTimes } from "react-icons/fa";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div className="fixed top-0 left-0 p-4 z-50">
        <button onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-md w-64 transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 mt-12">
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/notes/cse">
                <div className="flex items-center cursor-pointer">
                  <FaHome className="mr-2" /> 1st year
                </div>
              </Link>
            </li>
            <li>
              <Link href="/notes/2nd-year">
                <div className="flex items-center cursor-pointer">
                  <FaBook className="mr-2" /> 2nd year
                </div>
              </Link>
            </li>
            <li>
              <Link href="/notes/3rd-year">
                <div className="flex items-center cursor-pointer">
                  <FaFlask className="mr-2" /> 3rd year
                </div>
              </Link>
            </li>
            <li>
              <Link href="/notes/4th-year">
                <div className="flex items-center cursor-pointer">
                  <FaFlask className="mr-2" /> 4th year
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
