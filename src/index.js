import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/routes/Home";
import Products from "./components/routes/Products";
import Reports from "./components/routes/Reports";
import "./App.css";

const Applayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
