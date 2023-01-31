import React from 'react';

const form = () => {
  return (
    <div className="form-container">
    <form action="">
      <label for="nombre">Nombre</label>
      <input type="text" name="nombre" />
      <label for="tel">Teléfono</label>
      <input type="tel" name="tel" />
      <label for="email">Email</label>
      <input type="email" name="email" />
      <label for="mensaje">Mensaje</label>
      <textarea
        name="mensaje"
        cols="40"
        rows="10"
        maxlength="250"
      >        
      </textarea>
      <input type="submit" value="Enviar" className="btn-basic" />
    </form>
  </div>
  )
}

export default form;