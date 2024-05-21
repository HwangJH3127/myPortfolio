import { Suspense, useRef } from "react";
import { Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

const StarCanvas = () => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 80;
  });
  return (
    <group>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <pointLight position={[-10, -10, -10]} />
      <Stars ref={ref} radius={150} count={3000} />
    </group>
  );
};
const StarsCanvas = () => {
  return (
    <Canvas style={{ position: "fixed", width: "100%" }}>
      <Suspense fallback={null}>
        <StarCanvas />
      </Suspense>
    </Canvas>
  );
};
export default StarsCanvas;
