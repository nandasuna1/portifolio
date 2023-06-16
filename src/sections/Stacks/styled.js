import { styled } from "styled-components"

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  width: 1400px;
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
  flex-wrap: wrap-reverse;
  justify-content: space-evenly;
  gap: 50px;
`
export const IconWrap = styled.div`
  width: auto;
  padding: 50px 20px;
  background-color: rgba(255,255,255,0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`

export const IconName = styled.h3`
`

export const RightBottom = styled.div`
  flex: 2;
  height: 100%;
  width: 100%;
`

export const LeftTop = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`