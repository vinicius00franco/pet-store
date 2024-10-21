import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { fetchProducts } from "../services/productService";

const Cats = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      // Filtrando produtos para gatos
      const catProducts = data.filter((product) =>
        product.name.toLowerCase().includes("gato")
      );
      setProducts(catProducts);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Produtos para Gatos</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Cats;
