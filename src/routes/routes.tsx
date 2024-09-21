import { ReactElement } from "react";
import HomePage from "../pages/Home/HomePage";
import StaticPage from "../pages/Static/StaticPage";

export interface RouteProps {
  name: string;
  path: string;
  element: ReactElement;
  protected: boolean;
}

export const Routes: RouteProps[] = [
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
