import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";

import "bulma/css/bulma.min.css"; // Importando Bulma

// Componentes
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";

// Páginas
import Home from "./pages/Home";
import Cats from "./pages/Cats";
import Dogs from "./pages/Dogs";
import Brands from "./pages/Brands";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("/mockData.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      })
      .catch((error) => console.error("Erro ao carregar produtos:", error));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />

        {/* Container para centralizar o conteúdo */}
        <div className="container">
          {/* Navbar com espaçamento inferior */}
          <div className="navbar mb-5">
            <Navbar />
          </div>

          {/* Barra de busca com espaçamento inferior */}
          <div className="search-bar mb-5">
            <SearchBar setFilteredProducts={setFilteredProducts} />
          </div>

          {/* Colocar as rotas dentro de um section */}
          <section className="section">
            <div className="container">
              <Routes>
                <Route
                  path="/"
                  element={<Home filteredProducts={filteredProducts} />}
                />
                <Route path="/cats" element={<Cats />} />
                <Route path="/dogs" element={<Dogs />} />
                <Route path="/brands" element={<Brands />} />
              </Routes>
            </div>
          </section>

          {/* Footer no final */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
