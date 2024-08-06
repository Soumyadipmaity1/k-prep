import SubjectButton from "@/components/Subjects/2nd-year/4thSemSubject";

const SchemeA = () => {
    return (
        <div className="w-full h-full bg-[#f8e9f4] overflow-y-auto border rounded-xl border-gray-900">
          <div className="max-h-screen font-bold p-10">
<h1 className=" text-center text-4xl"><span className="modal-text">Pick a subject for your notes!</span></h1>
<div className="mt-10">

  <SubjectButton/>
</div>

          </div>
      </div>
    );
  };
  
  export default SchemeA;
  