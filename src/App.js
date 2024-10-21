import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Cats from "./pages/Cats";
import Dogs from "./pages/Dogs";
import Brands from "./pages/Brands";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";

function App() {
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <SearchBar setFilteredProducts={setFilteredProducts} />
      <Routes>
        <Route
          path="/"
          element={<Home filteredProducts={filteredProducts} />}
        />
        <Route path="/cats" element={<Cats />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/brands" element={<Brands />} />
      </Routes>
    </Router>
  );
}

export default App;
