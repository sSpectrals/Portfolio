import React from "react";
import "../css/nav.css";
import "../css/button.css";

function NavBar({ onNavigate }) {
  const menuItems = [
    { id: 1, name: "ABOUT ME", page: "about" },
    { id: 2, name: "EXPERIENCE", page: "experience" },
    { id: 3, name: "PROJECTS", page: "projects" },
    { id: 4, name: "CONTACT", page: "contact" },
  ];

  const handleClick = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <div className="menu-wrapper">
      {menuItems.map((item) => (
        <button
          key={item.id}
          className="Button"
          onClick={() => handleClick(item.page)}
        >
          <div className="BtnBackground-gray">
            <h1 className="ButtonText">{item.name}</h1>
          </div>
          <div className="BtnBackground-pink"></div>
        </button>
      ))}
    </div>
  );
}

const Nav = ({ onNavigate }) => {
  return (
    <nav>
      <NavBar onNavigate={onNavigate} />
    </nav>
  );
};

export default Nav;
