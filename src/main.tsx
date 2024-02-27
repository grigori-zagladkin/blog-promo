import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegPromo from "./pages/RegPromo";
import "./index.css";
import { YMInitializer } from "react-yandex-metrika";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/reg-promo",
    element: <RegPromo />,
  },
  {
    path: "/",
    element: <RegPromo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <YMInitializer accounts={[96591729]} options={{ webvisor: true }} />
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
