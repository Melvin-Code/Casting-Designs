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
  state={
    size:null
  }
  handleResize=()=> {
    let widthScreen = window.innerWidth
   if(widthScreen < 661 ){
     this.setState({
       size: 660
     })
   }else {
     this.setState({
       size: null,
       render: '5s'
     })
   }

 }
 noAnimations=()=>{
   if(window.innerWidth <= 870 && window.innerWidth >=460){
     this.setState({
       render: '0s'
     })
     
   }else{
     this.setState({
       render: '.2s'
     })
   }
 }
 chosingSize=()=>{
   if(this.state.size === 660){
    
   }else {
     return <br/>
   }
 }
  render() {
    let animation ={
      transition: this.state.render
    } 
    
    window.addEventListener('resize', this.noAnimations)
      
    return (
      <div id="shadow-wraper1">
        <div style={animation} className="rigth-half setter page-boxes">
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
             <div><Mongo /></div>
              <div><Sass /></div>
              <div><ReactJs /></div>
              <div><Electron /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Skills);
