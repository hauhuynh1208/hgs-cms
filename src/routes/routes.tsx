import { ReactElement } from "react";
import HomePage from "../pages/Home/HomePage";
import StaticPage from "../pages/Static/StaticPage";
import Login from "@/pages/Authen/Login";
import Register from "@/pages/Authen/Register";
import ForgotPassword from "@/pages/Authen/ForgotPassword";

export interface RouteProps {
  name: string;
  path: string;
  element: ReactElement;
  protected?: boolean;
}

export const Routes: RouteProps[] = [
  {
    name: "Login",
    path: "/login",
    element: <Login />,
  },
  {
    name: "Register",
    path: "/register",
    element: <Register />,
  },
  {
    name: "Forgot Password",
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    name: "Home",
    path: "/",
    element: <HomePage />,
    protected: true,
  },
  {
    name: "Static",
    path: "/static",
    element: <StaticPage />,
    protected: true,
  },
];
