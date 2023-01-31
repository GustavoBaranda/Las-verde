import React from 'react';
import { Link } from 'react-router-dom';
import secondBannerHome from '../../../../assets/secondBanner.png';

const SecondBannerHome = () => {
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
                <button className="btn-basic btn-slider">CONOCE MÁS</button> 
            </Link>
        </div>
        <img src={secondBannerHome} alt="secondBannerHome" />
    </div>
  )
}

export default SecondBannerHome;