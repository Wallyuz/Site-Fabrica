import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Menu de navegação */}
        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <a href="#home" className="navbar-link" onClick={closeMenu}>
              Início
            </a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link" onClick={closeMenu}>
              Sobre
            </a>
          </li>
          <li className="navbar-item">
            <a href="#objectives" className="navbar-link" onClick={closeMenu}>
              Objetivos
            </a>
          </li>
          <li className="navbar-item">
            <a href="#performance" className="navbar-link" onClick={closeMenu}>
              Performance
            </a>
          </li>
          <li className="navbar-item">
            <a href="#team" className="navbar-link" onClick={closeMenu}>
              Equipe
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link" onClick={closeMenu}>
              Contato
            </a>
          </li>
        </ul>

        {/* Menu hamburger para mobile */}
        <div
          className={`navbar-hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
      </div>
    </nav>
  );
}
