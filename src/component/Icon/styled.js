import { styled } from "styled-components";


export const Img = styled.img`
  width:  ${(props) => props.iconsize}px;
  /* height: 10px; */
  padding: 5px;
  object-fit: contain;
  /* margin: auto; */
  /* animation: animate 2s infinite ease alternate; */

  @keyframes animate{
    to {
      transform: translateY(30px)
    }
  }
`