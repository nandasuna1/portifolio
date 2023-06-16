import React from "react";
import {
  Container,
  Description,
  LeftTop,
  Links,
  List,
  ListItem,
  RightBottom,
  Section,
  SubTitle,
  Title,
  WhatWeDo,
} from "./styles";
import WhoAmI from "../../treejsCanvas/WhoAmI";
import LinkComponent from "../../component/Link";

export default function Who() {

  const data = [
    'Autodidata', 'Curiosa', 'Colaborativa'
];

  return (
    <Section>
      <Container>
        <LeftTop>
          <WhoAmI />
        </LeftTop>
        <RightBottom>
          <List>
              {data.map((item) =>  (
                  <ListItem key={item} text={item} onClick={() => setWork(item)}>
                      {item}
                  </ListItem>
              ))}
          </List>
          {/* <Title>Autodidata. Curiosa. Colaborativa.</Title> */}
          <WhatWeDo>
            <SubTitle>Quem sou</SubTitle>
          </WhatWeDo>
          <Description>
            Sou uma profissional autodidata e extremamente curiosa, sempre em
            busca de novos desafios e oportunidades de aprendizado. Tenho uma
            paixão por adquirir conhecimento e estou constantemente explorando
            novas áreas e tecnologias. Acredito que a curiosidade e a sede por
            conhecimento são fundamentais para o crescimento pessoal e
            profissional. Estou sempre disposta a enfrentar novos desafios e a
            me adaptar a um ambiente em constante evolução.
          </Description>
          <Links>
            <LinkComponent
              hasIcon="GitHubLogo"
              size="fit-content"
              link="https://github.com/nandasuna1"
            >
              Ver Projetos
            </LinkComponent>
            <LinkComponent
              hasIcon="DocLogo"
              size="fit-content"
              link="https://github.com/nandasuna1"
              iconsize={25}
            >
              Curriculo
            </LinkComponent>
          </Links>
        </RightBottom>
      </Container>
    </Section>
  );
}
