"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Dropdown from '../dropdown/Dropdown';

interface ModalMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: { label: string; route: string }[];
}

const ModalMenu: React.FC<ModalMenuProps> = ({ isOpen, onClose, items }) => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!isOpen) return null;

  const handleItemClick = (route: string) => {
    router.push(route);
    onClose();
  };

  const handleDropdownToggle = (open: boolean) => {
    setIsDropdownOpen(open);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div
        className={`bg-[#f8e9f4] p-8 rounded-lg shadow-lg relative text-center transition-all duration-300 ease-in-out ${
          isDropdownOpen ? 'h-[450px]' : 'h-60'
        } w-[800px]`}
      >
        <button onClick={onClose} className="absolute top-2 right-4 text-gray-600 text-4xl">
          &times;
        </button>
        <h2 className="text-4xl font-semibold mb-4 modal-text">Hello, Loveable KIITkats!</h2>
        <p className="mb-4 text-2xl modal-text">Please select your branch.</p>
        <Dropdown items={items} onItemClick={handleItemClick} onDropdownToggle={handleDropdownToggle} />
      </div>
    </div>
  );
};

export default ModalMenu;
