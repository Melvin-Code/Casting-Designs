import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/partials/LandingpageCom/Navbar";

import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
class App extends Component {
  state = {
    path: window.location.pathname
  };
  componentDidMount(){
    document.title = "Casting Desings"
  }
 
   

rendering=()=>{
   
     this.setState({
        path: window.location.pathname

    })


}
  // handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log("yes");
  // };
  render() {
    // console.log(this.state)
    return (
      <Router>
        <div id='aBk' className="App bg">
          <NavBar rendering= {this.rendering} path={this.state.path}/>
          <Switch>
          <Route exact path="/" render={props => <LandingPage rendering={this.rendering} {...props} />} />
          <Route exact path="/About" render={props => <About {...props} />} />
          <Route exact path="/Contact" render={props => <Contact {...props} />} />
          <Route exact path="/Work" render={props => <Work {...props} />} />
          </Switch>
        </div>
        </Router>
    );
  }
}

export default App;
