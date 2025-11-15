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

    // <div className="w-full">
    //   {/* Hero Section - Full viewport height */}
    //   <section id="home" className="hero-section relative w-full h-screen">
    //     <div className="absolute inset-0 w-full h-full">
    //       <Hero />
    //     </div>

    //     {/* Navigation overlay on hero - only shown on home */}
    //     <div className="absolute top-0 right-0 w-2/3 h-full z-10">
    //       <Nav />
    //     </div>
    //   </section>

    //   <section id="about" className="w-full min-h-screen">
    //     <AboutMe />
    //   </section>

    //   <section id="experience" className="w-full min-h-screen">
    //     <Experience />
    //   </section>

    //   <section id="projects" className="w-full min-h-screen">
    //     <Projects />
    //   </section>

    //   <section id="contact" className="w-full min-h-screen">
    //     <Contact />
    //   </section>
    // </div>
  );
};

export default App;
