import React, { useState } from 'react'
import { styled } from 'styled-components'
import { Container, Left, List, ListItem, Right, Section } from './styled';
import WebDesign from '../../treejsCanvas/WebDesign';
import ProductDesign from '../../treejsCanvas/ProductDesign';
import Development from '../../treejsCanvas/Development';

const data = [
    'Web',
    'Mobile',
    'Design',
    'Test',
    'Development'
];



export default function Works() {
  const [work, setWork] = useState(data[0]);

  const getWork = {
    "Web" : <WebDesign/>,
    "Mobile": <ProductDesign/>,
    "Test": <Development/>
  }
  return (
    <Section>
        <Container>
            <Left>
                <List>
                    {data.map((item) =>  (
                        <ListItem key={item} text={item} onClick={() => setWork(item)}>
                            {item}
                        </ListItem>
                    ))}
                </List>
            </Left>
            <Right>
              {getWork[work] || <Development/>}
            </Right>
        </Container>
    </Section>
  )
}
