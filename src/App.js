import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/partials/LandingpageCom/Navbar";

import LandingPage from "./components/LandingPage";
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
      <Router>
        <div id='aBk' className="App bg">
          <NavBar/>
          <LandingPage/>
        </div>
        </Router>
    );
  }
}

export default App;
