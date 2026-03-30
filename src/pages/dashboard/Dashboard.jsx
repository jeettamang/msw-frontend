import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../config/ApiRoutes";
import DashboardCard from "../../components/card/DashboardCard";

const Dashboard = () => {
  const [data, setData] = useState({
    totalCourses: 0,
    paidCourses: 0,
    pendingPayments: 0,
    totalAmountPaid: 0,
    recentEnrollments: [],
  });

  const fetchDashboard = async () => {
    try {
      const res = await axios.get(`${baseUrl}/enrollment/user-dashboard`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("Dashboard error:", error);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <DashboardCard title="Total Courses" value={data.totalCourses} />
        <DashboardCard title="Paid Courses" value={data.paidCourses} />
        <DashboardCard title="Pending Payments" value={data.pendingPayments} />
        <DashboardCard
          title="Total Paid"
          value={`Rs. ${data.totalAmountPaid}`}
        />
      </div>

      {/* Recent Enrollments */}
      <div className="mt-10 bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Recent Enrollments</h2>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Course</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Payment Method</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>

          <tbody>
            {data.recentEnrollments.map((enroll) => (
              <tr key={enroll._id} className="text-center border">
                <td className="p-2 border">{enroll.course?.title}</td>

                <td className="p-2 border">Rs. {enroll.amount}</td>

                <td className="p-2 border">{enroll.payment_method}</td>

                <td className="p-2 border">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      enroll.status === "paid" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {enroll.status}
                  </span>
                </td>

                <td className="p-2">
                  {new Date(enroll.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
