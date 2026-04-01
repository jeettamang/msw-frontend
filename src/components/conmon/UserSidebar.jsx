import { NavLink } from "react-router-dom";
import { Home } from "lucide-react";
import { userMenu } from "../../config/SideBarMenu";

const UserSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navLinkClass = (isActive) =>
    `flex items-center gap-2 p-2 rounded ${
      isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
    }`;

  return (
    <>
      {/* Overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-transparent md:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
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
          {userMenu.map((item, index) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) => navLinkClass(isActive)}
                onClick={() => setSidebarOpen(false)} // close on mobile
              >
                <Icon size={20} />
                {item.label || item.name}
              </NavLink>
            );
          })}

          {/* Go Home */}
          <NavLink
            to="/"
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-200"
            onClick={() => setSidebarOpen(false)}
          >
            <Home size={20} />
            Go Home
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default UserSidebar;
