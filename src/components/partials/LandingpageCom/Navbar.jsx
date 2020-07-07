import React, { Component } from "react";
import { Link } from "react-router-dom";
import FlyingLogo from "./FlyingLogo";
import Buttons from "../Buttons";

class NavBar extends Component {
  state={
    size:null
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
    if(this.state.size===414){
      return small
    }else if (this.state.size === 920){
      return big
    }else if(this.state.size === 660){
      return mid
    }else if(this.state.size === 'normal'){
      return normal
    }
  }
  

    
    
    render() {
      window.addEventListener('resize', this.handleResize)
      window.addEventListener('load', this.handleResize)
    return (
        <nav  onClick={()=>this.props.rendering()} className="navbar">
        
        <div className='fly-logo-container'><FlyingLogo /></div>
        <div className="navbar-box">
        <div id="nav-link"   >
          <Link  className="link" to="/About">
            <Buttons  
              text={<p>About</p>}
              background="transparent"
              font="2.8rem"
              weight="bolder"
              border="none"
              polyWidth= {this.chosingSize('50','60', '70', '130')}
              polyheight= {this.chosingSize('30', '30','40', '59')}
              width1= {this.chosingSize('50px','60px', '70px', '130px')}
              height1= {this.chosingSize('30px','30px', '40px', '59px')}
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
              polyWidth= {this.chosingSize('60','70', '80', '130')}
              polyheight= {this.chosingSize('30', '30', '40','59')}
              width1= {this.chosingSize('60px','70px', '80px', '130px')}
              height1= {this.chosingSize('30px', '30px','40px', '59px')}            
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
              polyWidth= {this.chosingSize('50','60', '70', '130')}
              polyheight= {this.chosingSize('30', '30','40', '59')}
              width1= {this.chosingSize('50px', '60px','70px', '130px')}
              height1= {this.chosingSize('30px', '30px','40px', '59px')}
              newBorder = '1px solid #91C9FF'
              choice = {this.props.path === '/Work'? true: false}
            />
          </Link>
          </div>
        </div>
        {console.log(this.state)}
      </nav>
    );
  }
}

export default NavBar;
