import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Estilos com styled-components
const ProductListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProductItem = styled.div`
  flex: 1 1 200px;
  max-width: 250px;
  margin: 20px;
  padding: 15px;
  text-align: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
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
  color: #333;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #666;
`;

const AddToCartButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #218838;
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const PaginationButton = styled.button`
  background-color: #007bff;
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
    background-color: #0056b3;
  }
`;

const SelectContainer = styled.div`
  text-align: center;
  margin: 1rem 0;

  select {
    padding: 0.5rem;
    font-size: 1rem;
  }
`;

const ProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6); // Padrão: 6 produtos por página
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Definir produtos com base na tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setProductsPerPage(4); // Menos produtos em telas menores
      } else {
        setProductsPerPage(6);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calcular os índices de produtos a serem exibidos na página atual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Função para mudar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calcular o número total de páginas
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Função para lidar com a rolagem infinita
  useEffect(() => {
    if (productsPerPage > 10) {
      const handleScroll = () => {
        if (
          window.innerHeight + window.scrollY >= document.body.offsetHeight &&
          currentPage < totalPages
        ) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [currentPage, productsPerPage, totalPages]);

  return (
    <>
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
        {currentProducts.map((product) => (
          <ProductItem key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
            <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
          </ProductItem>
        ))}
      </ProductListWrapper>

      {/* Controles de Paginação - Somente se produtos por página for 10 ou menos */}
      {productsPerPage <= 10 && (
        <PaginationWrapper>
          <PaginationButton
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </PaginationButton>
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationButton
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </PaginationButton>
          ))}
          <PaginationButton
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Próximo
          </PaginationButton>
        </PaginationWrapper>
      )}
    </>
  );
};

export default ProductList;
