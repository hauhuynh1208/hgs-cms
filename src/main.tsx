import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import { Routes } from "./routes/routes";

const publicPath = Routes.filter((route) => !route.protected);
const router = createBrowserRouter([
  ...publicPath,
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [...Routes],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
