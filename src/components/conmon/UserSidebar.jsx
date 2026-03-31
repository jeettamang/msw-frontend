import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  CreditCard,
  User,
  Home,
} from "lucide-react";

const UserSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* Overlay (mobile only) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4 z-50
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:block
        `}
      >
        <h2 className="text-xl font-bold mb-6">User Panel</h2>

        <nav className="flex flex-col gap-3">
          <NavLink
            to="/user/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded ${
                isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <LayoutDashboard size={20} /> Dashboard
          </NavLink>

          <NavLink
            to="/user/courses"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded ${
                isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <BookOpen size={20} /> My Courses
          </NavLink>

          <NavLink
            to="/user/payments"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded ${
                isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <CreditCard size={20} /> Payments
          </NavLink>

          <NavLink
            to="/user/profile"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded ${
                isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <User size={20} /> Profile
          </NavLink>

          <NavLink
            to="/"
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-200"
          >
            <Home size={20} /> Go Home
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default UserSidebar;
