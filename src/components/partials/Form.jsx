import React from "react";

import Buttons from "./Buttons";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      next: 0,
      email: "",
      writtenName: "Fill with your name",
      writtenMessage: "Now write your message",
      size: null
    };
  }
 
  componentDidMount(){
    this.setState({
      size: window.innerWidth
    })
  }

  handleResize=()=> {
     let widthScreen = window.innerWidth
    if(widthScreen <= 414 ){
      this.setState({
        size: 414
      })
    }else if(widthScreen<=920 && widthScreen >= 661){
      this.setState({
        size: 920
      })
    }else if(widthScreen<=660 && widthScreen>=415){
      this.setState({
        size: 660
      })
    }else if(widthScreen>=920){
      this.setState({
        size: 'normal'
      })
    }

  }
  chosingSize=(small, mid, big, normal)=>{
    if(this.state.size<=415 ){
      return small
    }else if (this.state.size<=920 && this.state.size >= 661){
      return big
    }else if(this.state.size>=414 && this.state.size <= 660){
      return mid
    }else if(this.state.size === 'normal'){
      return normal
    }
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
      writtenEmail:
        this.state.email !== "" ? this.state.email : "Fill with your email",
      writtenMessage: "Now write your message",
    });
  };
  onInputting = (input, choice) => {
    this.setState({
      [input]: choice,
    });
  };
  ressetinNext=(num)=>{
    this.setState({
      next: num
    })
  }
  displayPreWords = () => {
    return (
      <div className="prWords-box">
        <div className="preWords-container">
          {this.state.stInput === true ? (
            <div onClick={()=>this.ressetinNext(0)} className="pw-wording">
              <i className="fas fa-user-circle fa-2x"></i>
              <p >{this.state.writtenName}</p>
            </div>
          ) : null}
        </div>
        <div className="preWords-container">
          {this.state.ndInput === true ? (
            <span onClick={()=>this.ressetinNext(1)} className="pw-wording">
              <i className="fas fa-envelope fa-2x"></i>
              <p>{this.state.writtenEmail}</p>
            </span>
          ) : null}
        </div>
        <div className="preWords-container">
          {this.state.rdInput === true ? (
            <span id="pw-wording3" onClick={()=>this.ressetinNext(2)} className="pw-wording">
              <i className="fas fa-pen-square fa-2x"></i>
              <p>{this.state.writtenMessage}</p>
            </span>
          ) : null}
        </div>
      </div>
    );
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
    window.addEventListener('resize', this.handleResize)
      window.addEventListener('load', this.handleResize)
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/moqkwdep"
        method="POST"
        className="form-box"
      >
        {/* <TypeWriter/> */}
        <div className="prWords-holder"><div className='setter'>{this.displayPreWords()}</div></div>
        <div id={this.displayInput()} className="input-box">
          <input
            onInput={() => this.onInputting("stInput", true)}
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
            onInput={() => this.onInputting("ndInput", true)}
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
            onInput={() => this.onInputting("rdInput", true)}
            onChange={this.handleChange}
            className="form-in"
            type="text"
            name="message"
            placeholder="Message"
          />
          <span id="input-icon">
            <i className="fas fa-pen-square fa-2x"></i>
          </span>
        </div>

        {status === "SUCCESS" ? (
          <p>Thanks for reaching out</p>
        ) : (
          <Buttons 
            type={this.state.next < 3? 'button': 'submit'}
            text={this.state.next < 2? 'Next': 'Submit'}
            font="2.8rem"
            weight="bolder"
            polyWidth= {this.chosingSize('50','60', '70', '130')}
              polyheight= {this.chosingSize('30', '30','40', '59')}
              width1= {this.chosingSize('50px','60px', '70px', '130px')}
              height1= {this.chosingSize('30px','30px', '40px', '59px')}
            newBorder="1px solid #91C9FF"
            onClicker = {this.state.next < 3 ? this.nextCounter: null}
          />
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
        {/* <button type="button" onClick={this.nextCounter}>
          Next
        </button> */}
        {console.log(this.state.next)}
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
