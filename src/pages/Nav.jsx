import React from "react";
import "./nav.css";

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
          className="container"
          onClick={() => handleClick(item.page)}
        >
          <div className="nav-button">
            <h1>{item.name}</h1>
          </div>
          <div className="background"></div>
        </button>
      ))}
    </div>
  );
}

const App = ({ onNavigate }) => {
  return (
    <div>
      <NavBar onNavigate={onNavigate} />
    </div>
  );
};

export default App;
