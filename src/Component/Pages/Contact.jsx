import React from 'react'
import "./Contact.css";
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyAuthContext } from '../Context/AuthContextProvide';
import { useContext } from 'react';


export default function Contact() {

  const {lang} = useContext(MyAuthContext);




  const initialValue = {
    name: "",
    email: "",
    contact: "",
    message: ""
  }
  const [state, setState] = useState(initialValue);
  console.log(state);

  const handleInput = (e) =>{
    e.preventDefault();
    setState({...state, [e.target.name]: e.target.value })
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
        from_name: state.name,
        from_email: state.email,
        contact: state.contact,
        message: state.message,
    }

    const service_id = 'service_xniec8i';
    const template_id = 'template_92alip7';
    const user_id = 'trXKQe1PokVGXnqF_';

   emailjs
      .send(service_id, template_id, data, user_id)
      .then(
        function (res) {
         toast('Sending');

         setState(initialValue);
        

        },
        function (error) {
          console.log('Email send error:', error);
          toast('Error!!!!');
        }
      );
  };



  if(!lang){
    return (
      <div className="contact-container">
        <div className="contact-content">
          <h1>Contacta con nosotros</h1>
          <p>Si tiene alguna pregunta o consulta, no dude en contactarnos.</p>
  
          <div className="contact-info">
            <h2>Información de la galería</h2>
            <p>
            Teléfono: +52 1 55 1337 3366<br />
            Correo electrónico: eventos.evscomunicacion@gmail.com
            </p>
          </div>
  
          <div className="contact-form">
            <h2>Formulario de contacto</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input onChange={handleInput} type="text" id="name" name="name" required />
              </div>
  
              <div className="form-group">
                <label htmlFor="email">Correo electrónico:</label>
                <input onChange={handleInput} type="email" id="email" name="email" required />
              </div>
  
              <div className="form-group">
                <label htmlFor="name">Contacto:</label>
                <input onChange={handleInput} type="text" id="name" name="contact" required />
              </div>
  
              <div className="form-group">
                <label htmlFor="message">Mensaje:</label>
                <textarea onChange={handleInput} id="message" name="message" rows="4"></textarea>
              </div>
  
              <button style={{background: "#b79b54"}} type="submit">Entregar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }



  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, please feel free to contact us.</p>

        <div className="contact-info">
          <h2>Gallery Information</h2>
          <p>
            Phone: +52 1 55 1337 3366<br />
            Email: eventos.evscomunicacion@gmail.com
          </p>
        </div>

        <div className="contact-form">
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input onChange={handleInput} type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input onChange={handleInput} type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="name">Contact:</label>
              <input onChange={handleInput} type="text" id="name" name="contact" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea onChange={handleInput} id="message" name="message" rows="4"></textarea>
            </div>

            <button style={{background: "#b79b54"}} type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
