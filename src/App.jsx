import React, { useRef } from "react";
import { styled } from "styled-components";
import Hero from "./sections/Hero";
import Who from "./sections/Who";
import Contact from "./sections/Contact";
import Navbar from "./component/Navbar";

const Container = styled.div`
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
const Body = styled.main`
  position: relative;
`;

function App() {
  // const heroRef = useRef();
  // const whoRef = useRef();
  // const contactRef = useRef();

  const scrollCallback = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const pageRefs = {
    heroRef: useRef(),
    whoRef: useRef(),
    contactRef: useRef(),
  };

  return (
    <Container>
      <Navbar scrollRefFn={scrollCallback} refs={pageRefs} />
      <Body>
        <Hero refProps={pageRefs.heroRef} />
        <Who refProps={pageRefs.whoRef} />
        <Contact refProps={pageRefs.contactRef} />
      </Body>
    </Container>
  );
}

export default App;
