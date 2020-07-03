import React, { Component } from "react";
import Radium from "radium";
class Background extends Component {
  render() {
    
    return (
      <div id='shadow-wraper2'>
      <div className='page-boxes left-half setter'>
         <div className="title-holder">
          
          <h2 className="box-text-title">My Background</h2>
          {/* <hr></hr> */}
        </div>
        
        <div className="box-text-content">
        <p>I started my road to becoming a Web developer in <br/> 2018 when I began to work as a graphic/web <br/>designer. Hungry to grow my skill set I decided to <br/>attend IronHack Bootcamp in Miami, Florida where <br/>I first began to develop my programing skills. <br/>Currently, I focus on my work as a freelancer to <br/>create beautiful and efficient websites while <br/>continually learning and  advancing my skills.</p>
        </div>
         </div>
         </div>
    );
  }
}

export default Radium(Background);
