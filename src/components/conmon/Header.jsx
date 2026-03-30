import { useState, useContext, useRef, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const { state, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const user = state.userInfo;


  const hideHeaderPaths = ["/user/dashboard", "/user/profile", "/user/payments", "/user/courses"]; 
  if (hideHeaderPaths.includes(location.pathname)) return null;

  return (
    <div className="flex justify-between px-8 items-center p-4 bg-gray-100 sticky top-0 border-b-gray-50 shadow z-50">
      {/* Logo */}
      <div>
        <img
          onClick={() => navigate("/")}
          className="w-48 hover:cursor-pointer"
          src="https://broadwayinfosys.com/uploads/logo/1761457465_63567.svg"
          alt="logo"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center items-center gap-6">
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
      </div>

      {/* Right Side */}
      <div className="relative">
        {user ? (
          <div ref={dropdownRef} className="flex items-center gap-2">
            <img
              onClick={() => setDropdownOpen(!dropdownOpen)}
              src={user.profile || "https://via.placeholder.com/40"}
              alt="user"
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300"
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg py-2 flex flex-col">
                <button
                  onClick={() => navigate("/user/dashboard")}
                  className="px-4 py-2 hover:bg-gray-100 text-left"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => navigate("/user/profile")}
                  className="px-4 py-2 hover:bg-gray-100 text-left"
                >
                  Profile
                </button>
                <button
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                  className="px-4 py-2 hover:bg-gray-100 text-left text-red-500"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-4">
            <NavLink
              to="/register"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50"
            >
              Login
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
