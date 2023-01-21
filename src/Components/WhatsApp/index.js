import React from "react";
import "./style.scss";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <div>
      <a href="https://wa.me/5492612529012?text=Hola%20necesito%20mas%20informacion" className="btn-wsp" target="blank">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default WhatsApp;
