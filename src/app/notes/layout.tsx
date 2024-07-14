// src/app/notes/layout.tsx
"use client"; // Add this directive at the top

import { useState } from 'react';
import Sidebar from "@/components/Menubar/SideBar/Sidebar";

const Layout = ({ children }) => {
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
