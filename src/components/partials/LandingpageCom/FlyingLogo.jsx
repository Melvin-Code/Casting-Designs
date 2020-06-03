import React, { Component } from "react";

class FlyingLogo extends Component {
  render() {
    return (
      <div className="Fly-logo-box">
        <img
          className="logo"
          alt="logo"
          src="/Casting -logo (1)/vector/isolated-monochrome-white.svg"
        />
        <h1 className="co-name">
          <span className="co-name-up">Casting</span>
          <span className="co-name-dwn">Designs</span>
        </h1>
      </div>
    );
  }
}

export default FlyingLogo;
