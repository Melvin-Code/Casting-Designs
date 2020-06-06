import React, { Component } from "react";
import Buttons from "../Buttons";

class LearnMore extends Component {
  wordRender = (text, classes) => {
    return <span className={classes}>{text}</span>;
  };
  render() {
    return (
      <div className="learn-mor-box">
        <h2 className="intro-text">
          <span>
            Hi, my name is Melvin & I am a <br></br> {"{"}
            {this.wordRender("full-stack: web-developer", "darkBlue")}
            {"}"}
          </span>
          <br />
          <span className="sub-text">
            My mission is to create astoneshing looking websites that meets all
            your needs
          </span>
          <Buttons text="Learn More" background="darkblue" polyWidth="179" />
        </h2>
      </div>
    );
  }
}

export default LearnMore;
