"use client";

import { ObjectId } from "mongoose";
import React from "react";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
function ShowNotes() {
  const queryClient = useQueryClient();
  const router = useRouter();
  // Fetching notes
  const { isLoading, isError, data } = useQuery({
    queryKey: ["notes"],
    queryFn: () => axios.get("/api/note/view-note").then((res) => res.data),
  });

  // Mutation for deleting a note
  const deleteNoteMutation = useMutation({
    mutationFn: (id: ObjectId) => {
      return axios.delete(`/api/note/delete-note?id=${id}`);
    },
    onSuccess: () => {
      // Invalidate the "notes" query to refetch the updated list
      queryClient.invalidateQueries();
      toast.success("Note deleted successfully");
    },
    onError: () => {
      toast.error("Error deleting note");
    },
  });

  // Handle delete button click
  const handleDeleteNote = (id: ObjectId) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      deleteNoteMutation.mutate(id);
      // console.log(id)
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading notes</div>;

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
          {data?.notes?.length > 0 ? (
            data.notes.map((note: any) => (
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
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        router.push(`/admin/add-note?id=${note._id}`)
                      }
                      className="text-blue-500 hover:underline"
                    >
                      <MdOutlineEdit size={20} />
                    </button>
                    <button
                      onClick={() => handleDeleteNote(note._id)}
                      className="text-blue-500 hover:underline"
                    >
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
