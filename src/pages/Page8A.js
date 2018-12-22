import React from 'react';
import { mountPageTween, unmountPageTween, typingTextTween } from '../helper/tween';
import Navigation from '../components/navigation';

export class Page8A extends React.Component {
  constructor(props){
    super(props);

    this.pageContainer = React.createRef();
    this.employer = React.createRef();
    this.community = React.createRef();
  }

  componentDidMount() {
    mountPageTween(this.pageContainer.current);
    typingTextTween(this.employer.current);
    typingTextTween(this.community.current);
  }

  // handleNext = () => {
  //   unmountPageTween(this.pageContainer.current);
  //   setTimeout(() => {
  //     this.props.history.push('/page9');
  //   }, 1000)
  // }

  render() {
    const employer = 'Employer';
    const community = 'Community';
    return (
      <div className="page-container" ref={this.pageContainer}>

        <p className="text-potrait animated fadeIn">
          <p><strong>Are you an</strong></p>
          <p className="centerY text-50"ref={this.employer}>{employer}</p>
          <p>or</p>
          <p className="centerY text-50"ref={this.community}>{community}</p>
        </p>

        // <Navigation onNext={this.handleNext} />
      </div>
    );
  }
}
