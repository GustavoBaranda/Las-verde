import React from "react";
import { Link } from "react-router-dom";
import logofooter from "../../assets/logofooter.svg";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer_container--logo">
        <Link to="/">
          <img src={logofooter} alt="" />
        </Link>
      </div>
      <div className="footer_container--location">
        <p>
          Beltrán 1290, local 5 5501 Godoy Cruz, Provincia de Mendoza, Argentina
        </p>
        <p>
          +54 261 594-5894 -{" "}
          <a
            className="footer__container--location_mail"
            href="mailto:lasverde.tiendasaludable@gmail.com"
            target="blank"
          >
            lasverde.tiendasaludable@gmail.com
          </a>
        </p>
      </div>
      <div className="footer__contariner--copyright">
        <p>© Copyright Las Verde, todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;