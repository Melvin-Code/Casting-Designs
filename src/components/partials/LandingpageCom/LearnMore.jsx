import React, { Component } from "react";
import Buttons from "../Buttons";
import { Link } from "react-router-dom";


class LearnMore extends Component {
  
  
  render() {
    
    return (
      <div className="learn-mor-box">
        <h2 className="intro-text">
          <span>
            Hi, my name is Melvin & I am a {"{"}
            <span></span>full-stack: web-developer
            {"}"}
          </span>
          
          <span className="sub-text">
            My mission is to create astoneshing looking websites that meets all
            your needs
          </span>
          <div onClick={()=>this.props.rendering()}>
          <Link to='/About' >
          <Buttons text="Learn More" background="#3d014061" polyWidth="179" polyheight='59' />
          </Link>
          </div>
        </h2>
      </div>
    );
  }
}

export default LearnMore;
