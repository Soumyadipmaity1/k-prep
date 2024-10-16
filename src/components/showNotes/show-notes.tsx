"use client";

import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
function ShowNotes() {
  const [notes, setNotes] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("/api/note/view-note"); // Adjust this URL to your API endpoint
        // console.log(response)
        if (response.status != 200) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data.notes);
        setNotes(data.notes);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="relative overflow-x-auto mt-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Subject Name
            </th>
            <th scope="col" className="px-6 py-3">
              Year
            </th>
            <th scope="col" className="px-6 py-3">
              Semester
            </th>
            <th scope="col" className="px-6 py-3">
              Show
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {notes.length > 0 ? (
            notes.map((note: any) => (
              <tr
                key={note.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {note.subjectFullname}
                </th>
                <td className="px-6 py-4">{note.year}</td>
                <td className="px-6 py-4">{note.semister}</td>
                <td className="px-6 py-4">
                  <button className="text-blue-500 hover:underline">
                    View
                  </button>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2 ">
                    <button className="text-blue-500 hover:underline">
                      <MdOutlineEdit size={20} />
                    </button>
                    <button className="text-blue-500 hover:underline">
                      <MdDeleteOutline size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-6 py-4 text-center">No notes available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ShowNotes;
