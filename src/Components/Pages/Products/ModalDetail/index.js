import React from 'react'; 
import { Link } from 'react-router-dom'; 
import barra from '../../../../assets/barra.png'; 
import { 
  FaFacebook,  
  FaInstagram, 
  FaWhatsapp, 
  FaRegWindowClose  
} from "react-icons/fa"; 
 
const ModalDetail = ({popUpContent, changeContent}) => {
  return (
    <div className="popUp-container" onClick={changeContent}>
        <div className="popUp-Body" onClick={(e) => e.stopPropagation()}>
          <div className="popUp-content">
            <i 
              onClick={changeContent}  
              className="close"
            >
              <FaRegWindowClose />
            </i>  
            {
              popUpContent.map((pop) =>{
                return(
                  <div  className="popUp" key={pop.id}>
                    <div>
                      <img className='productImg' src={pop.image} alt={pop.title} />
                    </div>
                    <div>
                      <h2>{pop.title}</h2> 
                      <h3>Descripción</h3>
                      <p>{pop.description}</p>
                      <h3>Presentaciones</h3>
                      <div className="presentations">                        
                        <p className="btn-basic">500ml</p>
                        <p className="btn-basic">250ml</p>
                      </div>
                      <img src={ barra } alt="barra" />
                      <h3>Compartir</h3>
                      <div className="popUp-SocialItem">
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
                        <a 
                          className="whastsappIcon" 
                          href="https://wa.me/5492612529012?text=Hola%20necesito%20mas%20informacion" 
                          target="blank">
                            <FaWhatsapp />
                        </a>
                      </div>
                      <Link to="/contacts">
                        <button className="btn-basic">CONTACTANOS</button>
                      </Link>  
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
  )
}

export default ModalDetail