"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { useEffect } from "react";

/**
 * CameraRig
 * – Bewegt die Kamera abhängig vom Scroll-Offset
 * – Orbit um das Zentrum (0,0,0)
 */
export default function CameraRig() {
  const scroll = useScroll();
  const { camera } = useThree();

  useFrame(() => {
    const t = scroll.offset * Math.PI * 2;
    const radius = 5;
    const x = Math.sin(t) * radius;
    const z = Math.cos(t) * radius;
    camera.position.set(x, 2, z);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
