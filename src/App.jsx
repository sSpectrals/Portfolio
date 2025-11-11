import React from "react";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";

const App = () => {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-1/2 flex-shrink-0">
        <Hero />
      </div>
      <div className="w-full lg:w-1/2 flex-shrink-0">
        <Nav />
      </div>
    </main>
  );
};

export default App;
