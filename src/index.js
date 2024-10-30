import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

// Seleciona o elemento raiz
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza o componente App no elemento raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
