import React from "react";
import { Canvas } from "react-three-fiber";
import "./style.css";

export default () => (
  <Canvas>
    <mesh>
      <boxBufferGeometry attach="geometry" arcs={[1, 1, 1]} />
    </mesh>
  </Canvas>
);
