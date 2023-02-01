import React from "react"; 
import Form from "./Form";
import TextForm from "./TextForm"; 
import Maps from "./Maps";
 
const Contacts = () => { 
  return ( 
    <div className="contacts-container">
      <div className="contactInfo-container"> 
        <TextForm />
        <Form />       
      </div> 
      <div className="contactLocation-Container">
        <Maps />
      </div>
    </div>
  ); 
}; 
 
export default Contacts; 