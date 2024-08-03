"use client";
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { MdLooksOne, MdLooksTwo, MdLooks3, MdLooks4 } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { FaBars, FaRegComment } from 'react-icons/fa';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { denkOne } from '../font';

const FirstYearModal = dynamic(() => import('@/components/Modal/1styearmodal'));
const SecondYearModal = dynamic(() => import('@/components/Modal/2ndyearModal'));
const ThirdYearModal = dynamic(() => import('@/components/Modal/3rdyearModal'));
// const FourthYearModal = dynamic(() => import('@/components/Modal/'));

const CseNotesLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const openModal = (modal: JSX.Element) => {
    setModalContent(modal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const getNavItemClass = (path: string) => {
    return pathname.startsWith(path) ? 'border-l-4 border-[#d998ff]' : 'hover:border-l-4 border-[#d998ff]';
  };

  return (
    <div className={denkOne.className}>
      <div className="flex justify-between h-screen mt-6 rounded-xl">
        <aside className={`bg-sidebar text-white rounded-xl transition-all duration-300 ${isOpen ? 'w-56' : 'w-20'}`}>
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex pl-6 cursor-pointer text-center items-center justify-between mt-10">
                <button title="toggle" onClick={toggleSidebar} className="focus:outline-none">
                  <FaBars size={32} />
                </button>
              </div>
              <nav className="mt-4">
                <div
                  className={`flex pl-6 cursor-pointer my-8 py-1 items-center space-x-2 ${getNavItemClass('/cse-notes/1st-year')}`}
                  onClick={() => openModal(<FirstYearModal isOpen={true} onClose={closeModal} title="First Year" yearPath="/cse-notes/1st-year" />)}
                >
                  <MdLooksOne size={32} />
                  {isOpen && <span className="text-xl">1st Year</span>}
                </div>
                <div
                  className={`flex pl-6 cursor-pointer my-8 py-1 items-center space-x-2 ${getNavItemClass('/cse-notes/2nd-year')}`}
                  onClick={() => openModal(<SecondYearModal isOpen={true} onClose={closeModal} title="Second Year" yearPath="/cse-notes/2nd-year" />)}
                >
                  <MdLooksTwo size={32} />
                  {isOpen && <span className="text-xl">2nd Year</span>}
                </div>
                <div
                  className={`flex pl-6 cursor-pointer my-8 py-1 items-center space-x-2 ${getNavItemClass('/cse-notes/3rd-year')}`}
                  onClick={() => openModal(<ThirdYearModal isOpen={true} onClose={closeModal} title="Third Year" yearPath="/cse-notes/3rd-year" />)}
                >
                  <MdLooks3 size={32} />
                  {isOpen && <span className="text-xl">3rd Year</span>}
                </div>
                {/* <div
                  className={`flex pl-6 cursor-pointer my-8 py-1 items-center space-x-2 ${getNavItemClass('/cse-notes/4th-year')}`}
                  onClick={() => openModal(<FourthYearModal isOpen={true} onClose={closeModal} title="Fourth Year" yearPath="/cse-notes/4th-year" />)}
                >
                  <MdLooks4 size={32} />
                  {isOpen && <span className="text-xl">4th Year</span>}
                </div> */}
                <div
                  className={`flex pl-6 cursor-pointer my-8 py-1 items-center space-x-2 ${getNavItemClass('/cse-notes/additional-notes')}`}
                  onClick={() => router.push('/cse-notes/additional-notes')}
                >
                  <FiEdit size={32} />
                  {isOpen && <span className="text-xl">Additional Notes</span>}
                </div>
              </nav>
            </div>
            <div className="cursor-pointer flex hover:border-l-4 pl-6 border-white items-center bottom-0">
              <Link href="https://google.com" target="_blank">
                <button title="feedback" className="focus:outline-none flex space-x-2">
                  <FaRegComment size={32} />
                  {isOpen && <span className="text-xl">FeedBack</span>}
                </button>
              </Link>
            </div>
          </div>
        </aside>
        <main className="flex-1 p-4">{children}</main>
      </div>

      {isModalOpen && modalContent}
    </div>
  );
};

export default CseNotesLayout;
