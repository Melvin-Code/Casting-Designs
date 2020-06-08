import React, { Component } from "react";
import { Link } from "react-router-dom";
import FlyingLogo from "./FlyingLogo";
import Buttons from "../Buttons";

class NavBar extends Component {
    
    
      
    render() {
    return (
        <nav  onClick={()=>this.props.rendering()} className="navbar">
        
        <FlyingLogo />
        <div className="navbar-box">
        <div id="nav-link"   >
          <Link  className="link" to="/About">
            <Buttons  
              text={<p>About</p>}
              background="transparent"
              font="2.8rem"
              weight="bolder"
              border="none"
              polyWidth= '130'
              width1= '130px'
              width2= '130px'
              width3= '130px'
              newBorder = '1px solid #91C9FF'
              choice = {this.props.path === '/About'? true: false}
            />
            
          </Link>
          </div>
          <div id="nav-link"  >
          <Link  className="link" to="/Contact">
          <Buttons onClick={this.rendering}
              text={<p>Contact</p>}
              background="transparent"
              font="2.8rem"
              weight="bolder"
              border="none"
              polyWidth= '150'
              width1= '150px'
              width2= '150px'
              width3= '150px'
              newBorder = '1px solid #91C9FF'
              choice = {this.props.path === '/Contact'? true: false}
            />
          </Link>
          </div>
        
        <div id="nav-link"  >
          <Link  className="link" to="/Work">
          <Buttons
              text={<p>Work</p>}
              background="transparent"
              font="2.8rem"
              weight="bolder"
              border="none"
              polyWidth= '130'
              width1= '130px'
              width2= '130px'
              width3= '130px'
              newBorder = '1px solid #91C9FF'
              choice = {this.props.path === '/Work'? true: false}
            />
          </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
