import React from "react";
import "./aboutme.css";

const AboutMe = ({ onGoBack }) => {
  return (
    <div className="Panel">
      <div className="Background"></div>
      <div className="Content">
        <h1>About Me</h1>
        <p>
          Losem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea
        </p>
      </div>
      <button className="Button" onClick={onGoBack}>
        <div className="ButtonText">
          <h1>GO BACK</h1>
        </div>
        <div className="BtnBackground"></div>
      </button>
    </div>
  );
};

export default AboutMe;
