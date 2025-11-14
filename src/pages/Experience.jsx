import React from "react";
import "../css/unused/experience.css";
import "../css/button.css";

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
        <div className="BtnBackground-gray">
          <h1 className="ButtonText">GO BACK</h1>
        </div>
        <div className="BtnBackground-pink"></div>
      </button>
    </div>
  );
};

export default Experience;
