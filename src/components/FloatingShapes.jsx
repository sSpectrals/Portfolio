import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Random floating shapes component
const FloatingShape = ({
  position,
  shape,
  scale,
  rotationSpeed,
  moveSpeed,
  moveRadius,
}) => {
  const meshRef = useRef();
  const initialPosition = useRef(position);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;

      // Rotation animation
      meshRef.current.rotation.x = time * rotationSpeed.x;
      meshRef.current.rotation.y = time * rotationSpeed.y;
      meshRef.current.rotation.z = time * rotationSpeed.z;

      // Floating movement
      meshRef.current.position.x =
        initialPosition.current[0] + Math.sin(time * moveSpeed.x) * moveRadius;
      meshRef.current.position.y =
        initialPosition.current[1] + Math.cos(time * moveSpeed.y) * moveRadius;
      meshRef.current.position.z =
        initialPosition.current[2] +
        Math.sin(time * moveSpeed.z) * (moveRadius * 0.5);
    }
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case "box":
        return new THREE.BoxGeometry(1, 1, 1);
      case "sphere":
        return new THREE.SphereGeometry(0.5, 16, 16);
      case "octahedron":
        return new THREE.OctahedronGeometry(0.6);
      case "tetrahedron":
        return new THREE.TetrahedronGeometry(0.7);
      case "icosahedron":
        return new THREE.IcosahedronGeometry(0.6);
      case "dodecahedron":
        return new THREE.DodecahedronGeometry(0.6);
      case "torus":
        return new THREE.TorusGeometry(0.5, 0.2, 8, 16);
      case "cone":
        return new THREE.ConeGeometry(0.5, 1, 8);
      default:
        return new THREE.BoxGeometry(1, 1, 1);
    }
  }, [shape]);

  return (
    <group ref={meshRef} scale={scale}>
      {/* Black fill */}
      <mesh geometry={geometry}>
        <meshBasicMaterial color="black" transparent={true} opacity={1} />
      </mesh>
      {/* Pink wireframe */}
      <mesh geometry={geometry}>
        <meshBasicMaterial
          color="#fc087d"
          wireframe={true}
          transparent={true}
          opacity={0.7}
        />
      </mesh>
    </group>
  );
};

// Component to generate multiple random shapes
const RandomFloatingShapes = ({ count = 15 }) => {
  const shapes = useMemo(() => {
    const shapeTypes = [
      "box",
      "sphere",
      "octahedron",
      "tetrahedron",
      "icosahedron",
      "dodecahedron",
      "torus",
      "cone",
    ];

    return Array.from({ length: count }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 20, // x
        (Math.random() - 0.5) * 15, // y
        (Math.random() - 0.5) * 10, // z
      ],
      shape: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      scale: 0.3 + Math.random() * 0.7, // Scale between 0.3 and 1.0
      rotationSpeed: {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
        z: (Math.random() - 0.5) * 2,
      },
      moveSpeed: {
        x: 0.5 + Math.random() * 1.5,
        y: 0.3 + Math.random() * 1.2,
        z: 0.2 + Math.random() * 0.8,
      },
      moveRadius: 1 + Math.random() * 3,
    }));
  }, [count]);

  return (
    <>
      {shapes.map((shapeData) => (
        <FloatingShape
          key={shapeData.id}
          position={shapeData.position}
          shape={shapeData.shape}
          scale={shapeData.scale}
          rotationSpeed={shapeData.rotationSpeed}
          moveSpeed={shapeData.moveSpeed}
          moveRadius={shapeData.moveRadius}
        />
      ))}
    </>
  );
};

export default RandomFloatingShapes;