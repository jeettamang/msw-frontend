import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";
import UserSidebar from "../components/conmon/UserSidebar";
import Footer from "../components/conmon/Footer";

const UserLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <UserSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <div className="flex-1 flex flex-col">
          <div className="md:hidden flex items-center p-4 bg-white shadow">
            <button onClick={() => setSidebarOpen(true)}>
              <Menu />
            </button>
            <h1 className="ml-4 font-bold">User Panel</h1>
          </div>

          <main className="flex-1 p-4 md:p-6 bg-gray-100">
            <Outlet />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserLayout;
