import React, { useEffect } from "react";
import { useGLTF, Text } from "@react-three/drei";

export function ShirtModel({ shirtColor = "#6fb2bbff", textColor = "#c75353ff", textValue = "" }) {
  const { scene } = useGLTF("/tshirt_transformed_test.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.color.set(shirtColor);
        child.material.needsUpdate = true;
      }
    });
  }, [scene, shirtColor]);

  return (
    <>
      <primitive object={scene} scale={0.1} position={[0, -1.1, 0]} />
      <Text
        position={[0, -0.1, 0.51]}
        fontSize={0.12}
        color={textColor}
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
      >
        {textValue}
      </Text>

      
    </>
  );
}
