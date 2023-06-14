import React from 'react'
import { styled } from 'styled-components'

const data = [
    'Web',
    'Mobile',
    'Design',
    'Test',
    'Development'
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content : space-between ;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const ListItem = styled.li`
    font-size: 90px;
    font-weight: bold;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: 1px white;
    position: relative;
    width: fit-content;

    &:after {
      content: "${(props) => props.text}";
      
      color: pink;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      white-space: nowrap;
      width: 0px;
      filter: drop-shadow(0 0 15px #d1007d) drop-shadow(0 0 50px #d1007d) contrast(2) brightness(2);

    }

    &:hover {
      &:after {
        
        animation: moveText 0.5s linear both;
        
        @keyframes moveText {
          to {
            width: 100%;
          }
        }
      }
    }
`
const Right = styled.div`
  flex: 1;
`

export default function Works() {
  return (
    <Section>
        <Container>
            <Left>
                <List>
                    {data.map((item) =>  (
                        <ListItem key={item} text={item}>
                            {item}
                        </ListItem>
                    ))}
                </List>
            </Left>
            <Right>
            </Right>
        </Container>
    </Section>
  )
}
