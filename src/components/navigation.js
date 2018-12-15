import React from 'react';
import { withRouter } from 'react-router-dom';
import { faHome, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = props => {

  const handleHome = () => {
    props.history.push('/');
  }

  const handleBack = () => {
    props.onNext();
  }
  
  return (
    <div className="navigation">
      <button className="home-btn" onClick={handleHome}><FontAwesomeIcon icon={faHome} className="icon-home"/></button>
      <button className="back-btn" onClick={handleBack}><p>NEXT</p><FontAwesomeIcon icon={faChevronRight} className="icon-right"/></button>
    </div>
  )
}

export default withRouter(Navigation);
