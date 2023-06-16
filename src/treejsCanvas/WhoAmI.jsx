import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cube from '../treejsModels/Cube'

export default function WhoAmI() {
  return (
    <Canvas camera={{fov: 25, position: [5,5,10]}}>
        <OrbitControls enableZoom={false} autoRotate={true}/>
        <ambientLight intensity={5}/>
        <directionalLight position={[10,2,5]}/>
        <Cube />
    </Canvas>
  )
}
