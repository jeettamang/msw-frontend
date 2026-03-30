import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const EnrollCourse = () => {
  const { state } = useContext(AuthContext);
  const userInfo = state.userInfo
  const { id } = useParams();
  const navigate = useNavigate();
  const { state: course } = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    if (userInfo) {
      setFormData((prev) => ({
        ...prev,
        name: userInfo.name || "",
        email: userInfo.email || "",
      }));
    }
  }, [userInfo]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!course) {
    return <p className="text-center mt-10">No course data</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/payment", {
      state: {
        ...formData,
        course: id,
        amount: course.price,
        title: course.title,
      },
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Enroll Now</h2>

      <p className="font-semibold">{course.title}</p>
      <p className="text-green-600 font-bold mb-4">Rs. {course.price}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          readOnly
          value={formData.name}
          className="w-full border p-2 rounded"
        />
        <input
          name="email"
          placeholder="Email"
          readOnly
          value={formData.email}
          
          className="w-full border p-2 rounded"
        />
        <input
          name="address"
          placeholder="Address"
          required
          value={formData.address}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="+977...."
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button className="w-full bg-green-500 text-white py-2 rounded-lg">
          Confirm Enrollment
        </button>
      </form>
    </div>
  );
};

export default EnrollCourse;
