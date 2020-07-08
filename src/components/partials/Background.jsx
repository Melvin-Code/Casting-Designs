import React, { Component } from "react";
import Radium from "radium";
class Background extends Component {
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
    
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('resize', this.noAnimations)
      window.addEventListener('load', this.handleResize)
    return (
      <div id='shadow-wraper2'>
      <div style={animation} className='page-boxes left-half setter'>
         <div className="title-holder">
          
          <h2 className="box-text-title">My Background</h2>
          {/* <hr></hr> */}
        </div>
        
        <div className="box-text-content">
        <p>I started my road to becoming a Web developer in {this.chosingSize()} 2018 when I began to work as a graphic/web {this.chosingSize()}designer. Hungry to grow my skill set I decided to {this.chosingSize()}attend IronHack Bootcamp in Miami, Florida where {this.chosingSize()}I first began to develop my programing skills. {this.chosingSize()}Currently, I focus on my work as a freelancer to {this.chosingSize()}create beautiful and efficient websites while {this.chosingSize()}continually learning and  advancing my skills.</p>
        </div>
         </div>
         </div>
    );
  }
}

export default Radium(Background);
