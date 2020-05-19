import React, { Component } from 'react';
import "./App.css";
import Question from "./components/Question";
import Datequestion from "./components/Datequestion";

import Colorquestion from './components/Colorquestion';
class App extends Component {

  state = {
   
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log('yes')
  }
  render() {
    // console.log(this.state)
    return (
      <div>
  <div className="App">
    <form onSubmit={this.handleSubmit}>
      <Question function={this.handleChange} question="Describe your business in a few sentences. *" />

      <Question function={this.props.handleChange} question="Do you currently have a website? If so, what is/isn’t working for you?" />
      
      <Question function={this.props.handleChange} question="What are your goals for this project?" />
      
      <Question function={this.props.handleChange} question="Who is your target audience?" />
      
      <Question function={this.props.handleChange} question="What does your business does for your audience?" />
      
      <Question function={this.props.handleChange} question="What specific features do you want on the site?(what do you want your site to be able to 
      do, example login log out, email list, drop-down menus ect.... *" />
      
      <Question function={this.props.handleChange} question="How can we avoid failure?(what are thing that you definitely do not want in your site, things that you find annoying in other websites *" />
      
      <Question function={this.props.handleChange} question="Who are your main competitors?" />
      
      <Question function={this.props.handleChange} question="What makes you different from your competitors?" />
      
      <Datequestion question="What is the latest you want the project done *" />
      
      <button type='submit'>Submit</button>
    </form>
      <Colorquestion/>
    {console.log(this.state)}
  </div>
        
      </div>
    );
  }
}

export default App;
  