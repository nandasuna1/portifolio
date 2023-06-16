import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cube from '../treejsModels/Cube'
import Paralelepipedo from '../treejsModels/Paralelepipedo'

export default function StackCanva({techName}) {
  return (
    <Canvas camera={{fov: 25, position: [5,5,10]}}>
        <OrbitControls enableZoom={false} autoRotate={true}/>
        <ambientLight intensity={1}/>
        <directionalLight position={[0,0,0]}/>
        <Paralelepipedo techName={techName} />
    </Canvas>
  )
}
