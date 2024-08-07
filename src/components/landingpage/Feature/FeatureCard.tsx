import React from 'react';
import { denkOne } from '@/app/font';
interface ContactOptionProps {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const FeatureCard: React.FC<ContactOptionProps> = ({
  icon: Icon,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className={`p-6 font-denk border-purple-600 shadow-md bg-purple-50 border-2 w-72 mx-auto rounded-lg  text-center  ${denkOne.className}`}>
      <div className="text-center flex justify-center mt-2 mb-6">
        <Icon className="text-5xl bg-transparent  text-center text-purple-700" />
      </div>
      <h3 className="sm:text-2xl text-xl font-semibold mb-2 text-[#843ab1]">{title}</h3>
      <p className="text-gray-600 font-extralight sm:text-base text-sm">{description}</p>
      {/* <a
        href={buttonLink}
        className="inline-block px-4 py-1 bg-transparent text-purple-600 font-semibold mt-4 hover:text-white border-purple-600 border-2 rounded-md hover:bg-purple-700 transition"
      >
        {buttonText}
      </a> */}
    </div>
  );
};

export default FeatureCard;
