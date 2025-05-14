import ReactDOM from "react-dom/client";
import React from "react";
import IndexApp from "./IndexApp";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Inicio from "./Inicio/Inicio";
import Registro from "./Registro/Registro";
import Login from "./Login/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<IndexApp />}>
      <Route path="Inicio" element={<Inicio />} />
      <Route path="Registro" element={<Registro />} />
      <Route path="Login" element={<Login />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
