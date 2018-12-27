import React from 'react';
import { mountPageTween, unmountPageTween, typingTextTween } from '../helper/tween';
import Navigation from '../components/navigation';

export class Page8B extends React.Component {
  constructor(props){
    super(props);

    this.pageContainer = React.createRef();
  }

  componentDidMount() {
    mountPageTween(this.pageContainer.current);
  }

  // handleNext = () => {
  //   unmountPageTween(this.pageContainer.current);
  //   setTimeout(() => {
  //     this.props.history.push('/page9');
  //   }, 1000)
  // }

  render() {
    return (
      <div className="page-container" ref={this.pageContainer}>

        <p className="text-potrait animated fadeIn">
          <p><strong>When</strong></p>
          <p>A migrant worker employee wants to talk to me, I will listen.</p>
          <p>Occasion comes close (Labour Day, Intl Migrants Day), I will host an appreciation event for my MW employees.</p>
          <p>I see opportunities for my MW employee(s), I will be understanding and provide time and encouragement for self-employment.</p>
        </p>

        // <Navigation onNext={this.handleNext} />
      </div>
    );
  }
}
