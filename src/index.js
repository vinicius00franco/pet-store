import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";

// Seleciona o elemento raiz
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza o componente App no elemento raiz
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
