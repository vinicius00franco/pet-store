import React, { useState, useEffect } from "react";
import axios from "axios";

import "./SearchBar.css";

export const SearchBar = ({ setFilteredProducts }) => {
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
    <div className="columns is-centered search-bar-container">
      <div className="column is-half">
        <div className="control is-expanded">
          <input
            className="input is-medium search-input"
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Buscar produtos..."
          />
        </div>
      </div>
    </div>
  );
};
