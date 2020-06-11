import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      next: 0,
      in1: '',
      in2: '',
      in3: '',
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  nextCounter=()=>{
      this.setState({
          next: this.state.next + 1
      })
  }
  displayInput=()=>{
    if(this.state.next === 0){
        return 'display-1'
    }else if (this.state.next=== 1 && this.state.name !== ""){
        return '-2'
    }else if(this.state.next===2 && this.state.name !== '' && this.state.email !==3){
        
        return 'play-3'
    }else if(this.state.next > 2){
        this.setState({
            next: 2
        })
    }
  }
  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/moqkwdep"
        method="POST"
        className="form-box"
      > 
        <input id={this.displayInput()} 
          onChange={this.handleChange}
          className="form-in"
          type="text"
          name="name"
          placeholder="Name"
        />

        <input id={`display${this.displayInput()}`}
          onChange={this.handleChange}
          className="form-in"
          type="email"
          name="email"
          placeholder="Email"
        />

        <input id={`dis${this.displayInput()}`}
          onChange={this.handleChange}
          className="form-in"
          type="text"
          name="message"
          placeholder="Message"
        />
        {console.log(this.state)}
        {console.log(this.state.next)}
        {status === "SUCCESS" ? (
          <p>Thanks!</p>
        ) : (
          <button className="button">Submit</button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
        <button type='button' onClick={this.nextCounter} >Next</button>
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
