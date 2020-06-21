import React, { Component } from 'react';

import Typewriter from 'typewriter-effect';
class TypeWriter extends Component {
  state = {
    strings: this.props.string
  }
  rewrite =()=>{
   let theStrings= this.props.string
   
    if(this.state.strings !== this.props.string){
      // theStrings = theStrings, this.props.string
      this.setState({
        strings: this.props.string
      })
    }else{
      
    }
    return theStrings
  }

    render() {
        return (
            <div>
               <Typewriter
               delay= {100}
  onInit={(typewriter) => {
    typewriter.typeString(this.rewrite())
      .callFunction(() => {
        console.log('String typed out!');
      })
      // this.state.strings !== this.props.string? this.setState({strings: this.props.string}) : null
      .deleteAll()
      .pauseFor(10)
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/> 
            </div>
        );
    }
}

export default TypeWriter;

