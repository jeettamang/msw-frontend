import TextField from "../../components/TextField";
import { useNavigate } from "react-router-dom";
import RegisterHooks from "../../hooks/RegisterHooks";

const Register = () => {
  const navigate = useNavigate();

  const { userData, handleChange, handleSubmit } = RegisterHooks();

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-center p-2 text-2xl font-semibold font-serif">
        Get Registered
      </h2>

      <form onSubmit={handleSubmit}>
        {userData.profile && (
          <div className="mt-4 flex justify-center">
            <img
              src={URL.createObjectURL(userData.profile)}
              alt="preview"
              className="w-32 h-32 object-cover rounded-full"
            />
          </div>
        )}

        <TextField
          type="text"
          label="Name"
          name="name"
          value={userData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

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
          placeholder="**********"
        />

        <div className="flex flex-col gap-1 mt-3">
          <label className="text-sm font-medium">Profile Image</label>

          <input
            type="file"
            name="profile"
            accept="image/*"
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
        </div>

        <button
          onClick={() => navigate("/login")}
          type="submit"
          className="w-full p-2 mt-4 rounded-2xl bg-blue-500 hover:bg-blue-700 cursor-pointer text-white"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
