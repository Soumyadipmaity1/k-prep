"use server"

import { AiFillHome } from 'react-icons/ai';
import { FaUserGraduate, FaChalkboardTeacher, FaBookOpen, FaLaptopCode } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }: { isOpen: boolean, toggleSidebar: () => void }) => {
  return (
    <div
      className={`fixed top-14 left-0 h-full transition-all duration-500 ${isOpen ? 'w-48' : 'w-16'} bg-purple-900 text-white`}
    >
      <div className="flex flex-col items-center py-4">
        <SidebarIcon icon={<AiFillHome size="24" />} name="Home" isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <SidebarIcon icon={<FaChalkboardTeacher size="24" />} name="1st Year " isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <SidebarIcon icon={<FaBookOpen size="24" />} name="2nd year" isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <SidebarIcon icon={<FaLaptopCode size="24" />} name="3rd Year" isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <SidebarIcon icon={<FaUserGraduate size="24" />} name="4th Year" isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
};

const SidebarIcon = ({ icon, name, isOpen, toggleSidebar }: { icon: React.ReactNode, name: string, isOpen: boolean, toggleSidebar: () => void }) => (
  <div className="flex items-center my-4 w-full cursor-pointer" onClick={toggleSidebar}>
    <div className="flex-shrink-0 ml-4">{icon}</div>
    {isOpen && <span className="ml-4">{name}</span>}
  </div>
);

export default Sidebar;
