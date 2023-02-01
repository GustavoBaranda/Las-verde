import React from "react";
import foto from "../../../assets/foto-proceso.png";
import video from "../../../assets/video-proceso.png";
import jugo from "../../../assets/foto-produ.png";

const About = () => {
  return (
    <div className="nosotros-container">
      <div className="nosotros-first">
        <div className="first-container">
          <div className="mobile-container">
            <h2>Historia</h2>
            <p>
              Las Verde en una empresa dedicada a la fabricación y venta de
              jugos naturales que tuvo sus inicios en 2018 apostando por la
              tendencia mundial de consumo de bebidas y alimentos saludables
              tanto en la región como a nivel mundial. Dicha tendencia se vió
              acelerada debido al COVID-19, generando de esta manera una mayor
              conciencia del cuidado de la salud, los hábitos saludables y el
              bienestar de las personas.
            </p>
            <p>
              Las Verde fue creada para facilitar el consumo de alimentos
              saludables a las personas que por su estilo de vida y actividad
              necesitan de una solución rica sana y saludable.
            </p>
          </div>
          <figure>
            <img
              src={foto}
              alt="Foto del proceso de elaboración de los jugos"
            />
            <figcaption>Descripción de la imagen</figcaption>
          </figure>
        </div>
        <div className="first-container">
          <div className="mobile-container">
            <p>
              Sus productos son jugos 100% naturales, a partir de frutas y
              verduras, sin aditivos, conservantes ni agroquímicos para, de este
              modo, lograr un producto que ayuda a desarrollar habitos
              saludables. Los productos están destinados a toda persona que
              busque sentirse mejor, más saludable y liviano.
            </p>
            <p>
              Las Verde brinda atención personalizada en su local y por otros
              medios digitales, son cercanos, tienen clientes fidelizados, estan
              siempre en búsqueda de seguir mejorando y hacer feliz al cliente.
            </p>
          </div>
          <figure>
            <img
              src={foto}
              alt="Foto del proceso de elaboración de los jugos"
            />
            <figcaption>Descripción de la imagen</figcaption>
          </figure>
        </div>
      </div>
      <div className="nosotros-second">
        <div>
          <h2>Misión y visión</h2>
          <h3>Misión</h3>
          <p>
            En Las Verde fabricamos y producimos bebidas 100% naturales a base
            de frutas y verduras, sin agregados, para satisfacer un mercado
            enfocado en mejorar los hábitos de consumo y la practicidad de
            consumo a través de un producto de calidad, siendo la única bebida
            del mercado que carece de endulzantes, concervantes, colorantes o
            agua añadida.
          </p>
          <h3>Visión</h3>
          <p>
            Las Verde pretende ser la primer opción de consumo de una bebida
            100%a base de fruta y verdura.
          </p>
        </div>
        <img src={jugo} alt="Foto del producto final elaborado" />
      </div>
      <div className="nosotros-third">
        <div className="third-text">
          <h2>Proceso productivo</h2>
          <p>
            Sus productos son jugos 100% naturales, a partir de frutas y
            verduras, sin aditivos, conservantes ni agroquímicos para, de este
            modo, lograr un producto que ayuda a desarrollar habitos saludables.
            Los productos están destinados a toda persona que busque sentirse
            mejor, más saludable y liviano.
          </p>
          <p>
            Las verde brinda atención personalizada en su local y por otros
            medios digitales, son cercanos, tienen clientes fidelizados, estan
            siempre en búsqueda de seguir mejorando y hacer feliz al cliente.
          </p>
        </div>
        <img src={video} alt="Video del proceso productivo de los jugos" />
      </div>
    </div>
  );
};

export default About;
