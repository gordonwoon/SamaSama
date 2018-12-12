import React from 'react';
import './Page3.css';

export class Page3 extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/page4');
    }, 4*1000)
  }
  render() {
    const text = 'Meet Joy.';
    return (
      <div className="question-box centerY animated fadeIn">
        <h1>{text}</h1>
      </div>
    );
  }
}
