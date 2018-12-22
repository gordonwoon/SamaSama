import React from 'react';
import { mountPageTween, unmountPageTween, typingTextTween } from '../helper/tween';

export class Page6 extends React.Component {
  constructor(props){
    super(props);

    this.pageContainer = React.createRef();
  }

  componentDidMount() {
    mountPageTween(this.pageContainer.current);

    setTimeout(() => {
      this.handleNext();
    }, 3000)
  }

  handleNext = () => {
    unmountPageTween(this.pageContainer.current);
    setTimeout(() => {
      this.props.history.push('/page7');
    }, 1000)
  }

  render() {
    return (
      <div className="page-container" ref={this.pageContainer}>
        <p className="centerY text-35">With the right conditions, many others like Joy, can create change for themselves, the community, and even back home.</p>
      </div>
    );
  }
}
