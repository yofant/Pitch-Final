import React, { useState } from "react";
import "../css/Carrito.css";

const Carrito = () => {

  return (
    <section className="form-register">
        

      <form name="datos" method="post" action="">
        <h4> 🛒 TERMINA TU COMPRA 🛒</h4>

        <input className="controls" type="text" name="usuario" id="usuario" placeholder="INGRESA EL PRODUCTO" required/>
        <input className="controls" type="password" name="contrasena" id="contrasena" placeholder="NOMBRES" required/>
        <input className="controls" type="password" name="contrasena" id="contrasena" placeholder="APELLIDOS" required/>
        <input className="controls" type="password" name="contrasena" id="contrasena" placeholder="DIRECCION" required/>

        <input type="submit" value="TERMINAR COMPRA" className="botons"/>

      </form>

    </section>   
  );
};

export default Carrito;