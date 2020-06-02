import React, { Component } from "react";

class Question extends Component {
  render() {
    return (
      <div className="question">
        <label className="question-label">{this.props.question}</label>
        <input
          className="question_input"
          onChange={this.props.function}
          type="text"
          name={this.props.question}
          placeholder="Write here"
        ></input>
        {/* {console.log(this.props)} */}
      </div>
    );
  }
}

export default Question;
