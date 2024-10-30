import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer has-background-dark">
      <div className="content has-text-centered">
        <p className="footer-text has-text-white">
          © 2024 - Meu Site. Todos os direitos reservados.
        </p>
        <div className="footer-links">
          <a href="/sobre" className="footer-link">
            Sobre
          </a>
          <a href="/contato" className="footer-link">
            Contato
          </a>
        </div>
        <div className="footer-social">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="footer-icon"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="footer-icon"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="footer-icon"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};
