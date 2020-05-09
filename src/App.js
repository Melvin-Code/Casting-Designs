import React, { Component } from "react";
import "./App.css";
import Question from "./components/Question";
import Datequestion from "./components/Datequestion";

import Colorquestion from "./components/Colorquestion";
import Colorquestion2 from "./components/Colorquestion2";
import Colorquestion3 from "./components/Colorquestion3";
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
      
        <div className="App">
          <div className='logo-box'>
            <img src='/2.png' alt='logo'/>
          </div>
          <form onSubmit={this.handleSubmit}>
            <Question
              function={this.handleChange}
              question="Describe your business in a few sentences. *"
            />

            <Question
              function={this.props.handleChange}
              question="Do you currently have a website? If so, what is/isn’t working for you?"
            />

            <Question
              function={this.props.handleChange}
              question="What are your goals for this project?"
            />

            <Question
              function={this.props.handleChange}
              question="Who is your target audience?"
            />

            <Question
              function={this.props.handleChange}
              question="What does your business does for your audience?"
            />

            <Question
              function={this.props.handleChange}
              question="What specific features do you want on the site?(what do you want your site to be able to 
      do, example login log out, email list, drop-down menus ect.... *"
            />

            <Question
              function={this.props.handleChange}
              question="How can we avoid failure?(what are thing that you definitely do not want in your site, things that you find annoying in other websites *"
            />

            <Question
              function={this.props.handleChange}
              question="Who are your main competitors?"
            />

            <Question
              function={this.props.handleChange}
              question="What makes you different from your competitors?"
            />

            <Datequestion question="What is the latest you want the project done *" />
            <div>
              <label>
                Choose or type three colors that you will like in your website(note you can also type hex or rgba color code to choose your color)
              </label>
              <div>
                <Colorquestion question="sup" />
                <Colorquestion2 />
                <Colorquestion3 />
              </div>
              <button type="submit">Submit</button>
            </div>
          </form>
          {console.log(this.state)}
        </div>
      
    );
  }
}

export default App;
