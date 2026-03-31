import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const LoginHooks = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(userData.email, userData.password);
      setUserData({
        email: "",
        password: "",
      });
      toast.success("Login successful");
      console.log("Returned user:", user);
      if (!user) {
        alert("Invalid email or password");
        return;
      }
      if (user.role === "Admin") {
        navigate("/admin");
      } else if (user.role === "Instructor") {
        navigate("/instructor");
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed ");
    }
  };
  return { userData, handleChange, handleSubmit };
};

export default LoginHooks;
