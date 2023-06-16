import React, { useState } from 'react'
import { Container, IconName, IconWrap, LeftTop, ListIcons, RightBottom, Section, StackSection, Text, Title } from './styled';
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
  const [tech, setTech] = useState('ReactNative');
  const iconData = [
    'React',
    'HTML',
    'CSS',
    'Node',
    'ReactNative',
    'JavaScript',
    'TypeScript',
    'Jest'
  ]

  const handleOnClick = (value) => {
    // e.preventDefault();
    console.log('icon', value);
    setTech(value)
  }

  return (
    <Section>
        <Container>
            {/* <Title>Stack</Title> */}
            <LeftTop>
              <ListIcons>
                  {iconData && iconData.map((icon, index) => (
                    <IconWrap key={icon} onClick={() => handleOnClick(iconData[index])}>
                      <IconComponent iconName={icon} iconsize={100}/>
                      <IconName>{icon}</IconName>
                    </IconWrap>
                ))}
              </ListIcons>
              <Text>Clique no card e explore os projetos</Text>
            </LeftTop>
            <RightBottom>
              <StackCanva techName={tech}/>
            </RightBottom>
        </Container>
    </Section>
  )
}
