"use client";
import Link from 'next/link';
import { MdLooksOne, MdLooksTwo, MdLooks3 } from 'react-icons/md';
import { FaRegComment } from 'react-icons/fa';
import { HomeIcon } from '@heroicons/react/24/solid';
import dynamic from 'next/dynamic';
import { useRouter, usePathname } from 'next/navigation';

const FirstYearModal = dynamic(() => import('@/components/Modal/1styearmodal'));
const SecondYearModal = dynamic(() => import('@/components/Modal/2ndyearModal'));
const ThirdYearModal = dynamic(() => import('@/components/Modal/3rdyearModal'));

const MobileNavBar = ({ openModal, closeModal }: { openModal: (modal: JSX.Element) => void; closeModal: () => void; }) => {
  const router = useRouter();
  const pathname = usePathname();

  const getNavItemClass = (path: string) => {
    return pathname.startsWith(path)
      ? 'text-black sm:text-white border-0 sm:border-l-4 border-[#d998ff]'
      : 'hover:text-black sm:hover:border-l-4 border-[#d998ff]';
  };

  return (
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
  );
};

export default MobileNavBar;
