import { Route, Routes } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/nav/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/profile/Profile";
import About from "../pages/nav/About";
import Contact from "../pages/nav/Contact";
import Blog from "../pages/blogs/Blog";
import BlogDetails from "../pages/blogs/BlogDetails";
import Register from "../pages/auth/Register";

import Login from "../pages/auth/Login";
import Courses from "../pages/course/Courses";
import CourseDetails from "../pages/course/CourseDetails";
import EnrollCourse from "../pages/course/EnrollCourse";
import PaymentAPI from "../features/paymentAPI";
import Success from "../features/Success";
import Failure from "../features/Failure";
import MyCourses from "../pages/dashboard/MyCourses";
import PaymentHistory from "../pages/dashboard/PaymentHistory";

const UserRoutes = () => {
  return (
    <Routes>
      {/* ================= PUBLIC ROUTES ================= */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/courses" element={<Courses />} />
      <Route path="/course-details/:id" element={<CourseDetails />} />

      <Route path="/blogs" element={<Blog />} />
      <Route path="/getBySlug/:slug" element={<BlogDetails />} />

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/user" element={<UserLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="courses" element={<MyCourses />} />
        <Route path="payments" element={<PaymentHistory />} />
      </Route>

      <Route path="/payment" element={<PaymentAPI />} />
      <Route path="/success" element={<Success />} />
      <Route path="/failure" element={<Failure />} />
      <Route path="/enroll/:id" element={<EnrollCourse />} />
      {/* <Route path="/user" element={<UserLayout />}>
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="courses" element={<MyCourses />} />
        <Route path="payments" element={<PaymentHistory />} />
        <Route path="profile" element={<UserProfile />} />
      </Route> */}
    </Routes>
  );
};

export default UserRoutes;
