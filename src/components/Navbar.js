import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";

// Estilo para a navbar
const NavbarContainer = styled.nav`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;

  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  .menu-icon {
    display: none;
    font-size: 1.8rem;
    color: white;
    cursor: pointer;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  ul li {
    margin: 0;
  }

  a {
    color: white;
    padding: 0.5rem 1rem;
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.accent}; // Cor verde no hover
    }
  }

  ul li a {
    text-decoration: none;
    color: white;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #ffcc00;
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 5px;
    }
  }

  @media (max-width: 768px) {
    ul {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: #007bff;
      transition: transform 0.3s ease-in-out;
      transform: ${({ open }) =>
        open ? "translateY(0)" : "translateY(-100%)"};
    }

    .menu-icon {
      display: block;
    }

    ul li {
      margin: 1.5rem 0;
    }
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavbarContainer open={menuOpen}>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
      <ul>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/cats" onClick={toggleMenu}>
            Gatos
          </Link>
        </li>
        <li>
          <Link to="/dogs" onClick={toggleMenu}>
            Cachorros
          </Link>
        </li>
        <li>
          <Link to="/brands" onClick={toggleMenu}>
            Marcas
          </Link>
        </li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
