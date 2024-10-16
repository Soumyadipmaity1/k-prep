"use client";

import ShowNotes from "@/components/showNotes/show-notes";

const ViewNotes = () => {
  return (
    <div className="p-6 mx-auto max-w-3xl  ">
      <h2 className="text-xl font-semibold mb-4">View Notes</h2>
      <p className="text-gray-700">This page is for admin to view all the notes.</p>
      <ShowNotes/>
    </div>
  );
};

export default ViewNotes;
