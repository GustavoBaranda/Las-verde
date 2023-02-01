import React from 'react';

const form = () => {

  const handleSubmit = () => {
    console.log("Enviado")
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" />
          <label htmlFor="tel">Teléfono</label>
          <input type="tel" name="tel" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            name="mensaje"
            cols="40"
            rows="10"
            maxLength="250"
          ></textarea>
          <button type="submit" className="btn-basic">Enviar</button>
      </form>
    </div>
  )
}

export default form;