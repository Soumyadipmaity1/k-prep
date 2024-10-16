import React from 'react';

const Profile = () => {
  const userProfile = {
    name: "Abhik Patra",
    email: "abhik.patra@example.com",
    bio: "Full Stack MERN Developer, Web Development Lead at USC KIIT.",
    avatar: "https://via.placeholder.com/150", // Placeholder image for the profile picture
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <div className="text-center">
          <img
            src={userProfile.avatar}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h1 className="text-2xl font-semibold text-gray-900">{userProfile.name}</h1>
          <p className="text-gray-600">{userProfile.email}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-800">Bio</h2>
          <p className="text-gray-600 mt-2">{userProfile.bio}</p>
        </div>

        <div className="mt-6 text-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
