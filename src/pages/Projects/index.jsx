import React from "react";
import {
  CanvasWrap,
  Container,
  IconCard,
  IconWrap,
  LeftTop,
  ListIcons,
  RightBottom,
  Section,
  Text,
  Title,
} from "./styled";

export default function Projects() {
  const iconData = [
    {
      label: "WeatherApp",
      description:
        "Aplicativo que fornece informações do clima das capitais brasileiras construido com: React Native, Typescript, Jest, Styled-components, Redux, consumo de api.",
    },
    {
      label: "CryptoApp",
      description:
        "Aplicativo que fornece informações sobre criptomoedas e noticias dos mundos das finanças, construido com: React, Javascript, Antd, Chart.js, consumo de api.",
    },
    {
      label: "EventPlataform",
      description:
        "Aplicativo que cadastra email e nome de usuário e fornece uma plataforma de assister a videoaulas construido com: React, Typescript, GrapgQl, consumo de api.",
    },
    {
      label: "IgniteTeams",
      description:
        "Aplicativo que cadastra equipes e team members em preparação para partidas de jogos e outras atividades, construido com: React Native, Typescript, Jest, Styped-components.",
    },
    {
      label: "VueMovies",
      description:
        "Aplicativo que fornece informações sobre filmes e séries, contruido com: Vue, Javascript, Jest, Styped-components, Redux, consumo de api.",
    },
    {
      label: "Pokedex",
      description:
        "Aplicativo que fornece visual de centenas de Pokemons, construido: Vue, Javascript, axios, consumo de api.",
    },
  ];

  return (
    <Section id="Projects">
      <Container>
        <LeftTop></LeftTop>
        <RightBottom>
          <Title>Projetos</Title>
          <div
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.linkedin.com/feed/update/urn:li:activity:7264719404808982528/" height="500" width="100%" frameborder="0" allowfullscreen="" title="LinkedIn Post"></iframe>`,
            }}
          />
        </RightBottom>
      </Container>
    </Section>
  );
}
