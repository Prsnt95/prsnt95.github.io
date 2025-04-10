import React from "react";
import "./Content.css";
import IconGithub from "../../assets/icons/IconGithub";
import IconLinkedin from "../../assets/icons/IconLinkedin";
import IconGmail from "../../assets/icons/IconGmail";
function Content() {
  return (
    <div className="content-container">
      <div className="about-header">
        <h1 className="name">
          prashant <span className="lastname">ghimire</span>
        </h1>
        <p className="student"> 
          student - computer science - @northwestern university
        </p>
        <p className="addy">chicago, il.</p>
      </div>
      <div className="description-container">
        <p className="description-text">
          i am an enthusiastic computer science student who enjoys building cool
          software and learning new technologies.
        </p>
      </div>
      <div className="social">
        <IconLinkedin className="socialIcon" height="2em" width="2em" />
        <IconGithub className="socialIcon" height="2em" width="2em" />

        <IconGmail className="socialIcon" height="2em" width="2em" />
      </div>
      <div className="seemore">
        {/* <p>Check out some of my projects here</p> */}
      </div>
    </div>
  );
}

export default Content;
