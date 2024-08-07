
import { FC } from 'react';
import { FaBook, FaUsers, FaFileAlt } from 'react-icons/fa';
import Image from 'next/image';

const Hero: FC = () => {
  return (
    <section className="flex flex-col md:flex-row sm:gap-28 items-center justify-between  sm:px-16 bg-white">
      <div className=" mb-6 md:mb-0 mt-10 text-center sm:text-start">
        <h1 className="sm:text-7xl text-5xl font-bold mb-4">READ, LEARN,</h1>
        <h1 className="sm:text-7xl text-5xl font-bold mb-4"> ACE!</h1>

        <p className="text-gray-600 sm:mb-6 sm:px-0 px-4 text-justify   sm:mt-8 mt-5 font-sans">
          Lorem ipsum dolor sit amet. Non voluptatum explicabo et vo sunt non repellat nesciunt? Id sunt sapiente hic dolores dolo vitae ratione. Est expedita animi ea culpa.
        </p>
        <button className="px-8  py-3 mt-8 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-700">
          Explore More
        </button>
      </div>
      <div className="relative w-full hidden sm:flex flex-col items-center">

        <Image src="/hero.png" alt="Read, Learn, Ace" width={944} height={544} className="rounded-lg w-[900px]" />

        <div className="absolute top-60 backdrop-blur-[1px]  cursor-pointer hover:bg-white shadow-lg left-0 flex items-center space-x-2 bg-[#e4e1e1bd] p-2 rounded-lg border-2 border-purple-400 ">
          <div className='text-2xl text-purple-500 pr-2'>
            <FaBook />
          </div>
          <div>
            <h1 className='font-sans text-xl text-purple-600 font-bold text-center'>100+</h1>
            <h1 className=" font-mono text-medium ">Handwritten Notes</h1>
          </div>
        </div>
        <div className="absolute bottom-4 backdrop-blur-[1px]  cursor-pointer hover:bg-white shadow-lg left-4 flex items-center space-x-2 bg-[#e4e1e1bd] p-2 rounded-lg border-2 border-purple-400 ">
          <div className='text-2xl text-purple-500 pr-2'>
            <FaFileAlt />
          </div>
          <div>
            <h1 className='font-sans text-xl text-purple-600 font-bold text-center'>200+</h1>
            <h1 className=" font-mono text-medium ">Previous Year Q&rsquo;s</h1>
          </div>
        </div>
        <div className="absolute bottom-28  backdrop-blur-[1px] cursor-pointer hover:bg-white shadow-lg px-5 right-4 flex-col flex items-center space-x-2 bg-[#e4e1e1bd] p-2 rounded-lg border-2 border-purple-400 ">
        <div>
            <h1 className='font-sans text-xl text-purple-600 font-bold text-center'>1000+</h1>
            <h1 className=" font-mono text-medium ">Trusted Users</h1>
          </div>
          <FaUsers className="text-purple-600 text-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
