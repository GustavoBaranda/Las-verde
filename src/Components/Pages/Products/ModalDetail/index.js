import React from 'react'; 
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
                      <p>{pop.description}</p>
                      <h4>Presentaciones</h4>
                      {
                        pop.id !== '7'?(
                          <div className="presentations">                        
                            <p className="">500ml</p>
                            <p> - </p>
                            <p className="">250ml</p>
                          </div>
                          ):(
                          <div className="presentations">                        
                            <p className="">500ml</p>
                          </div>
                          )
                      }
                      <div className="popUp-SocialItem">
                        <a
                          className="facebookIcon"
                          target="blank"
                          href="https://es-la.facebook.com/lasverde.tiendasaludable/"
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