import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
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
        <Link to="/contacts">
          <button className="btn-basic">CONTACTANOS</button>
        </Link>
      </div>
      <div className="cards-products">
        <div className="card">
          <img src={producto} alt="jugo" />
          <strong>Jugo 1</strong>
          <p>Descripción</p>
          <Link to="/detail">
            <button className="btn-basic">Ver detalle</button>
          </Link>
        </div>
        <div className="card">
          <img src={producto} alt="jugo" />
          <strong>Jugo 1</strong>
          <p>Descripción</p>
          <Link to="/detail">
            <button className="btn-basic">Ver detalle</button>
          </Link>
        </div>
        <div className="card">
          <img src={producto} alt="jugo" />
          <strong>Jugo 1</strong>
          <p>Descripción</p>
          <Link to="/detail">
            <button className="btn-basic">Ver detalle</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
