import React from 'react';
import ReactDOM from 'react-dom';
import { TweenLite, TweenMax, Sine, SplitText } from 'gsap';

export const pageTween = element => {
  TweenLite.fromTo(element, 0.5, {
    x: -50,
    opacity: 0.25,
  },{
    x: 0,
    opacity: 1,
    ease: Sine.easeInOut
  });
}

const random = (min, max) => {
	return (Math.random() * (max - min)) + min;
}

const replaceTextDiv = element => {
  let text = element.innerText;
  element.innerText = '';
  
  [...text].forEach(char => {
    let divElement = document.createElement('div');
    let divText = document.createTextNode(char);
    divElement.appendChild(divText);
    element.appendChild(divElement);
  });
}

export const randomTextTween = element => {
  replaceTextDiv(element);

  element.childNodes.forEach((node, i) => {
    TweenMax.from(node, 2.5, {
      opacity: 0,
      x: random(-500, 500),
      y: random(-500, 500),
      z: random(-500, 500),
      scale: .1,
      delay: i * .02,
      yoyo: true,
      repeat: -1,
      repeatDelay: 10
    });
  })
}
