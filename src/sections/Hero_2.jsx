import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect, Suspense } from "react";
import Sakura from "../components/LowPolySakura";
import CanvasLoader from "../components/CanvasLoader";
import RandomFloatingShapes from "../components/FloatingShapes";

const Hero = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const words = ["WORK", "RELAX", "REPEAT"];
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1));

          if (text === currentWord) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));

          if (text === "") {
            setIsDeleting(false);
            setWordIndex((wordIndex + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="bg-pink-50 min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-left absolute top-1/3 left-4 sm:left-8 md:left-16 lg:left-[10rem] -translate-y-1/2 leading-none">
          <span className="inline-block min-h-[1.2em]">
            {text}
            <span className="animate-pulse ml-1">|</span>
          </span>
        </h1>
        <p className="hero_tag text-gray_gradient text-left absolute lg:top-[40%] md:top-[37.5%] top-[35%] left-4 sm:left-8 md:left-16 lg:left-[20rem]">
          WELCOME
        </p>

        <div className="w-full h-full absolute inset-0">
          {/* 3D content */}
          <Canvas shadows className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              {/* Camera */}
              <PerspectiveCamera makeDefault position={[0, 0, 3]} />
              {/* Ambient light for general illumination */}
              <ambientLight intensity={2} />

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
                position={[0, -0.8, 0]}
              /> */}

              {/* Invisible shadow-only plane using ShadowMaterial */}
              <mesh
                receiveShadow
                position={[0, -0.8, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                renderOrder={-1} // Render behind other objects
              >
                <planeGeometry args={[10, 10]} />
                <shadowMaterial transparent opacity={0.3} depthWrite={false} />
              </mesh>

              <RandomFloatingShapes />
              <Sakura position={[1, 0, 0]} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
