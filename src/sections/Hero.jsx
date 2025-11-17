import { PerspectiveCamera, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect, Suspense } from "react";
import { Leva, useControls } from "leva";
import Sakura from "../components/LowPolySakura";
import CanvasLoader from "../components/CanvasLoader";
import RandomFloatingShapes from "../components/FloatingShapes";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
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
    <div className="w-full mx-auto flex flex-col  c-space gap-3">
      <h1 className="z-10 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-left absolute top-1/3 left-4 sm:left-8 md:left-16 lg:left-[10rem] -translate-y-1/2 leading-none">
        <span
          className="inline-block min-h-[1.2em] z-10"
          style={{ WebkitTextStroke: "1px white" }}
        >
          {text}
          <span className="animate-pulse ml-1">|</span>
        </span>
      </h1>
      <p
        style={{ WebkitTextStroke: "1px grey" }}
        className="z-10 hero_tag text-gray_gradient text-left absolute lg:top-[40%] md:top-[37.5%] top-[35%] left-4 sm:left-8 md:left-16 lg:left-[20rem]"
      >
        WELCOME
      </p>
    </div>
  );
};

export default Hero;
