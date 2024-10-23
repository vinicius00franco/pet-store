import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiLogIn, FiLogOut, FiUser } from "react-icons/fi";
import { theme } from "../styles/theme.js"; // Importando o arquivo de cores
import Icon from "@mui/material/Icon"; // Importando o componente de ícone

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav
  className="navbar is-fixed-top"
  role="navigation"
  aria-label="main navigation"
  style={{ backgroundColor: theme.primary }}
>
  <div className="container">
    <div className="navbar-brand">
      <Link
        to="/"
        className="navbar-item"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div style={{ marginRight: "1rem" }}>
          <Icon
            style={{
              fontSize: "calc(2rem + 1vw)", 
              borderRadius: "50%",
              border: `2px solid ${theme.secondary}`,
              padding: "5px",
              color: theme.secondary,
            }}
          >
            pets
          </Icon>
        </div>
        <div>
          <h1
            className="title is-4"
            style={{
              color: theme.secondary,
              fontSize: "calc(1rem + 1vw)",
              whiteSpace: "nowrap",
              lineHeight: "1.5",
            }}
          >
            Pet Store
          </h1>
        </div>
      </Link>

      <button
        className={`navbar-burger burger ${menuOpen ? "is-active" : ""}`}
        aria-label="menu"
        aria-expanded="false"
        onClick={toggleMenu}
        style={{ color: theme.secondary }}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>

    <div className={`navbar-menu ${menuOpen ? "is-active" : ""}`}>
      <div className="navbar-start">
        <Link
          to="/"
          className="navbar-item"
          onClick={toggleMenu}
          style={{
            color: theme.secondary,
            fontSize: "calc(0.875rem + 0.5vw)",
          }}
        >
          Home
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            {isLoggedIn ? (
              <>
                <Link to="/profile" className="button is-light">
                  <FiUser className="mr-2" />
                  Perfil
                </Link>
                <button
                  className="button is-light"
                  onClick={handleLoginLogout}
                  style={{
                    fontSize: "calc(0.875rem + 0.5vw)",
                  }}
                >
                  <FiLogOut className="mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <button
                className="button is-light"
                onClick={handleLoginLogout}
                style={{
                  fontSize: "calc(0.875rem + 0.5vw)",
                }}
              >
                <FiLogIn className="mr-4" />
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
