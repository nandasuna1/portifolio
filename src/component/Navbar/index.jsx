import React from 'react'
import { Container, Icon, Icons, Links, List, ListItem, Logo, Section } from './styled'
import ButtonComponent from '../ButtonComponent'

export default function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
        <Logo src="./img/icons/logo4-no-bg.png"/>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Contact</ListItem>
        </List>
        </Links>
        <Icons>
            <Icon src='./img/icons/search.svg.png'/>
            <ButtonComponent>Contact</ButtonComponent>
        </Icons>
      </Container>
    </Section>
  )
}
