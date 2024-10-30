import React, { useState, useEffect } from "react";
import { ProductItem } from "./ProductItem";
import { usePagination } from "../../hooks/usePagination";

import "bulma/css/bulma.min.css";
import "./ProductList.css";

export const ProductList = ({ products }) => {
  const [productsPerPage, setProductsPerPage] = useState(6); // Padrão: 6 produtos por página
  const { currentItems, currentPage, setCurrentPage, totalPages } =
    usePagination(products, productsPerPage);

  // Sempre que mudar o número de produtos por página, voltar para a primeira página
  useEffect(() => {
    setCurrentPage(1); // Reseta para a primeira página
  }, [productsPerPage, setCurrentPage]);

  // Funções para lidar com o zoom ao passar o mouse na imagem
  const handleZoom = (e) => {
    e.target.style.transform = "scale(1)";
  };

  const handleZoomOut = (e) => {
    e.target.style.transform = "scale(1.2)";
  };

  return (
    <section className="container">
      {/* Ajustar o espaçamento da seleção */}
      <div className="field is-grouped is-grouped-centered mb-5">
        <label
          htmlFor="productsPerPage"
          className="label has-text-weight-bold is-size-5 has-text-dark mr-2"
        >
          Produtos por página:
        </label>
        <div className="control">
          <div className="select is-rounded">
            <select
              id="productsPerPage"
              value={productsPerPage}
              onChange={(e) => setProductsPerPage(Number(e.target.value))}
            >
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="10">10</option>
              <option value="12">12</option>
            </select>
          </div>
        </div>
      </div>

      {/* Ajuste no grid de produtos */}
      <section className="columns is-multiline is-variable is-4">
        {currentItems.map((product) => (
          <div key={product.id} className="column is-one-quarter">
            <div className="card is-hoverable" style={{ marginBottom: "20px" }}>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src={product.image}
                    alt={product.name}
                    onMouseEnter={handleZoom} // Adiciona efeito de zoom
                    onMouseLeave={handleZoomOut} // Remove efeito de zoom
                    style={{ transition: "transform 0.3s ease" }} // Transição suave
                  />
                </figure>
              </div>
              <div className="card-content has-text-centered">
                <p className="title is-5">{product.name}</p>
                <p className="subtitle is-4 has-text-primary">
                  R${" "}
                  <span className="has-text-weight-bold">{product.price}</span>
                </p>
                {product.discount && (
                  <p className="has-text-danger has-text-weight-bold">
                    {product.discount}% OFF
                  </p>
                )}
                <button className="button is-primary is-fullwidth">
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Ajustar espaçamento dos botões de paginação */}
      <section className="buttons is-centered mt-6">
        <button
          className="button is-success is-light"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`button is-success is-light ${
              currentPage === index + 1 ? "is-active" : ""
            }`}
            onClick={() => setCurrentPage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="button is-success is-light"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Próximo
        </button>
      </section>
    </section>
  );
};
