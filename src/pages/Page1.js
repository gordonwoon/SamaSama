import React from 'react';
import { TweenLite, Sine } from 'gsap';
import onetwo from '../assets/onetwo.mp4';
import heartbeatAudio from '../assets/heartbeat.mp3';
import { mountPageTween, unmountPageTween } from '../helper/tween';

export class Page1 extends React.Component {
  constructor(props){
    super(props);

    this.pageContainer = React.createRef();
    this.heartBtn = React.createRef();
    this.audio = new Audio(heartbeatAudio);
  }

  componentDidMount() {
    mountPageTween(this.pageContainer.current);
    TweenLite.fromTo(this.heartBtn.current, 0.5, {
      opacity: 0
    },{
      opacity: 1,
      delay: 2,
      ease: Sine.easeInOut,
      onComplete: () => {
        this.audio.play();
      }
    });
  }

  handleNext = () => {
    unmountPageTween(this.pageContainer.current);
    this.audio.pause();
    setTimeout(() => {
      this.props.history.push('/page2');
    }, 1000)
  }

  render() {
    return (
      <div className="page-container" ref={this.pageContainer}>
        <video className="video-bg" loop autoPlay muted>
          <source src={onetwo} type="video/mp4" />
        </video>

        <button className="heart-btn center" onClick={this.handleNext} ref={this.heartBtn}>Start</button>
      </div>
    );
  }
}
