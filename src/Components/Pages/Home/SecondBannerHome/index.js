import React from 'react';
import { Link } from 'react-router-dom';

const SecondBannerHome = () => {
 
  let secondBannerHome = "https://firebasestorage.googleapis.com/v0/b/las-verde-web.appspot.com/o/Im%C3%A1genes%20home%2FsecondBanner.png?alt=media&token=ef6adf3b-2b20-47ae-9717-633eb1b339bd"    

    return (
        <div className="SecondBannerHomeContainer">
            <div className="secondBannerHome-title">
                <h2>¿Conoces nuestro proceso productivo?</h2>
            </div> 
            <div className="secondBannerHome-SubTittle">
                <h4>Todos los días trabajamos arduamente para entregarte los productos más frescos y con la mejor calidad del mercado. ¿Pero? ¿Cómo lo hacemos?</h4>
            </div>
            <div className="btn-container">    
                <Link to="/detail">
                    <button className="btn-basic">CONOCE MÁS</button> 
                </Link>
            </div>
            <img src={secondBannerHome} alt="secondBannerHome" />
        </div>
    )
}

export default SecondBannerHome;