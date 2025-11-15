import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Shared materials (created once, reused by all shapes)
const blackMaterial = new THREE.MeshBasicMaterial({
  color: "black",
  transparent: true,
  opacity: 1,
});

const pinkWireframeMaterial = new THREE.MeshBasicMaterial({
  color: "#fc087d",
  wireframe: true,
  transparent: true,
  opacity: 0.7,
});

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

  // Define viewport boundaries based on camera position and field of view
  const bounds = {
    x: { min: -2, max: 2 },
    y: { min: -1, max: 2 },
    z: { min: -2, max: 2 },
  };

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;

      // Rotation animation
      meshRef.current.rotation.x = time * rotationSpeed.x;
      meshRef.current.rotation.y = time * rotationSpeed.y;
      meshRef.current.rotation.z = time * rotationSpeed.z;

      // Calculate floating movement
      let newX =
        initialPosition.current[0] + Math.sin(time * moveSpeed.x) * moveRadius;
      let newY =
        initialPosition.current[1] + Math.cos(time * moveSpeed.y) * moveRadius;
      let newZ =
        initialPosition.current[2] +
        Math.sin(time * moveSpeed.z) * (moveRadius * 0.5);

      // Constrain positions to screen bounds
      newX = Math.max(bounds.x.min, Math.min(bounds.x.max, newX));
      newY = Math.max(bounds.y.min, Math.min(bounds.y.max, newY));
      newZ = Math.max(bounds.z.min, Math.min(bounds.z.max, newZ));

      // Apply constrained positions
      meshRef.current.position.x = newX;
      meshRef.current.position.y = newY;
      meshRef.current.position.z = newZ;
    }
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case "box":
        return new THREE.BoxGeometry(1, 1, 1);
      case "sphere":
        return new THREE.SphereGeometry(0.5, 4, 4);
      case "octahedron":
        return new THREE.OctahedronGeometry(0.3);
      case "tetrahedron":
        return new THREE.TetrahedronGeometry(0.4);
      case "icosahedron":
        return new THREE.IcosahedronGeometry(0.3);
      case "dodecahedron":
        return new THREE.DodecahedronGeometry(0.3);
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
      {/* Black fill - using shared material */}
      <mesh geometry={geometry} material={blackMaterial} />
      {/* Pink wireframe - using shared material */}
      <mesh geometry={geometry} material={pinkWireframeMaterial} />
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
        (Math.random() - 0.5) * 12, // x
        (Math.random() - 0.5) * 6, // y
        (Math.random() - 0.5) * 6, // z
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
      moveRadius: 0.5 + Math.random() * 1.5,
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
