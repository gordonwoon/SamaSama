import { TweenLite, TweenMax, Sine, TimelineMax } from 'gsap';

export const mountPageTween = element => {
  TweenLite.fromTo(element, 1, {
    opacity: 0,
  },{
    opacity: 1,
    ease: Sine.easeInOut
  });
}

export const unmountPageTween = element => {
  TweenLite.fromTo(element, 1, {
    opacity: 1,
  },{
    opacity: 0,
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
    divElement.style = 'float: left;';
    let divText = document.createTextNode(char === ' ' ? '\u00A0' : char);
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

export const typingTextTween = element => {
  replaceTextDiv(element);

  element.childNodes.forEach((node, i) => {
    TweenMax.from(node, 0.1, {
      opacity: 0,
      delay: i * 0.125
    });
  })
}

export const flashElementTween = element => {

  element.childNodes.forEach((node, i) => {
  var tl = new TimelineMax({});
    
  tl.fromTo(node, 1.5, {
      position: 'fixed',
      opacity: 0,
      left: '50%',
      top: '50%',
      scale: .1
    },{
      opacity: 1,
      scale: 1,
      delay: i * 3,
    })
    .to(node, 2, {
      left: `${random(10, 90)}%`,
      top: `${random(10, 90)}%`,
    });
  })
}
