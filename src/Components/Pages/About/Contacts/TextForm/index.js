import React from 'react'; 
import { 
  FaFacebook, 
  FaInstagram, 
  FaPhoneAlt, 
  FaEnvelope, 
} from "react-icons/fa"; 
 
const TextForm = () => {
  return (
    <div className="textForm-container">
      <div className="textForm">
        <h2>¿Tienes alguna duda? <br /> ¡Escríbenos!</h2>
        <p>
          En Las Verde estamos para ayudarte en lo que necesites! Rellena el
          siguiente formulario y nos contactaremos contigo a la brevedad.
        </p>
        <p className="textForm-LookingFor">
          También puedes encontrarnos aquí:
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
            href="https://es-la.facebook.com/lasverde.tiendasaludable/"
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