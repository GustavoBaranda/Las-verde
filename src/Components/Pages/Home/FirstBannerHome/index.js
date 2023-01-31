import React from "react"; 
import { Link } from "react-router-dom"; 
import dataFirstbannerHome from "./dataFirstBannerHome"; 
 
const FirstBannerHome = () => {
  return (
    <div className="firstBannerHomeContainer">
      <div className="firstBannerHome-title"> 
        <h2>JUGOS 100% NATURALES</h2> 
        <h4>Hechos 100% a base de frutas y verduras</h4> 
      </div> 
      <div className="firstBannerHome-items"> 
        {dataFirstbannerHome.map((obj) => {
          return ( 
            <div key={obj.id}> 
              <img src={obj.img} alt={obj.title} /> 
              <p>{obj.title}</p>
            </div> 
          ); 
        })} 
      </div> 
      <div className="firstBannerHome-btnContainer"> 
        <Link to="/products"> 
          <button className="btn-basic btn-slider">VER PRODUCTOS</button> 
        </Link> 
      </div> 
    </div> 
  ); 
}; 

export default FirstBannerHome;  