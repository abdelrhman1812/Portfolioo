import React from "react";
import { Outlet } from "react-router-dom";
import Aside from "./layout/Aside/Aside";
import MainContent from "./layout/MainContent/MainContent";

function Layout() {
  return (
    <>
      <div className="main-container">
        <Aside />
        <MainContent />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
