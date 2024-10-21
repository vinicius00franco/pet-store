import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
    color: #333;
  }

  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .menu-icon {
    display: none;
  }

  .product-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 2rem;
  }

  .product-item {
    border: 1px solid #ddd;
    padding: 1rem;
    text-align: center;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }

  button {
    background-color: #28a745;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 5px;

    &:hover {
      background-color: #218838;
    }
  }

  @media (max-width: 768px) {
    .product-list {
      grid-template-columns: 1fr;
    }

    .menu-icon {
      display: block;
    }
  }
`;

export default GlobalStyles;
