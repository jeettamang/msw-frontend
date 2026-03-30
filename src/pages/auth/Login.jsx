import TextField from "../../components/TextField";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
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
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-center p-2 text-2xl font-semibold font-serif">
        Login
      </h2>
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          label="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <TextField
          type="password"
          label="Password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          placeholder="************************"
        />

        <button
          type="submit"
          className="w-full p-2 mt-4 rounded-2xl bg-blue-500 hover:bg-blue-700 cursor-pointer text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
