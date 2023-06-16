// import Cube from './Cube'
import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";
import { ReactLogo } from "../treejsModels/React-logo";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;
export default function Test() {
  return (
    <Container>
        <Canvas>
            <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={10}/>
            <ambientLight intensity={0}/>
            <directionalLight position={[3,2,1]}/>
            <ReactLogo />
        </Canvas>
    </Container>

  );
}
