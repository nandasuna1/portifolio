import React from 'react'
import { styled } from 'styled-components'

const Section = styled.div`
display: flex;
justify-content: center;
`

const Container = styled.div`
    width: 1400px;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    border-radius: 50px;
    padding: 0 50px;
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`

const Logo = styled.img`
    margin-left: 20px;
    border-radius: 50px;
    height: 150px;
`

const List = styled.ul`
    display: flex;
    gap: 50px;
`

const ListItem = styled.li`
    cursor: pointer;
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const Icon = styled.img`
    width: 50px;
    cursor: pointer;
`

const Button = styled.button`
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #d1007d;
    background-color: #000;
    filter: drop-shadow(0 0 15px #d1007d) drop-shadow(0 0 50px #d1007d) contrast(2) brightness(2);
    transition: .5s;
    &:hover {
        color: #000;
        background: #d1007d;
        box-shadow: 0 0 50px #d1007d;
        filter: drop-shadow(0 0 15px #000) drop-shadow(0 0 50px #000) contrast(2) brightness(2);
    }

`

export default function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
        <Logo src="./img/logo4-no-bg.png"/>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Contact</ListItem>
        </List>
        </Links>
        <Icons>
            <Icon src='./img/search.svg.png'/>
            <Button>Contact</Button>
        </Icons>
      </Container>
    </Section>
  )
}
