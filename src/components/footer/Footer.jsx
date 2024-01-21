import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="footer-container container grid">
          <div>
            <h2 className="footer-title">Juan F. Buitrago</h2>
            <span className="footer-subtitle">Full Stack Developer</span>
          </div>
          <ul className="footer-links">
            <li>
              <a href="#portfolio" className="footer-link">
                Portafolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer-link">
                Contact
              </a>
            </li>
          </ul>

          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/juan-buitrago-full-stack-developer/"
              className="footer-social"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/jfernand196" className="footer-social">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#home" className="footer" id="scroll-up">
              <FontAwesomeIcon
                icon={faArrowUp}
                className="fa-solid fa-arrow-up scroll-up-icon"
              />
            </a>
          </div>
        </div>
        <p className="footer-copy">By Juan Fernando Buitrago</p>
      </div>
    </footer>
  );
};
