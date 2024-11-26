import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout";

const Router = () => {
  const routers = createHashRouter([
    {
      path: "",
      element: <Layout />,
    },
  ]);
  return <RouterProvider router={routers} />;
};

export default Router;
