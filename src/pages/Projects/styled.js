import { styled } from "styled-components"

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content : center ;
  align-items: center;
  flex-direction: row;
`
export const Title = styled.h1`
  font-size: 64px;
`
export const Text = styled.p`
  font-size: 18px;
  font-weight: bold;
`
export const IconCard = styled.p`
  font-size: 18px;
  font-weight: bold; 
`

export const StackSection = styled.div`
  height: 50%;
  background-color: rgba(0,0,0,0.5);
  border-radius: 20px;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ListIcons = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap-reverse; */
  justify-content: space-evenly;
  gap: 20px;
`
export const IconWrap = styled.div`
  width: auto;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  cursor: pointer;
  
  color: #d1007d;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 2px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: #fff;
  transition: .5s;
  &:hover {
      color: #000;
      
      background: #d1007d;
      
      box-shadow: 0 0 50px #d1007d;
  }
`

export const IconName = styled.h3`
`

export const RightBottom = styled.div`
  flex: 2;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

`

export const LeftTop = styled.div`
  flex: 3;
  display: flex;
  height: 100%;
  width: 100%;
`

export const CanvasWrap = styled.div`
  height: 90%;
  width: 100%;

  display: flex;
  flex-direction: column;
`