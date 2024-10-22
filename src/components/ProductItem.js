import React from "react";
import styled from "styled-components";

const ProductItemWrapper = styled.div`
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona sombra suave */
  border-radius: 10px;
  padding: 1rem;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px); /* Efeito de hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  color: ${(props) =>
    props.theme.colors.text}; /* Usa a cor de texto principal */
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: ${(props) =>
    props.theme.colors.lightText}; /* Usa a cor de texto secundário */
`;

const AddToCartButton = styled.button`
  background-color: ${(props) =>
    props.theme.colors.primary}; /* Azul principal */
  color: white;
  border: none;
  padding: ${(props) => props.theme.spacing.small};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.secondary}; /* Azul mais escuro no hover */
  }
`;

const ProductItem = ({ product }) => (
  <ProductItemWrapper>
    <ProductImage src={product.image} alt={product.name} />
    <ProductName>{product.name}</ProductName>
    <ProductPrice>{product.price}</ProductPrice>
    <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
  </ProductItemWrapper>
);

export default ProductItem;
