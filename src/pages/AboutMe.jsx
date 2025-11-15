import React from "react";
import "../css/unused/aboutme.css";
import "../css/template.css";
import "../css/button.css";

const AboutMe = ({ onGoBack }) => {
  return (
    <div className="w-full min-h-screen bg-red-200 flex flex-col">
      <div className="flex-1 flex flex-col Content">
        <h1 className="text-center Title">ABOUT ME</h1>
        <div className=" TextContent w-1/2 mx-auto">
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
      <div className="flex flex-row justify-evenly pb-8">
        <button
          className="Button"
          onClick={() =>
            document
              .getElementById("home")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <div className="BtnBackground-gray">
            <h1 className="ButtonText">HOME</h1>
          </div>
          <div className="BtnBackground-pink"></div>
        </button>

        <button
          className="Button"
          onClick={() =>
            document
              .getElementById("experience")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <div className="BtnBackground-gray">
            <h1 className="ButtonText">EXPERIENCE</h1>
          </div>
          <div className="BtnBackground-pink"></div>
        </button>
        <button
          className="Button"
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <div className="BtnBackground-gray">
            <h1 className="ButtonText">PROJECTS</h1>
          </div>
          <div className="BtnBackground-pink"></div>
        </button>
        <button
          className="Button"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <div className="BtnBackground-gray">
            <h1 className="ButtonText">CONTACT</h1>
          </div>
          <div className="BtnBackground-pink"></div>
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
