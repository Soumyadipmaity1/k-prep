"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useSearchParams } from "next/navigation";
import axios from "axios";

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

  const [error, setError] = useState<string>("");
  const params = useSearchParams();
  const id = params.get("id")||"";
  useEffect(() => {
    // If updating a note, fetch its data and populate the form fields
    if (id) {
      const fetchNote = async () => {
        try {
          const res = await axios.get(`/api/note/view-note?id=${id}`);
          const note = res.data.notes;
          setResourceTitle(note.resourcestitle);
          setSubjectFullName(note.subjectFullname);
          setSubjectShortName(note.subjectsortname);
          setCredit(note.credit);
          setSubjectCode(note.subjectcode);
          setYear(note.year);
          setSemester(note.semister);
          setPdfLink(note.pdflink);
          handleYearChange(note.year); // Update semester options based on year
        } catch (error) {
          console.error("Error fetching note:", error);
          toast.error("Failed to load note data");
        }
      };
      fetchNote();
    }
  }, [id]);

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
    const isValid = (
      resourcestitle &&
      subjectFullname &&
      subjectsortname &&
      credit &&
      subjectcode &&
      year &&
      semister &&
      pdflink
    );

    if (!isValid) {
      toast.error("Please fill in all fields.");
    }

    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisable(true);
    setLoading(true);

    if (!validateForm()) {
      setIsDisable(false);
      setLoading(false);
      return;
    }

    try {
      const payload = {
        resourcestitle,
        subjectFullname,
        subjectsortname,
        credit,
        subjectcode,
        year,
        semister,
        pdflink,
      };

      let res;
      if (id) {
        // Update existing note
        res = await fetch(`/api/note/update-note?id=${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      } else {
        // Add new note
        res = await fetch("/api/note/add-note", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      }

      const data = await res.json();

      if (res.ok) {
        toast.success(id ? "Note updated successfully" : "Note added successfully");
        if (!id) {
          // Reset form fields after adding a new note
          setResourceTitle("");
          setSubjectFullName("");
          setSubjectShortName("");
          setCredit("");
          setSubjectCode("");
          setYear("");
          setSemester("");
          setPdfLink("");
          setSemesterOptions([]);
        }
      } else {
        setError(data.message);
        toast.error(data.message); // Show error from API
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    }
    setIsDisable(false);
    setLoading(false);
  };

  return (
    <form
      className="max-w-3xl bg-fuchsia-100 p-8 rounded-lg mx-auto"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-center mb-10">
        {id ? "Update" : "Add New"} Resource
      </h2>

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
            onChange={(e: ChangeEvent<HTMLInputElement>) => setResourceTitle(e.target.value)}
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
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSubjectFullName(e.target.value)}
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
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSubjectShortName(e.target.value)}
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
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setCredit(e.target.value)}
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
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSubjectCode(e.target.value)}
          />
        </div>

        {/* Year */}
        <div className="bg-fuchsia-100">
          <label className="block text-fuchsia-900 text-lg font-semibold mb-2">
            Year:
          </label>
          <select
            disabled={isDisable}
            title="Select Year"
            className="w-full px-4 bg-fuchsia-50 border-fuchsia-500 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            value={year}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => handleYearChange(e.target.value)}
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
            className="w-full px-4 bg-fuchsia-50 border-fuchsia-500 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            value={semister}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setSemester(e.target.value)}
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
        <div className="bg-fuchsia-100">
          <label className="block text-fuchsia-900 text-lg font-semibold mb-2">
            PDF Link:
          </label>
          <input
            disabled={isDisable}
            type="text"
            className="w-full px-4 bg-fuchsia-50 border-fuchsia-500 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            placeholder="Enter PDF Link"
            value={pdflink}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPdfLink(e.target.value)}
          />
        </div>
      </div>

      {error && <p className="text-red-600">{error}</p>}

      <button
        type="submit"
        className={`mt-6 w-full py-3 rounded-lg font-bold text-white ${
          isDisable ? "bg-fuchsia-300" : "bg-fuchsia-600 hover:bg-fuchsia-700"
        }`}
        disabled={isDisable}
      >
        {loading ? (
          <ScaleLoader color="white" height={12} />
        ) : id ? (
          "Update Note"
        ) : (
          "Add Note"
        )}
      </button>
    </form>
  );
};

export default AddNoteForm;
