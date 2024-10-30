import React, { useEffect, useState } from "react";
import { ProductList } from "../../components/Product/ProductList";
import { fetchProducts } from "../../services/productService";
import { Categories } from "../../components/Categories/Categories";

import "./Home.css";
import {
  faPaw,
  faCar,
  faBed,
  faTshirt,
  faBroom,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";

// Mapeamento de ícones
const iconMapping = {
  faPaw: faPaw,
  faCar: faCar,
  faBed: faBed,
  faTshirt: faTshirt,
  faBroom: faBroom,
  faStethoscope: faStethoscope,
};

export const Home = ({ filteredProducts }) => {
  const [products, setProducts] = useState([]);

  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  // Fetch categorias
  useEffect(() => {
    fetch("/categories.json") // Ajuste o caminho conforme necessário
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na resposta da rede");
        }
        return response.json();
      })
      .then((data) => {
        // Mapear os nomes dos ícones para os objetos de ícones reais
        const mappedData = data.map((category) => ({
          ...category,
          icon: iconMapping[category.icon],
        }));
        setCategoriesData(mappedData);
      })
      .catch((error) => {
        console.error("Erro ao buscar categorias:", error);
      });
  }, []);

  return (
    <section className="section has-text-centered">
      <div className="container is-fluid">
        <h1 className="title is-2">Bem-vindo à Pet Store</h1>
        <p className="subtitle is-4">
          Encontre os melhores produtos para seu pet!
        </p>
        <section className="section mb-5">
          <div className="container is-fluid">
            <Categories categories={categoriesData} />
          </div>
        </section>
        ;
        <section className="columns is-multiline is-centered">
          <ProductList
            products={filteredProducts.length > 0 ? filteredProducts : products}
          />
        </section>
      </div>
    </section>
  );
};
