import React from 'react'
import { Link } from 'react-router-dom' 
import frutas from '../../../../assets/frutas.png';

const SuccessfulMessage = () => {
  
  return (
    <div className="successContainer">
      <div className="success">
        <div className="successContent">
          <h1>!Tu mensaje fue enviado <br /> con éxito!</h1>
          <h3>Estamos ansiosos de responder todas tus dudas!<br />
          Atento a tu correo, te contactaremos en breve.</h3>
          <img src={ frutas } alt="frutas" />
        </div>
        <Link to="/">
          <button className="btn-basic">VOLVER AL INICIO</button>
        </Link>  
      </div>
    </div>
  )
}

export default SuccessfulMessage