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
import Sakura from "./components/LowPolySakura";
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

function Scene({
  rotationControl,
  positionControl,
  canvasId,
  customStyle = {},
}) {
  const stencil = useMask(1, false); // Second parameter: inverse mask

  return (
    <Canvas
      id={canvasId}
      className="w-full h-full"
      style={customStyle}
      shadows
      gl={{
        stencil: true,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />

        {/* Ambient light for general illumination */}
        <ambientLight intensity={2} />

        {/* Directional light with helper */}
        <directionalLight
          position={[12, 9.6, 8.2]}
          intensity={2}
          castShadow
          shadow-mapSize={[4096, 4096]}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        {/* Circular mask - rendered first */}
        {/* <CircularMask /> */}

        {/* Group for masked objects */}
        <group></group>

        {/* Invisible shadow-only plane using ShadowMaterial */}
        {
          <mesh
            receiveShadow
            position={[0, -0.8, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[10, 5]} />
            <shadowMaterial transparent opacity={0.3} />
          </mesh>
        }

        {/* Group for NO masked objects */}
        <group>
          <RandomFloatingShapes count={3} />
          <Sakura position={[-0.6, 0, 2.6]} rotation={[0, 0, 0]} scale={1} />
        </group>

        {/* FPS Stats */}
        <Stats />
      </Suspense>
    </Canvas>
  );
}

const Hero = () => {
  const rotationControl = useControls("rotation", {
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

  const positionControl = useControls("position", {
    positionX: {
      value: 0,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 0,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 0,
      min: -10,
      max: 10,
    },
  });

  return (
    <>
      {/* <Leva /> */}
      <div className="w-full h-full">
        <section className="w-full h-full">
          <Scene
            rotationControl={rotationControl}
            positionControl={positionControl}
            canvasId="hero-canvas-1"
          />
        </section>
      </div>
    </>
  );
};

export default Hero;
