import React from "react";
import {
  Container,
  Description,
  Left,
  Right,
  SmallTitle,
  Title,
  TitleBox,
  TitleDescription,
  WhatWeDo,
} from "./styled";

import LinkComponent from "../../component/Link";

export default function Hero({ refProps }) {
  return (
    <Container ref={refProps}>
      <Left></Left>
      <Right>
        <TitleBox>
          <SmallTitle>PINHO</SmallTitle>
          <Title>Fernanda</Title>
          <TitleDescription>Consultant Developer</TitleDescription>
        </TitleBox>
        <WhatWeDo>
          <Description>
            Desenvolvedora web e mobile apaixonada por frontend e design,
            transformando conceitos em interfaces incríveis.
          </Description>
        </WhatWeDo>
        <LinkComponent
          size="fit-content"
          hasIcon="Linkedin"
          iconsize={20}
          link="https://www.linkedin.com/in/fbp30/"
        >
          Linkedin
        </LinkComponent>
      </Right>
    </Container>
  );
}
