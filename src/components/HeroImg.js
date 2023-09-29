import "../styles/HeroImgStyles.css";

import React from 'react';

const HeroImg = () => {
  return <div className="hero">
    <div className="hero-message">
        <h4>Career Quiz</h4>
        <div className="hero-para">
          <h5>Are you feeling unsure about 
            what career path to take? Take 
            our career quiz and discover the 
            job that best suits your skills and 
            interests! 
          </h5>
        </div>
    </div>
    <div className="arrow"></div>
    <div className="arrow-leg">Click Here!</div>
  </div>;
};

export default HeroImg
