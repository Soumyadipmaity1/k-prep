import SubjectButton from "@/components/Subjects/SchemeASub";

const SchemeA = () => {
    return (
        <div className="w-full h-full bg-[#f8e9f4] overflow-y-auto border rounded-xl border-gray-300">
          <div className="max-h-screen font-bold p-10">
<h1 className="modal-text text-center text-4xl">Pick a subject for your notes!</h1>
<div className="mt-10">

  <SubjectButton/>
</div>

          </div>
      </div>
    );
  };
  
  export default SchemeA;
  