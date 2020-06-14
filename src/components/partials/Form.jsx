import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      next: 0,
      nInput: false
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  nextCounter = () => {
    this.setState({
      next: this.state.next + 1,
      writtenName: this.state.name !== "" ? this.state.name : null,
      writtenEmail: this.state.email !== "" ? this.state.email : null,
      writtenMessage:
        this.state.email !== "" && this.state.next >= 2
          ? "Now write your message"
          : null,
    });
  };
  onInputting =(input, choice)=>{
  
    this.setState({
      [input]: choice
    })
    
  }
  displayPreWords = () => {
    
    return (
      <div>
        {this.nInput === true ? (
          <span className="pw-wording">
            <i className="fas fa-user-circle fa-2x"></i>{" "}
            {this.state.writtenName}
          </span>): console.log()}
      </div>
    );
    // return (
    //   <div className="pre-words">
    //     {this.state.name === true && this.state.next >= 1 ? (
    //       <span className="pw-wording">
    //         <i className="fas fa-user-circle fa-2x"></i>{" "}
    //         {this.state.writtenName}
    //       </span>
    //     ) : null}
    //     {this.state.writtenEmail !== "" && this.state.next >= 2? (
    //       <span className="pw-wording">
    //         <i className="fas fa-envelope fa-2x"></i> {this.state.writtenEmail}
    //       </span>
    //     ) : null}
    //     {this.state.message === String && this.state.next >= 2 ? (
    //       <span className="pw-wording">
    //         <i className="fas fa-pen-square fa-2x"></i>{" "}
    //         {this.state.writtenMessage}
    //       </span>
    //     ) : null}
    //   </div>
    // );
  };
  displayInput = () => {
    if (this.state.next === 0) {
      return "display-1";
    } else if (this.state.next === 1 && this.state.name !== "") {
      return "-2";
    } else if (
      this.state.next === 2 &&
      this.state.name !== "" &&
      this.state.email !== 3
    ) {
      return "play-3";
    } else if (this.state.next > 2) {
      return "play-3";
    }
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
        {console.log(this.state.name)}
        {this.displayPreWords()}
        <div id={this.displayInput()} className="input-box">
          <input
            onInput={()=> this.onInputting( 'stInput', true)}
            onChange={this.handleChange}
            className="form-in"
            type="text"
            name="name"
            placeholder="Name"
          />
          <span id="input-icon">
            <i className="fas fa-user-circle fa-2x"></i>
          </span>
        </div>
        <div id={`display${this.displayInput()}`} className="input-box">
          <input
            onChange={this.handleChange}
            className="form-in"
            type="email"
            name="email"
            placeholder="Email"
          />
          <span id="input-icon">
            <i className="fas fa-envelope fa-2x"></i>
          </span>
        </div>
        <div id={`dis${this.displayInput()}`} className="input-box">
          <input
            onChange={this.handleChange}
            className="form-in"
            type="text"
            name="message"
            placeholder="Message"
            onInput={this.displayPreWords}
          />
          <span id="input-icon">
            <i className="fas fa-pen-square fa-2x"></i>
          </span>
        </div>
        {console.log(this.state)}
        {/* {console.log(this.state.next)} */}
        {status === "SUCCESS" ? (
          <p>Thanks!</p>
        ) : (
          <button className="button">Submit</button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
        <button type="button" onClick={this.nextCounter}>
          Next
        </button>
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
