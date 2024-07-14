"use client"; 
import type { Metadata } from "next";
import { useState } from 'react';
import Sidebar from "@/components/Menubar/SideBar/Sidebar";

export const metadata: Metadata = {
  title: "K-Prep | Notes",
  description: "Notes and resources for the KIITIANS, by the KIITIANS.",
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-grow transition-all duration-300 ${isOpen ? 'ml-48' : 'ml-16'}`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
