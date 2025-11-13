import React from "react";

const Projects = ({ onGoBack }) => {
  return (
    <div className="Panel">
      <div className="Background"></div>
      <div className="Content">
        <h1>Projects</h1>
        <p>
          This is the Projects page. Add your project portfolio content here.
        </p>
      </div>
      <button className="CloseButton" onClick={onGoBack}>
        <h1>GO BACK</h1>
        <div className="CloseBackground"></div>
      </button>
    </div>
  );
};

export default Projects;