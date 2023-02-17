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
  const regexPhone = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/g;
  const regexEmail = /^\w+([\.\+\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,4})+$/g; //eslint-disable-line
  const regexMessage = /^.{1,255}$/;

  if (!data.Name.trim()) {
    errors.Name = 'El campo "Nombre" es requerido!'
  } else if(!regexName.test(data.Name)){
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
    errors.Message = 'El campo "Message" no debe exceder los 255 caracteres'
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


  // const [loading, setLoading] = useState(false);
  // const [ errors, setErrors ] = useState({})
  // const [data, setData] = useState({
  //   Name:'',
  //   Phone:'',
  //   Email:'',
  //   Message:''
  // });
  
  // const { Name, Phone, Email, Message } = data

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setData(({
  //       ...data,
  //       [name]:value
  //   }))
  // }

  // const onValidate = (data) => {
  //   let errors = {}
  //   const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  //   const regexPhone = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/g;
  //   const regexEmail = /^\w+([\.\+\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,4})+$/g; //eslint-disable-line
  //   const regexMessage = /^.{1,255}$/;

  //   if (!data.Name.trim()) {
  //     errors.Name = 'El campo "Nombre" no debe ser vacio!'
  //   } else if(!regexName.test(data.Name)){
  //     errors.Name = 'El campo "Nombre" solo acepta espacios y letras'
  //   }
    
  //   if (!data.Phone.trim()) {
  //     errors.Phone = 'El campo "Telefono" no debe ser vacio!'
  //   } else if(!regexPhone.test(data.Phone)){
  //     errors.Phone = 'El campo "Telefono" solo acepta numeros'
  //   }

  //   if (!data.Email.trim()) {
  //     errors.Email = 'El campo "Correo" no debe ser vacio!'
  //   } else if(!regexEmail.test(data.Email)){
  //     errors.Email = 'El campo "Email" contiene un formato no valido'
  //   }

  //   if (!data.Message.trim()) {
  //     errors.Message = 'El campo "Mensaje" no debe ser vacio!'
  //   }  else if(!regexMessage.test(data.Message)){
  //     errors.Message = 'El campo "Message" contiene un formato no valido'
  //   }
  //   return errors 
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const err = onValidate(data)
  //   setErrors(err)

  //   if( Object.keys(err).length === 0 ) {
  //     setLoading(true)
  //     console.log(data)
  //   } else{
  //     setErrors(err)
  //   }
  // }

  return (
    <div className="form-container">
      <form onSubmit={ handleSubmit } >
          <label htmlFor="name">Nombre</label>
          <input 
            type="text" 
            name="Name" 
            value={ data.Name }
            onChange={ handleChange }
          />

          {errors.Name &&<p>{errors.Name}</p>}

          <label htmlFor="phone">Teléfono</label>
          <input 
            type="tel" 
            name="Phone" 
            value={data.Phone} 
            onChange={ handleChange }
          />

          {errors.Phone &&<p>{errors.Phone}</p>}

          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="Email" 
            value={ data.Email } 
            onChange={ handleChange }
          />

          {errors.Email &&<p>{errors.Email}</p>}

          <label htmlFor="message">Mensaje</label>
          <textarea
            name="Message"
            cols="40"
            rows="10"
            maxLength="250"
            value={ data.Message }
            onChange={ handleChange }
          />

            {errors.Message &&<p>{errors.Message}</p>}

          <button type="submit" className="btn-basic" disabled={loading} >{loading
          ? 'loading...' : 'Enviar' }</button>

          {response&&<p>mensaje exitoso</p>}
      </form>
    </div>
  )
}
export default Form;