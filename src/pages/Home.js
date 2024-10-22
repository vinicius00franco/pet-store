import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { fetchProducts } from "../services/productService";
import styled from "styled-components";
import Categories from "../components/Categories";

// Estilos para a Home
const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #f9f9f9;

  h1 {
    font-size: 2.5rem;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #555;
  }

  .product-section {
    margin-top: 2rem;
  }

  .product-list {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .product-item {
    width: 200px;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 1rem;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  button {
    background-color: ${(props) =>
      props.theme.colors.primary}; /* Usando a cor primária do tema */
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${(props) =>
        props.theme.colors
          .secondary}; /* Usando a cor secundária do tema para o hover */
    }
  }
`;

const Home = ({ filteredProducts }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts(); // Aqui ele busca todos os produtos
      setProducts(data); // Carrega todos os produtos
    };
    fetchData();
  }, []);

  return (
    <HomeContainer>
      <h1>Bem-vindo à Pet Store</h1>
      <p>Encontre os melhores produtos para seu pet!</p>
      <Categories />
      <div className="product-section">
        <ProductList
          products={filteredProducts.length > 0 ? filteredProducts : products}
        />
      </div>
    </HomeContainer>
  );
};

export default Home;
