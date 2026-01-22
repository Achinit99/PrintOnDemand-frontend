// // ModelViewer.jsx
// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { ShirtModel } from "./ShirtModel";
// // ModelViewer.jsx 
// export function ModelViewer({ shirtColor, textColor, textValue, ...props }) {
//   // 1. unique key React  separate instance 
//   const uniqueKey = `model-${shirtColor}-${textColor || 'default'}-${textValue || 'default'}`;

//   return (
//     <div 
//       key={uniqueKey} 
//       style={{ width: '100%', height: '100%' }}
//     >
//       <Canvas
//         camera={{ position: [0, 0, 7], fov: 38 }}  // 
//         gl={{ 
//           antialias: true,
//           preserveDrawingBuffer: true,
//           powerPreference: "high-performance"  // 
//         }}
//         frameloop="demand"                    // unnecessary renders 
//         resize={{ debounce: 200 }}            // resize jump 
//         style={{ width: '100%', height: '100%' }}
//       >
//         <ambientLight intensity={0.7} />
//         <directionalLight position={[5, 10, 5]} intensity={1.2} />

//         <OrbitControls 
//           enableZoom={false} 
//           enableRotate={false} 
//           enablePan={false} 
//         />

//         <ShirtModel 
//           shirtColor={shirtColor}
//           textColor={textColor}
//           textValue={textValue}
//         />
//       </Canvas>
//     </div>
//   );
// }

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
