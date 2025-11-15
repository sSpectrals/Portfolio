import NavBar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import Experience from "./sections/Experience.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";

const App = () => {
  return (
    <main className=" mx-auto">
      <NavBar />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;
