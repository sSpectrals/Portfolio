import React, { Suspense } from "react";
import "./hero.css";
import Panel from "./components/Panel.jsx";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "./components/CanvasLoader";
import { Leva, useControls } from "leva";

function Scene({ controls }) {
  return (
    <>
      <Leva />
      <Canvas id="hero-canvas" className="w-full h-full">
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Panel
            rotation={[
              controls.rotationX,
              controls.rotationY,
              controls.rotationZ,
            ]}
            position={[0, -2, 0]}
            scale={0.01}
          />
        </Suspense>
      </Canvas>
    </>
  );
}

const Hero = () => {
  const controls = useControls("Panel", {
    rotationX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },
  });

  return (
    <section
      className="Page ml-6 mt-6 mb-6 mr-6"
      style={{
        height: "calc(100% - 3rem)",
        width: "calc(100% - 3rem)",
      }}
    >
      <Scene controls={controls} />
    </section>
  );
};

export default Hero;
