import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Form, Input, TextArea, Title } from "./styled";
import { Button } from "../../component/ButtonComponent/styled";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const formRef = useRef();
  const [success, setSuccess] = useState(null);
  const { t } = useTranslation();

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
          <Input placeholder={t("contactPage.formName")} name="name" />
          <Input placeholder={t("contactPage.formEmail")} name="email" />
          <TextArea
            placeholder={t("contactPage.formMessage")}
            name="message"
            rows={10}
          />
          <Button type="submit" size={200}>
          {t("contactPage.button")}
          </Button>
          {success &&
            `${t("contactPage.success")}`
            }
        </Form>

    </Container>
  );
}
