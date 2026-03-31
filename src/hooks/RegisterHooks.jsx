import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../config/ApiRoutes";
import { toast } from "react-toastify";

const RegisterHooks = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    profile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", userData.name);
      formData.append("email", userData.email);
      formData.append("password", userData.password);
      formData.append("profile", userData.profile);

      const res = await axios.post(`${baseUrl}/users/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Registration successful ");
      console.log("USER DATA:", res.data);
      setUserData({
        name: "",
        email: "",
        password: "",
        profile: null,
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed ");
    }
  };

  return {
    userData,
    handleChange,
    handleSubmit,
  };
};

export default RegisterHooks;
