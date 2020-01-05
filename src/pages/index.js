import React from "react";
import { Canvas } from "react-three-fiber";
import "./style.css";

const Box = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color="crimson" />
    </mesh>
  );
};

export default () => (
  <Canvas>
    <Box />
  </Canvas>
);
