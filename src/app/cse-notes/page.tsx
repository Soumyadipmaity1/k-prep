import CardResources from "@/components/RecommendedNotes/1st-Year/NotesCard";

const CseNotesPage = () => {
  return (
      <div className="w-full h-full ml-2 bg-[#f8e9f4] overflow-y-auto overflow-x-hidden border rounded-xl border-gray-300">
        <div className="bg-[#f8e9f4] mx-auto h-screen p-10">
  <h1 className="text-4xl font-bold mb-5">Views Recommended Notes for CSE</h1>
    <div className="bg-[#f8e9f4] ">
      <h1 className="mb-4 text-2xl pl-1">1st Year Notes:</h1>

<CardResources/>
</div>
<div className="bg-[#f8e9f4] ">
      <h1 className="my-4 text-2xl pl-1">2nd Year Notes:</h1>

<CardResources/>
</div>
<div className="bg-[#f8e9f4] ">
      <h1 className="my-4 text-2xl pl-1">3rd Year Notes:</h1>

<CardResources/>
</div>
<div className="bg-[#f8e9f4] ">
      <h1 className="my-4 text-2xl pl-1">4th Year Notes:</h1>

<CardResources/>
</div>
    </div>

    </div>
  );
};

export default CseNotesPage;
