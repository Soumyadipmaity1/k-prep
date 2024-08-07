import React from 'react';
import ContactOption from './FeatureCard';
import { FaCloud, FaDollarSign, FaDownload , FaBookOpen} from 'react-icons/fa';

interface ContactOptionProps {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const contactOptions: ContactOptionProps[] = [
  {
    icon: FaCloud,
    title: ' Easy to Access',
    description: 'Enjoy seamless access to your notes from any device, anywhere, anytime. No more hassle of logging in.',
    buttonText: 'Chat with us',
    buttonLink: '#',
  },
  {
    icon: FaDollarSign,
    title: 'Free to Use',
    description: 'Our app is completely free, providing top-quality note-taking tools without any cost or hidden charges.',
    buttonText: 'Email us',
    buttonLink: '#',
  },
  {
    icon: FaDownload,
    title: 'Downloadable',
description:'Get straight to the point with concise and accurate notes, crafted by top students to help you excel.',
    buttonText: 'Get directions',
    buttonLink: '#',
  },
  {
    icon: FaBookOpen,
    title: ' Concise & Accurate',
    description: 'Get straight to the point with concise and accurate notes, crafted by top students to help you excel.',
    buttonText: 'Call our team',
    buttonLink: '#',
  },
];

const   FeatureSection: React.FC = () => {
  return (
    <div className="pb-12 pt-8 sm:my-10 my-4  rounded-xl sm:px-10 bg-gradient-to-r from-[#C476F0] to-[#EE85BB]">
      <h2 className="sm:text-5xl text-[38px] font-bold text-center sm:pb-16 pb-10  text-black">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6">
        {contactOptions.map((option, index) => (
          <ContactOption key={index} {...option} /> 
        ))}
      </div>
    </div>
  );
};

export default  FeatureSection;
