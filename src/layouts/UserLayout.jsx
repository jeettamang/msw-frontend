import { Outlet } from "react-router-dom";
import UserSidebar from "../components/conmon/UserSidebar";
import Footer from "../components/conmon/Footer";

const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <UserSidebar />

        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
