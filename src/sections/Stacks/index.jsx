import React, { useState } from 'react'
import { CanvasWrap, Container, IconCard, IconName, IconWrap, LeftTop, ListIcons, RightBottom, Section, StackSection, Text, Title } from './styled';
import IconComponent from '../../component/Icon';
import StackCanva from '../../treejsCanvas/StackCanva';

const data = [
    'Web',
    'Mobile',
    'Design',
    'Test',
    'Development'
];



export default function Stacks() {
  const iconData = [
    {
      label: 'WeatherApp',
      description: 'Aplicativo que fornece informações do clima das capitais brasileiras construido com: React Native, Typescript, Jest, Styled-components, Redux, consumo de api.'
    },
    {
      label: 'CryptoApp',
      description: 'Aplicativo que fornece informações sobre criptomoedas e noticias dos mundos das finanças, construido com: React, Javascript, Antd, Chart.js, consumo de api.'
    },
    {
      label: 'EventPlataform',
      description: 'Aplicativo que cadastra email e nome de usuário e fornece uma plataforma de assister a videoaulas construido com: React, Typescript, GrapgQl, consumo de api.'
    },
    {
      label: 'IgniteTeams',
      description: 'Aplicativo que cadastra equipes e team members em preparação para partidas de jogos e outras atividades, construido com: React Native, Typescript, Jest, Styped-components.'
    },
     {
      label: 'VueMovies',
      description: 'Aplicativo que fornece informações sobre filmes e séries, contruido com: Vue, Javascript, Jest, Styped-components, Redux, consumo de api.'
    },
    {
      label: 'Pokedex',
      description: 'Aplicativo que fornece visual de centenas de Pokemons, construido: Vue, Javascript, axios, consumo de api.'
    },
  ]
  const [tech, setTech] = useState({name: iconData[0].label, description: iconData[0].description});

  const handleOnClick = (value) => {
    // e.preventDefault();
    setTech({name: value.label, description: value.description})
  }

  

  return (
    <Section id='Projects' >
        <Container>
            {/* <Title>Stack</Title> */}
            <LeftTop>
              <CanvasWrap>
                <StackCanva techName={tech.name}/>
                <Text>{tech.name}: {tech.description}</Text>
              </CanvasWrap>
            </LeftTop>
            <RightBottom>
              <Title>Projetos</Title>
              <ListIcons>
                  {iconData && iconData.map((icon, index) => (
                    <IconWrap key={icon.label} onClick={() => handleOnClick(iconData[index])}>
                      <IconCard>{icon.label}</IconCard>
                    </IconWrap>
                ))}
              </ListIcons>
            </RightBottom>
        </Container>
    </Section>
  )
}
