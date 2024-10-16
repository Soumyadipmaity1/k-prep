"use client";

import { ObjectId } from "mongoose";
import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function ShowNotes() {
  const [notes, setNotes] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isLoading, isError, data } = useQuery({
    queryKey: ["notes"],
    queryFn: () => {
      return axios.get("/api/note/view-note");
    },
  });
  
  

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error}</div>;

  const handleDeleteNote = async (id: ObjectId) => {
    // const res = await
  };

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
          {data?.data?.notes.length > 0 ? (
            data?.data?.notes.map((note: any) => (
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
                    <button
                      onClick={() => handleDeleteNote(note?._id)}
                      className="text-blue-500 hover:underline"
                    >
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
