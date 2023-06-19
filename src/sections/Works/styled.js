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
  justify-content : space-between ;
`

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ListItem = styled.li`
    font-size: 90px;
    font-weight: bold;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: 2px white;
    position: relative;
    width: fit-content;

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
export const Right = styled.div`
  flex: 1;
`