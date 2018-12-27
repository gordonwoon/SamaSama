import React from 'react';
import { mountPageTween, unmountPageTween, typingTextTween } from '../helper/tween';
import Navigation from '../components/navigation';

export class Page8C extends React.Component {
  constructor(props){
    super(props);

    this.pageContainer = React.createRef();
  }

  componentDidMount() {
    mountPageTween(this.pageContainer.current);
  }

  // handleNext = () => {
  //   unmountPageTween(this.pageContainer.current);
  //   setTimeout(() => {
  //     this.props.history.push('/page9');
  //   }, 1000)
  // }

  render() {
    return (
      <div className="page-container" ref={this.pageContainer}>

        <p className="text-potrait animated fadeIn">
          <p><strong>When</strong></p>
          <p>I see a migrant worker, I will smile at that person.</p>
          <p>I hear a story of a migrant worker, I will share it with others.</p>
          <p>I know of an opportunity that supports migrant worker empowerment, I will put forth my support.</p>
        </p>

        // <Navigation onNext={this.handleNext} />
      </div>
    );
  }
}
