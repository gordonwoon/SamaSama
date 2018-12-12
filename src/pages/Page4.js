import React from 'react';

export class Page4 extends React.Component {
  state = {
    className: 'text-box center animated fadeIn'
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ className: 'text-box center animated fadeOut' });
      setTimeout(() => {
        this.props.history.push('/page5');
      }, 4000)
    }, 4000)
  }

  render() {
    const text = 'All of the above are important to migrant worker';
  
    return (
      <div> 
        <div className={this.state.className}>
          <h3>{text}</h3>
        </div>
      </div>
    );
  }
}
