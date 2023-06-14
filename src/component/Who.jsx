import React from 'react'
import { styled } from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const LeftTop = styled.div`
  flex: 1;
  position: relative;
`
const Description = styled.p`
  font-size: 24px;
  color: lightgray;
`
const Button = styled.button`
  width: fit-content;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #d1007d;
  background-color: #000;
  filter: drop-shadow(0 0 15px #d1007d) drop-shadow(0 0 50px #d1007d) contrast(2) brightness(2);
  transition: .5s;
  &:hover {
      color: #000;
      background: #d1007d;
      box-shadow: 0 0 50px #d1007d;
      filter: drop-shadow(0 0 15px #000) drop-shadow(0 0 50px #000) contrast(2) brightness(2);
  }

`
const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate{
    to {
      transform: translateY(30px)
    }
  }
`
const Line = styled.img``


const RightBottom = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`
const Title = styled.h1`
  font-size: 74px;
`
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const SubTitle = styled.h2`
  color: #d1007d;
`

export default function Who() {
  return (
    <Section>
      <Container>
        <LeftTop>
          {/* 3d model */}
          {/* <Img src='./img/f-dev.png'/> */}
        </LeftTop>
        <RightBottom>
          <Title>Versátil. Curiosa. Colaborativa.</Title>
          <WhatWeDo>
            <SubTitle>Quem sou</SubTitle>
          </WhatWeDo>
          <Description>Profissional versátil e curiosa, sempre em busca de novos desafios.</Description>
          <Button>Ver Projetos</Button>
        </RightBottom>
      </Container>
    </Section>
  )
}
