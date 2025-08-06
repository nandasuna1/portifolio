import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Form, Input, TextArea, Title } from "./styled";
import { Button } from "../../component/ButtonComponent/styled";

export default function Contact() {
  const formRef = useRef();
  const [success, setSuccess] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Container>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Title>Contato</Title>
          <Input placeholder="Nome" name="name" />
          <Input placeholder="Email" name="email" />
          <TextArea
            placeholder="Escreva sua mensagem "
            name="message"
            rows={10}
          />
          <Button type="submit" size={200}>
            Enviar Email
          </Button>
          {success &&
            "Sua mensagem foi enviada, logo entrarei em contato com você"}
        </Form>
    </Container>
  );
}
