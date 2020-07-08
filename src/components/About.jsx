import React, { Component } from "react";

import Skills from "./partials/Skills";
import Background from "./partials/Background";

class About extends Component {

  render() {
    return (
      <div className="about-page ">
      
         <div  className="about-page-holder1 setter ">
         <div id='about-setter'>
         <Background/>
         <Skills/>
         </div>
      </div>
      </div>
    );
  }
}

export default About;

// {/* <Background
//   display={this.state.bkDis}
//   animationDuration="2s"
//   animationName={this.state.bkName}
//   setter = {this.setter}
// />
// <Skills
//   display={this.state.skDis}
//   animationDuration="2s"
//   animationName={this.state.skName}
//   setter={this.setter}
// /> */}