import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider';

const Slider = ()=> {

    const [slideIndex, setSlideIndex] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(slideIndex ===  dataSlider.length ? 1 : slideIndex + 1);
        }, 8000);
        return () => clearInterval(interval);
      }, [slideIndex]);    

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
            {dataSlider.map(( item ) => {
                return (
                    <div
                        key={ item.id }
                        className={slideIndex === item.id ? "slide active-anim" : "slide"}
                    >   
                        <div className="tittleSliderContainer">
                            <h2>{ item.title }</h2>
                        </div>
                        <div className="subTittleSliderContainer">
                            <h4>{ item.subTitle }</h4>
                        </div>
                        <div className="btn-container">    
                            <Link to="/detail">
                                <button className="btn-basic btn-slider">CONOCE MÁS {'>'} </button>
                            </Link>
                        </div>
                        <img src={ item.img } alt={ item.textimg } />
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