import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;

  background-color: black;

  color: white;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 750px) {
    height: 100%;
    overflow-x: hidden;
  }
`;
export const Body = styled.main`
  position: relative;
`;
