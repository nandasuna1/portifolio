import React from "react";
import { Container, GoBack } from "./styled";

export default function NotFound() {
  return (
    <Container>
      <h1>Site em Construção</h1>
      <p>A página que você está tentando acessar ainda não existe :/</p>

      <GoBack to="/">Voltar para a página inicial</GoBack>
    </Container>
  );
}
