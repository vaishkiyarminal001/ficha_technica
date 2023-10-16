import React from 'react';
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {

    const navigate = useNavigate();

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



    </div>
  )
}
