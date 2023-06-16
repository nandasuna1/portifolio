import React from 'react'
import { ReactLogo } from '../treejsModels/React-logo'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function WebDesign() {
  return (
    <Canvas>
      {/* <Stage > */}
        <ReactLogo/>
        <ambientLight intensity={0}/>
        <directionalLight position={[10,2,5]}/>
      {/* </Stage> */}
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  )
}
