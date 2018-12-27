import React from 'react';
import { mountPageTween, unmountPageTween, typingTextTween, flashElementTween } from '../helper/tween';
import Navigation from '../components/navigation';
import PORTRAIT from '../assets/PORTRAIT.jpg';

export class Page7 extends React.Component {
  constructor(props){
    super(props);

    this.pageContainer = React.createRef();
    this.text = React.createRef();
    this.random = React.createRef();
  }

  componentDidMount() {
    mountPageTween(this.pageContainer.current);
    typingTextTween(this.text.current);
    flashElementTween(this.random.current);

    setTimeout(() => {
      this.handleNext();
    }, 18000)
  }

  handleNext = () => {
    unmountPageTween(this.pageContainer.current);
    setTimeout(() => {
      this.props.history.push('/page8');
    }, 1000)
  }

  render() {
    const text = 'But not everyone is as lucky as Joy.';
    const text2 = 'Education, Proverty & Unemployment, Food & Water Inequality was the Top 3 issues MWs want to change back home.';
    return (
      <div className="page-container text-30" ref={this.pageContainer}>
        <p className="title" ref={this.text}>{text}</p>

        <div ref={this.random}>
          <div>Health issues</div>
          <div>Death</div>
          <div>Unfair pay</div>
          <div>Unsafe working conditions</div>
          <div>Debt</div>
          <div>Homelessness</div>
          <div>Hygiene</div>
          <div>Discrimination</div>
          <img className="img-small" src={PORTRAIT} alt="sampleImage" />
          <img className="img-small" src={PORTRAIT} alt="sampleImage" />
        </div>

        <p className="text-potrait centerY" ref={this.text}>{text2}</p>

        <Navigation onNext={this.handleNext} />
      </div>
    );
  }
}
