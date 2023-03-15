import React from "react"; 
import ModalDetail from "../ModalDetail/"; 
 
const Item = ( { product, popUpTogle, popUpContent, changeContent } ) => {
  return (
    <div className="itemContainer">
      <div className="card">
        <img src={ product.image } alt={ product.title } />
        <h2>{ product.title }</h2>
        <p>{ product.ingredients }</p>
        <button className="btn-basic" onClick={ () => changeContent( product ) }>
          VER DETALLE
        </button>
      </div>
      {
        popUpTogle && (
          <ModalDetail
            popUpContent={ popUpContent }
            changeContent={ changeContent }
          /> 
        )}
    </div> 
  ) 
} 
 
export default Item; 