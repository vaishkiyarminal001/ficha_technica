import React, { useContext, useState } from 'react';
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { useNavigate } from 'react-router-dom';
import { MyAuthContext } from '../Context/AuthContextProvide';


export const Footer = () => {

    const navigate = useNavigate();
    const {lang} = useContext(MyAuthContext);


    if(!lang){

      return (

        <div className="footer">
    
            <h3>Artgalleryroma.com.mx</h3>
            
            <div className="footSeconf">
                <p onClick={() => {navigate("/")}}>Hogar</p>
                <p onClick={() => {navigate("/gallery")}}>Galería</p>
                <p onClick={() => {navigate("/about")}}>Acerca de</p>
                <p onClick={() => {navigate("/contact")}}>Contacto</p>
                <p onClick={() => {navigate("/form")}}>Consulta</p>
            </div>
    
            <div className="footIcon">
                <div><FacebookIcon/></div>
                <div><InstagramIcon/></div>
                <div><AddLocationAltIcon/></div>
            </div>

            {/* <div className="CreatedBy">
          <h3>Creado por :- KalyanTech</h3>
          
        </div> */}
    
    
    
        </div>
      )

    }



  return (

    <div className="footer">

        <h3>Artgalleryroma.com.mx</h3>
        
        <div className="footSeconf">
            <p onClick={() => {navigate("/")}}>   Home</p>
            <p onClick={() => {navigate("/gallery")}}>   Gallery</p>
            <p onClick={() => {navigate("/about")}}>   About</p>
            <p onClick={() => {navigate("/contact")}}>   Contact</p>
            <p onClick={() => {navigate("/form")}}>   Enquiry</p>
        </div>

        <div className="footIcon">
            <div><FacebookIcon/></div>
            <div><InstagramIcon/></div>
            <div><AddLocationAltIcon/></div>
            

        </div>

        {/* <div className="CreatedBy">
          <h3>Created By :- KalyanTech</h3>
        </div> */}


        



    </div>
  )
}
