import { useGLTF } from "@react-three/drei";

export default function Model() {
  const { scene } = useGLTF("/Eingangspfeile1.glb");
  return <primitive object={scene} scale={0.04} />;
}
