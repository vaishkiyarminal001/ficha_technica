import React, { useState } from 'react';
import axios from 'axios';
import "./Admin.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MyAuthContext } from '../Context/AuthContextProvide';

export const Admin = () => {

  const initialFormData = {
    image: '',
    
    name: '',
    series: '',
    size: '',
    Splacedob: '',
    Stitle: '',
    Stechnique: '',
    Syear: '',
    Scentury: '',
    title: '',
    placedob: '',
    technique: '',
    year: '',
    century: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState('');
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {isAuth, setIsauth} = useContext(MyAuthContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFileChange = (e) => {
    
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };
  
console.log(formData)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend to create a new item
      const response = await axios.post('https://ficha.onrender.com/post', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      

      if (response.status === 201) {
        setMessage('Item created successfully.');
        setFormData(initialFormData);
        
      }
      alert("Post Successfully");
    } catch (error) {
      setMessage('Error creating item. Please try again.');
    }
  };


  const handleLogin = () => {
    
    if (username === process.env.REACT_APP_USERNAME && password === process.env.REACT_APP_PASSWORD) {
     
      setLogin(true);
      setIsauth(true);
    } else {
      
      setLogin(false);
      alert("Wrong Id/Password");
    }
  };

  if(!login){
    return(

        <div className="admin-login-container">
        <h2>Admin Login</h2>
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        
      </div>

        
    )
  }

  return (


    <div className='mainDiv'>
      <button  onClick={() => navigate("/delete")} >Go to delete product</button>
    <h2>Create New Item</h2>
    <form className='formClass'  encType="multipart/form-data" onSubmit={handleSubmit}>
    <div>
          <label htmlFor="image">Image:</label>
          <input type="file" name="image" accept="image/*"  onChange={handleFileChange} />
        </div>
      
    
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="series">Series:</label>
        <input type="text" name="series" value={formData.series} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="size">Size:</label>
        <input type="text" name="size" value={formData.size} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="Splacedob">Spanish Place and DOB:</label>
        <input type="text" name="Splacedob" value={formData.Splacedob} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="Stitle">Spanish Title:</label>
        <input type="text" name="Stitle" value={formData.Stitle} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="Stechnique">Spanish Technique:</label>
        <input type="text" name="Stechnique" value={formData.Stechnique} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="Syear">Spanish Year:</label>
        <input type="text" name="Syear" value={formData.Syear} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="Scentury">Spanish Century:</label>
        <input type="text" name="Scentury" value={formData.Scentury} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="placedob">Place and DOB:</label>
        <input type="text" name="placedob" value={formData.placedob} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="technique">Technique:</label>
        <input type="text" name="technique" value={formData.technique} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input type="text" name="year" value={formData.year} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="century">Century:</label>
        <input type="text" name="century" value={formData.century} onChange={handleChange} />
      </div>

      <button
          type="submit"
          style={{
            marginLeft: '80%',
            // Apply media query for smaller screens
            '@media (max-width: 765px)': {
              marginLeft: '50%', // Adjust the margin for smaller screens
            },
            // Apply media query for medium screens
            '@media (min-width: 992px) and (max-width: 1024px)': {
              marginLeft: '50%', // Adjust the margin for medium screens
            },
          }}
        >
          Submit
        </button>
      
    </form>
   
  </div>
   
  );
};