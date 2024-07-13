"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/Menubar/Navbar/Navbar2";
import Sidebar from "@/components/Menubar/SideBar/Sidebar"; // Adjust the import path as necessary

const inter = Inter({ subsets: ["latin"] });

const NotesLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={inter.className}>
      <Navbar />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className={`container mx-auto p-4 transition-all duration-300 ${isOpen ? "ml-64" : ""}`}>
        {/* Main Content */}
        {children}
      </div>
    </div>
  );
};

export default NotesLayout;
