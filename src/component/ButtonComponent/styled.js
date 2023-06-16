import { styled } from "styled-components";

export const Button = styled.button`
  width:  ${(props) => props.size};
  padding: 10px ;
  /* padding-inline: ${(props) => props.size}px; */
  
  border: none;
  border-radius: 5px;
  
  cursor: pointer;
  
  color: #d1007d;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 2px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: #fff;
  /* filter: drop-shadow(0 0 15px #d1007d) drop-shadow(0 0 50px #d1007d) contrast(2) brightness(2); */
  transition: .5s;
  &:hover {
      color: #000;
      
      background: #d1007d;
      
      box-shadow: 0 0 50px #d1007d;
      /* filter: drop-shadow(0 0 15px #000) drop-shadow(0 0 50px #000) contrast(2) brightness(2); */
  }

`

export const Img = styled.img`
  width: 50px;
  /* height: 10px; */
  object-fit: contain;
  margin: auto;
  /* animation: animate 2s infinite ease alternate; */

  @keyframes animate{
    to {
      transform: translateY(30px)
    }
  }
`