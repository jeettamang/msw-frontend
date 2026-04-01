import { LayoutDashboard, BookOpen, CreditCard, User } from "lucide-react";

export const userMenu = [
  {
    name: "Dashboard",
    path: "/user/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "My Courses",
    path: "/user/courses",
    icon: BookOpen,
  },
  {
    name: "Payment History",
    path: "/user/payments",
    icon: CreditCard,
  },
  {
    name: "Profile",
    path: "/user/profile",
    icon: User,
  },
];
