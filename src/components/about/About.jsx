import React from "react";
import "../../App.css";

export const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">My Introduction</span>

      <div className="about-container container grid">
        <img src="/aboutimg.png" alt="" className="about-img" />

        <div className="about-data">
          <p className="about-description">
            Full stack web developer with more than 2 years of experience
            developing in react, express, node, mongoDB (MERN stack). Always
            eager and willing to learn new technologies to achieve personal
            goals and professional challenges.
          </p>

          <div className="about-info">
            <div>
              <span className="about-info-title">02+</span>
              <span className="about-info-name">
                Years <br />
                experience
              </span>
            </div>
            <div>
              <span className="about-info-title">02+</span>
              <span className="about-info-name">
                Companies <br />
                worked
              </span>
            </div>
          </div>

          <div className="about-buttons">
            <a download="" href="/Resume.pdf" className="button button-flex">
              Download Resume
              <i className="fa-solid fa-file-arrow-down button-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
