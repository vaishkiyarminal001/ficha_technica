import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { MyAuthContext } from '../Context/AuthContextProvide';
import { useContext } from 'react';
import './Gallery.css';

export default function Gallery() {
  const [state, setState] = useState([]);
  const navigate = useNavigate();
  const { lang } = useContext(MyAuthContext);

  useEffect(() => {
    DisplayPaint();
  }, []);

  const DisplayPaint = async () => {
    try {
      const res = await fetch('http://localhost:8000/gallery');
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

  return (
    <div className="conatiner">

      <div className="upperImg">
      <img src="https://www.kindpng.com/picc/m/652-6523798_gallery-blk-calligraphy-hd-png-download.png" alt="" />
      </div>

      <div className="display-card">
        {state.map((e) => (
          <div key={e._id} className="card" onClick={() => navigate(`singleproduct/${e._id}`)}>
            <img
              src={e.image}
              alt={e.title}
              onClick={() => navigate(`singleproduct/${e._id}`)}
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
                  Técnica: {e.Scentury}
                </h3>
                <h4>
                  <CalendarMonthIcon className="icon" />
                  {e.Syear}
                </h4>
                <h4>
                  <CalendarMonthIcon className="icon" />
                  {e.series}
                </h4>
              </div>
            </div>
            <button onClick={() => navigate(`singleproduct/${e._id}`)} className="showmore">
              Show More
            </button>
          </div>
        ))}
      </div>
      {/* <div className="but">
        <button className="showmore2">Previous</button>
        <button className="showmore2">1</button>
        <button className="showmore2">Next</button>
      </div> */}
    </div>
  );

  
}
