import { styled } from "styled-components"

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 85%;
  display: flex;
  justify-content: space-between;
`
export const LeftTop = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`
export const Title = styled.h1`
  font-size: 74px;
  letter-spacing: -2px;
  line-height: 70px;
  margin-bottom: 35px;
`
export const WhatWeDo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`
export const SubTitle = styled.h2`
  color: #ff007d;
  font-size: 30px;
`
export const RightBottom = styled.div`
  flex: 3;
  position: relative;
`
export const Description = styled.p`
  font-size: 24px;
  color: white;
`
export const Img = styled.img`
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
export const Line = styled.img``