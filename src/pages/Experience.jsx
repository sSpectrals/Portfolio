import React from "react";

const Experience = ({ onGoBack }) => {
  return (
    <div className="Panel">
      <div className="Background"></div>
      <div className="Content">
        <h1>Experience</h1>
        <p>
          This is the Experience page. Add your professional experience content here.
        </p>
      </div>
      <button className="CloseButton" onClick={onGoBack}>
        <h1>GO BACK</h1>
        <div className="CloseBackground"></div>
      </button>
    </div>
  );
};

export default Experience;