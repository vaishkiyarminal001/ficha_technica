import React, { useState,useEffect } from 'react' 

 import {Link as RouterLink} from "react-router-dom" 
 import "./Navbar.css" 
 import { Navigate, useNavigate } from "react-router-dom"; 
 import img from "./logo.png";
 import { useContext } from 'react';
 import { MyAuthContext } from '../Context/AuthContextProvide';
 const Navbar = () => { 

  // const [toogle, setToggle] = useState(false);

  const {language,lang ,setLang} = useContext(MyAuthContext);
  console.log(lang);


   let mylink=[ 
     { 
         title: "Home", 
         path: "/" 
     }, 
     { 
         title: "Gallery", 
         path: "/gallery" 
     }, 
     { 
         title: "About", 
         path: "/about" 
     }, 
     { 
         title: "Contact", 
         path: "/contact" 
     }

     
    
   ] 
  
   return ( 
     <div className="Navbar"> 

<div className='logo'>
        <img src={img} alt=''/>
      </div>



     <nav>

      <RouterLink  className="link" to="/">{lang ? "Home": "Hogar"}</RouterLink>
       <RouterLink  className="link" to="/gallery">{lang ? "Gallery": "Galería"}</RouterLink>
       <RouterLink  className="link" to="/about">{lang ? "About": "Acerca de"}</RouterLink>
       <RouterLink  className="link" to="/contact">{lang ? "Contact": "Contacto"}</RouterLink>
       {/* <RouterLink  className="link" to="/">{lang ? "Admin": "Admin"}</RouterLink> */}
  
     </nav>

     
     <div className="upper-nav">
      <button onClick={() => setLang(!lang)} className="nav-button">{lang ? "Española"  : "English"}</button>
    </div>
  
       </div> 
       
   ); 
 } 
  
 export default Navbar