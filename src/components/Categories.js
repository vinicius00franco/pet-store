import React from "react";
import styled from "styled-components";

import PetsIcon from "@mui/icons-material/Pets";
import ToysIcon from "@mui/icons-material/Toys";
import BedIcon from "@mui/icons-material/Hotel";
import AccessoryIcon from "@mui/icons-material/Checkroom";
import HygieneIcon from "@mui/icons-material/CleaningServices";
import HealthIcon from "@mui/icons-material/LocalHospital";

// Estilos para a seção de categorias
const CategoriesContainer = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
  text-align: center;

  h2 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1.5rem;
  }

  .categories-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .category-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 12vw; /* Tamanho dinâmico baseado na largura da viewport */
  }

  .category-item svg {
    font-size: 8vw; /* Tamanho dinâmico dos ícones baseado na largura da viewport */
    color: #555;
    margin-bottom: 0.5rem;
    transition: font-size 0.3s ease;
  }

  .category-item p {
    font-size: 1.5rem; /* Usando rem para ajustar o tamanho do texto */
    color: #555;
  }

  @media (max-width: 768px) {
    .categories-list {
      justify-content: center;
    }

    .category-item {
      width: 15vw; /* Ajuste para telas menores */
    }

    .category-item svg {
      font-size: 10vw; /* Aumentando o ícone proporcionalmente */
    }

    .category-item p {
      font-size: 1.2rem; /* Ajuste do texto */
    }
  }

  @media (max-width: 480px) {
    .category-item svg {
      font-size: 12vw; /* Ajustando para telas ainda menores */
    }

    .category-item p {
      font-size: 1rem;
    }
  }
`;

const Categories = () => {
  const categories = [
    { id: 1, name: "Rações", icon: <PetsIcon /> },
    { id: 2, name: "Brinquedos", icon: <ToysIcon /> },
    { id: 3, name: "Camas", icon: <BedIcon /> },
    { id: 4, name: "Acessórios", icon: <AccessoryIcon /> },
    { id: 5, name: "Higiene", icon: <HygieneIcon /> },
    { id: 6, name: "Saúde", icon: <HealthIcon /> },
  ];

  return (
    <CategoriesContainer>
      <h2>Categorias</h2>
      <div className="categories-list">
        {categories.map((category) => (
          <div key={category.id} className="category-item">
            {category.icon}
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </CategoriesContainer>
  );
};

export default Categories;
