import React, { useEffect, useState } from "react";
import {
  Container,
  Description,
  Left,
  Links,
  MyImg,
  Right,
  Section,
  SubTitle,
  Title,
  TitleWrapper,
} from "./styles";
import LinkComponent from "../../component/Link";

export default function Who({ refProps }) {
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
    <Section ref={refProps}>
      <Container>
        <Left>
          <MyImg src="/img/background/profileWBg.jpg" />
          {windowWidth < 750 && (
            <TitleWrapper>
              <Title>- Sobre - </Title>
              <SubTitle>Criando soluções desde 2021 </SubTitle>
            </TitleWrapper>
          )}
        </Left>
        <Right>
          {windowWidth >= 700 && (
            <TitleWrapper>
              <Title>- Sobre - </Title>
              <SubTitle>Criando soluções desde 2021 </SubTitle>
            </TitleWrapper>
          )}
          <Description>
            Sou desenvolvedora de software desde 2021, atuando em diversos
            setores, incluindo healthcare, gestão empresarial e atualmente como
            consultora em uma multinacional. Minha trajetória me permitiu
            colaborar em projetos que impactam diretamente a eficiência de
            empresas e a qualidade de vida das pessoas, especialmente através do
            uso de tecnologias inovadoras. A paixão por tecnologia e
            desenvolvimento é o que impulsiona meu desejo de criar soluções que
            realmente fazem a diferença. Ao longo da minha carreira, Minha
            abordagem foca em entregar resultados sólidos, sempre com foco na
            qualidade do código e na experiência do usuário.
          </Description>
          <Links>
            <LinkComponent
              hasIcon="GitHubLogo"
              size="fit-content"
              link="https://github.com/nandasuna1"
            >
              Ver Projetos
            </LinkComponent>
          </Links>
        </Right>
      </Container>
    </Section>
  );
}
