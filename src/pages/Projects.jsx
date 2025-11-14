import React from "react";
import "../css/unused/projects.css";
import "../css/button.css";

const Projects = ({ onGoBack }) => {
  return (
    <div className="Panel">
      <div className="Content">
        <h1>Projects</h1>
        <p>
          This is the Projects page. Add your project portfolio content here.
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

export default Projects;
