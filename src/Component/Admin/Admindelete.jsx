import React, { useState, useEffect } from 'react';
import "./Admin.css";
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { useContext } from 'react';
import '../Pages/Gallery.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Delete() {
  const [state, setState] = useState([]);
  
 

  const navigate = useNavigate();

  useEffect(() => {
    DisplayPaint();
  }, []);

  const DisplayPaint = async () => {
    try {
      const res = await fetch('https://ficha.onrender.com/gallery');
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setState(data);
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
      // Handle the error, e.g., by displaying an error message to the user.
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://ficha.onrender.com/gallery/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      // Remove the deleted item from the state
      setState((prevState) => prevState.filter((item) => item._id !== id));
      toast("Deleted");
    } catch (error) {
      console.error('Error:', error);
      // Handle the error, e.g., by displaying an error message to the user.
    }
  };

  return (
    <div className="container">
     <button className="DeleteBt" onClick={() => navigate("/admin")} >Back to add products</button>

      <div className="display-card">
        {state.map((e) => (
          <div key={e._id} className="card">
            <img
              src={`https://ficha.onrender.com/${e.image}`}
              alt={e.title}
             
              width="350px"
              height="350px"
            />
            <div className="details">
              <h2>
                <PersonIcon className="icon" />
                Nombre: {e.name}
              </h2>
              <hr />
              <div className="detail2">
                <h3>
                  <ColorLensIcon className="icon" />
                  Técnica: {e.Stechnique}
                </h3>
                <h3>
                  <ColorLensIcon className="icon" />
                  Singlo: {e.Scentury}
                </h3>
                <h4>
                  <CalendarMonthIcon className="icon" />
                  Año: {e.Syear}
                </h4>
                <h4>
                  <CalendarMonthIcon className="icon" />
                  Serie: {e.series}
                </h4>
              </div>
            </div>
            <button className="showmore" onClick={() => handleDelete(e._id)}>
              Delete/Borrar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}