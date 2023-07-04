import React, { useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import Sidebar from "../navigation/Sidebar";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useStateContext } from "../../contexts/ContextProvider";

const DefaultLayout = () => {
  const { isDark, token } = useStateContext();

  if (!token) {
    return <Navigate to="login" />;
  }
  return (
    <div className="flex h-screen py-10 bg-slate-300 ">
      <div
        className={`py-10 rounded-2xl me-5  ms-5  ${
          isDark ? "bg-[#2a2b32]" : "bg-gradient-to-b from-gray-800 to-gray-900"
        }`}
      >
        <Sidebar />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="pb-1">{/* <Navigation /> */}</div>

        <div className="flex-1 overflow-y-auto bg-white py-10 px-5 rounded-2xl mr-5 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
