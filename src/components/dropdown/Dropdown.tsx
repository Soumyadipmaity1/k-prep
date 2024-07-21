import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'; 

interface DropdownProps {
  items: { label: string; route: string }[];
  onItemClick: (route: string) => void;
  onDropdownToggle: (open: boolean) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ items, onItemClick, onDropdownToggle }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (route: string, label: string) => {
    setSelectedValue(label);
    onItemClick(route);
    setIsOpen(false);
    onDropdownToggle(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    onDropdownToggle(!isOpen);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div
        className="mt-1  w-full py-4 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-base cursor-pointer flex justify-between items-center"
        onClick={toggleDropdown}
      >
        <span>{selectedValue || 'Select your branch'}</span>
        <ChevronDownIcon className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {items.map((item) => (
            <div
              key={item.route}
              onClick={() => handleSelect(item.route, item.label)}
              className="py-3 px-4 text-base cursor-pointer hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200 hover:rounded-lg m-1 hover:shadow-md"
              style={{ transition: 'background 0.3s ease' }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
