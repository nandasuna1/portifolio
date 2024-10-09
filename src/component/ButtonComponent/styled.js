import { styled } from "styled-components";

export const Button = styled.button`
  width: ${(props) => props.size};
  padding: 10px;
  /* padding-inline: ${(props) => props.size}px; */

  border: none;
  border-radius: 5px;

  cursor: pointer;

  font-weight: bold;
  font-size: 15px;
  letter-spacing: 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #280095;
  border: 3px solid #fff;
  background-color: #fff;

  transition: 0.5s;
  &:hover {
    box-shadow: 0 0 50px#bbd6e3;
  }
`;

export const Img = styled.img`
  width: 50px;
  /* height: 10px; */
  object-fit: contain;
  margin: auto;
  /* animation: animate 2s infinite ease alternate; */

  @keyframes animate {
    to {
      transform: translateY(30px);
    }
  }
`;
