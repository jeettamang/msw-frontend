import { useState, useContext, useRef, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Menu } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state, logout } = useContext(AuthContext);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const hideHeaderPaths = [
    "/user/dashboard",
    "/user/profile",
    "/user/payments",
    "/user/courses",
  ];

  if (hideHeaderPaths.includes(location.pathname)) return null;

  return (
    <div className="bg-gray-100 sticky top-0 shadow z-50">
      <div className="flex justify-between items-center px-4 md:px-8 py-3">
        {/* Logo */}
        <img
          onClick={() => navigate("/")}
          className="w-32 md:w-48 cursor-pointer"
          src="https://broadwayinfosys.com/uploads/logo/1761457465_63567.svg"
          alt="logo"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
        </div>

        {/* Right Side */}
        <div className="hidden md:block relative">
          {user ? (
            <div ref={dropdownRef} className="flex items-center gap-2">
              <img
                onClick={() => setDropdownOpen(!dropdownOpen)}
                src={user.profile || "https://via.placeholder.com/40"}
                alt="user"
                className="w-10 h-10 rounded-full cursor-pointer border"
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow flex flex-col">
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
                    className="px-4 py-2 text-red-500 hover:bg-gray-100 text-left"
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
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className="px-4 py-2 border border-blue-500 text-blue-500 rounded"
              >
                Login
              </NavLink>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 bg-white shadow">
          <NavLink to="/courses" onClick={() => setMenuOpen(false)}>
            Courses
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/blogs" onClick={() => setMenuOpen(false)}>
            Blogs
          </NavLink>

          {user ? (
            <>
              <button onClick={() => navigate("/user/dashboard")}>
                Dashboard
              </button>
              <button onClick={() => navigate("/user/profile")}>
                Profile
              </button>
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="text-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Login</NavLink>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;