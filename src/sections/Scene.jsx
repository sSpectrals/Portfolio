import { Environment, PerspectiveCamera, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Leva } from "leva";
import Sakura from "../components/LowPolySakura";
import CanvasLoader from "../components/CanvasLoader";
import RandomFloatingShapes from "../components/FloatingShapes";
import { useMediaQuery } from "react-responsive";

const Scene = () => {
  // const rotationControl = useControls("rotation", {
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  // });

  // const positionControl = useControls("position", {
  //   positionX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  // });

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section
      id="home"
      className="bg-pink-50 relative w-full h-dvh flex flex-col"
    >
      {/* 3D content */}
      <Canvas shadows className="w-full h-full absolute inset-0 z-0">
        <Suspense fallback={<CanvasLoader />}>
          {/* Camera */}
          <PerspectiveCamera
            makeDefault
            position={isMobile ? [0, 0, 2] : [0, 0, 3]}
          />

          {/* Directional light with helper */}
          <directionalLight
            position={[12, 10, 10]}
            intensity={3}
            color="blue"
            castShadow
            shadow-mapSize={[4096, 4096]}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />

          {/* <gridHelper
                args={[20, 20, 0xff0000, "black"]}
                position={[0, -1, 0]}
              /> */}

          {/* Invisible shadow-only plane using ShadowMaterial */}
          <mesh
            receiveShadow
            position={isMobile ? [0, -0.6, 0] : [0, -0.8, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            renderOrder={-1} // Render behind other objects
          >
            <planeGeometry args={[10, 10]} />
            <shadowMaterial transparent opacity={0.3} depthWrite={false} />
          </mesh>

          <group position={isMobile ? [0.2, -0.2, 0] : [1, 0, 0]}>
            <Sakura scale={isMobile ? 0.5 : 1} />
            <RandomFloatingShapes count={isMobile ? 5 : 10} />
          </group>

          <Stats />
        </Suspense>
        <Environment preset="warehouse" />
      </Canvas>
    </section>
  );
};

export default Scene;
