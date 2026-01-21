import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ShirtModel } from "./ShirtModel";

export function ModelViewer({ shirtColor, textColor, textValue }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 6, 2]} intensity={2.2} />
      <OrbitControls enableZoom enablePan={false} enableRotate target={[0, 0, 0]} />
      <ShirtModel shirtColor={shirtColor} textColor={textColor} textValue={textValue} />
    </Canvas>

    
  );
}
