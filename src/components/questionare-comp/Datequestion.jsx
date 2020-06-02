import React, { Component } from 'react';

class Datequestion extends Component {
    render() {
        return (
            <div className='question'>
               
            <label className='question-label' >{this.props.question}</label>
            <input className='question-input' type='Date' name={this.props.question} placeholder='Write here'></input>
            
            </div>
        );
    }
}

export default Datequestion;