import React, { Component } from "react";
import ReactJs from "./partials/skills-icons/React";
import Buttons from "./partials/Buttons";
import { Link } from "react-router-dom";

class Work extends Component {
  render() {
    return (
      <div className="work-page setter">
      <div className='work-card-container'>
        <div className='work-card page-boxes setter'>
           <div className='wc-header'>
           <div className='site-logo-box'> <img className='site-logo' alt='' src='/logo2.png'></img></div>
           <h3 className='site-name'>Title Leap Demo</h3>
           </div>
          <div className='wc-up-sec'>
            <img className='screenshot' alt='' src='https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5e8bb18100632c000686ccda/screenshot.png'></img>
           
          </div>
          <div className='wc-dwnBelow-sec'>
            <div className='dwnBelow-container'>
            <p className='site-text'>Demo site for a company to demostrate my design capabiltites </p>
            <div className='btns-container'>
            <Link><Buttons 
              text={<p>Read the code</p>}
              background="#9fb1bb"
              font="1.5rem"
              weight="bolder"
              border="solid 1px #91C9FF"
              polyWidth= '100'
              polyheight= '40'
              width1= '100px'
              width2= '100px'
              width3= '100px'
              height1="40px"
              height2="40px"
              height3="40px"
              />
              </Link>
              <Link>
              <Buttons 
              text={<p>View the site</p>}
              background="#9fb1bb"
              font="1.5rem"
              weight="bolder"
              border="solid 1px #91C9FF"
              polyWidth= '100'
              polyheight= '40'
              width1= '100px'
              width2= '100px'
              width3= '100px'
              height1="40px"
              height2="40px"
              height3="40px"
              />
              </Link>
              </div>
            
            </div>
          </div>
          <div className='wc-dwnAbove-sec'>
            <div className='languages-box'>
              <ReactJs/>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Work;
