import React, { useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Cube() {
    const textRef = useRef()
    const textString = 'Curiosa\nAutodidata\nColaborativa'
    // make text move
    // useFrame(state => (textRef.current.position.x = 2 * Math.sin(state.clock.elapsedTime)))
  return (
    <mesh>
        <boxGeometry args={[2,2,2]}/>
        <meshStandardMaterial>
            <RenderTexture attach="map">
                <PerspectiveCamera 
                    makeDefault
                    position={[0,0,5]}
                />
                <color attach="background" args={["#ac0352"]}/>
                <Text fontSize={0.5} color="#0caaaa" ref={textRef}>{textString}</Text>
            </RenderTexture>
        </meshStandardMaterial>
    </mesh>
  )
}
