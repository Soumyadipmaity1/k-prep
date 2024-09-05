import SubjectButton from "@/components/Subjects/2nd-year/3rdSenSubject";

const SchemeA = () => {
    return (
        <div className=" w-full h-full bg-[#f8e9f4] overflow-y-auto border rounded-xl recommended-scrollbar border-gray-300">
          <div className="max-h-screen font-bold sm:p-10 p-5">
<h1 className=" text-center sm:text-4xl text-3xl"><span className="modal-text">Pick a subject for your notes!</span></h1>
<div className="mt-10">

  <SubjectButton year={2} sem={1} />
</div>

          </div>
      </div>
    );
  };
  
  export default SchemeA;
  