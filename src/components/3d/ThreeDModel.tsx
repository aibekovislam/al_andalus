// components/3d/ThreeDModel.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = ({ url }: any) => {
  const { scene }: any = useGLTF(url);
  return <primitive object={scene} scale={0.5} />;
};

const ThreeDModel = () => {
  const modelUrl = "/images/1721895879705.glb"; // Path to the model in the public directory
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <Model url={modelUrl} />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDModel;