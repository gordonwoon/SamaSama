import React from 'react';
import { mountPageTween, unmountPageTween, typingTextTween } from '../helper/tween';

export class Page6 extends React.Component {
  constructor(props){
    super(props);

    this.pageContainer = React.createRef();
    this.text = React.createRef();
  }

  componentDidMount() {
    mountPageTween(this.pageContainer.current);
    typingTextTween(this.text.current);

    setTimeout(() => {
      this.handleNext();
    }, 8000)
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
        <p className="text-potrait centerY text-50" ref={this.text}>With the right conditions, many others like Joy, can create change for themselves, the community, and even back home.</p>
      </div>
    );
  }
}
