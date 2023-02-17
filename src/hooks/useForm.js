import { useState } from 'react'

export const useForm = ( initialData, onValidate ) => {
    const [data, setData] = useState( initialData );
    const [errors, setErrors ] = useState({})
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target
        setData(({
            ...data,
            [name]:value
        }))
      };

      const handleSubmit = (e) => {
        e.preventDefault()
        const err = onValidate(data)
        setErrors(err)
    
        if( Object.keys(err).length === 0 ) {
          setLoading(true)
          console.log(data)
          fetch("https://formsubmit.co/ajax/baranda.gustavo@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                console.log(response)
                setLoading(false);
                setResponse(true);
                setData(initialData);
                setTimeout(() => setResponse(false),5000)
            })
            .catch(error => console.log(error));
        } else{
          setErrors(err)
        }
      }
      return {
        data, 
        errors, 
        loading, 
        response, 
        handleChange, 
        handleSubmit 
      }
}