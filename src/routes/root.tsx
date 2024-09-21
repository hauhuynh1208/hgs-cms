import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import React from "react";
import { check } from "@/utils/check";
import Header from "@/components/Header";

export default function Root() {
  const isMobile = check.isMobile();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="flex w-full">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col w-full">
        <Header setIsOpen={setIsOpen} />
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
