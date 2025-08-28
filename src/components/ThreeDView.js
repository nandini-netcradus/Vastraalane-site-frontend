import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ShirtModel from './ShirtModel'; // your model component
import './ThreeDView.css';
const ThreeDView = () => {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      {/* Suspense must wrap Canvas properly */}
      <Suspense fallback={<div>Loading 3D Model...</div>}>
        <Canvas>
          <ambientLight />
          <directionalLight position={[2, 2, 2]} />
          <ShirtModel />
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default ThreeDView;
