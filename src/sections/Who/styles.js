import { styled } from "styled-components"

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 85%;
  display: flex;
  justify-content: space-between;
`
export const LeftTop = styled.div`
  flex: 1;
  position: relative;
`
export const Description = styled.p`
  font-size: 20px;
  color: #fff;
  text-align: start;

  letter-spacing: 2px;
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

export const RightBottom = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  /* background-color: rgba(0,0,0,0.5);
  padding:0  100px; */
`
export const Title = styled.h1`
  font-size: 74px;
  color: #fff;
`
export const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const SubTitle = styled.h2`
  color: #ff007d;
`

export const Links = styled.div`
  display: flex;
  gap: 20px;
`

export const List = styled.ul`
    list-style: none;
    gap: 20px;
`

export const ListItem = styled.li`
    font-size: 74px;
    font-weight: bold;
    
    cursor: pointer;

    color: transparent;
    -webkit-text-stroke: 2px white;

    position: relative;

    width: fit-content;

    letter-spacing: 1px;
    line-height: 100%;

    &:after {
      content: "${(props) => props.text}";
      
      color: pink;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      white-space: nowrap;
      width: 0px;
      filter: drop-shadow(0 0 15px #d1007d) drop-shadow(0 0 50px #d1007d) contrast(2) brightness(2);

    }

    &:hover {
      &:after {
        
        animation: moveText 0.5s linear both;
        
        @keyframes moveText {
          to {
            width: 100%;
          }
        }
      }
    }
`