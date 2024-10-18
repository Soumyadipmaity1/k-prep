"use client";

import React, { useState } from "react";
import { MdOutlineVisibility, MdVisibilityOff } from "react-icons/md";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";

function Page() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");
  console.log(token);
  if (!token) {
    router.push("/");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate passwords
    if (newPassword === "" || confirmPassword === "") {
      setError("Both fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post('/api/resetPassword', {
        token,
        newPassword,
      });

      setSuccess(response.data.message); // Success message from server
    } catch (error) {
      console.error("Error changing password:", error);
      setError(error.response?.data?.error || "An error occurred");
    }
  };

  return (
    <div className="w-screen h-[85vh] overflow-hidden flex justify-center items-center">
      <div className="wrapper_box w-[400px] h-[400px] p-5 rounded-md border bg-slate-200 border-slate-500">
        <div className="heading text-2xl mb-5">Hi, Change your password</div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="relative mb-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="p-2 rounded border border-slate-400 w-full"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2 text-gray-500 focus:outline-none"
            >
              {!showPassword ? (
                <MdVisibilityOff className="h-5 w-5" aria-hidden="true" />
              ) : (
                <MdOutlineVisibility className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="relative mb-5">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="p-2 rounded border border-slate-400 w-full"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-2 top-2 text-gray-500 focus:outline-none"
            >
              {!showConfirmPassword ? (
                <MdVisibilityOff className="h-5 w-5" aria-hidden="true" />
              ) : (
                <MdOutlineVisibility className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
