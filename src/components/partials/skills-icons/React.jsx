import React, { Component } from "react";
import Radium from "radium"
class ReactJs extends Component {
  render() {
    let iconBox={
      width: this.props.lBsize,
      height: this.props.lBsize
    }
    let i={
      fontSize: this.props.lBsize,
      
    }
    let p={
      fontSize: this.props.lBsize,
      
    }
    return (
      <div  className="skill-box">
        <div style={iconBox} className="icon-box setter">
          <div>
            <i style={i} className="devicon-react-original colored"></i>
          </div>
        </div>
        <p style={p}>React</p>
      </div>
    );
  }
}

export default Radium(ReactJs);
