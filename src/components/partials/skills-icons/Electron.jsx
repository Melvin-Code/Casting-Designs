import React, { Component } from "react";

class Electron extends Component {
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
      <div className="skill-box">
        <div style={iconBox} className="icon-box setter">
          <div>
            <i style={i} className="devicon-electron-original colored"></i>
          </div>
        </div>
        <p style={i}> Electron</p>
      </div>
    );
  }
}

export default Electron;
