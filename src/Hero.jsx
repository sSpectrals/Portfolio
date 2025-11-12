import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  PivotControls,
  Mask,
  useMask,
  Stats,
} from "@react-three/drei";
import CanvasLoader from "./components/CanvasLoader";
import RandomFloatingShapes from "./components/FloatingShapes";
import { Leva, useControls } from "leva";

const Frame = (props) => (
  <mesh {...props}>
    <ringGeometry args={[0.785, 0.85, 64]} />
    <meshPhongMaterial color="black" />
  </mesh>
);

const CircularMask = (props) => (
  <group {...props}>
    <PivotControls
      offset={[0, 0, 1]}
      activeAxes={[true, true, false]}
      disableRotations
    >
      <Frame position={[0, 0, 1]} />
      <Mask
        id={1}
        position={[0, 0, 0.95]}
        colorWrite={false}
        depthWrite={false}
      >
        <circleGeometry args={[0.8, 64]} />
      </Mask>
    </PivotControls>
  </group>
);

function Scene({ controls, canvasId, customStyle = {} }) {
  const stencil = useMask(1, false); // Second parameter: inverse mask

  return (
    <Canvas
      id={canvasId}
      className="w-full h-full"
      style={customStyle}
      gl={{
        stencil: true,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {/* Circular mask - rendered first */}
        {/* <CircularMask /> */}

        {/* Group for masked objects */}
        <group></group>

        {/* Group for NO masked objects */}
        <group>
          <RandomFloatingShapes count={20} />
        </group>

        {/* FPS Stats */}
        <Stats />
      </Suspense>
    </Canvas>
  );
}

const Hero = () => {
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

  return (
    <>
      {/* <Leva /> */}
      <div className="w-full h-full">
        <section className="w-full h-full">
          <Scene controls={controls1} canvasId="hero-canvas-1" />
        </section>
      </div>
    </>
  );
};

export default Hero;
