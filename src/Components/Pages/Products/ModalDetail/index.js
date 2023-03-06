import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { 
  FaFacebook,  
  FaInstagram, 
  FaWhatsapp, 
  FaRegWindowClose  
} from "react-icons/fa"; 
 
const ModalDetail = ({popUpContent, changeContent}) => {

  let barra = "https://firebasestorage.googleapis.com/v0/b/las-verde-web.appspot.com/o/Imagenes%2Fbarra.png?alt=media&token=6d6638b1-03b0-411e-89c2-47e0749077e4"


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
                        <p className="btn-Presentations">500ml</p>
                        <p className="btn-Presentations">250ml</p>
                      </div>
                      <img src={ barra } alt="barra" />
                      <h3>Compartir</h3>
                      <div className="popUp-SocialItem">
                        <a
                            className="facebookIcon"
                            // href="https://es-la.facebook.com/lasverde.tiendasaludable/"
                            target="blank"

                            href="http://www.shareaholic.com/api/share/?v=1&apitype=1&apikey=240209a45d6de04743bfaed9faac8d3ef&service=5&title=C%26oacute%3Bmo+Crear+Botones+De+Redes+Sociales+Para+Cada+Red+Principal&link=https%3A%2F%2Fblog.hootsuite.com%2Fes%2Fbotones-de-redes-sociales%2F&template=Cómo Crear Botones De Redes Sociales Para Cada Red Principal - ${short_link} - @HootsuiteES&source=Shareaholic"
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
                          href="https://api.whatsapp.com/send?text=http://www.lasverde.com.ar/" 
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