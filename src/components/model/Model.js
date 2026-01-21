import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/tshirt_transformed_test.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['t-shirt002'].geometry}
        material={materials['FABRIC 1_FRONT_4193']}
      />
    </group>
  )
}

useGLTF.preload('/tshirt_transformed_test.glb')
