import ReactDOM from "react-dom/client";
import React from "react";
import IndexApp from "./IndexApp";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Inicio from "./Inicio/Inicio";
import Registro from "./Registro/Registro";
import Login from "./Login/Login";
import Serviceautomation from "./Serviceautomation/Serviceautomation";
import Serviciocamaras from "./ServicioCamaras/Serviciocamaras";
import Serviciogps from "./Serviciogps/serviciogps";
import Carrito from "./Carrito/Carrito";
import 'bootstrap-icons/font/bootstrap-icons.css';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<IndexApp />}>
      <Route path="Inicio" element={<Inicio />} />
      <Route path="Registro" element={<Registro />} />
      <Route path="Login" element={<Login />} />
      <Route path="Serviceautomation" element={<Serviceautomation />} />
      <Route path="Serviciocamaras" element={<Serviciocamaras />} />
      <Route path="Serviciogps" element={<Serviciogps />} />
      <Route path="Carrito" element={<Carrito />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
