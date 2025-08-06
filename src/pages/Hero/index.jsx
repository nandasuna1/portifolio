import React from "react";
import {
  ButtonBox,
  Container,
  Description,
  Frame,
  Image,
  Left,
  Right,
  SmallTitle,
  Title,
  TitleBox,
  TitleDescription,
  WhatWeDo,
} from "./styled";
import Typewriter from "typewriter-effect";
import LinkComponent from "../../component/Link";
import { useTranslation } from 'react-i18next';
import image from '/img/background/me.jpeg'

export default function Hero() {
  const { t } = useTranslation();

  return (
    <Container>
      <Left>
        <Frame>
          <Image src={image} />
        </Frame>
      </Left>
      <Right>
        <TitleBox>
          <SmallTitle>PINHO</SmallTitle>
          <Title>Fernanda</Title>
          <TitleDescription>
            <Typewriter
              options={{
                strings: [t('loop.0'), t('loop.1'), t('loop.2'), t('loop.3')],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 25,
              }}
            />
          </TitleDescription>
        </TitleBox>
        <WhatWeDo>
          <Description>
            {t('description')}
          </Description>
        </WhatWeDo>

        <ButtonBox>

        <LinkComponent
          size="50px"
          hasIcon="Linkedin"
          iconsize={20}
          link="https://www.linkedin.com/in/nandasuna/"
        />

        <LinkComponent
          size="50px"
          hasIcon="GitHubLogo"
          iconsize={50}
          link="https://github.com/nandasuna1"
        />
        </ButtonBox>
      </Right>
    </Container>
  );
}
