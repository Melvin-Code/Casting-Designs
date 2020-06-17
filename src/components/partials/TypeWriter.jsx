import React, { Component } from 'react';

import Typewriter from 'typewriter-effect';
class TypeWriter extends Component {
  
    render() {
        return (
            <div>
               <Typewriter
               delay= {100}
  onInit={(typewriter) => {
    typewriter.typeString('Hello World!')
      .callFunction(() => {
        console.log('String typed out!');
      })
     
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

