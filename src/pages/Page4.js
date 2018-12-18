import React from 'react';
import { mountPageTween, unmountPageTween } from '../helper/tween';
import Navigation from '../components/navigation';
import PORTRAIT from '../assets/PORTRAIT.jpg';

export class Page4 extends React.Component {
  constructor(props){
    super(props);

    this.pageContainer = React.createRef();
  }

  componentDidMount() {
    mountPageTween(this.pageContainer.current);
  }

  handleNext = () => {
    unmountPageTween(this.pageContainer.current);
    setTimeout(() => {
      this.props.history.push('/page4');
    }, 1000)
  }

  render() {
    return (
      <div className="page-container" ref={this.pageContainer}>
        <img className="img-potrait" src={PORTRAIT} alt="sampleImage" />
      
        <p className="text-potrait animated fadeIn">
          <p><span>Age  </span>24</p>
          <p><span>Qualification  </span>Engineering Degree</p>
          <p><span>Work  </span>Construction Worker</p>
          <p><span>Earns  </span>900/month</p>
          <p><span>Paid  </span>10k for agency fees</p>
          <p><span>Family needs  </span>500/month</p>
        </p>
      
        <Navigation onNext={this.handleNext} />
      </div>
    );
  }
}
