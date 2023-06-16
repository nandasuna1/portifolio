import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../../component/Navbar'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Container, Description, Img, LeftTop, RightBottom, Section, SubTitle, Title, WhatWeDo } from './styled'
import { Button } from '../../component/ButtonComponent/styled'
import ButtonComponent from '../../component/ButtonComponent'


export default function Hero() {
  return (
    <Section>
      <Navbar/>
      <Container>
        <LeftTop>
          <Title>Never Stop Learning</Title>
          <WhatWeDo>
            <SubTitle>What we Do</SubTitle>
          </WhatWeDo>
          <Description>We create a beaultiful world full of tech</Description>
          <ButtonComponent size='fit-content'>Learn More</ButtonComponent>
        </LeftTop>
        <RightBottom>
          <Canvas >
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1}/>
              <directionalLight position={[3,2,1]}/>
              <Sphere args={[1,100,200]} scale={1.5}>
                <MeshDistortMaterial 
                  color="#7a0c7a" 
                  attach="material" 
                  distort={0.5} 
                  speed={2}
                  />
              </Sphere>
          </Canvas>
          <Img src='./img/assets/f-dev.png' />
        </RightBottom>
      </Container>
    </Section>
  )
}
