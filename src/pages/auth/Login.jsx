import TextField from "../../components/TextField";
import LoginHooks from "../../hooks/LoginHooks";

const Login = () => {
  const { userData, handleChange, handleSubmit } = LoginHooks();
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
