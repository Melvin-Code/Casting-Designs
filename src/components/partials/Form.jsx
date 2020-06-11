import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      next:false,
      thereIsText: false
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  
  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/moqkwdep"
        method="POST"
        className="form-box"
      > 
        <input
          onChange={this.handleChange}
          className="form-in"
          type="text"
          name="name"
          placeholder="Name"
        />

        <input
          onChange={this.handleChange}
          className="form-in"
          type="email"
          name="email"
          placeholder="Email"
        />

        <input
          onChange={this.handleChange}
          className="form-in"
          type="text"
          name="message"
          placeholder="Message"
        />
        {console.log(this.state)}
        <button>Next</button>
        {status === "SUCCESS" ? (
          <p>Thanks!</p>
        ) : (
          <button className="button">Submit</button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
