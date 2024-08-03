"use client";

import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  imageSrc: string;
  description: string;
  pdfUrl: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, description, pdfUrl }) => {
  const handleOpenPdf = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="bg-recommended rounded-xl shadow-lg flex flex-col justify-center p-4 w-60 mx-2">
      <div className="h-48 w-full bg-gray-200 rounded-md mb-4 relative">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-md" />
      </div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <button
        onClick={handleOpenPdf}
        className="bg-[#843ab1] text-white px-4 py-1 rounded-full hover:bg-[#b864c8] text-center transition duration-300"
      >
        Open PDF
      </button>
    </div>
  );
};

// Main Page
const Home: NextPage = () => {
  const resources: CardProps[] = [
    {
      title: 'Resource 1',
      imageSrc: '/daa.png',
      description: 'Lorem ipsum dolor sit amet. Non voluptatum explicabo et',
      pdfUrl: './L2.pdf',
    },
    {
      title: 'Resource 2',
      imageSrc: '/daa.png',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation',
      pdfUrl: './L2.pdf',
    },
    {
      title: 'Resource 3',
      imageSrc: '/daa.png',
      description: 'Duis aute irure dolor in reprehenderit in voluptate',
      pdfUrl: './L2.pdf',
    },
    
  ];

  return (
    <div className="w-auto h-full overflow-x-auto border py-5 rounded-xl border-gray-300" style={{ scrollbarWidth: 'none' }}>
      <div className="bg-[#f8e9f4] h-96 py-5 flex items-center">
        <main className="flex space-x-4">
          {resources.map((resource, index) => (
            <Card
              key={index}
              title={resource.title}
              imageSrc={resource.imageSrc}
              description={resource.description}
              pdfUrl={resource.pdfUrl}
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Home;
