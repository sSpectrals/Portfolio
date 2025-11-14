import React from "react";
import "../css/unused/contact.css";
import "../css/button.css";

const Contact = ({ onGoBack }) => {
  return (
    <div className="Panel">
      <div className="Content">
        <h1>Contact</h1>
        <p>
          This is the Contact page. Add your contact information and form here.
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

export default Contact;
