import React, { Component } from 'react';
import Radium from 'radium'
class Buttons extends Component {
  
  
  render() {
    let backing = {
      border: this.props.border,
      width: this.props.width2,
      backgroundColor: 'transparent',
      ':hover': {
        backgroundColor: this.props.background,
          ':focus': {
            border: this.props.newBorder
          }
      }
    };
    let fonting = {
      fontSize: this.props.font,
      fontWeight: this.props.weight,
      fontFamily: 'lato'
    };
    let animatio1 = {
      width: this.props.width1
    }
    let animatio3 = {
      width: this.props.width3
    }
    
    
        return (
            <div className="container" style={animatio3}>
            <div className="center" style={animatio1}>
              <button autoFocus className="btn" style= {backing}>
                <svg
                  width={`${this.props.polyWidth + 1}px`}
                  height="60px"
                  viewBox={`0 0 ${this.props.polyWidth + 1} 60`}
                  className="border"
                >
                  <polyline
                    points={`${this.props.polyWidth},1 ${this.props.polyWidth},59 1,59 1,1 ${this.props.polyWidth},1`}
                    className="bg-line"
                  />
                  <polyline
                    points={`${this.props.polyWidth},1 ${this.props.polyWidth},59 1,59 1,1 ${this.props.polyWidth},1`}
                    className="hl-line"
                  />
                </svg>
                <span style={fonting}>{this.props.text}</span>
              </button>
            </div>
          </div>
        );
    }
}

export default Radium(Buttons);