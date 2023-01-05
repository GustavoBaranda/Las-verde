import React, { useState } from 'react';
import './Navbar.css';
import { FaBars } from "react-icons/fa";
import { FaTimes, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const NavBar = () => {

    const [isMobile, setIsMobile] = useState(false)
    
    return(
        <nav className="navbar">
            <div className="LogoContainer">
                <Link className="logo" to="/">
                    <img src={ logo } alt="" />
                </Link>
            </div>
            <ul className={ isMobile ? "nav-links-mobile" : "nav-links" }
            onClick={() => setIsMobile(false)}
            >
                <NavLink className="NavLink" to="/">
                    <li>INICIO</li>                                      
                </NavLink>                
                <NavLink className="NavLink" to="/about">
                    <li>NOSOTROS</li>                                      
                </NavLink>                
                <NavLink className="NavLink" to="/products">
                    <li>PRODUCTOS</li>                                      
                </NavLink>                
                <NavLink className="NavLink" to="/contacts">
                    <li>CONTACTO</li>                                        
                </NavLink>                
            </ul>
            <div className="navSocial">
                <div className="socialItem">
                    <a className="facebookIcon" href="https://es-la.facebook.com/lasverde.tiendasaludable/" target="blank">
                        <FaFacebook /> 
                    </a>
                    <a className="instagramIcon" href="https://www.instagram.com/las.verde/?hl=es" target="blank">
                        <FaInstagram /> 
                    </a>
                </div>
                <div>
                    <a href="mailto:info@lasverde.com.ar" className='navMail' target="blank">
                        info@lasverde.com.ar
                    </a>
                </div>
            </div>
            <button className="mobile-menu-icon"
                onClick={() => setIsMobile(!isMobile)}
            >
                {
                    isMobile  ?
                    ( 
                    <FaTimes /> 
                    ):(
                    <FaBars/>
                    )
                }
            </button>
        </nav>
    )
}
export default NavBar;