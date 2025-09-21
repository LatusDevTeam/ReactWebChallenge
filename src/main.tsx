import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { RootLayout } from "@/routes/layout";
import { HomePage } from "@/routes/home";
import { ReadingsPage } from "@/routes/readings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/readings",
    element: <RootLayout />,
    children: [{ index: true, element: <ReadingsPage /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
