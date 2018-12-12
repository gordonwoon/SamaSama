import React from 'react';
import onetwo from '../assets/onetwo.mp4';
import './Page1.css';
import audio from '../assets/heartbeat.mp3';

export const Page1 = props => {
  return (
    <div> 
      <video className="video" loop autoPlay muted>
        <source src={onetwo} type="video/mp4" />
      </video>
      <audio src={audio} loop autoPlay/>

      <button className="heart-btn center" onClick={() => props.history.push('/page2')}>Start</button>
    </div>
  );
}
