import React, { Component } from "react";
import ReactJs from "./partials/skills-icons/React";
import Buttons from "./partials/Buttons";
import { Link } from "react-router-dom";
import Css from "./partials/skills-icons/Css";
import Html from "./partials/skills-icons/Html";
import JavaScript from "./partials/skills-icons/JavaScript";

class Work extends Component {
  state = {
    over: false,
    out: true,
    start: true,
  };
  hideOrShow = () => {
    if (
      this.state.over === false &&
      this.state.out === true &&
      this.state.start === true
    ) {
      return "start";
    } else if (
      this.state.over === true &&
      this.state.out === false &&
      this.state.start === false
    ) {
      return "over";
    } else if (
      this.state.over === false &&
      this.state.out === true &&
      this.state.start === false
    ) {
      return "out";
    }
  };
  onOver = () => {
    this.setState({
      over: true,
      out: false,
      start: false,
    });
  };
  onOut = () => {
    this.setState({
      over: false,
      out: true,
    });
  };
  render() {
    return (
      <div className="work-page setter">
        <div
          onMouseOver={this.onOver}
          onMouseOut={this.onOut}
          className="work-card-container"
        >
          <div className="work-card page-boxes setter">
            <div className="wc-header">
              <div className="site-logo-box">
                {" "}
                <img className="site-logo" alt="" src="/logo2.png"></img>
              </div>
              <h3 className="site-name">Title Leap Demo</h3>
            </div>
            <div className="wc-up-sec">
              <img
                className="screenshot"
                alt=""
                src="https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5e8bb18100632c000686ccda/screenshot.png"
              ></img>
            </div>
            <div className="wc-dwnBelow-sec">
              <div className="dwnBelow-container">
                <p className="site-text">
                  Demo site for a company to demostrate my design capabiltites{" "}
                </p>
                <div className="btns-container">
                  <Link>
                    <Buttons
                      text={<p>Read the code</p>}
                      background="#9fb1bb"
                      font="1.5rem"
                      weight="bolder"
                      border="solid 1px #91C9FF"
                      polyWidth="100"
                      polyheight="40"
                      width1="100px"
                      width2="100px"
                      width3="100px"
                      height1="40px"
                      height2="40px"
                      height3="40px"
                    />
                  </Link>
                  <Link>
                    <Buttons
                      text={<p>View the site</p>}
                      background="#9fb1bb"
                      font="1.5rem"
                      weight="bolder"
                      border="solid 1px #91C9FF"
                      polyWidth="100"
                      polyheight="40"
                      width1="100px"
                      width2="100px"
                      width3="100px"
                      height1="40px"
                      height2="40px"
                      height3="40px"
                    />
                  </Link>
                </div>
              </div>
              <div className={`shadowing ${this.hideOrShow()}`}>
                <div  className={`wc-dwnAbove-sec`}>
                  <div className='languages-container'>
                    <div className="languages-box">
                      <ReactJs />
                      <Css/> 
                      <Html/>
                      <JavaScript/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {console.log(this.state)}
      </div>
    );
  }
}

export default Work;
