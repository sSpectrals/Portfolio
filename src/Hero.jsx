import React from "react";
import "./hero.css";
import City from "./components/City.jsx";
import { PerspectiveCamera } from "@react-three/drei";

function Canvas() {
  return (
    <canvas id="hero-canvas" className="w-full h-96">
      <PerspectiveCamera makeDefault position={[0, 0, 3]} />
      <City />
    </canvas>
  );
}

const Hero = () => {
  return (
    <section
      className="Page w-full h-fit ml-15 mt-15 mb-15"
      style={{ width: "100%" }}
    >
      <Canvas />
    </section>
  );
};

export default Hero;
