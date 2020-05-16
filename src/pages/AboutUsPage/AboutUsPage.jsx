import React from 'react';
import './AboutUsPage.scss';
import HammyScreenshot from '../../images/hammy-screenshot.jpeg';
import FraLogo from '../../images/fra-gaming-logo.png';

const AboutUsPage = () => {
  return (
    <div className="about-us-wrapper">
      <div className="left-half half">
        <img src={HammyScreenshot} alt="pic" />
      </div>
      <div className="right-half half">
        <img src={FraLogo} alt="logo" />
        <span>Lorem ipsum bla test random text filler bla bla hello world this is a paragraph</span>
      </div>
    </div>
  )
}

export default AboutUsPage
