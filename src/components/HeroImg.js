import "./HeroImgStyles.css";

import React from 'react';

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
      <img className="intro-img" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      alt="Intro-Img"/>
    </div>
    <div className="content">
        <div className="word">Welcome</div>
        <div className="word">to </div>
        <div className="word">Technicolor</div>
    </div>
  </div>;
};

export default HeroImg
