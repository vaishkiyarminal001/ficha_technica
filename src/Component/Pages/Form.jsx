import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Gallery.css";
import { MyAuthContext } from '../Context/AuthContextProvide';
import { useContext } from 'react';


export const Contactform = () => {

  const {lang} = useContext(MyAuthContext);



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    state: '',
    country: '',
    zipcode: '',
    textMessage: '',
  });

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value,});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const data = {
        from_name: formData.name,
        from_email: formData.email,
        contact: formData.contact,
        state: formData.state,
        country: formData.country,
        zipcode: formData.zipcode,
        message: formData.textMessage,
    }

    const service_id = 'service_xniec8i';
    const template_id = 'template_7866a0k';
    const user_id = 'trXKQe1PokVGXnqF_';

   emailjs
      .send(service_id, template_id, data, user_id)
      .then(
        function (res) {
         toast('Sending');

         setFormData({
          name: '',
          email: '',
          contact: '',
          state: '',
          country: '',
          zipcode: '',
          textMessage: ''
        });

        
        },
        function (error) {
          console.log('Email send error:', error);
          toast('Error!!!!');
        }
      );
    console.log('Form data submitted:', formData);
  };

  if(!lang){


    return (
      <div className="FormContainer">
        <h1>Formulario de Consulta</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Dirección de correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="contact">Contacto:</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="state">Estado:</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="country">País:</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="zipcode">Código postal:</label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="textMessage">Mensaje de texto:</label>
            <textarea
              id="textMessage"
              name="textMessage"
              value={formData.textMessage}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Entregar</button>
        </form>
      </div>
    );

  }

  return (
    <div className="FormContainer">
      <h1>Enquiry Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contact">Contact:</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="zipcode">Zipcode:</label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="textMessage">Text Message:</label>
          <textarea
            id="textMessage"
            name="textMessage"
            value={formData.textMessage}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
