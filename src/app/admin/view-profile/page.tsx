"use client";

import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

// Define a TypeScript interface for the user profile
interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  avatar: string;
}

const Profile: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null); // State to hold user data
  const [loading, setLoading] = useState<boolean>(true); // State to handle loading
  const { data: session } = useSession();

  // Guard against undefined session
  const email = session?.user?.email || "";

  // Fetch user data from API
  useEffect(() => {
    if (email) {
      const fetchUserData = async () => {
        try {
          const response = await fetch(`/api/user/profile?email=${email}`); // Replace with your actual API URL
          const data: { user: UserProfile } = await response.json(); // Expect the API response to match UserProfile type
          setUserProfile(data?.user); // Set fetched data to state
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false); // Stop loading
        }
      };
  
      fetchUserData();
    }
  }, [email]); // Ensure the effect runs when `email` changes

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p>Failed to load user data.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <div className="text-center">
          <div className="flex justify-center items-center">
            <div className="profile_photo w-[60px] rounded-full h-[60px] bg-[#FF77B7] text-white flex justify-center items-center">
              {userProfile.firstName[0]}
            </div>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">
            {userProfile.firstName} {userProfile.lastName}
          </h1>
          <p className="text-gray-600">{userProfile.email}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-800">Role</h2>
          <p className="text-gray-600 mt-2">{userProfile.role}</p>
        </div>

        <div className="mt-6 text-center">
          {/* <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Edit Profile
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
