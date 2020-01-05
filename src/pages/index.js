import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import "./style.css";

const Box = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial
        attach="material"
        color={hovered ? "crimson" : "gray"}
      />
    </mesh>
  );
};

export default () => (
  <Canvas>
    <Box />
  </Canvas>
);
