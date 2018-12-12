import React from "react";
import img_iridiscent from '../assets/img_iridiscent.jpg'
import './Tile.css';

export const Tile = props => {
  return (
    <div className="card" style={{
        height:`${props.height + 50}px`,
        width: '40px',
        background: props.color
      }}>
      {/*<img className="innerCard" src={img_iridiscent} alt="img"/>*/}
      <div className= "innerDetails">
        {/*<h2>Tile No- {props.data}</h2>*/}
      </div>
    </div>
  )
}
