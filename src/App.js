import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";

// Componentes
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer"; // Importar o Footer
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
        setFilteredProducts(data.products); // Inicialmente, exibir todos os produtos
      })
      .catch((error) => console.error("Erro ao carregar produtos:", error));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <div className="navbar">
          <Navbar />
        </div>
        <div className="search-bar">
          <SearchBar setFilteredProducts={setFilteredProducts} />
        </div>

        <Routes>
          <Route
            path="/"
            element={<Home filteredProducts={filteredProducts} />}
          />
          <Route path="/cats" element={<Cats />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/brands" element={<Brands />} />
        </Routes>

        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
