import React, { Component } from "react";

import Skills from "./partials/Skills";
import Background from "./partials/Background";

class About extends Component {
//   state = {
//     indicator: true,
//     counter: 0,
//     bkDis: 'block',
//     bkName: 'fromLeft',
//     skDis: 'none',
//     skName: 'FromCt',
//   };

  
//   setter=(first, second, third, forth)=>{
  
//     this.setState({
//       [first]: 'FromCt',
//       [second]: 'none',
//       [third]: 'fromLeft',
//       [forth]: 'block'
//     })
  
// }
  render() {
    return (
      <div className="about-page setter">
        {console.log(this.state)}
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