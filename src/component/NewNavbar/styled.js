import { styled } from "styled-components";
import { COLORS } from "../../colors";


export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  background-color:${COLORS.darkBrown};
  padding: 0 50px;
  height: 10vh;

  :last-of-type {
    margin-left: auto;
    margin-right: 0;
  }
`;

export const ListItem = styled.button`
  cursor: pointer;
  list-style: none;
  background-color: transparent;
  border: none;
  color: ${COLORS.lightBrown};
  font-size: 20px;
  font-weight: bold;

  &:hover {
    color: white;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  justify-self: right;
`;
