import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider';

const Slider = ()=> {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === obj.id ? "slide active-anim" : "slide"}
                    >   
                        <div className="tittleSliderContainer">
                            <h2>{obj.title}</h2>
                        </div>
                        <div className="subTittleSliderContainer">
                            <h4>{obj.subTitle}</h4>
                        </div>
                        <div className="btn-container">    
                            <Link to="/detail">
                                <button className="btn-basic btn-slider">CONOCE MÁS {'>'} </button>
                            </Link>
                        </div>
                        <img src={obj.img} alt="{obj.textimg}" />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {dataSlider.map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Slider; 
