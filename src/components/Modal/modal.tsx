"use client"; 

import { useRouter } from 'next/navigation';
import React from 'react';

interface ModalMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: { label: string; route: string }[];
}

const ModalMenu: React.FC<ModalMenuProps> = ({ isOpen, onClose, items }) => {
  const router = useRouter();

  if (!isOpen) return null;

  const handleItemClick = (route: string) => {
    router.push(route);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-[#f8e9f4] p-6 rounded-lg shadow-lg  w-[800px] relative text-center">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 text-2xl">
          &times;
        </button>
        <h2 className="text-4xl font-semibold mb-4 modal-text">Hello, Loveable KIITkats! </h2>
        <p className="mb-4 text-3xl modal-text">Please select your branch.</p>
        <div className="space-y-2">
          {items.map((item) => (
            <button
              key={item.route}
              onClick={() => handleItemClick(item.route)}
              className="w-full text-left px-4 py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded hover:from-pink-500 hover:to-purple-600"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
