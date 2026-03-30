import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../config/ApiRoutes";

const Profile = () => {
  const [user, setUser] = useState(null);

  const getProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${baseUrl}/users/get-me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data.user);
    } catch (error) {
      console.error("PROFILE ERROR:", error.response?.data);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  if (!user) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md text-center">
      <img
        src={user.profile}
        alt="profile"
        className="w-32 h-32 object-cover rounded-full mx-auto"
      />

      <h2 className="text-xl font-bold mt-4">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
        className="mt-6 w-full p-2 rounded-xl cursor-pointer bg-red-500 hover:bg-red-700 text-white"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
