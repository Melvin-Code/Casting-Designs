import React, { Component } from 'react';
import { SketchPicker } from 'react-color'  

class Colorquestion extends Component {
   
    render() {
        return (
            <div>
                
               <label>{this.props.question}</label>
               <input type='text' name={this.props.question} placeholder='Write here'></input>
               <SketchPicker/>
            </div>
        );
    }
}

export default Colorquestion;