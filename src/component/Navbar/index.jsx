import React from 'react'
import { Container, Icon, Icons, Links, List, ListItem, Logo, Section } from './styled'
import ButtonComponent from '../ButtonComponent'
import LinkComponent from '../Link'

export default function Navbar() {

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };


  return (
    <Section>
      <Container>
        <Links>
        <Logo src="./img/icons/logo4-no-bg.png"/>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Quem sou eu</ListItem>
            <ListItem  onClick={handleClick}>Projetos</ListItem>
            <ListItem>Contato</ListItem>
        </List>
        </Links>
        <Icons>
            <LinkComponent iconsize={20} hasIcon='DocLogo' link='https://drive.google.com/uc?export=download&id=1ezYioX1eGyQYuWtB4u8OMyEDyCaB8CcE'>Download CV</LinkComponent>
        </Icons>
      </Container>
    </Section>
  )
}
