import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { fetchProducts } from "../services/productService";

const Dogs = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      // Filtrando produtos para cachorros
      const dogProducts = data.filter((product) =>
        product.name.toLowerCase().includes("cachorro")
      );
      setProducts(dogProducts);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Produtos para Cachorros</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Dogs;
