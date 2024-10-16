"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
import ScaleLoader from "react-spinners/ScaleLoader";
// import isAuthenticated
// import { isAuthenticated } from "./../../lib/Auth";
// import { redirect } from "next/navigation";
import { useSearchParams } from "next/navigation";
const AddNoteForm: React.FC = () => {
  const [isDisable, setIsDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState<string>("");
  const [semesterOptions, setSemesterOptions] = useState<string[]>([]);
  const [creditOptions] = useState<string[]>(["1", "2", "3", "4"]);

  const [resourcestitle, setResourceTitle] = useState<string>("");
  const [subjectFullname, setSubjectFullName] = useState<string>("");
  const [subjectsortname, setSubjectShortName] = useState<string>("");
  const [credit, setCredit] = useState<string>("");
  const [subjectcode, setSubjectCode] = useState<string>("");
  const [semister, setSemester] = useState<string>("");
  const [pdflink, setPdfLink] = useState<string>("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const params = useSearchParams();
  const id = params.get("id");
  const handleYearChange = (selectedYear: string) => {
    setYear(selectedYear);
    switch (selectedYear) {
      case "1":
        setSemesterOptions(["1st Sem", "2nd Sem"]);
        break;
      case "2":
        setSemesterOptions(["3rd Sem", "4th Sem"]);
        break;
      case "3":
        setSemesterOptions(["5th Sem", "6th Sem"]);
        break;
      default:
        setSemesterOptions([]);
    }
  };

  const validateForm = () => {
    return (
      resourcestitle &&
      subjectFullname &&
      subjectsortname &&
      credit &&
      subjectcode &&
      year &&
      semister &&
      pdflink
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisable(true);
    setLoading(true);
    if (!validateForm()) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("/api/note/add-note", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resourcestitle, // matches API field name
          subjectFullname, // matches API field name
          subjectsortname, // matches API field name
          credit, // matches API field name
          subjectcode, // matches API field name
          year, // matches API field name
          semister, // matches API field name
          pdflink, // matches API field name
        }),
      });

      const data = await res.json();
      // console.log(res.status);

      if (res.status === 201) {
        toast.success("Data saved successfully");

        // Reset form fields
        setResourceTitle("");
        setSubjectFullName("");
        setSubjectShortName("");
        setCredit("");
        setSubjectCode("");
        setYear("");
        setSemester("");
        setPdfLink("");
        setSemesterOptions([]);
      } else {
        setError(data.message);
        toast.error(data.message); // Show error from API
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
    setIsDisable(false);
    setLoading(false);
  };

  return (
    <form
      className="max-w-3xl bg-fuchsia-100 p-8 rounded-lg mx-auto"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-center mb-10">{id?"Update":"Add New"} Resource</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Resource Title */}
        <div className="bg-fuchsia-100">
          <label className="block text-fuchsia-900 text-lg font-semibold mb-2">
            Resources Title:
          </label>
          <input
            disabled={isDisable}
            type="text"
            className="w-full px-4 bg-fuchsia-50 border-fuchsia-500 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            placeholder="Enter Resources Title"
            value={resourcestitle}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setResourceTitle(e.target.value)
            }
          />
        </div>

        {/* Subject Full Name */}
        <div className="bg-fuchsia-100">
          <label className="block text-fuchsia-900 text-lg font-semibold mb-2">
            Subject Full Name:
          </label>
          <input
            disabled={isDisable}
            type="text"
            className="w-full px-4 bg-fuchsia-50 border-fuchsia-500 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            placeholder="Enter Subject Full Name"
            value={subjectFullname}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSubjectFullName(e.target.value)
            }
          />
        </div>

        {/* Subject Short Name */}
        <div className="bg-fuchsia-100">
          <label className="block text-fuchsia-900 text-lg font-semibold mb-2">
            Subject Short Name:
          </label>
          <input
            disabled={isDisable}
            type="text"
            className="w-full px-4 bg-fuchsia-50 border-fuchsia-500 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            placeholder="Enter Short Form"
            value={subjectsortname}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSubjectShortName(e.target.value)
            }
          />
        </div>

        {/* Credit */}
        <div className="bg-fuchsia-100">
          <label className="block text-fuchsia-900 text-lg font-semibold mb-2">
            Credit:
          </label>
          <select
            disabled={isDisable}
            title="Select Credit"
            className="w-full px-4 bg-fuchsia-50 border-fuchsia-500 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            value={credit}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setCredit(e.target.value)
            }
          >
            <option value="">Select Credit</option>
            {creditOptions.map((creditValue, index) => (
              <option key={index} value={creditValue}>
                {creditValue}
              </option>
            ))}
          </select>
        </div>

        {/* Subject Code */}
        <div className="bg-fuchsia-100">
          <label className="block text-fuchsia-900 text-lg font-semibold mb-2">
            Subject Code:
          </label>
          <input
            disabled={isDisable}
            type="text"
            className="w-full px-4 bg-fuchsia-50 border-fuchsia-500 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            placeholder="Enter Subject Code"
            value={subjectcode}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSubjectCode(e.target.value)
            }
          />
        </div>

        {/* Year */}
        <div className="bg-fuchsia-100">
          <label className="block text-fuchsia-900 text-lg font-semibold mb-2">
            Year:
          </label>
          <select
            title="Select Year"
            value={year}
            disabled={isDisable}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              handleYearChange(e.target.value)
            }
            className="w-full bg-fuchsia-50 border-fuchsia-500 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
          >
            <option value="">Select Year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
          </select>
        </div>

        {/* Semester */}
        <div className="bg-fuchsia-100">
          <label className="block text-fuchsia-900 text-lg font-semibold mb-2">
            Semester:
          </label>
          <select
            disabled={isDisable}
            title="Select Semester"
            value={semister}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setSemester(e.target.value)
            }
            className="w-full bg-fuchsia-50 border-fuchsia-500 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
          >
            <option value="">Select Semester</option>
            {semesterOptions.map((sem, index) => (
              <option key={index} value={sem}>
                {sem}
              </option>
            ))}
          </select>
        </div>

        {/* PDF Link */}
        <div className="sm:col-span-2">
          <label className="block text-fuchsia-900 text-lg font-semibold mb-2">
            PDF Link:
          </label>
          <input
            disabled={isDisable}
            type="url"
            className="w-full bg-fuchsia-50 border-fuchsia-500 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            placeholder="Enter Google Drive Link"
            value={pdflink}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPdfLink(e.target.value)
            }
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center mt-8">
        <button
          disabled={isDisable}
          type="submit"
          className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2 px-10 rounded-md"
        >
          {loading ? (
            <ScaleLoader color="white" width={5} height={10} />
          ) : (
            "Add Note"
          )}
        </button>
      </div>
    </form>
  );
};

export default AddNoteForm;
