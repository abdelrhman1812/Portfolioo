import React from "react";
import Aside from "../Aside/Aside";
import MainContent from "../MainContent/MainContent";
import { Outlet } from "react-router-dom";

function Main() {
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

export default Main;
