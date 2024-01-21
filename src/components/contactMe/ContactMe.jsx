import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const ContactMe = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact me</h2>
      <span className="section-subtitle">Get in touch</span>

      <div className="contact-container container grid">
        <div>
          <div className="contact-info">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="fa-regular fa-envelope contact-icon"
            />
            <div>
              <h3 className="contact-title">Email</h3>
              <a
                href="mailto:jfernand196@gmail.com"
                className="contact-subtitle"
              >
                jfernand196@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-info">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="fa-brands fa-linkedin contact-icon"
            />
            <div>
              <h3 className="contact-title">Linkedin</h3>
              <a
                className="contact-subtitle"
                href="https://www.linkedin.com/in/juan-buitrago-full-stack-developer/"
              >
                @juan-buitrago-full-stack-developer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
