import React from 'react';

import naranjada from '../../../../assets/visionNaranjada.png';

const MissionAndVision = () => {

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
          En Las Verde producimos bebidas 100% naturales a base de frutas y verduras, sin agregados, para satisfacer un mercado enfocado en mejorar los hábitos de consumo y la practicidad de consumo a través de un producto de calidad, siendo la única bebida del mercado que carece de endulzantes, conservantes, colorantes y agua añadida.<br /><br />
          </p>
        <h3 className="missionSubTitle">
        Visión
        </h3>
        <p className="missionText">
          Las Verde pretende ser la primer opción de consumo de una bebida 100% a base de fruta y verdura.<br /><br />
        </p>    
      </div>
      <figure className="visionImageContent">
        <img src={ naranjada } alt="Naranjada" />
      </figure>
    </div>
  </div>
  );
};

export default MissionAndVision;