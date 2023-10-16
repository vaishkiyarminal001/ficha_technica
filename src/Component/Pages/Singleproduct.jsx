import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import TitleIcon from '@mui/icons-material/Title';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import HomeIcon from '@mui/icons-material/Home';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { useNavigate } from 'react-router-dom';
import './Gallery.css';
import { MyAuthContext } from '../Context/AuthContextProvide';


export default function Singleproduct() {
  const [state, setState] = useState({});
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  const {lang} = useContext(MyAuthContext);

  useEffect(() => {
    ShowProduct();
  }, []);

  const ShowProduct = async () => {
    try {
      const response = await fetch(`https://ficha.onrender.com/gallery/${id}`);
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
if(!lang){

  return (
    <div className="display-card1">
     
      <div className="left">
        <img src={state.image} alt="error"  />
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
                Año: {state.Syear}
              </h4>
             
              <h4>
                <AcUnitIcon className="icon"/>
               Siglo: {state.Scentury}
              </h4>

              <h4>
                <HomeIcon className="icon" />
                DIRECCIÓN: {state.Splacedob}
              </h4>

              <h4>
                <AspectRatioIcon className="icon" />
                Tamaño: {state.size}
              </h4>
           
           
           
            </div>
          </div>
          <div className="buttonDiv">
            <button onClick={() => navigate(`/form`)} className="showmore1">
            Consulta para el boceto
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}
  return (
    <div className="display-card1">
     
      <div className="left">
        <img src={state.image} alt="error"  />
      </div>

      <div className="right">
       
        <div key={state.id} className="card1">
          <div className="details">
            <h2>
              <PersonIcon className="icon" />
              Name: {state.name}
            </h2>
            <hr />


            <div className="detail2">
              <h3>
                <ColorLensIcon className="icon" />
                Technique: {state.technique}
              </h3>
             
              <h3>
                <TitleIcon className="icon" />
                Title: {state.title}
              </h3>
             
              <h4>
                <CalendarMonthIcon className="icon" />
                Year: {state.year}
              </h4>
             
              <h4>
                <AcUnitIcon className="icon"/>
               Century: {state.century}
              </h4>

              <h4>
                <HomeIcon className="icon" />
                Place & DOB: {state.placedob}
              </h4>

              <h4>
                <AspectRatioIcon className="icon" />
                Mesurment: {state.size}
              </h4>
           
           
           
            </div>
          </div>
          <div className="buttonDiv">
            <button onClick={() => navigate(`/form`)} className="showmore1">
            Enquiry for the Sketch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  }  
