import React from "react";
import { Link } from "react-router-dom";

const ProductHeader = () => {

  let frutas2 = "https://firebasestorage.googleapis.com/v0/b/las-verde-web.appspot.com/o/Imagenes%2Ffrutas2.png?alt=media&token=9c05a878-bc1a-40df-8654-376b24e50026"

  return (
    <div className="productsHeader-Container">
      <div className="headline-Products">
        <h2>Nuestros productos</h2>
        <p>
          ¿Interesado en conocer nuestros productos? Te los presentamos a
          continuación! Sí quieres comprar puedes contactarnos por correo
          electrónico o Whatsapp!
        </p>
        <Link to="/contacts">
          <button className="btn-basic">CONTACTANOS</button>
        </Link>
      </div>
      <div className="headline-Image">
        <img src={frutas2} alt="frutas" />
      </div>
    </div>
  );
};

export default ProductHeader;
