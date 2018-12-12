import React from 'react';

export class Page8 extends React.Component {
  state = {
    className: 'text-box center animated fadeIn'
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ className: 'text-box center animated fadeOut' });
      setTimeout(() => {
        this.props.history.push('/page9');
      }, 4000)
    }, 4000)
  }

  render() {
    const text = 'All of us agree that education is the key to growth';
  
    return (
      <div> 
        <div className={this.state.className}>
          <h3>{text}</h3>
        </div>
      </div>
    );
  }
}
