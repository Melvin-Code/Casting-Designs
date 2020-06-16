import React, { Component } from "react";
import Radium from "radium";
import Html from "./skills-icons/Html";
import Css from "./skills-icons/Css";
import Express from "./skills-icons/Express";
import JavaScript from "./skills-icons/JavaScript";
import NodeJs from "./skills-icons/Node";
import BootStrap from "./skills-icons/Bootstrap";
import Mongo from "./skills-icons/Mongo";
import Sass from "./skills-icons/Sass";
import ReactJs from "./skills-icons/React";
import Electron from "./skills-icons/Electron";
class Skills extends Component {
  render() {
    return (
      <div id="shadow-wraper1">
        <div className="rigth-half setter page-boxes">
          <div className="title-holder">
            <h2 className="box-text-title">My Skills</h2>
            {/* <hr></hr> */}
          </div>
          <div className="box-text-sub">
            <div className="icon-container">
              <Html />
              <Css />
              <Express />
            </div>
            <div className="icon-container">
              <JavaScript />
              <NodeJs />
              <BootStrap />
            </div>
            <div className="icon-container">
              <Mongo />
              <Sass />
              <ReactJs />
              <Electron />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Skills);
