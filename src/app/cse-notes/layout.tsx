"use client";
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { MdLooksOne, MdLooksTwo, MdLooks3 } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { FaBars, FaRegComment } from 'react-icons/fa';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { denkOne } from '../font';
import { HomeIcon } from '@heroicons/react/24/solid';
const FirstYearModal = dynamic(() => import('@/components/Modal/1styearmodal'));
const SecondYearModal = dynamic(() => import('@/components/Modal/2ndyearModal'));
const ThirdYearModal = dynamic(() => import('@/components/Modal/3rdyearModal'));

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
    return pathname.startsWith(path)
      ? 'text-black sm:text-white border-0 sm:border-l-4 border-[#d998ff]'
      : 'hover:text-black sm:hover:border-l-4 border-[#d998ff]';
  };

  return (
    <div className={denkOne.className}>
      <div className={denkOne.className}>
        {/* Desktop Sidebar */}
        <div className="sm:flex hidden justify-between h-screen mt-6 rounded-xl">
          <aside
            className={`bg-sidebar text-white rounded-xl transition-all duration-300 ${
              isOpen ? 'w-56' : 'w-20'
            }`}
          >
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex pl-6 cursor-pointer text-center items-center justify-between mt-10">
                  <button
                    title="toggle"
                    onClick={toggleSidebar}
                    className="focus:outline-none"
                  >
                    <FaBars size={32} />
                  </button>
                </div>
                <nav className="mt-4">
                  <div
                    className={`flex pl-6 cursor-pointer my-8 py-1 items-center space-x-2 ${getNavItemClass(
                      '/cse-notes/1st-year'
                    )}`}
                    onClick={() =>
                      openModal(
                        <FirstYearModal
                          isOpen={true}
                          onClose={closeModal}
                          title="First Year"
                          yearPath="/cse-notes/1st-year"
                        />
                      )
                    }
                  >
                    <MdLooksOne size={32} />
                    {isOpen && <span className="text-xl">1st Year</span>}
                  </div>
                  <div
                    className={`flex pl-6 cursor-pointer my-8 py-1 items-center space-x-2 ${getNavItemClass(
                      '/cse-notes/2nd-year'
                    )}`}
                    onClick={() =>
                      openModal(
                        <SecondYearModal
                          isOpen={true}
                          onClose={closeModal}
                          title="Second Year"
                          yearPath="/cse-notes/2nd-year"
                        />
                      )
                    }
                  >
                    <MdLooksTwo size={32} />
                    {isOpen && <span className="text-xl">2nd Year</span>}
                  </div>
                  <div
                    className={`flex pl-6 cursor-pointer my-8 py-1 items-center space-x-2 ${getNavItemClass(
                      '/cse-notes/3rd-year'
                    )}`}
                    onClick={() =>
                      openModal(
                        <ThirdYearModal
                          isOpen={true}
                          onClose={closeModal}
                          title="Third Year"
                          yearPath="/cse-notes/3rd-year"
                        />
                      )
                    }
                  >
                    <MdLooks3 size={32} />
                    {isOpen && <span className="text-xl">3rd Year</span>}
                  </div>
                  <div
                    className={`flex pl-6 cursor-pointer my-8 py-1 items-center space-x-2 ${getNavItemClass(
                      '/cse-notes/additional-notes'
                    )}`}
                    onClick={() => router.push('/cse-notes/additional-notes')}
                  >
                    <FiEdit size={32} />
                    {isOpen && (
                      <span className="text-xl">Additional Notes</span>
                    )}
                  </div>
                </nav>
              </div>
              <div className="cursor-pointer flex hover:border-l-4 pl-6 border-white items-center bottom-0">
                <Link href="https://google.com" target="_blank">
                  <button
                    title="feedback"
                    className="focus:outline-none flex space-x-2"
                  >
                    <FaRegComment size={32} />
                    {isOpen && <span className="text-xl">FeedBack</span>}
                  </button>
                </Link>
              </div>
            </div>
          </aside>
          <main className="flex-1 p-4">{children}</main>
        </div>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="sm:hidden fixed bottom-0 left-0 w-full px-4 py-1.5 bg-sidebar text-white rounded-t-xl shadow-lg flex justify-around items-center z-50 border border-[#d998ff]">
  <div className="flex flex-col items-center cursor-pointer">
    <Link href="/">
      <HomeIcon width={26} height={26} className="mx-auto" />
      <span className="text-xs">Home</span>
    </Link>
  </div>

  <div
    className={`flex flex-col items-center cursor-pointer ${getNavItemClass('/cse-notes/1st-year')}`}
    onClick={() => openModal(<FirstYearModal isOpen={true} onClose={closeModal} title="First Year" yearPath="/cse-notes/1st-year" />)}
  >
    <MdLooksOne size={28} />
    <span className="text-xs">1st Year</span>
  </div>
  <div
    className={`flex flex-col items-center cursor-pointer ${getNavItemClass('/cse-notes/2nd-year')}`}
    onClick={() => openModal(<SecondYearModal isOpen={true} onClose={closeModal} title="Second Year" yearPath="/cse-notes/2nd-year" />)}
  >
    <MdLooksTwo size={28} />
    <span className="text-xs">2nd Year</span>
  </div>
  <div
    className={`flex flex-col items-center cursor-pointer ${getNavItemClass('/cse-notes/3rd-year')}`}
    onClick={() => openModal(<ThirdYearModal isOpen={true} onClose={closeModal} title="Third Year" yearPath="/cse-notes/3rd-year" />)}
  >
    <MdLooks3 size={28} />
    <span className="text-xs">3rd Year</span>
  </div>
  
  <div className="flex flex-col items-center cursor-pointer">
    <Link href="https://google.com" target="_blank">
      <FaRegComment size={24} className="mx-auto" />
      <span className="text-xs">Feedback</span>
    </Link>
  </div>
</nav>

      {/* Mobile Content Section */}
      <main className="sm:hidden p-1 py-3 pb-5">{children}</main>

      {/* Modals */}
      {isModalOpen && modalContent}
    </div>
  );
};

export default CseNotesLayout;
