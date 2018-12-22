import React from 'react';
import { mountPageTween, unmountPageTween, typingTextTween } from '../helper/tween';

export class Page7 extends React.Component {
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
    }, 10000)
  }

  handleNext = () => {
    unmountPageTween(this.pageContainer.current);
    setTimeout(() => {
      this.props.history.push('/page8A');
    }, 1000)
  }

  render() {
    const text = 'But not everyone is as lucky as Joy.';
    return (
      <div className="page-container" ref={this.pageContainer}>
        <p className="centerY text-30" ref={this.text}>{text}</p>
      </div>
    );
  }
}
