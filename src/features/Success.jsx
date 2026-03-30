import { useEffect } from "react";
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
