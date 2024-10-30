import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiLogIn, FiLogOut, FiUser } from "react-icons/fi";
import Icon from "@mui/material/Icon";
import "./Navbar.css";

export const Navbar = () => {
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
      className="navbar is-primary" // Using Bulma's primary color
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container ">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <div className="icon">
              <Icon
                style={{
                  fontSize: "calc(2rem + 1vw)",
                  borderRadius: "50%",
                  border: `2px solid var(--color-secondary)`,
                  padding: "5px",
                  color: "var(--color-secondary)",
                }}
              >
                pets
              </Icon>
            </div>
            <h1 className="title is-4 ml-2">Pet Store</h1>
          </Link>

          <button
            className={`navbar-burger burger ${menuOpen ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded={menuOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div className={`navbar-menu ${menuOpen ? "is-active" : ""}`}>
          <div className="navbar-start">
            <Link to="/" className="navbar-item ml-6" onClick={toggleMenu}>
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
                    >
                      <FiLogOut className="mr-2" />
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    className="button is-light"
                    onClick={handleLoginLogout}
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
