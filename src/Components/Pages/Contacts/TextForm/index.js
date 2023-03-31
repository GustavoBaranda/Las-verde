import React from 'react'; 
import { 
  FaFacebook, 
  FaInstagram, 
  FaPhoneAlt, 
  FaEnvelope, 
} from "react-icons/fa"; 
 
const TextForm = () => {
  
  let barra = "https://firebasestorage.googleapis.com/v0/b/las-verde-web.appspot.com/o/Imagenes%2Fbarra.png?alt=media&token=6d6638b1-03b0-411e-89c2-47e0749077e4"

  return (
    <div className="textForm-container">
      <div className="textForm">
        <h2>¿Tenes alguna duda? <br /> ¡Escribinos!</h2>
        <p>
          En Las Verde estamos para ayudarte en lo que necesites!<br /> Completa el
          siguiente formulario y nos contactaremos a la brevedad.
        </p>
        <img src={ barra } alt="barra" />
        <p className="textForm-LookingFor">
          También podés encontrarnos en:
        </p>
        <div className="textFrom-SocialItems">
          <a
            className="facebookIcon"
            href="https://es-la.facebook.com/lasverde.tiendasaludable/"
            target="blank"
          >
            <FaFacebook />
          </a>
          <a
            className="instagramIcon"
            href="https://www.instagram.com/las.verde/?hl=es"
            target="blank"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="contact-data">
          <FaPhoneAlt />
          <a 
            href="tel:+54 261 594-5894"
          >
            +54 261 594-5894
          </a>
        </div>
        <div className="contact-data">
          <FaEnvelope />
          <a
            href="mailto:info@lasverde.com.ar" 
            target="blank" 
          >
            info@lasverde.com.ar
          </a>
        </div>
      </div>
    </div>
  )
}

export default TextForm;