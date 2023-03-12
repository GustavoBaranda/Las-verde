import React from "react"; 
import { Link } from "react-router-dom"; 
import logofooter from "../../assets/logofooter.svg"; 
 
const Footer = () => { 
  return ( 
    <footer className="footerContainer"> 
      <div className="footerContainer--logo"> 
        <Link to="/"> 
          <img src={logofooter} alt="" /> 
        </Link> 
      </div> 
      <div className="footerContainer-location"> 
        <p> 
          Beltrán 1290, local 5 5501 Godoy Cruz, Provincia de Mendoza, Argentina 
        </p> 
        <div className="footerContainer-contact"> 
          <a 
            href="tel:+54 261 594-5894"
          >
            +54 261 594-5894 - {" "} 
          </a>
          <a 
            href="mailto:lasverde.tiendasaludable@gmail.com" 
            target="blank" 
          > 
            lasverde.tiendasaludable@gmail.com 
          </a>
        </div> 
      </div> 
      <div className="footerContariner-copyright"> 
        <p>© Copyright Las Verde, todos los derechos reservados.</p> 
        <p> 
          Powered by{" "} 
          <a 
            href="https://www.linkedin.com/in/gustavobaranda/" 
            target="_blank" 
            rel="noopener noreferrer" 
          > 
            Gustavo Baranda 
          </a>{" "} 
          &{" "} 
          <a 
            href="https://www.linkedin.com/in/melisa-caputo/" 
            target="_blank" 
            rel="noopener noreferrer" 
          > 
            Melisa Caputo 
          </a> 
        </p> 
      </div> 
    </footer> 
  ); 
}; 

export default Footer; 