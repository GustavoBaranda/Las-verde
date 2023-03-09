import React from 'react';
import { 
    FaFacebook, 
    FaInstagram 
} from "react-icons/fa";

const ThirdBannerHome = () => {
    let thirdBannerHome = "https://firebasestorage.googleapis.com/v0/b/las-verde-web.appspot.com/o/Im%C3%A1genes%20home%2FthirdBanner.png?alt=media&token=8658bd9a-90d3-48cd-87aa-9ada28468d10"   

    return (
        <div className="thirdBannerHomeContainer">
            <div className="thirdBannerHome-title">
                <h2>¡Estamos en redes sociales!</h2>
            </div>
            <div className="thirdBannerHome-SubTittle">
                <h4>Síguenos en nuestras redes sociales y entérate antes que nadie de las últimas novedades que Las Verde tiene para ofrecerte.</h4>
            </div>
            <div className="thirdBannerHome-socialItem">
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
            <img src={ thirdBannerHome } alt="thirdBannerHome" />
        </div>
    )
}

export default ThirdBannerHome;