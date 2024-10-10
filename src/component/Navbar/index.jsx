import React, { useEffect, useState } from "react";
import { Icons, Links, ListItem, Section } from "./styled";
import LinkComponent from "../Link";

export default function Navbar({ scrollRefFn, refs }) {
  const handleClick = (ref) => {
    scrollRefFn(ref);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    handleWindowResize();
    console.log(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [window.innerWidth]);

  return (
    windowWidth > 750 && (
      <Section>
        <Links>
          <ListItem
            type="button"
            id="who"
            onClick={() => handleClick(refs.whoRef)}
          >
            Quem sou eu
          </ListItem>
          <ListItem
            type="button"
            id="contact"
            onClick={() => handleClick(refs.contactRef)}
          >
            Contato
          </ListItem>
        </Links>
        <Icons></Icons>
      </Section>
    )
  );
}
