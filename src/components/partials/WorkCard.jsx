import React, { Component } from 'react';
import ReactJs from "./skills-icons/React";
import Buttons from "./Buttons";
import Radium from "radium"
import { Link } from "react-router-dom";
import Css from "./skills-icons/Css";
import Html from "./skills-icons/Html";
import JavaScript from "./skills-icons/JavaScript";
import Express from './skills-icons/Express';
import Mongo from './skills-icons/Mongo';
import BootStrap from './skills-icons/Bootstrap';
import Sass from './skills-icons/Sass';
import NodeJs from './skills-icons/Node';
import Electron from './skills-icons/Electron';
class WorkCard extends Component {
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
        let header = {
            backgroundColor: this.props.mainColor
        }
        let logoBox = {
            borderColor: this.props.secondaryColor,
            backgroundColor: this.props.lBBackground
        }
        let logo = {
            top: this.props.logoTop
            
        }
        let above={
            backgroundColor: this.props.mainColor
        }
        let screen={
            width: this.props.widthS
            
        }
        return (
            
          <div onMouseOver={this.onOver}
          onMouseOut={this.onOut} className="work-card page-boxes setter">
            <div style={header} className="wc-header">
              <div style={logoBox} className="site-logo-box">
                {" "}
                <img style={logo} className="site-logo" alt="" src={this.props.logo}></img>
              </div>
              <h3 className="site-name">{this.props.title}</h3>
            </div>
            <div className='wc-up-shadow'>
            <div  className="wc-up-sec setter">
              <img
                style={screen}
                className="screenshot"
                alt=""
                src={this.props.screenshot}
              ></img>
              </div>
            </div>
            <div className="wc-dwnBelow-sec">
              <div className="dwnBelow-container">
                <p className="site-text">
                  {this.props.siteText}
                </p>
                <div className="btns-container">
                  <Link to={this.props.gitLink}>
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
                  <Link to={this.props.liveLink}>
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
                <div style={above} className={`wc-dwnAbove-sec`}>
                  <div className='languages-container'>
                    <div className="languages-box">
                      {this.props.ReactJs === 'active' ? <ReactJs /> : null}
                      {this.props.Css === 'active' ? <Css/>  : null}
                      {this.props.Html === 'active' ? <Html/> : null}
                      {this.props.JavaScript === 'active' ? <JavaScript/> : null}
                      {this.props.Express === 'active' ? <Express/> : null}
                      {this.props.Mongo === 'active' ? <Mongo/> : null}
                      {this.props.BootStrap === 'active' ? <BootStrap/> : null}
                      {this.props.Sass === 'active' ? <Sass/> : null}
                      {this.props.NodeJs === 'active' ? <NodeJs/> : null}
                      {this.props.Electron === 'active' ? <Electron/> : null}
                      
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
        );
    }
}

export default Radium(WorkCard);