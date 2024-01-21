import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className={isDarkMode ? "app dark-mode" : "app"}>
      <nav className="nav container">
        <a
          href="https://www.linkedin.com/in/juan-buitrago-full-stack-developer/"
          className="nav-logo"
        >
          Juan Fernando Buitrago
        </a>

        <div className="nav-menu" id="nav-menu">
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                <i className="fa-solid fa-house nav-icon"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                <i className="fa-solid fa-user nav-icon"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">
                <i className="fa-solid fa-file nav-icon"></i> Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                <i className="fa-solid fa-image nav-icon"></i> Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <i className="fa-solid fa-message nav-icon"></i> Contact
              </a>
            </li>
          </ul>
          <i className="fa-solid fa-xmark nav-close" id="nav-close"></i>
        </div>

        <div>
          <FontAwesomeIcon
            icon={faMoon}
            className="change-theme"
            onClick={toggleTheme}
          />
        </div>
      </nav>
    </header>
  );
};
