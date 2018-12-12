import React from 'react';
import onetwo from '../assets/onetwo.mp4';

export const Page2 = props => {

  const questionPart1 = "Can you impact";
  const questionPart2 = "with a migrant worker?"
  const answers = [
    'Money',
    'Environment',
    'Family',
    'Artistic Expression',
    'Empowerment',
    'Education',
    'Ambition'
  ];

  return (
    <div> 
      <video className="video" loop autoPlay>
        <source src={onetwo} type="video/mp4" />
      </video>
      
      <div className="question-box centerY animated fadeIn">
        <h2 className="question1">{questionPart1}</h2>
        <ul className="answer-box">
          {answers.map(answer => {
            return (<li key={answer} onClick={() => props.history.push('/page3')}>{answer}</li>)
          })}
        </ul>
        <h2 className="question2">{questionPart2}</h2>
      </div>
    </div>
  );
}
