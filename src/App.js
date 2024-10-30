import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



import "bulma/css/bulma.min.css"; // Importando Bulma
import "./styles/GlobalStyles.css"; // Importando estilos globais

// Componentes
import { Navbar } from "./components/Navbar/Navbar";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Footer } from "./components/Footer/Footer";
// Páginas
import { Home } from "./pages/Home/Home";



export const App = () => {
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
    <Router>
      {/* Container para centralizar o conteúdo */}
      <div >
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
          <div >
            <Routes>
              <Route
                path="/"
                element={<Home filteredProducts={filteredProducts} />}
              />
            </Routes>
          </div>
        </section>

        {/* Footer no final */}
        <Footer />
      </div>
    </Router>
  );
};
