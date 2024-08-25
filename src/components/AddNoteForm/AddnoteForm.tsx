"use client"
import { useState } from 'react';

const AddNoteForm = () => {
  const [year, setYear] = useState('');
  const [semesterOptions, setSemesterOptions] = useState<string[]>([]);
  const [creditOptions, setCreditOptions] = useState<string[]>(['1', '2', '3', '4']);

  const handleYearChange = (selectedYear: string) => {
    setYear(selectedYear);
    switch (selectedYear) {
      case '1st Year':
        setSemesterOptions(['1st Sem', '2nd Sem']);
        break;
      case '2nd Year':
        setSemesterOptions(['3rd Sem', '4th Sem']);
        break;
      case '3rd Year':
        setSemesterOptions(['5th Sem', '6th Sem']);
        break;
      default:
        setSemesterOptions([]);
    }
  };

  return (
    <form className="max-w-3xl bg-fuchsia-100 p-8 rounded-lg mx-auto ">
      <h2 className="text-2xl font-bold text-center mb-10">Add New Resource</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
        <div className='bg-fuchsia-100'>
          <label className="block text-fuchsia-900  text-lg font-semibold mb-2">Resources Title:</label>
          <input
            type="text"
            className="w-full px-4 bg-fuchsia-50 border-fuchsia-500 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            placeholder="Enter Resources Title"
          />
        </div>
        <div className='bg-fuchsia-100'>
          <label className="block text-fuchsia-900  text-lg font-semibold mb-2">Subject Full Name:</label>
          <input
            type="text"
            className="w-full px-4 bg-fuchsia-50 border-fuchsia-500 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            placeholder="Enter Subject Full Name"
          />
        </div>
        <div className='bg-fuchsia-100'>
          <label className="block text-fuchsia-900  text-lg font-semibold mb-2">Subject Short Name:</label>
          <input
            type="text"
            className="w-full px-4 bg-fuchsia-50 border-fuchsia-500 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            placeholder="Enter Short Form"
          />
        </div>
        <div className='bg-fuchsia-100'>
          <label className="block text-fuchsia-900  text-lg font-semibold mb-2">Credit:</label>
          <select
            title="Select Credit"
            className="w-full px-4 bg-fuchsia-50 border-fuchsia-500 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
          >
            <option value="">Select Credit</option>
            {creditOptions.map((credit, index) => (
              <option key={index} value={credit}>
                {credit}
              </option>
            ))}
          </select>
        </div>
        <div className='bg-fuchsia-100'>
          <label className="block text-fuchsia-900  text-lg font-semibold mb-2">Subject Code:</label>
          <input
            type="text"
            className="w-full px-4 bg-fuchsia-50 border-fuchsia-500 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            placeholder="Enter Subject Code"
          />
        </div>
        <div className='bg-fuchsia-100'>
          <label className="block text-fuchsia-900  text-lg font-semibold mb-2">Year:</label>
          <select
                      title="Select Year"

            value={year}
            onChange={(e) => handleYearChange(e.target.value)}
            className="w-full bg-fuchsia-50 border-fuchsia-500 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
          >
            <option value="" >Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
          </select>
        </div>
        <div className='bg-fuchsia-100'>
          <label className="block text-fuchsia-900  text-lg font-semibold mb-2">Semester:</label>
          <select
                      title="Select Semester"

            className="w-full bg-fuchsia-50 border-fuchsia-500 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
          >
            <option value="">Select Semester</option>
            {semesterOptions.map((sem, index) => (
              <option key={index} value={sem}>
                {sem}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-fuchsia-900 text-lg font-semibold mb-2">PDF Link:</label>
          <input
            type="url"
            className="w-full bg-fuchsia-50 border-fuchsia-500 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            placeholder="Enter Google Drive Link"
          />
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          type="submit"
          className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2 px-10 rounded-md "
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddNoteForm;
