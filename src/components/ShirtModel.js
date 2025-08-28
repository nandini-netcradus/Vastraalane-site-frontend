import React from 'react';
import { useGLTF } from '@react-three/drei';

const ShirtModel = () => {
  const { scene } = useGLTF('/models/women_in_saree.glb'); // ✔️ Relative to public/

  return <primitive object={scene} scale={1.2} />;
};

export default ShirtModel;
