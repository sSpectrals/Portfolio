import React from "react";
// text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-left absolute top-1/3 left-4 sm:left-8 md:left-16 lg:left-[10rem] -translate-y-1/2 leading-none
const AboutMe = () => {
  return (
    <section
      id="about"
      className="c-space bg-pastel-blue grid grid-cols-2 grid-rows-4 h-[200vh]"
    >
      {/* Row 1, Col 1 */}
      <div className="italic text-center flex items-center justify-center min-h-[20vh] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black col-start-1 row-start-1">
        Hi, I'm Edgar Mamikonian
      </div>
      {/* Row 1, Col 2 */}
      <div className=" min-h-[20vh] text-center flex items-center justify-center col-start-2 row-start-1">
        x
      </div>
      {/* Row 2, Col 1 */}
      <div className=" min-h-[20vh] text-center flex items-center justify-center col-start-1 row-start-2">
        x
      </div>
      {/* Row 2, Col 2 */}
      <div className="italic min-h-[20vh]  text-center text-[clamp(2rem,2vw,6rem)] flex items-center justify-center col-start-2 row-start-2">
        I am a computer science & engineering student with a passion for solving
        problems.
      </div>
      {/* Row 3, Col 1 */}
      <div className="italic min-h-[20vh] text-center text-[clamp(2rem,2vw,6rem)] flex items-center justify-center col-start-1 row-start-3">
        Currently, I'm expanding my skills in robotics & mathematics while
        applying everything in code.
      </div>
      {/* Row 3, Col 2 */}
      <div className=" min-h-[20vh] text-center flex items-center justify-center col-start-2 row-start-3">
        x
      </div>
      {/* Row 4, Col 1 */}
      <div className=" min-h-[20vh] text-center flex items-center justify-center col-start-1 row-start-4">
        x
      </div>
      {/* Row 4, Col 2 */}
      <div className="italic min-h-[20vh] text-center text-[clamp(2rem,2vw,6rem)] flex items-center justify-center col-start-2 row-start-4">
        I'm always looking for new challenges and opportunities to develop my
        skillset.
      </div>
    </section>
  );
};

export default AboutMe;

// Text
// <h1 className="grid-headtext">Hello! I'm Edgar Mamikonian</h1>
// <p className="grid-subtext">

// </p>
