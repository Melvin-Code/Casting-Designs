import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log("yes");
  };
  render() {
    // console.log(this.state)
    return (
      
        <div id='aBk' className="App bg">
          
        </div>
      
    );
  }
}

export default App;
