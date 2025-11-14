import React, { useState } from "react";
import Nav from "./pages/Nav.jsx";
import Hero from "./Hero.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleGoBack = () => {
    setCurrentPage("home");
  };

  const renderCurrentPage = () => {
    const pageContent = () => {
      switch (currentPage) {
        case "about":
          return <AboutMe onGoBack={handleGoBack} />;
        case "experience":
          return <Experience onGoBack={handleGoBack} />;
        case "projects":
          return <Projects onGoBack={handleGoBack} />;
        case "contact":
          return <Contact onGoBack={handleGoBack} />;
        default:
          return <Nav onNavigate={handleNavigation} />;
      }
    };

    return (
      <main className="relative w-screen h-screen overflow-hidden">
        <div className="absolute inset-0 w-screen h-screen">
          <Hero />
        </div>
        <div className="absolute top-0 right-0 w-2/3 h-full">
          {pageContent()}
        </div>
      </main>
    );
  };

  return renderCurrentPage();
};

export default App;
