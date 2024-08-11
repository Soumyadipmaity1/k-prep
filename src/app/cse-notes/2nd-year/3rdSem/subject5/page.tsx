import Subject1Notes from "@/components/Resource1stYear/ResourceSchemeA/Subject1Notes";

const Subject1 = () => {
    return (
        <div className="w-full h-full bg-[#f8e9f4] overflow-y-auto border rounded-xl border-gray-300">
          <div className="max-h-screen font-bold px-3 py-5 sm:p-10">
<h1 className="text-center  text-4xl"><span className="modal-text ">Pick your notes!</span></h1>
<div className="mt-10">

<Subject1Notes/>
</div>

          </div>
      </div>
    );
  };
  
  export default Subject1;
  