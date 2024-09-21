import { Routes } from "@/routes/routes";
import { CurrentPathProps } from "@/types/route";
import { matchRoutes, useLocation } from "react-router-dom";

export const useCurrentPath = () => {
  const location = useLocation();
  const currentPath =
    matchRoutes(Routes, location)?.[0] || ({} as CurrentPathProps);
  return currentPath;
};
