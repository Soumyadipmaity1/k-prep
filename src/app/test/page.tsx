"use client"; // Use this when dealing with client-side components

import React from "react";

export default function TestPage() {
  const handleBtn = async () => {
    try {
      const res = await fetch("http://localhost:5000/test", {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={handleBtn}>Try API</button>
      <p>Page</p>
    </div>
  );
}
