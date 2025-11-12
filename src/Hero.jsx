import React, { Suspense } from "react";
import "./hero.css";
import City from "./components/City.jsx";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "./components/CanvasLoader";

function Scene() {
  return (
    <Canvas id="hero-canvas" className="w-full h-full">
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <City />
      </Suspense>
    </Canvas>
  );
}

const Hero = () => {
  return (
    <section
      className="Page ml-6 mt-6 mb-6 mr-6"
      style={{ 
        height: "calc(100% - 3rem)",
        width: "calc(100% - 3rem)"
      }}
    >
      <Scene />
    </section>
  );
};

export default Hero;
