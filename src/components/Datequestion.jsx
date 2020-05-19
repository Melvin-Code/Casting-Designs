import React, { Component } from 'react';

class Datequestion extends Component {
    render() {
        return (
            <div>
               
            <label>{this.props.question}</label>
            <input type='Date' name={this.props.question} placeholder='Write here'></input>
            
            </div>
        );
    }
}

export default Datequestion;