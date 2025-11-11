import React from "react";
import "./nav.css";

function NavBar() {
  const menuItems = [
    { id: 1, name: "ABOUT ME" },
    { id: 2, name: "EXPERIENCE" },
    { id: 3, name: "PROJECTS" },
    { id: 4, name: "CONTACT" },
  ];

  return (
    <div className="menu-wrapper">
      {menuItems.map((item) => (
        <div key={item.id} className="container">
          <button className="nav-button">
            <h1>{item.name}</h1>
          </button>
          <div className="background"></div>
        </div>
      ))}
    </div>
  );
}

const App = () => {
  return (
    <div>
      <NavBar />
    </div>
  );
};

export default App;
