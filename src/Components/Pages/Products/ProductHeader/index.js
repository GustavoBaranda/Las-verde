import React from "react";
import { Link } from "react-router-dom";

import frutas2 from '../../../../assets/frutas2.png';

const ProductHeader = () => {

  return (
    <div className="productsHeader-Container">
      <div className="headline-Products">
        <h2>Nuestros productos</h2>
        <p>
          ¿Estás interesado en obtener nuestros productos?
        </p>
        <Link to="/contacts">
          <button className="btn-basic">CONTACTANOS</button>
        </Link>
      </div>
      <div className="headline-Image">
        <img src={ frutas2 } alt="frutas" />
      </div>
    </div>
  );
};

export default ProductHeader;