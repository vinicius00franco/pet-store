import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { fetchProducts } from "../services/productService";

const Brands = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      // Aqui você pode aplicar lógica de marcas, por enquanto vamos exibir todos os produtos
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Marcas Populares</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Brands;
