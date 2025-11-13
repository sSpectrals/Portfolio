import React from "react";

const Contact = ({ onGoBack }) => {
  return (
    <div className="Panel">
      <div className="Background"></div>
      <div className="Content">
        <h1>Contact</h1>
        <p>
          This is the Contact page. Add your contact information and form here.
        </p>
      </div>
      <button className="CloseButton" onClick={onGoBack}>
        <h1>GO BACK</h1>
        <div className="CloseBackground"></div>
      </button>
    </div>
  );
};

export default Contact;