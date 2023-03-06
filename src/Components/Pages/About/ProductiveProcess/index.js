import React from 'react'

const ProductiveProcess = () => {

  let productiveProcess = "https://firebasestorage.googleapis.com/v0/b/las-verde-web.appspot.com/o/about%20imagenes%2FproductiveProcess.png?alt=media&token=43821304-3fd0-4a68-8ff1-2d1016ac36ce"

  return (
    <div className="productiveProcessContainer">
    <div className="productiveProcessContent">
      <h2 className="productiveProcessTitle">
        Historia
      </h2>
        <p className="productiveProcessText">
          Las Verde en una empresa dedicada a la fabricación y venta de jugos naturales que tuvo sus inicios en 2018 apostando por la tendencia mundial de consumo de bebidas y alimentos saludables tanto en la región como a nivel mundial. Dicha tendencia se vió acelerada debido al
          COVID-19, generando de esta manera una mayor conciencia del cuidado de la salud, los hábitos
          saludables y el bienestar de las personas.<br /><br />

          Las Verde fue creada para facilitar el consumo de alimentos saludables a las personas que por su estilo de vida y actividad necesitan de una solución rica sana y
          saludable.<br /><br />

          Sus productos son jugos 100% naturales, a partir de frutas y verduras, sin aditivos, conservantes ni agroquímicos para, de este modo, lograr un producto que ayuda a desarrollar habitos saludables. Los productos están destinados a toda
          persona que busque sentirse mejor, más saludable y liviano.<br /><br />

          Las Verde brinda atención personalizada en su local y por otros medios digitales, son cercanos, tienen clientes fidelizados, estan siempre en búsqueda de seguir mejorando y hacer feliz al cliente.<br /><br />
        </p>  
    </div>
    <figure className="productiveProcessImageContent">
      <img src={ productiveProcess } alt="Proceso de elaboración de los jugos" />
    </figure>
  </div>
  )
}

export default ProductiveProcess