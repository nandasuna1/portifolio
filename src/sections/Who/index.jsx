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

// import {GrDocumentDownload} from 'react-icons/gr'
export default function Who() {
  const data = [ "Curiosa", "Autodidata", "Colaborativa"];

  return (
    <Section>
      <Container>
        <LeftTop>
          <WhoAmI />
        </LeftTop>
        <RightBottom>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>{item}</ListItem>
            ))}
          </List>
          <WhatWeDo>
            <SubTitle>Quem sou</SubTitle>
          </WhatWeDo>
          <Description>
            Apaixonada por adquirir conhecimento, busco me
            aprimorar e no tempo livre explorar novas tecnologias para meu
            crescimento pessoal e profissional. Adaptável a ambientes em
            evolução, pronta para enfrentar novos desafios.
          </Description>
          <Links>
            <LinkComponent
              hasIcon="GitHubLogo"
              size="fit-content"
              link="https://github.com/nandasuna1"
            >
              Ver Projetos
            </LinkComponent>
            {/* <GrDocumentDownload/> */}
            <LinkComponent
              hasIcon="DocLogo"
              size="fit-content"
              link="https://drive.google.com/uc?export=download&id=1ezYioX1eGyQYuWtB4u8OMyEDyCaB8CcE"
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
