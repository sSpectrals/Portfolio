import React from 'react'
import './nav.css'


function NavBar() {
    const menuItems = [
    { id: 1, name: 'HOME', className: 'nav-button' },
    { id: 2, name: 'ABOUT ME', className: 'nav-button' },
    { id: 3, name: 'PROJECTS', className: 'nav-button' },
    { id: 4, name: 'CONTACT', className: 'nav-button' }
  ];

  return (
    <div className="menu-wrapper">
      {menuItems.map((item) => (
        <div key={item.id} className="container">
          <div className={item.className}>
            <h1>{item.name}</h1>
          </div>
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