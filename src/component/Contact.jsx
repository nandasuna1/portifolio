import React from 'react'
import { styled } from 'styled-components'
import Map from './Map'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Title = styled.h1`
  font-weight: 100;
`
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`
const Input = styled.input`
  padding: 20px;
  background-color: #f7f7f7;
  border: none;
  border-radius: 5px;
`

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #f7f7f7;
  border: none;
  border-radius: 5px;
`
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`

const Right = styled.div`
  flex: 1;
`

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault
  }

  return (
    <Section>
      <Container>
        <Left>
          <Form onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder='Name'/>
            <Input placeholder='Email'/>
            <TextArea placeholder='Write your message ' rows={10}/>
            <Button type='submit'>Send Email</Button>
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  )
}
