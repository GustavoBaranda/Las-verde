import React from 'react';

import productiveProcess from '../../../../assets/procesoProductivo.png';

const ProductiveProcess = () => {

  return (
    <div className="productiveProcessContainer">
    <div className="productiveProcessContent">
      <h2 className="productiveProcessTitle">
        Proceso productivo
      </h2>
      <p className="productiveProcessText">
      El proceso de elaboración de nuestros jugos comienza por la utilización de fruta y verdura fresca proveniente de proveedores locales y plantaciones orgánicas.<br /><br />
      Luego de seleccionar manualmente los ingredientes para nuestros jugos, los mismos son procesados en conjunto por sabor, para crear una densa pulpa cargada de nutrientes.<br /><br />
      La pulpa obtenida es prensada en frío con una prensa hidráulica de 2 toneladas para extraer de entre 3 a 5 veces más enzimas, nutrientes y vitaminas en comparación con un jugo convencional.<br /><br />
      Los ingredientes son combinados para crear deliciosas y beneficiosas recetas que tienen como principal fin, ayudarte a nutrir tu cuerpo y tu mente.<br /><br />
      Finalmente envasamos nuestros productos en botellas de vidrio para resguardar la calidad de nuestro producto y a su vez, contribuir al cuidado del medio ambiente mediante el reciclaje del mismo.<br /><br />
      </p>  
    </div>
    <figure className="productiveProcessImageContent">
      <img src={ productiveProcess } alt="Proceso de elaboración de los jugos" />
    </figure>
  </div>
  );
};

export default ProductiveProcess;