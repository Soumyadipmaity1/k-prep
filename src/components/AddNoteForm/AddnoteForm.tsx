"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
// import isAuthenticated
import { isAuthenticated } from "./../../lib/Auth";
import { redirect } from "next/navigation";
const AddNoteForm: React.FC = () => {
  const isAuth = isAuthenticated();
  if (!isAuth) {
    redirect("/login");
  }
  const [year, setYear] = useState<string>("");
  const [semesterOptions, setSemesterOptions] = useState<string[]>([]);
  const [creditOptions] = useState<string[]>(["1", "2", "3", "4"]);

  const [resourceTitle, setResourceTitle] = useState<string>("");
  const [subjectFullName, setSubjectFullName] = useState<string>("");
  const [subjectShortName, setSubjectShortName] = useState<string>("");
  const [credit, setCredit] = useState<string>("");
  const [subjectCode, setSubjectCode] = useState<string>("");
  const [semester, setSemester] = useState<string>("");
  const [pdfLink, setPdfLink] = useState<string>("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
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
      resourceTitle &&
      subjectFullName &&
      subjectShortName &&
      credit &&
      subjectCode &&
      year &&
      semester &&
      pdfLink
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/v1/notes/add_note", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: resourceTitle,
          subjectFullName,
          sortName: subjectShortName,
          credit,
          subCode: subjectCode,
          year,
          semester,
          pdfLine: pdfLink,
        }),
      });

      const data = await res.json();
      // console.log(data);
console.log(res.status)
      if (res.status == 200) {
        toast.success("Data saved successfully");

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
        toast.error(error && error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form
      className="max-w-3xl bg-fuchsia-100 p-8 rounded-lg mx-auto"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-center mb-10">Add New Resource</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-fuchsia-100">
          <label className="block text-fuchsia-900 text-lg font-semibold mb-2">
            Resources Title:
          </label>
          <input
            type="text"
            className="w-full px-4 bg-fuchsia-50 border-fuchsia-500 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            placeholder="Enter Resources Title"
            value={resourceTitle}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setResourceTitle(e.target.value)
            }
          />
        </div>

        <div className="bg-fuchsia-100">
          <label className="block text-fuchsia-900 text-lg font-semibold mb-2">
            Subject Full Name:
          </label>
          <input
            type="text"
            className="w-full px-4 bg-fuchsia-50 border-fuchsia-500 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            placeholder="Enter Subject Full Name"
            value={subjectFullName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSubjectFullName(e.target.value)
            }
          />
        </div>

        <div className="bg-fuchsia-100">
          <label className="block text-fuchsia-900 text-lg font-semibold mb-2">
            Subject Short Name:
          </label>
          <input
            type="text"
            className="w-full px-4 bg-fuchsia-50 border-fuchsia-500 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            placeholder="Enter Short Form"
            value={subjectShortName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSubjectShortName(e.target.value)
            }
          />
        </div>

        <div className="bg-fuchsia-100">
          <label className="block text-fuchsia-900 text-lg font-semibold mb-2">
            Credit:
          </label>
          <select
            title="Select Credit"
            className="w-full px-4 bg-fuchsia-50 border-fuchsia-500 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            value={credit}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setCredit(e.target.value)
            }
          >
            <option value="">Select Credit</option>
            {creditOptions.map((credit, index) => (
              <option key={index} value={credit}>
                {credit}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-fuchsia-100">
          <label className="block text-fuchsia-900 text-lg font-semibold mb-2">
            Subject Code:
          </label>
          <input
            type="text"
            className="w-full px-4 bg-fuchsia-50 border-fuchsia-500 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            placeholder="Enter Subject Code"
            value={subjectCode}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSubjectCode(e.target.value)
            }
          />
        </div>

        <div className="bg-fuchsia-100">
          <label className="block text-fuchsia-900 text-lg font-semibold mb-2">
            Year:
          </label>
          <select
            title="Select Year"
            value={year}
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

        <div className="bg-fuchsia-100">
          <label className="block text-fuchsia-900 text-lg font-semibold mb-2">
            Semester:
          </label>
          <select
            title="Select Semester"
            value={semester}
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

        <div className="sm:col-span-2">
          <label className="block text-fuchsia-900 text-lg font-semibold mb-2">
            PDF Link:
          </label>
          <input
            type="url"
            className="w-full bg-fuchsia-50 border-fuchsia-500 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            placeholder="Enter Google Drive Link"
            value={pdfLink}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPdfLink(e.target.value)
            }
          />
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          type="submit"
          className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2 px-10 rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddNoteForm;
