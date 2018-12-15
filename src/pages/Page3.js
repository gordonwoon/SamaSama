import React from 'react';
import { mountPageTween, unmountPageTween } from '../helper/tween';
import Navigation from '../components/navigation';

export class Page3 extends React.Component {
  constructor(props){
    super(props);

    this.pageContainer = React.createRef();
  }

  componentDidMount() {
    mountPageTween(this.pageContainer.current);
  }

  componentWillUnmount() {
    unmountPageTween(this.pageContainer.current);
  }

  handleNext = ()  => {
    this.props.history.push('/page3');
  }

  render() {

    return (
      <div className="page-container" ref={this.pageContainer}>
        <Navigation onNext={this.handleNext} />
      </div>
    );
  }
}
