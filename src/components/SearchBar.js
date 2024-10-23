import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="columns is-centered" style={{ margin: "2rem 0" }}>
      <div className="column is-half">
        <div className="control is-expanded">
          <input
            className="input is-medium"
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Buscar produtos..."
            style={{
              //boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.1)", // Sombra convertida para rem
              color: "#ffffff", // Texto branco
              fontWeight: "bold", // Negrito no texto
              padding: "1rem", // Espaçamento interno
              fontSize: "1.5rem", // Tamanho da fonte em rem (equivalente a 24px)
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
