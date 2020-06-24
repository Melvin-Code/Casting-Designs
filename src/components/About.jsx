import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className='about-page setter'>
        <div className="about-page-holder1 setter page-boxes">
          <div className="background-box">
            <div className="img-container">
              <img
                className="profile-pic"
                alt="Profile"
                src="/ProfilePic.png"
              ></img>
            </div>
            <h2 className="box-text-main">My Background</h2>
          </div>
          <div className="box-text-sub">
            I started my road to becamo a Web developer in 2018, when I started
            to work as a graphic and web designer. Hungry to grow my skillset I
            decided to attend the IronHack Bootcamp in Miami. It was there when
            I really grew my skills as a programer and became a web developer.
            Currently I focus in my work as a freelancer to creat beatiful and
            efficient website while constantly learning to upgrade my skills.
          </div>
          <div className="indicator-box">
            <i id="indicator-1" class="fas fa-chevron-right fa-3x "></i>
            <i id="indicator-2" class="fas fa-chevron-right fa-3x "></i>
            <i id="indicator-3" class="fas fa-chevron-right fa-3x "></i>
          </div>
        </div>
        <div className='about-page-holder2 page-boxes'>
        <div className="background-box">
            <div className="img-container">
              <img
                className="profile-pic"
                alt="Profile"
                src="/ProfilePic.png"
              ></img>
            </div>
            <h2 className="box-text-main">My Skills</h2>
          </div>
          <div>
              <div>
                  <i class="fab fa-html5"></i>
                  <p>HTML5</p>
              </div>
              <div>
              <i class="fab fa-css3-alt"></i>
                  <p></p>
              </div>
              <div>
              <i class="fab fa-js"></i>
                  <p></p>
              </div>
              <div>
              <i class="fab fa-sass"></i>
                  <p></p>
              </div>
              <div>
              <i class="fab fa-react"></i>
                  <p></p>
              </div>
              <div>
              
                  <p></p>
              </div>
              <div>
                  <i></i>
                  <p></p>
              </div>
              <div>
                  <i></i>
                  <p></p>
              </div>
              <div>
                  <i></i>
                  <p></p>
              </div>
              <div>
                  <i></i>
                  <p></p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
