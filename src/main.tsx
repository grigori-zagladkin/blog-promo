import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegPromo from "./pages/RegPromo";
import "./index.css";
import { YMInitializer } from "react-yandex-metrika";

const router = createBrowserRouter([
  {
    path: "/reg-promo",
    element: <RegPromo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <YMInitializer accounts={[1111111]} />
    <RouterProvider router={router} />
  </React.StrictMode>
);
