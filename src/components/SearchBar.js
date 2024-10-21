import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

// Estilizando a barra de pesquisa
const SearchContainer = styled.div`
  text-align: center;
  margin: 2rem 0;

  input {
    padding: 0.7rem;
    width: 80%;
    max-width: 600px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const SearchBar = ({ setFilteredProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/mockData.json");
      const allProducts = response.data.products;

      if (searchTerm) {
        const filtered = allProducts.filter(
          (product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (product.description &&
              product.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase()))
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(allProducts); // Se não houver termo de busca, mostra todos
      }
    };

    fetchData();
  }, [searchTerm, setFilteredProducts]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <SearchContainer>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Buscar produtos..."
      />
    </SearchContainer>
  );
};

export default SearchBar;
