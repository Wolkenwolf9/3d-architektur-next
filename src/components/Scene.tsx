"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useScroll,
  ScrollControls,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import Model from "./Model";
import CameraRig from "./CameraRig";
import { useState } from "react";
import CameraToggle from "./CameraToggle";

// function CameraRig() {
//   const scroll = useScroll();
//   const { camera } = useThree();

//   useFrame(() => {
//     const t = scroll.offset * Math.PI * 2;
//     const radius = 5;
//     const x = Math.sin(t) * radius;
//     const z = Math.cos(t) * radius;
//     camera.position.set(x, 2, z);
//     camera.lookAt(0, 0, 0);
//   });

//   return null;
// }

export default function Scene() {
  const [cameraMode, setCameraMode] = useState("orbit");
  return (
    <div className="relative w-full h-screen">
      <Canvas style={{ background: "#0a0a0a" }}>
        <ScrollControls pages={3}>
          <CameraRig mode={cameraMode} />
          {cameraMode === "orbit" && <OrbitControls enableDamping />}
          {/* <CameraRig /> */}
          {/* <OrbitControls /> */}
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <Model />
        </ScrollControls>
      </Canvas>
      <CameraToggle onChange={setCameraMode} />
    </div>
  );
}
