import React from 'react';
import barra from '../../../../assets/barra.png';
import frutas from '../../../../assets/frutas.png';

const Maps = () => {
  return (
    <div className="contactLocation-maps" >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13398.164655721026!2d-68.85079145733823!3d-32.91029762818551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0971613be4c1%3A0x9ebb4e805ec2386!2sLas%20Verde%20Fabrica%20de%20Jugos!5e0!3m2!1ses-419!2sar!4v1675203425721!5m2!1ses-419!2sar" 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="maps" 










        
        title="Map"
      />
      <div className="contactLocation-info">
        <h2>
          ¿Todavía no nos encuentras?<br />
          Mira el mapa!
        </h2>
        <p>
         Estamos ubicados en Beltrán 1290, local 5 5501<br /> Godoy Cruz, Provincia de Mendoza, Argentina
        </p>
        <img src={ barra } alt="barra" />
        <p>
          Horario: De lunes a viernes de 8:00 Am a 18:30 PM
        </p>
        <img src={ frutas } alt="frutas" />
      </div>
    </div>
  )
}

export default Maps;