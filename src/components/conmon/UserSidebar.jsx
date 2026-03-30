import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  CreditCard,
  User,
  Home,
} from "lucide-react";

const UserSidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen p-4 sticky top-0">
      <h2 className="text-xl font-bold mb-6">User Panel</h2>

      <nav className="flex flex-col gap-3 mt-6">
        <NavLink
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200"
          to="/user/dashboard"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200"
          to="/user/courses"
        >
          <BookOpen size={20} />
          My Courses
        </NavLink>

        <NavLink
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200"
          to="/user/payments"
        >
          <CreditCard size={20} />
          Payments
        </NavLink>

        <NavLink
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200"
          to="/user/profile"
        >
          <User size={20} />
          Profile
        </NavLink>

        <NavLink
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200"
          to="/"
        >
          <Home size={20} />
          go to home
        </NavLink>
      </nav>
    </aside>
  );
};

export default UserSidebar;
