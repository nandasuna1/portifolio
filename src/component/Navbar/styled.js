import { styled } from "styled-components";

export const Section = styled.header`
  position: sticky;
  top: 0;
  height: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  padding: 50px;
  z-index: 1;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const ListItem = styled.button`
  cursor: pointer;
  list-style: none;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    -webkit-text-stroke: 1px;
    -webkit-text-stroke-color: white;
    color: transparent;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  justify-self: right;
`;
