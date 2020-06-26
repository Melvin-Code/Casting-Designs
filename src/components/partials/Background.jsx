import React, { Component } from "react";
import Radium from "radium";
class Background extends Component {
  render() {
    let animate = {
        display: this.props.display,
        animationName: this.props.animationName,
        animationDuration: this.props.animationDuration
    }
    return (
      <div style={animate} className="about-page-holder1 setter page-boxes">
        <div className="background-box">
          <div className="img-container">
            <img
              className="profile-pic"
              alt="Profile"
              src="/ProfilePic.png"
            ></img>
          </div>
          <h2 className="box-text-main">My Background</h2>
        </div>
        <div className="box-text-sub">
          I started my road to becamo a Web developer in 2018, when I started to
          work as a graphic and web designer. Hungry to grow my skillset I
          decided to attend the IronHack Bootcamp in Miami. It was there when I
          really grew my skills as a programer and became a web developer.
          Currently I focus in my work as a freelancer to creat beatiful and
          efficient website while constantly learning to upgrade my skills.
        </div>
        <div className="indicator-box" onClick={()=>this.props.setter('bkName','bkDis', 'skName', 'skDis' )}>
          <i id="indicator-1" className="fas fa-chevron-right fa-3x "></i>
          <i id="indicator-2" className="fas fa-chevron-right fa-3x "></i>
          <i id="indicator-3" className="fas fa-chevron-right fa-3x "></i>
        </div>
      </div>
    );
  }
}

export default Radium(Background);
