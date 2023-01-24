import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="contact-container">
      <div className="text-container">
        <h1>¿Tienes alguna duda?</h1>
        <h2>¡Escríbenos!</h2>
        <p>
          En Las Verde estamos para ayudarte en lo que necesites! Rellena el
          siguiente formulario y nos contactaremos contigo a la brevedad.
        </p>
        <p>También puedes encontrarnos aquí:</p>
        <div>
          <a
            className="facebookIcon"
            href="https://es-la.facebook.com/lasverde.tiendasaludable/"
            target="blank"
          >
            <FaFacebook />
          </a>
          <a
            className="facebookIcon"
            href="https://es-la.facebook.com/lasverde.tiendasaludable/"
            target="blank"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="contact-data">
          <FaPhoneAlt /> <p>+54 261 594-5894</p>
        </div>
        <div className="contact-data">
          <FaEnvelope />
          <p>info@lasverde.com.ar</p>
        </div>
      </div>
      <div className="form-container">
        <form action="">
          <label for="nombre">Nombre</label>
          <input type="text" name="nombre" />
          <label for="tel">Teléfono</label>
          <input type="tel" name="tel" />
          <label for="email">Email</label>
          <input type="email" name="email" />
          <label for="mensaje">Mensaje</label>
          <textarea
            name="mensaje"
            cols="40"
            rows="5"
            maxlength="250"
          ></textarea>
          <input type="submit" value="Enviar" className="btn-basic" />
        </form>
      </div>
    </div>
  );
};

export default Contacts;
