import React from "react";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";

const App = () => {
  return (
    <main className="flex flex-col lg:flex-row h-screen overflow-hidden">
      <div className="w-full lg:w-2/3 flex-shrink-0 h-full">
        <Hero />
      </div>
      <div className="w-full lg:w-1/3 flex-shrink-0 h-full">
        <Nav />
      </div>
    </main>
  );
};

export default App;
