import { useGLTF } from "@react-three/drei";

export default function Model() {
  //   const { nodes } = useGLTF("/Haus-Bauwesen-standard.glb");
  const { scene } = useGLTF("/Haus-Bauwesen-standard.glb");
  return <primitive object={scene} scale={0.04} />;
  //   return (
  //     <group>
  //       <mesh {...nodes}></mesh>
  //     </group>
  //   );
}
