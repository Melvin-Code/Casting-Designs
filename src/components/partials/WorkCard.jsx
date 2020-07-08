import React, { Component } from 'react';
import ReactJs from "./skills-icons/React";
import Buttons from "./Buttons";
import Radium from "radium"
// import { Link } from "react-router-dom";
import Css from "./skills-icons/Css";
import Html from "./skills-icons/Html";
import JavaScript from "./skills-icons/JavaScript";
import Express from './skills-icons/Express';
import Mongo from './skills-icons/Mongo';
import BootStrap from './skills-icons/Bootstrap';
import Sass from './skills-icons/Sass';
import NodeJs from './skills-icons/Node';
import Electron from './skills-icons/Electron';
import Heroku from './skills-icons/Heroku';
class WorkCard extends Component {
    state = {
        over: false,
        out: true,
        start: true,
        size: null
      };
      componentDidMount(){
        if(window.innerWidth >=920){
        this.setState({
          size: 'normal'
        })
      }else {
        this.setState({
          size: window.innerWidth
        })
      }
      }
      handleResize=()=> {
         let widthScreen = window.innerWidth
        if(widthScreen <= 414 ){
          this.setState({
            size: 414
          })
        }else if(widthScreen<=920 && widthScreen >= 661){
          this.setState({
            size: 920
          })
        }else if(widthScreen<=660 && widthScreen>=415){
          this.setState({
            size: 660
          })
        }else if(widthScreen>=920){
          this.setState({
            size: 'normal'
          })
        }
    
      }
      chosingSize=(small, mid, big, normal)=>{
        if(this.state.size<=415 ){
          return small
        }else if (this.state.size<=920 && this.state.size >= 661){
          return big
        }else if(this.state.size>=414 && this.state.size <= 660){
          return mid
        }else if(this.state.size === 'normal'){
          return normal
        }
      }
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
            backgroundColor: this.props.mainColor,
            color: this.props.fontColor
        }
        let logoBox = {
            borderColor: this.props.secondaryColor,
            backgroundColor: this.props.lBBackground
        }
        let logo = {
            top: this.props.logoTop,
            width: this.props.logoWidth
            
        }
        let above={
            backgroundColor: this.props.mainColor
        }
        let screen={
            width: this.props.widthS
            
        }
        let languagesBox = {
          fontSize: this.props.lBsize,
          color: this.props.fontColor
        }
        let siteName={
          color: this.props.fontColor
        }
        window.addEventListener('resize', this.handleResize)
      window.addEventListener('load', this.handleResize)
        
        return (
            
          <div onMouseOver={this.onOver}
          onMouseOut={this.onOut}  className="work-card page-boxes setter">
            <div style={header} className="wc-header">
              <div style={logoBox} className="site-logo-box">
                {" "}
                <img style={logo} className="site-logo" alt="" src={this.props.logo}></img>
              </div>
              <h3 style={siteName} className="site-name">{this.props.title}</h3>
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
                  <a href={this.props.gitLink}>
                    <Buttons
                      
                      text={<p>Read the code</p>}
                      background="#9fb1bb"
                      font="1.5rem"
                      weight="bolder"
                      border="solid 1px #91C9FF"
                      polyWidth={this.chosingSize('52','62', '72', '102')}
                      polyheight={this.chosingSize('30','30', '40', '40')}
                      width1={this.chosingSize('52px','62px', '72px', '102px')}
                      height1={this.chosingSize('30px','30px', '40px', '40px')}
                      
                    />
                  </a>
                  <a href={this.props.liveLink}>
                    <Buttons
                      text={<p>View the site</p>}
                      background="#9fb1bb"
                      font="1.5rem"
                      weight="bolder"
                      border="solid 1px #91C9FF"
                      polyWidth={this.chosingSize('50','60', '70', '100')}
                      polyheight={this.chosingSize('30','30', '40', '40')}
                      width1={this.chosingSize('50px','60px', '70px', '100px')}
                      height1={this.chosingSize('30px','30px', '40px', '40px')}
                    />
                  </a>
                </div>
              </div>
              <div className={`shadowing ${this.hideOrShow()}`}>
                <div style={above} className={`wc-dwnAbove-sec`}>
                  <div className='languages-container'>
                    <div style={languagesBox} className="languages-box">
                      {this.props.ReactJs === 'active' ? <ReactJs lBsize={this.props.lBsize} /> : null}
                      {this.props.Css === 'active' ? <Css lBsize={this.props.lBsize}/>  : null}
                      {this.props.Html === 'active' ? <Html lBsize={this.props.lBsize}/> : null}
                      {this.props.JavaScript === 'active' ? <JavaScript lBsize={this.props.lBsize}/> : null}
                      {this.props.Express === 'active' ? <Express iconBk={this.props.iconBk} lBsize={this.props.lBsize}/> : null}
                      {this.props.Mongo === 'active' ? <Mongo lBsize={this.props.lBsize}/> : null}
                      {this.props.BootStrap === 'active' ? <BootStrap lBsize={this.props.lBsize}/> : null}
                      {this.props.Sass === 'active' ? <Sass lBsize={this.props.lBsize}/> : null}
                      {this.props.NodeJs === 'active' ? <NodeJs lBsize={this.props.lBsize}/> : null}
                      {this.props.Electron === 'active' ? <Electron lBsize={this.props.lBsize}/> : null}
                      {this.props.Heroku === 'active' ? <Heroku lBsize={this.props.lBsize} /> : null}
                      
                      
                      
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