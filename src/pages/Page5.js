import React from 'react';
import PORTRAIT from '../assets/PORTRAIT.jpg';
import './Page5.css';

export const Page5 = props => {
  setTimeout(() => {
    props.history.push('/page6');
  }, 4000)

  const title = 'Educator';
  const subTitle = '"I am a builder, and i believe that education can build the next generation"';
  return (
    <div> 
      <img className="centerX" src={PORTRAIT} alt="sampleImage" />
      
      {/*
        <div className="text-box animated fadeIn">
          <p className="title">{title}</p>
          <p className="subtitle">{subTitle}</p>
        </div>
      */}
    </div>
  );
}
