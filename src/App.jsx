import React, { useState } from "react";
import Nav from "./pages/Nav.jsx";
import Hero from "./Hero.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isClosing, setIsClosing] = useState(false);

  const handleNavigation = (page) => {
    if (currentPage !== "home" && currentPage !== page) {
      setIsClosing(true);
      setTimeout(() => {
        setCurrentPage(page);
        setIsClosing(false);
      }, 300); // Match the animation duration
    } else {
      setCurrentPage(page);
    }
  };

  const handleGoBack = () => {
    setIsClosing(true);
    setTimeout(() => {
      setCurrentPage("home");
      setIsClosing(false);
    }, 300);
  };

  const renderCurrentPage = () => {
    return (
      <main className="relative w-screen h-screen overflow-hidden">
        <div className="absolute inset-0 w-screen h-screen">
          <Hero />
        </div>

        <div className="absolute top-0 right-0 w-2/3 h-full">
          <Nav onNavigate={handleNavigation} />
        </div>

        {currentPage !== "home" && (
          <div className="absolute top-0 right-0 w-2/3 h-full z-10">
            {(() => {
              switch (currentPage) {
                case "about":
                  return (
                    <AboutMe onGoBack={handleGoBack} isClosing={isClosing} />
                  );
                case "experience":
                  return (
                    <Experience onGoBack={handleGoBack} isClosing={isClosing} />
                  );
                case "projects":
                  return (
                    <Projects onGoBack={handleGoBack} isClosing={isClosing} />
                  );
                case "contact":
                  return (
                    <Contact onGoBack={handleGoBack} isClosing={isClosing} />
                  );
                default:
                  return null;
              }
            })()}
          </div>
        )}
      </main>
    );
  };

  return renderCurrentPage();
};

export default App;
