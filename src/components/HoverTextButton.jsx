import React from "react";
import "./HoverTextButton.css";

const HoverTextButton = ({ icon: Icon, text }) => {
  return (
    <div className="btn-container-main">
      <div className="button-container">
        {Icon && <Icon height="2em" width="2em" className="hover-button" />}
        <span className="hover-text">{text}</span>
      </div>
    </div>
  );
};

export default HoverTextButton;
