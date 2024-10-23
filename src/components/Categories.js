import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faCar,
  faBed,
  faTshirt, // Substituto para faHanger
  faBroom,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  const categories = [
    { id: 1, name: "Rações", icon: <FontAwesomeIcon icon={faPaw} /> },
    { id: 2, name: "Brinquedos", icon: <FontAwesomeIcon icon={faCar} /> },
    { id: 3, name: "Camas", icon: <FontAwesomeIcon icon={faBed} /> },
    { id: 4, name: "Acessórios", icon: <FontAwesomeIcon icon={faTshirt} /> }, // Alterado
    { id: 5, name: "Higiene", icon: <FontAwesomeIcon icon={faBroom} /> },
    { id: 6, name: "Saúde", icon: <FontAwesomeIcon icon={faStethoscope} /> },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-4 has-text-centered">Categorias</h2>
        <div className="columns is-mobile is-multiline">
          {categories.map((category) => (
            <div key={category.id} className="column is-2 has-text-centered">
              <div className="category-box ">
                <div className="icon is-large fa-5x ">{category.icon}</div>

                <p className="subtitle is-8">{category.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
