import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { HomePage } from './components/Homepage/Homepage'


import React from "react";
import ReactDOM from "react-dom/client";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><HomePage /></div>,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);