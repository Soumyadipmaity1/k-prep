import CardResources from "@/components/RecommendedNotes/1st-Year/NotesCard";

const CseNotesPage = () => {
  return (
    <div className="sm:w-full w-80 h-full bg-[#f8e9f4] overflow-y-auto recommended-scrollbar border rounded-xl border-gray-300">
      <div className="bg-[#f8e9f4] mx-auto h-screen p-3 sm:p-10">
        <h1 className="sm:text-4xl text-xl font-bold mb-5">Recommended Notes for CSE</h1>
        <div className="bg-[#f8e9f4]">
          <h1 className="mb-4 sm:text-2xl text-base pl-1">1st Year Notes:</h1>
          <CardResources />
        </div>
        <div className="bg-[#f8e9f4]">
          <h1 className="my-4 sm:text-2xl text-base pl-1">2nd Year Notes:</h1>
          <CardResources />
        </div>
        <div className="bg-[#f8e9f4]">
          <h1 className="my-4 sm:text-2xl text-base pl-1">3rd Year Notes:</h1>
          <CardResources />
        </div>
        <div className="bg-[#f8e9f4]">
          <h1 className="my-4 sm:text-2xl text-base pl-1">4th Year Notes:</h1>
          <CardResources />
        </div>
      </div>
    </div>
  );
};

export default CseNotesPage;
