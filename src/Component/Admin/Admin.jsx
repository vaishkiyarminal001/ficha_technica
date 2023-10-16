import React, { useContext, useState } from 'react';
import axios from 'axios';
import "./Admin.css";
import { useNavigate } from 'react-router-dom';
import { MyAuthContext } from '../Context/AuthContextProvide';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const naviagte = useNavigate();
  const {isAuth, setIsauth} = useContext(MyAuthContext);



 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend to create a new item
      const response = await axios.post('https://ficha.onrender.com/post', formData);
      toast("Post Successfully");

      setFormData({
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
    });


      if (response.status === 201) {
        setMessage('Item created successfully.');
        setFormData(initialFormData);
        
      }
    } catch (error) {
      setMessage('Error creating item. Please try again.');
    }
  };

console.log(process.env.id);
  const handleLogin = () => {
    
    if (username === "edger" && password === "edger123@") {
     
      setIsauth(true);
      toast("Login Successfull");
    } else {
      
      setIsauth(false);
      toast("Wrong ID/Password");
    }
  };





  if(!isAuth){
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

      <button onClick={() =>{
        naviagte("/delete")
      }} style={{background: "red"}}>Delete Product</button>


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
        <label htmlFor="Splacedob">Spanish Place DOB:</label>
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
        <label htmlFor="placedob">Place DOB:</label>
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

      <button className="submitAdmin"
          type="submit">Submit</button>
      
    </form>
   
  </div>
   
  );
};