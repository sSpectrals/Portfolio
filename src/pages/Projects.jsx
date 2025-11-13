import React from "react";
import "./projects.css";
import "../button.css";

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
        <div className="ButtonText">
          <h1>GO BACK</h1>
        </div>
        <div className="BtnBackground"></div>
      </button>
    </div>
  );
};

export default Projects;
