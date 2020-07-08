import React, { Component } from "react";
import Form from "./partials/Form";


class Contact extends Component {
  render() {
    return (
      <div className='contact-page setter'>
      <div className="contact-box page-boxes">
      <div className='setter'>
        <div className="form-text-box">
          <h2 className="form-text-main">Contact me</h2>
          
          <p className="form-text-sub">
            Want to get in touch to know the wonderful things we can do
            toguether. Well fill up this form or email me directly to<br/>
            casting-desings@gmail.com
          </p>
          <Form />
        </div>
        <div className="social-box">
          <h2 className="social-main">Want to get social</h2>
          <p className="social-sub">
            Hit me up are{" "}
            <a href='https://www.linkedin.com/in/melvingonzalez1/' className="linkedIn">
              <i id="linkedIn" className="fab fa-linkedin-in"></i>
            </a>{" "}
            or check my code at{" "}
            <a href='https://github.com/Melvin-Code' className="git">
              <i id="git" class="fab fa-github"></i>
            </a>
          </p>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Contact;
