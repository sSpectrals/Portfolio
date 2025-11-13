import React from "react";
import "./experience.css";
import "../button.css";

const Experience = ({ onGoBack }) => {
  return (
    <div className="Panel">
      <div className="Content">
        <h1>Experience</h1>
        <p>
          This is the Experience page. Add your professional experience content
          here.
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

export default Experience;
