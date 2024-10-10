import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #070b1e;
  color: #fff;

  gap: 20px;
`;

export const GoBack = styled(Link)`
  color: #9fc5e7;
  font-weight: bold;

  border: 2px solid #9fc5e7;
  padding: 10px;
  border-radius: 20px;

  text-decoration: none;

  &:hover {
    box-shadow: 0 0 50px#bbd6e3;
  }
`;
