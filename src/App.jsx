import React, { useState, useEffect } from "react";
import Nav from "./pages/Nav.jsx";
import Hero from "./Hero.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import "./css/button.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      const aboutSection = document.getElementById("about");
      const experienceSection = document.getElementById("experience");
      const projectsSection = document.getElementById("projects");
      const contactSection = document.getElementById("contact");

      const scrollY = window.scrollY;
      const heroHeight = heroSection
        ? heroSection.offsetHeight
        : window.innerHeight;

      // Determine current page based on scroll position
      if (scrollY < heroHeight * 0.5) {
        setCurrentPage("home");
      } else if (
        aboutSection &&
        scrollY < aboutSection.offsetTop + aboutSection.offsetHeight * 0.5
      ) {
        setCurrentPage("about");
      } else if (
        experienceSection &&
        scrollY <
          experienceSection.offsetTop + experienceSection.offsetHeight * 0.5
      ) {
        setCurrentPage("experience");
      } else if (
        projectsSection &&
        scrollY < projectsSection.offsetTop + projectsSection.offsetHeight * 0.5
      ) {
        setCurrentPage("projects");
      } else if (contactSection) {
        setCurrentPage("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (page) => {
    if (page === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setCurrentPage("home");
    } else {
      // Scroll to the specific section
      const element = document.getElementById(page);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setCurrentPage(page);
      }
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section - Full viewport height */}
      <section id="home" className="hero-section relative w-full h-screen">
        <div className="absolute inset-0 w-full h-full">
          <Hero />
        </div>

        {/* Navigation overlay on hero - only shown on home */}
        <div className="absolute top-0 right-0 w-2/3 h-full z-10">
          <Nav onNavigate={handleNavigation} />
        </div>
      </section>

      <section id="about" className="w-full min-h-screen">
        <AboutMe />
      </section>

      <section id="experience" className="w-full min-h-screen">
        <Experience />
      </section>

      <section id="projects" className="w-full min-h-screen">
        <Projects />
      </section>

      <section id="contact" className="w-full min-h-screen">
        <Contact />
      </section>

      {currentPage !== "home" && (
        <div className="fixed bottom-0 w-full flex flex-row justify-evenly pb-8">
          <button className="Button" onClick={() => handleNavigation("about")}>
            <div className="BtnBackground-gray">
              <h1 className="ButtonText">ABOUT ME</h1>
            </div>
            <div className="BtnBackground-pink"></div>
          </button>
          <button
            className="Button"
            onClick={() => handleNavigation("experience")}
          >
            <div className="BtnBackground-gray">
              <h1 className="ButtonText">EXPERIENCE</h1>
            </div>
            <div className="BtnBackground-pink"></div>
          </button>
          <button
            className="Button"
            onClick={() => handleNavigation("projects")}
          >
            <div className="BtnBackground-gray">
              <h1 className="ButtonText">PROJECTS</h1>
            </div>
            <div className="BtnBackground-pink"></div>
          </button>
          <button
            className="Button"
            onClick={() => handleNavigation("contact")}
          >
            <div className="BtnBackground-gray">
              <h1 className="ButtonText">CONTACT</h1>
            </div>
            <div className="BtnBackground-pink"></div>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
