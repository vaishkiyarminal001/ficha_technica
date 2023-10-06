import { useState, useEffect } from "react"
import "./Gallery.css";
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { useNavigate } from "react-router-dom";

export default function Gallery() {

    const [state, setState] = useState([]);
    console.log(state);

    const navigate = useNavigate();

    useEffect(() =>{
        DisplayPaint();
    },[]);

    let url = `http://localhost:8080/paint`;

    const DisplayPaint = async() =>{
        const res = await fetch(url);
        const data = await res.json();
        setState(data);
        console.log(data);
    } 


  return (
    <div className="conatiner">
        {/* <h1 className="heading">Art</h1> */}
        
        
  {/* mapping */}
<div className="display-card">
        {
           state.map((e) =>(
            <div key={e.id} className="card">
                <img src={e.image} alt={e.title} width="450px" height="450px"/>
                {/* <h1>{e.id}</h1> */}

                <div className="details">
                    <h2><PersonIcon className="icon"/>Nombre: {e.name}</h2>
                    <hr/>

                    <div className="detail2">
                    <h3><ColorLensIcon className="icon"/>Técnica:{e.technique}</h3>
                    <h3><ColorLensIcon className="icon"/>Técnica:{e.technique}</h3>
                    <h4><CalendarMonthIcon className="icon"/>{e.dateofpaint}</h4>
                    <h4><CalendarMonthIcon className="icon"/>{e.dateofpaint}</h4>
                   </div>

                </div>

                <button onClick={()=> navigate(`singleproduct/${e.id}`)} className="showmore">Show More</button>
            </div>
           ))
        }


</div>

    </div>
  )
}
