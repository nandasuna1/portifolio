import React, { useRef } from "react";
import Hero from "../../sections/Hero";
import Who from "../../sections/Who";
import Contact from "../../sections/Contact";
import Navbar from "../../component/Navbar";
import { Body, Container } from "./styled";

export default function Home() {
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
        {/* <Contact refProps={pageRefs.contactRef} /> */}
      </Body>
    </Container>
  );
}
