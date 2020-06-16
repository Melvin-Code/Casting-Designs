import React, { Component } from "react";
import ReactJs from "./partials/skills-icons/React";

class Work extends Component {
  render() {
    return (
      <div className="work-page">
        <div className='work-card'>
          <div className='wc-up-sec'>
            <img className='screenshot' alt='' src='https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5e8bb18100632c000686ccda/screenshot.png'></img>
            <h3 className='site-name'>Title Leap Demo</h3>
           <div className='site-logo-box'> <img className='site-logo' alt='' src='/logo2.png'></img></div>
          </div>
          <div className='wc-dwnBelow-sec'>
            <p className='site-text'>Demo site for a company to demostrate my design capabiltites </p>
            <button className='code-btn'>Read the code</button>
            <button className='site-btn'>View the site</button>
          </div>
          <div className='wc-dwnAbove-sec'>
            <div className='languages-box'>
              <ReactJs/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
