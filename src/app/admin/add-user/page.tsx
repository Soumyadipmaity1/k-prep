"use client";

import React, { useState } from "react";

const AddUser = () => {
  const [formData, setFormData] = useState({ name: "", email: "", role: "admin" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("User added:", formData);
      setFormData({ name: "", email: "", role: "admin" });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="p-6 mx-auto max-w-3xl bg-[#fae8ff] rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-center my-4 mb-8 ">Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block  text-lg font-semibold text-fuchsia-800">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-600 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold text-fuchsia-800">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-600 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block text-lg font-semibold text-fuchsia-800">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-600 border rounded-md"
          >
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-fuchsia-600 rounded-md hover:bg-fuchsia-800"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
