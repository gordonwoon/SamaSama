import React from 'react';
import educator from '../assets/educator.mp4';

export class Page6 extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/page7');
    }, 129*1000)
  }
  render() {
    return (
      <div className="fullscreen-bg"> 
        <video className="fullscreen-bg__video" autoPlay>
          <source src={educator} type="video/mp4" />
        </video>
      </div>
    );
  }
}
