"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type CardProps = {
  subjectFullName: string;
  description: string;
  subjectcode: string;
  credit: number;
  pdfUrl: string;
};

const Card: React.FC<CardProps> = ({
  subjectFullName,
  description,
  subjectcode,
  credit,
  pdfUrl,
}) => {
  const router = useRouter();

  const handleClick = () => {
    const route = `/cse-notes/2nd-year/3rdSem/${subjectFullName
      .toLowerCase()
      .replace(/ /g, "-")}`;
    router.push(route);
  };

  return (
    <div
      onClick={handleClick}
      className="flex subject-card px-5 rounded-xl p-4 shadow-lg sm:m-5 my-3 cursor-pointer"
    >
      <div className="flex w-28 mr-6 rounded-xl items-center bg-white justify-center ">
        <div className="rounded-full flex items-center justify-center">
          <span className="text-3xl font-bold text-purple-500">👤</span>
        </div>
      </div>
      <div className="text-start px-4">
        <h2 className="sm:text-2xl text-xl font-bold text-white">
          {subjectFullName}
        </h2>
        <p className="text-white sm:text-base text-[15px]">{description}</p>
        <div className="sm:mt-4 mt-2">
          <p className="text-white">Code: {subjectcode}</p>
          <p className="text-white">Credit: {credit}</p>
          <a
            href={pdfUrl}
            className="text-blue-300 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Notes
          </a>
        </div>
      </div>
    </div>
  );
};

const fetchNotes = async (
  year: number,
  sem: number | string
): Promise<CardProps[]> => {
  const url =
    typeof sem === "string"
      ? `/api/note/view-note?year=${year}&scheme=${sem}`
      : `/api/note/view-note?year=${year}&sem=${sem}`;
  const response = await fetch(url);
  // console.log(response)
  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }
  const data = await response.json();
  // console.log(data)
  return data.notes;
};

const ThirdSemSubject = ({
  year,
  sem,
}: {
  year: number;
  sem: number | string;
}) => {
  const [notes, setNotes] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAndSetNotes = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchedNotes = await fetchNotes(year, sem); // Fetch notes by year and semester
      setNotes(fetchedNotes);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  }, [year, sem]);

  useEffect(() => {
    fetchAndSetNotes();
  }, [year, sem]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  console.log("Hello", notes);
  return (
    <div className="flex flex-wrap justify-center items-center">
      {notes && notes.length > 0 ? (
        notes.map((data, index) => (
          <Card
            key={index}
            subjectFullName={data.subjectFullName}
            description={data.description}
            subjectcode={data.subjectcode}
            credit={data.credit}
            pdfUrl={data.pdfUrl}
          />
        ))
      ) : (
        <p>No notes found for this semester.</p>
      )}
    </div>
  );
};

export default ThirdSemSubject;
