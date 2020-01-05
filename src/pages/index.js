import React from "react";
import { Canvas } from "react-three-fiber";
import "./style.css";

export default () => (
  <Canvas>
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color="crimson" />
    </mesh>
  </Canvas>
);
