"use client"

import React, { useState } from 'react';

function Page() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate passwords
    if (newPassword === '' || confirmPassword === '') {
      setError('Both fields are required.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Here you can handle the password change logic, e.g., API call

    // For demo purposes, we'll just set a success message
    setSuccess('Password changed successfully!');
  };

  return (
    <div className='w-screen h-[85vh] overflow-hidden flex justify-center items-center'>
      <div className="wrapper_box w-[400px] h-[400px] p-5 rounded-md border bg-slate-200 border-slate-500">
        <div className="heading text-2xl mb-5">
          Hi, Change your password
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mb-3 p-2 rounded border border-slate-400"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mb-5 p-2 rounded border border-slate-400"
            required
          />
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
