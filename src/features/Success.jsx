{
  /*import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Success() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const dataParam = params.get("data");

    if (!dataParam) return;

    const data = JSON.parse(decodeURIComponent(dataParam));

    const saveEnrollment = async () => {
      try {
        await axios.post("http://localhost:5000/api/enrollments", data);

        console.log("Enrollment saved");
      } catch (error) {
        console.log("Save error:", error.response?.data || error.message);
      }
    };

    saveEnrollment();
  }, [location]);

  return (
    <div className="text-center mt-20 space-y-3">
      <h1 className="text-3xl text-green-600 font-bold">
        🎉 Payment Successful!
      </h1>

      <button
        onClick={() => navigate("/user/dashboard")}
        className="text-center text-2xl font-serif p-2 bg-amber-500 hover:bg-amber-700 text-white rounded-2xl"
      >
        Go to dashboard
      </button>
    </div>
  );
}

export default Success;
**/
}

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("Payment verification handled by backend redirect.");
  }, [location]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <div className="bg-green-100 p-6 rounded-full">
        <h1 className="text-6xl">🎉</h1>
      </div>

      <h1 className="text-4xl text-green-600 font-bold">Payment Successful!</h1>

      <p className="text-gray-600 text-lg">
        Your enrollment has been confirmed. You can now access your course.
      </p>

      <button
        onClick={() => navigate("/user/dashboard")}
        className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white text-xl font-semibold rounded-2xl shadow-lg transition-all"
      >
        Go to Dashboard
      </button>
    </div>
  );
}

export default Success;
