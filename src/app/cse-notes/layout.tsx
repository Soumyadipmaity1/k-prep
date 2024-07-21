// components/CseNotesLayout.tsx
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { MdLooksOne, MdLooksTwo, MdLooks3, MdLooks4 } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { FaBars, FaRegComment } from 'react-icons/fa';
import Link from 'next/link';

const CseNotesLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const getNavItemClass = (path: string) => {
    return pathname === path ? 'border-l-4 border-[#d998ff]' : 'hover:border-l-4 border-[#d998ff]'; 
  };

  return (
    <div className="flex max-h-screen mt-6 rounded-xl">
      <aside
        className={`bg-sidebar text-white rounded-xl transition-all duration-300 ${
          isOpen ? 'w-56' : 'w-20'
        }`}
      >
        <div>
          <div className="flex pl-6 cursor-pointer  text-center  items-center justify-between mt-10">
            <button title='toggle' onClick={toggleSidebar} className="focus:outline-none">
              <FaBars size={32} />
            </button>
          </div>
          <nav className="mt-4">
            <div 
              className={`flex pl-6 cursor-pointer my-8 py-1 items-center space-x-2 ${getNavItemClass('/cse-notes/1st-year')}`}
              onClick={() => router.push('/cse-notes/1st-year')}
            >
              <MdLooksOne size={32} />
              {isOpen && <span>1st Year</span>}
            </div>
            <div 
              className={`flex pl-6 cursor-pointer my-8 py-1 items-center space-x-2 ${getNavItemClass('/cse-notes/2nd-year')}`}
              onClick={() => router.push('/cse-notes/2nd-year')}
            >
              <MdLooksTwo size={32}/>
              {isOpen && <span>2nd Year</span>}
            </div>
            <div 
              className={`flex pl-6 cursor-pointer my-8 py-1 items-center space-x-2 ${getNavItemClass('/cse-notes/3rd-year')}`}
              onClick={() => router.push('/cse-notes/3rd-year')}
            >
              <MdLooks3 size={32}/>
              {isOpen && <span>3rd Year</span>}
            </div>
            <div 
              className={`flex pl-6 cursor-pointer my-8 py-1 items-center space-x-2 ${getNavItemClass('/cse-notes/4th-year')}`}
              onClick={() => router.push('/cse-notes/4th-year')}
            >
              <MdLooks4 size={32}/>
              {isOpen && <span>4th Year</span>}
            </div>
            <div 
              className={`flex pl-6 cursor-pointer my-8 py-1 items-center space-x-2 ${getNavItemClass('/cse-notes/additional-notes')}`}
              onClick={() => router.push('/cse-notes/additional-notes')}
            >
              <FiEdit size={32}/>
              {isOpen && <span>Additional Notes</span>}
            </div>
          </nav>
        </div>
        <div className="cursor-pointer hover:border-l-4 pl-6 border-white items-center justify-between mt-72">
          <Link href="https://google.com" target="_blank">
            <button title='feedback' className="focus:outline-none">
              <FaRegComment size={32} />
            </button>
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
};

export default CseNotesLayout;
