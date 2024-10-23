import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { fetchProducts } from "../services/productService";
import Categories from "../components/Categories";

const Home = ({ filteredProducts }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <section className="section has-text-centered">
      <div className="container">
        <h1 className="title is-2">Bem-vindo à Pet Store</h1>
        <p className="subtitle is-4">
          Encontre os melhores produtos para seu pet!
        </p>

        <section>
          <Categories />
        </section>

        <section className="columns is-multiline is-centered">
          <ProductList
            products={filteredProducts.length > 0 ? filteredProducts : products}
          />
        </section>
      </div>
    </section>
  );
};

export default Home;
