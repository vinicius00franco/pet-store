import React, { useState } from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import usePagination from "../hooks/usePagination";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  max-width: 1600px; /* Ajuste o max-width para algo menor se necessário */
  margin: 0 auto; /* Centraliza o container */
  padding: 2rem 1rem; /* Mantém o espaçamento interno */
`;

const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(200px, 1fr)
  ); /* Mantém as colunas adaptativas */
  gap: 20px; /* Espaçamento entre os produtos */
  justify-items: center; /* Centraliza os itens na grid */
  padding: 1rem 0;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const PaginationButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: ${(props) =>
      props.theme.colors.accent}; // Verde no hover  }
`;

const SelectContainer = styled.div`
  text-align: center;
  margin: 1rem 0;

  label {
    font-size: 1.1rem;
    margin-right: 0.5rem;
    color: ${(props) => props.theme.colors.text}; /* Texto principal */
  }

  select {
    padding: 0.6rem;
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
      border-color: ${(props) =>
        props.theme.colors.primary}; /* Azul no hover */
    }

    &:focus {
      border-color: ${(props) => props.theme.colors.primary};
      outline: none;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
  }
`;

const ProductList = ({ products }) => {
  const [productsPerPage, setProductsPerPage] = useState(6); // Padrão: 6 produtos por página
  const { currentItems, currentPage, setCurrentPage, totalPages } =
    usePagination(products, productsPerPage);

  return (
    <Container>
      <SelectContainer>
        <label htmlFor="productsPerPage">Produtos por página: </label>
        <select
          id="productsPerPage"
          value={productsPerPage}
          onChange={(e) => setProductsPerPage(Number(e.target.value))}
        >
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="10">10</option>
          <option value="12">12</option>
        </select>
      </SelectContainer>

      <ProductListWrapper>
        {currentItems.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductListWrapper>

      <PaginationWrapper>
        <PaginationButton
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </PaginationButton>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationButton
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </PaginationButton>
        ))}
        <PaginationButton
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Próximo
        </PaginationButton>
      </PaginationWrapper>
    </Container>
  );
};

export default ProductList;
