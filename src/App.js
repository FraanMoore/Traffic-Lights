
import './App.css';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const TrafficLight = () => {
  const [color, setColor] = useState("");

  return (
    <div className='semaforo'>
      <div className="btn-group-vertical rounded-circle" style={{border: "15px", }} role="group" aria-label="Vertical button group">
  
  <button id='red' type="button" 
  onClick={() => setColor("red")}
  style={{background: "#F32316",
  marginBottom:"15px",
  boxShadow: color === "red" ? "2px 2px 10px 10px #F3544A" : "none",}} >

  </button>
  <button id='yellow' type="button" 
  onClick={() => setColor("yellow")}
  style={{background: "#F9E714",
  marginBottom:"15px",
  boxShadow: color === "yellow" ? "2px 2px 10px 10px #F5E638" : "none",}}>

  </button>
  <button id='green' type="button" 
  onClick={() => setColor("green")}
  style={{background: "#1BBB1D",
  boxShadow: color === "green" ? "2px 2px 10px 10px #2CBF2E" : "none",}}>

  </button>
</div>  
    </div>)
}


export default TrafficLight;
