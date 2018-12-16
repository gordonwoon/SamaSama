import React from 'react';
import { mountPageTween, unmountPageTween } from '../helper/tween';
import Navigation from '../components/navigation';
import '../components/background';

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
        <Navigation onNext={this.handleNext} />
      </div>
    );
  }
}
