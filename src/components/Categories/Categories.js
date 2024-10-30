// src/components/Categories/index.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Categories.css";

export const Categories = ({ categories }) => {
  return (
    <section className="section categories-container">
      <div>
        <h2 className="title is-1 has-text-centered has-text-dark">
          Categorias
        </h2>
        <div className="columns is-mobile is-multiline">
          {categories.map((category) => (
            <div key={category.id} className="column is-2 has-text-centered ">
              <div className="category-item ">
                <div className="icon-container p-5">
                  <FontAwesomeIcon icon={category.icon} size="4x" />
                </div>
                <p className="subtitle is-3 ">{category.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
