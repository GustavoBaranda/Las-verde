import { useForm } from '../../../../hooks/useForm';


const initialData = {
   Name: "", 
   Phone: "", 
   Email: "",  
   Message: ""  
  }

const onValidate = (data) => {
  let errors = {}
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexPhone = /^\d{10,13}$/
  // /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/g;
  const regexEmail = /^\w+([\.\+\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,4})+$/g; //eslint-disable-line
  const regexMessage = /^.{1,255}$/;

  if (!data.Name.trim()) {
    errors.Name = 'El campo "Nombre" es requerido!'
  } else if (data.Name.length < 4 ){
    errors.Name = 'El campo "Nombre" debe tener 4 caracteres como minimo'
  }else if(!regexName.test(data.Name)){
    errors.Name = 'El campo "Nombre" solo acepta letras y espacios en blanco'
  }
  
  if (!data.Phone.trim()) {
    errors.Phone = 'El campo "Telefono" es requerido!'
  } else if(!regexPhone.test(data.Phone)){
    errors.Phone = 'El campo "Telefono" solo acepta numeros'
  }

  if (!data.Email.trim()) {
    errors.Email = 'El campo "Correo" es requerido!'
  } else if(!regexEmail.test(data.Email)){
    errors.Email = 'El campo "Email" contiene un formato no valido'
  }

  if (!data.Message.trim()) {
    errors.Message = 'El campo "Mensaje" es requerido!'
  }  else if(!regexMessage.test(data.Message)){
    errors.Message = 'El campo "Mensaje" no debe exceder los 255 caracteres'
  }
  return errors 
}

const Form = () => {

  const {
    data, 
    errors, 
    loading, 
    response, 
    handleChange, 
    handleSubmit 
  } = useForm(initialData, onValidate);

  return (
    <div className="form-container">
      <form onSubmit={ handleSubmit } utocomplete="off">
        <div className="input-container">
          <input 
            className='text-input'
            placeholder='Ingrese su nombre'
            type="text" 
            name="Name" 
            value={ data.Name }
            onChange={ handleChange }
            required
          />
          <label className='label' htmlFor="name">Nombre</label>
          {errors.Name &&<p  className='errorMessage'>{errors.Name}</p>}
        </div>

        <div className="input-container">
          <input 
            className='text-input'
            placeholder='Ingrese su telefono'
            type="tel" 
            name="Phone" 
            value={data.Phone} 
            onChange={ handleChange }
            required
          />
          <label className='label' htmlFor="phone">
            Teléfono
          </label>
          {errors.Phone &&<p className='errorMessage'>{errors.Phone}</p>}
        </div>

        <div className="input-container">
          <input 
            required
            className='text-input'
            placeholder='Ingrese su correo electrónico'
            type="text" 
            name="Email" 
            value={ data.Email } 
            onChange={ handleChange }
          />
          <label className='label' htmlFor="email">
            Email
          </label>
          {errors.Email &&<p className='errorMessage'>{errors.Email}</p>}
        </div>
        <div className="input-container">
          <textarea
            className='text-input'
            placeholder='Ingrese un mensaje'
            name="Message"
            cols="40"
            rows="10"
            maxLength="250"
            value={ data.Message }
            onChange={ handleChange }
            required
          />
          <label className='label' htmlFor="message">Mensaje</label>

            {errors.Message &&<p className='errorMessage-textArea'>{errors.Message}</p>}
          </div>
          <button type="submit" className="btn-basic" disabled={loading} >{loading
          ? 'Enviando...' : 'Enviar' }</button>

          {response&&<p className='errorMessage'>El mensaje fue enviado con exito!!!</p>}
      </form>
    </div>
  )
}
export default Form;