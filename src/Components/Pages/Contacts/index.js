import React from "react"; 
import Form from "./Form";
import TextForm from "./TextForm"; 
 
const Contacts = () => { 
  return ( 
    <div className="contact-container"> 
      <TextForm />
      <Form />
    </div> 
  ); 
}; 
 
export default Contacts; 