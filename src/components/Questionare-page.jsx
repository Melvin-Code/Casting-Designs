import React, { Component } from 'react';
import Question from './questionare-comp/Question'
import Datequestion from "./questionare-comps/Datequestion";

import Colorquestion from "./questionare-comps/Colorquestion";
import Colorquestion2 from "./questionare-comps/Colorquestion2";
import Colorquestion3 from "./questionare-comps/Colorquestion3";
class QuestionarePpage extends Component {
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
        return (
            <div className="App">
          <div className='logo-box'>
            <img className='logo' src='/2.png' alt='logo'/>
          </div>
          <form className='form' onSubmit={this.handleSubmit}>
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
            <div className='question'>
              <label className='question-label'>
                Choose or type three colors that you will like in your website(note you can also type hex or rgba color code to choose your color)
              </label>
              <div className='color-holder'>
                <Colorquestion question="sup" />
                <Colorquestion2 />
                <Colorquestion3 />
              </div>
              <button className='submit-button' type="submit">Submit</button>
            </div>
          </form>
          {console.log(this.state)}
        </div>
        );
    }
}

export default QuestionarePpage;