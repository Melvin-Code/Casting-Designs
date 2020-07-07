import React, { Component } from "react";
import Radium from "radium"
// import Background from "../Background";
class Express extends Component {
  render() {
    let iconBox={
      width: this.props.lBsize,
      height: this.props.lBsize,
      backgroundColor: this.props.iconBk
    }
    let i={
      fontSize: this.props.lBsize,
      
    }
    let p={
      fontSize: this.props.lBsize,
      
    }
    return (
      <div className="skill-box">
        <div style={iconBox} className="icon-box setter">
          <div>
            <i style={i} className="devicon-express-original colored"></i>
          </div>
        </div>
        <p style={p}>Express.js</p>
      </div>
    );
  }
}

export default Radium(Express);
