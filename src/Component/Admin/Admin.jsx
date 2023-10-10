import React, { useState } from 'react';
import axios from 'axios';
import "./Admin.css";

export const Admin = () => {

  const initialFormData = {
    image: '',
    image2: '',
    image3: '',
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend to create a new item
      const response = await axios.post('http://localhost:8000/post', formData);

      if (response.status === 201) {
        setMessage('Item created successfully.');
        setFormData(initialFormData);
        alert("Post Successfully");
      }
    } catch (error) {
      setMessage('Error creating item. Please try again.');
    }
  };


  const handleLogin = () => {
    
    if (username === 'admin' && password === 'admin123') {
     
      setLogin(true);
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
    <h2>Create New Item</h2>
    <form className='formClass' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input type="text" name="image" value={formData.image} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="image2">Image2 URL:</label>
        <input type="text" name="image2" value={formData.image2} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="image3">Image3 URL:</label>
        <input type="text" name="image3" value={formData.image3} onChange={handleChange} />
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
        <label htmlFor="Splacedob">Splacedob:</label>
        <input type="text" name="Splacedob" value={formData.Splacedob} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="Stitle">Stitle:</label>
        <input type="text" name="Stitle" value={formData.Stitle} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="Stechnique">Stechnique:</label>
        <input type="text" name="Stechnique" value={formData.Stechnique} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="Syear">Syear:</label>
        <input type="text" name="Syear" value={formData.Syear} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="Scentury">Scentury:</label>
        <input type="text" name="Scentury" value={formData.Scentury} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="placedob">Placedob:</label>
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


