import React from 'react';
import { mountPageTween, unmountPageTween, typingTextTween } from '../helper/tween';

export class Page8 extends React.Component {
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
    }, 3000)
  }

  handleNext = () => {
    unmountPageTween(this.pageContainer.current);
    setTimeout(() => {
      this.props.history.push('/page8A');
    }, 1000)
  }

  render() {
    const text = 'It\'s easy to help.';
    return (
      <div className="page-container" ref={this.pageContainer}>
        <p className="centerY text-50" style={{marginLeft: '10%'}} ref={this.text}>{text}</p>
      </div>
    );
  }
}
