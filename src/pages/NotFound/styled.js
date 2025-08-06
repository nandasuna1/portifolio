import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../colors";

export const Page = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background-color: ${COLORS.darkBrown};
  color: ${COLORS.lightBrown};
  gap: 20px;
  text-align: center;

  h1 {
    font-size: 28px;

    @media screen and (min-width: 768px) {
      font-size: 42px;
    }
  }

  p {
    font-size: 16px;
    max-width: 500px;

    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const GoBack = styled(Link)`
  color: ${COLORS.lightBrown};
  font-weight: bold;
  font-size: 16px;
  border: 2px solid ${COLORS.lightBrown};
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 15px #bbd6e3;
  }
`;

export const Image = styled.img`
  width: 80%;
  max-width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    max-width: 400px;
    border-radius: 50px;
  }
`;
