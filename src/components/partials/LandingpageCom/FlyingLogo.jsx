import React, { Component } from "react";
import { Link } from "react-router-dom";

class FlyingLogo extends Component {
  render() {
    return (
      <div className="Fly-logo-box">
        <Link to='/'><img
          className="logo"
          alt="logo"
          src="/Casting -logo (1)/vector/isolated-monochrome-white.svg"
        />
        </Link>
        <Link to='/'>
        <h1 className="co-name">
          <span className="co-name-up">Casting</span>
          <span className="co-name-dwn">Designs</span>
        </h1>
        </Link>
      </div>
    );
  }
}

export default FlyingLogo;
