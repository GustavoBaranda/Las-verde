import React from 'react'
import { Link } from 'react-router-dom' 

const SuccessfulMessage = () => {

  let frutas = "https://firebasestorage.googleapis.com/v0/b/las-verde-web.appspot.com/o/Imagenes%2Ffrutas.png?alt=media&token=9820f274-d364-46c2-bf48-b81872d093b0"

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