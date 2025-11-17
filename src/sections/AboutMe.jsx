import React from "react";
// text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-left absolute top-1/3 left-4 sm:left-8 md:left-16 lg:left-[10rem] -translate-y-1/2 leading-none
const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-pastel-blue px-3 sm:px-10 overflow-x-hidden "
    >
      <div className="italic text-center flex items-center justify-center mx-auto text-6xl min-h-[100vh]">
        "Woo, I'm about to make a name for myself here" <br /> - Deadpool &
        Wolferine (2024)
      </div>
      <div className="grid grid-cols-2 grid-rows-4 gap-y-8 pb-36 relative">
        {/* Row 1, Col 1 */}
        <div className=" rotate-3 italic text-center flex items-center justify-center min-h-[20vh] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black col-start-1 row-start-1">
          <p className="bg-teal-400 border-r-4 border-r-pink border-b-4 border-b-pink p-5 ">
            Hi, I'm Edgar Mamikonian
          </p>
        </div>
        {/* Row 1, Col 2 */}
        <div className="min-h-[20vh] text-center flex items-center justify-center col-start-2 row-start-1">
          <img
            src="assets/me.png"
            alt="Edgar Mamikonian"
            className="w-32 h-32 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-80 xl:h-80  rounded-full"
          />
        </div>
        {/* Row 2, Col 1 */}
        <div className="col-start-1 row-start-2 flex items-center justify-center text-xl sm:text-3xl md:text-4xl lg:text-5xl italic text-center">
          I am a computer science & engineering student with a passion for
          solving problems.
        </div>
        {/* Row 2, Col 2: Image */}
        <div className="col-start-2 row-start-2 flex items-center justify-center"></div>
        {/* Row 3, Col 1: Text */}
        <div className="  col-start-1 row-start-3 flex items-center justify-center text-xl sm:text-3xl md:text-4xl lg:text-5xl italic text-center z-10">
          Currently, I'm expanding my skills in robotics & mathematics while
          applying everything in code.
        </div>
        {/* Row 3, Col 2 */}
        <div className="rotate-12 min-h-[20vh] text-center flex items-center justify-center col-start-2 row-start-3 z-10"></div>
        {/* Row 4, Col 1 */}
        <div className=" min-h-[20vh] text-center flex items-center justify-center col-start-1 row-start-4 z-10">
          <img
            src="assets/robot.svg"
            className=" w-32 h-32 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-80 xl:h-80   rotate-12"
          />
        </div>
        {/* Row 4, Col 2 */}
        <div className="italic min-h-[20vh] text-center text-1xl sm:text-3xl md:text-4xl lg:text-5xl flex items-center justify-center col-start-2 row-start-4 z-10">
          I'm always looking for new challenges and opportunities to develop my
          skillset. Want to get in touch? Find my contact information in the
          Contact section!
        </div>
        {/* Absolute element between row 2 and 3 */}
        <div className="absolute sm:top-[65vh] top-[40vh] right-10  ">
          <img
            src="assets/design.svg"
            alt="design"
            className="w-32 h-32 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-80 xl:h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

// <img
//   className="w-32 h-32 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-full"
//   src={"assets/incognito.svg"}
//   alt="me"
// />;

// TEXT

// "Woo, I'm about to make a name for myself here" <br /> - Deadpool &
// Wolferine (2024)
//             Hi, I'm Edgar Mamikonian

//                       I am a computer science & engineering student with a passion for
//   solving problems.

//             Currently, I'm expanding my skills in robotics & mathematics while
//   applying everything in code.

//             I'm always looking for new challenges and opportunities to develop my
//   skillset. Want to get in touch? Find my contact information in the
//   Contact section!
