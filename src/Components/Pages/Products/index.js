import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import producto from "../../../assets/producto.png";

const Products = () => {
  return (
    <div className="container-products">
      <div className="headline-products">
        <h1>Nuestros productos</h1>
        <p>
          ¿Interesado en conocer nuestros productos? Te los presentamos a
          continuación! Sí quieres comprar puedes contactarnos por correo
          electrónico o Whatsapp!
        </p>
        <NavLink to="/contacts">
          <button className="btn-basic">CONTACTANOS</button>
        </NavLink>
      </div>
      <div className="cards-products">
        <div class="card">
          <img src={producto} alt="jugo" />
          <strong>Jugo 1</strong>
          <p>Descripción</p>
          <NavLink to="/detail">
            <button className="btn-basic">Ver detalle</button>
          </NavLink>
        </div>
        <div class="card">
          <img src={producto} alt="jugo" />
          <strong>Jugo 1</strong>
          <p>Descripción</p>
          <NavLink to="/detail">
            <button className="btn-basic">Ver detalle</button>
          </NavLink>
        </div>
        <div class="card">
          <img src={producto} alt="jugo" />
          <strong>Jugo 1</strong>
          <p>Descripción</p>
          <NavLink to="/detail">
            <button className="btn-basic">Ver detalle</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Products;
