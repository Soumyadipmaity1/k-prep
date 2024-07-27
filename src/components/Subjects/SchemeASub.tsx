"use client";

import React from 'react';
import { FaSmile, FaBook, FaLaptop } from 'react-icons/fa';
import { IconType } from 'react-icons';

// Interface for subject data
interface Subject {
  name: string;
  icon: IconType;
  route: string;
}

// Example subjects
const subjects: Subject[] = [
  { name: 'Subject 1', icon: FaSmile, route: '/cse-notes/1st-year/schemeA/cse-subject1' },
  { name: 'Subject 2', icon: FaBook, route: '/cse-notes/1st-year/schemeA/cse-subject2' },
  { name: 'Subject 3', icon: FaLaptop, route: '/cse-notes/1st-year/schemeA/cse-subject3' },
  { name: 'Subject 1', icon: FaSmile, route: '/cse-notes/1st-year/schemeA/cse-subject1' },
  { name: 'Subject 2', icon: FaBook, route: '/cse-notes/1st-year/schemeA/cse-subject2' },
  { name: 'Subject 3', icon: FaLaptop, route: '/cse-subject3' },
  { name: 'Subject 1', icon: FaSmile, route: '/cse-subject1' },
  { name: 'Subject 2', icon: FaBook, route: '/cse-subject2' },
  // { name: 'Subject 3', icon: FaLaptop, route: '/cse-subject3' },
];

const SubjectButton: React.FC = () => {
  const handleClick = (route: string) => {
    window.location.href = route;
  };

  return (
    <div className="flex flex-wrap justify-center gap-8 pt-10 w-full">
      {subjects.map((subject, index) => (
        <div
          key={index}
          onClick={() => handleClick(subject.route)}
          className="flex items-center space-x-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-4 shadow-lg flex-shrink-0 cursor-pointer"
          style={{ minWidth: '400px', maxWidth: '400px' }} 
        >
          <div className="bg-white p-2 rounded-full">
            <subject.icon className="text-purple-500 w-6 h-6" />
          </div>
          <span className="text-white text-lg font-semibold">{subject.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SubjectButton;
