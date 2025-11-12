import React, { Suspense } from "react";
import "./hero.css";
import Panel from "./components/Panel.jsx";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "./components/CanvasLoader";
import { Leva, useControls } from "leva";

function Scene({ controls, canvasId, customStyle = {} }) {
  return (
    <Canvas id={canvasId} className="w-full h-full" style={customStyle}>
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
  );
}

const Hero = () => {
  // Separate controls for each canvas
  const controls1 = useControls("Panel 1", {
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

  const controls2 = useControls("Panel 2", {
    rotationX: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: 0,
      min: -10,
      max: 10,
    },
  });

  return (
    <>
      <Leva />
      <div className="flex h-full ">
        <section
          className="Page ml-6 mt-6 mb-6  flex-1"
          style={{
            height: "calc(100% - 3rem)",
          }}
        >
          <Scene controls={controls1} canvasId="hero-canvas-1" />
        </section>
        <section
          className="Page ml-6 mt-6 mb-6 mr-6 flex-1"
          style={{
            height: "calc(100% - 3rem)",
          }}
        >
          <Scene controls={controls2} canvasId="hero-canvas-2" />
        </section>
      </div>
    </>
  );
};

export default Hero;
