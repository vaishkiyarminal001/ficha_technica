import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import TitleIcon from '@mui/icons-material/Title';
import PhotoSizeSelectLargeIcon from '@mui/icons-material/PhotoSizeSelectLarge';
import { useNavigate } from 'react-router-dom';
import './Gallery.css';

export default function Singleproduct() {
  const [state, setState] = useState({});
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  useEffect(() => {
    ShowProduct();
  }, []);

  const ShowProduct = async () => {
    try {
      const response = await fetch(`http://localhost:8000/gallery/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setState(data);
    } catch (error) {
      console.error('Error:', error);
      // Handle the error, e.g., by displaying an error message to the user.
    }
  };

  console.log(state);

  return (
    <div className="display-card1">
     
      <div className="left">
        <img src={state.image} alt="error" width="450px" height="450px" />
      </div>

      <div className="right">
       
        <div key={state.id} className="card1">
          <div className="details">
            <h2>
              <PersonIcon className="icon" />
              Nombre: {state.name}
            </h2>
            <hr />


            <div className="detail2">
              <h3>
                <ColorLensIcon className="icon" />
                Técnica: {state.Stechnique}
              </h3>
             
              <h3>
                <TitleIcon className="icon" />
                Título: {state.Stitle}
              </h3>
             
              <h4>
                <CalendarMonthIcon className="icon" />
              {state.Syear}
              </h4>
             
              <h4>
                <CalendarMonthIcon className="icon" />
                {state.Scentury}
              </h4>

              <h4>
                <CalendarMonthIcon className="icon" />
                DIRECCIÓN: {state.Splacedob}
              </h4>

              <h4>
                <PhotoSizeSelectLargeIcon className="icon" />
                Tamaño: {state.size}
              </h4>
           
           
           
            </div>
          </div>
          <div className="buttonDiv">
            <button onClick={() => navigate(`/form`)} className="showmore1">
              Enquiry for the sketch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  }  
