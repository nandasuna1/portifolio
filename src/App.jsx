import React from "react"
import { styled } from "styled-components"
import Contact from "./component/Contact"
import Hero from "./component/Hero"
import Who from "./component/Who"
import Works from "./component/Works"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;

  color: white;
  background: url("/img/bg-img2.jpg");
  background-repeat: round;
  

  &::-webkit-scrollbar {
    display: none;
  }
`
function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </Container>
  )
}

export default App
