import React, { Component } from "react";
import Radium from "radium";
class Buttons extends Component {
  toggler = () => {
    let bordering = this.props.choice;
    if (window.location.pathname === "/") {
      return this.props.border;
    } else if (bordering === true) {
      return this.props.newBorder;
    } else {
      return this.props.border;
    }
  };
  render() {
    let backing = {
      border: this.toggler(),
      width: this.props.width1,
      height: this.props.height1,
      
      backgroundColor: "transparent",
      ":hover": {
        backgroundColor: this.props.background,

      },
    };
    let fonting = {
      fontSize: this.props.font,
      fontWeight: this.props.weight,
      fontFamily: "lato",
      transition: '.5s',
    };
    let animatio1 = {
      width: this.props.width1,
      height: this.props.height1
    };
    let animatio3 = {
      width: this.props.width1,
      height: this.props.height1
    };

    return (
      <div className={`container`} style={animatio3}>
        {/* {console.log(this.props)} */}
        <div className="center" style={animatio1}>
          <button type={this.props.type} onClick={this.props.onClicker} className="btn" style={backing}>
            <svg
              width={`${Number(this.props.polyWidth) + 1}px`}
              height={`${Number(this.props.polyheight) + 1}px`}
              viewBox={`0 0 ${Number(this.props.polyWidth) + 1} ${Number(this.props.polyheight) + 1}`}
              className="border"
            >
              <polyline
                points={`${this.props.polyWidth},1 ${this.props.polyWidth},${this.props.polyheight} 1,${this.props.polyheight} 1,1 ${this.props.polyWidth},1`}
                className="bg-line"
              />
              <polyline
                points={`${this.props.polyWidth},1 ${this.props.polyWidth},${this.props.polyheight} 1,${this.props.polyheight} 1,1 ${this.props.polyWidth},1`}
                className="hl-line"
              />
            </svg>
            <span id="contact-btn" style={fonting}>{this.props.text}</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Radium(Buttons);
