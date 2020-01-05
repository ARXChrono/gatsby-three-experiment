import * as THREE from "three"
import React, { useState, useRef, useEffect } from "react"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Canvas, useRender, extend, useThree } from "react-three-fiber"
import { useSpring, a } from "react-spring/three"
import "./style.css"

extend({ OrbitControls })

const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()

  useRender(() => {
    orbitRef.current.update()
  })

  return (
    <orbitControls
      autoRotate
      autoRotateSpeed={0.4}
      minDistance={4}
      maxDistance={4}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 6}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  )
}

//eslint-disable-next-line
const Plane = () => {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshPhysicalMaterial attach="material" color="gray" />
    </mesh>
  )
}

const Food = () => {
  const [model, setModel] = useState()
  useEffect(() => {
    new GLTFLoader().load("/scene.gltf", setModel)
  }, [])
  return model ? <primitive object={model.scene} /> : null
}

//eslint-disable-next-line
const Box = () => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? "crimson" : "gray",
  })

  return (
    <a.mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshPhysicalMaterial attach="material" color={props.color} />
    </a.mesh>
  )
}

export default () => (
  <>
    <div class="bg">
      <Canvas
        camera={[0, 0, 5]}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}
      >
        <ambientLight />
        <spotLight castShadow position={[15, 20, 5]} penumbra={1} />
        <fog attach="fog" args={["white", 10, 20]} />
        <Controls />
        <Food />
      </Canvas>
      <h1>Let's eat!</h1>
      <a
        class="github-link"
        href="https://github.com/ARXChrono/gatsby-three-experiment"
      >
        Github
      </a>
      <a class="twitter-link" href="https://twitter.com/devShaun">
        Twitter
      </a>
    </div>
  </>
)
