import { Routes } from "@/routes/routes";
import { CurrentPathProps } from "@/types/route";
import Cookies from "js-cookie";
import { matchRoutes, useLocation } from "react-router-dom";

export const useCurrentPath = () => {
  const location = useLocation();
  const currentPath =
    matchRoutes(Routes, location)?.[0] || ({} as CurrentPathProps);
  return currentPath;
};

export const useAuth = () => {
  const access_token = Cookies.get("access_token");
};
