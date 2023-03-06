import React from 'react';

const MissionAndVision = () => {
  
  let naranjada ="https://firebasestorage.googleapis.com/v0/b/las-verde-web.appspot.com/o/about%20imagenes%2FmissionAndVisionNaranjada.png?alt=media&token=3446e62f-7e92-46fe-81d1-71797ec27898"

  return (
    <div className="missionAndVisionContainer">
      <div className="missionAndVisionContent">
        <div className="missionContent">
        <h2 className="missionTitle">
          Misión y Visión
        </h2>
        <h3 className="missionSubTitle">
          Misión
        </h3>
          <p className="missionText">
          En Las Verde fabricamos y producimos bebidas 100% naturales a base de frutas y verduras, sin agregados, para satisfacer un mercado enfocado en mejorar los hábitos de consumo y la practicidad de consumo a través de un producto de calidad, siendo la única bebida del mercado que carece de endulzantes, concervantes, colorantes o agua añadida.<br /><br />
          </p>
        <h3 className="missionSubTitle">
        Visión
        </h3>
        <p className="missionText">
          Las Verde pretende ser la primer opción de consumo de una bebida 100%a base de fruta y verdura.<br /><br />
        </p>    
      </div>
      <figure className="VisionImageContent">
        <img src={ naranjada } alt="Naranjada" />
      </figure>
    </div>
  </div>
  )
}

export default MissionAndVision;