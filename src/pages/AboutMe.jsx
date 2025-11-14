import React from "react";
import "../css/unused/aboutme.css";
import "../css/button.css";
import "../css/template.css";

const AboutMe = ({ onGoBack, isClosing }) => {
  return (
    <div className={`w-full h-screen flex flex-row Panel ${isClosing ? 'closing' : ''}`}>
      <button
        className=" flex items-center justify-center Button"
        onClick={onGoBack}
      >
        <div className="BtnBackground-gray">
          <h1 className="ButtonText">GO BACK</h1>
        </div>
        <div className="BtnBackground-pink"></div>
      </button>
      <div className="flex-1 border flex flex-col Content">
        <h1 className="text-center Title">ABOUT ME</h1>
        <div className="overflow-auto TextContent">
          Losem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea Losem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea Losem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea Losem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea Losem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea Losem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
