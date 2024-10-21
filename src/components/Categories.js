import React from "react";
import styled from "styled-components";

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
    width: 120px;
  }

  .category-item img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-bottom: 0.5rem;
  }

  .category-item p {
    font-size: 1rem;
    color: #555;
  }

  @media (max-width: 768px) {
    .categories-list {
      justify-content: center;
    }

    .category-item {
      width: 80px;
    }

    .category-item img {
      width: 50px;
      height: 50px;
    }

    .category-item p {
      font-size: 0.9rem;
    }
  }
`;

const Categories = () => {
  const categories = [
    { id: 1, name: "Rações", image: "c:\Users\vinic\AppData\Local\Temp\Design-sem-nome-2023-10-20T122210.782.jpg" },
    { id: 2, name: "Brinquedos", image: "c:/Users/vinic/AppData/Local/Temp/Sem título.jpg" },
    { id: 3, name: "Camas", image: "c:/Users/vinic/AppData/Local/Temp/Sem título.jpg" },
    { id: 4, name: "Acessórios", image: "c:/Users/vinic/AppData/Local/Temp/Sem título.jpg" },
    { id: 5, name: "Higiene", image: "c:/Users/vinic/AppData/Local/Temp/Sem título.jpg" },
    { id: 6, name: "Saúde", image: "c:\Users\vinic\AppData\Local\Temp\png-transparent-pets-vet-vetenarian-animal-health-pinpoint-businesses-icon-thumbnail.png" },
  ];

  return (
    <CategoriesContainer>
      <h2>Categorias</h2>
      <div className="categories-list">
        {categories.map((category) => (
          <div key={category.id} className="category-item">
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </CategoriesContainer>
  );
};

export default Categories;
