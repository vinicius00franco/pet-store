import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: ${(props) =>
    props.theme.colors.background}; // Cor de fundo vinda do tema
  padding: ${(props) =>
    props.theme.spacing.medium}; // Espaçamento médio do tema
  text-align: center;
  width: 100%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

const FooterText = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors.text}; // Cor do texto principal
`;

const FooterLink = styled.a`
  color: ${(props) =>
    props.theme.colors.primary}; // Usar a cor primária do tema
  text-decoration: none;

  &:hover {
    color: ${(props) =>
      props.theme.colors.secondary}; // Usar a cor secundária no hover
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>© 2024 - Meu Site. Todos os direitos reservados.</FooterText>
    </FooterContainer>
  );
}

export default Footer;
