import React from 'react';
import Slider from 'react-slick';
import onetwo from '../assets/onetwo.mp4';
import Navigation from '../components/navigation';
import { mountPageTween, unmountPageTween } from '../helper/tween';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export class Page2 extends React.Component {
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

  handleSwipe = (from, to) => {
    console.log(to);
  }

  handleNext = ()  => {
    this.props.history.push('/page3');
  }

  render() {
    const questionPart1 = 'Can you impact';
    const questionPart2 = 'with a migrant worker?';
    const answers = [
      'Money',
      'Environment',
      'Family',
      'Artistic Expression',
      'Empowerment',
      'Education',
      'Ambition'
    ];
    
    var settings = {
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      swipeToSlide: true,
      focusOnSelect: true,
      centerMode: true,
      centerPadding: '-80px',
      adaptiveHeight: true
    };

    return (
      <div className="page-container" ref={this.pageContainer}> 
        <video className="video-bg" loop autoPlay muted>
          <source src={onetwo} type="video/mp4" />
        </video>
        
        <div className="question-box center animated fadeIn">
          <p className="question1">{questionPart1}</p>
          <Slider className="answer-box" beforeChange={this.handleSwipe} {...settings}>
            {answers.map((answer, index) => <div key={index}>{answer}</div>)}
          </Slider>
          <p className="question2">{questionPart2}</p>
        </div>
        <Navigation onNext={this.handleNext} />
      </div>
    );
  }
}
